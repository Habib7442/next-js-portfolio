"use client"
import { useState, useRef, ChangeEvent } from "react";
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { db, storage } from "@/utils/firebase";

const ReviewForm = () => {
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [userReview, setUserReview] = useState({
    name: "",
    email: "",
    review: "",
    stars: "",
    imgurl: "",
  });
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadImage = () => {
    if (!imageUpload) return;
    setLoading(true);
    const imageRef = ref(
      storage,
      `portfolio-images/${imageUpload.name + v4()}`
    );
    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setUserReview((prevReview) => ({ ...prevReview, imgurl: url }));
          setLoading(false);
          toast.success("Image Uploaded Successfully");
        });
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Failed to upload image");
      });
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageUpload(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const postUserReview = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserReview({ ...userReview, [event.target.name]: event.target.value });
  };

  const submitReview = async () => {
    const { review, name, email, stars, imgurl } = userReview;
    if (review && name && email && stars && imgurl) {
      try {
        const res = await addDoc(collection(db, "portfolio-reviews"), {
          review,
          name,
          email,
          stars,
          imgurl,
        });
        setUserReview({
          review: "",
          name: "",
          email: "",
          stars: "",
          imgurl: "",
        });
        setImagePreview(null);
        toast.success("Review Submitted Successfully!");
      } catch (error) {
      console.log(error)
        toast.error("Something went wrong!");
      }
    } else {
      toast.warning("Please fill all details");
    }
  };

  return (
    <div className="mx-auto bg-black-100 text-white p-8 w-full h-full flex flex-col justify-center items-center">
      <h1 className="lg:text-4xl text-3xl font-bold text-center text-gray-400 lg:mt-14 mt-16 mb-8">
        Give Your Valuable Feedback
      </h1>
      <div className="mb-4 flex flex-col items-center">
        <span className="mb-2">Upload Your Image</span>
        <div
          className="image-preview mb-4 border border-teal-400 cursor-pointer flex justify-center items-center w-[200px] h-[200px]"
          onClick={handleImageClick}
        >
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Image Preview"
              className="rounded-md shadow-md w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400">Click to upload image</span>
          )}
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={uploadImage}
        >
          {loading ? "Uploading..." : "Upload Image"}
        </button>
      </div>
      <form className="w-full max-w-lg">
        <input
          type="text"
          className="text w-full bg-gray-700 text-yellow-100 border border-gray-600 rounded-md py-2 px-3 my-2"
          placeholder="Name"
          name="name"
          value={userReview.name}
          onChange={postUserReview}
          required
        />
        <input
          type="email"
          className="text w-full bg-gray-700 text-yellow-100 border border-gray-600 rounded-md py-2 px-3 my-2"
          placeholder="Email"
          name="email"
          value={userReview.email}
          onChange={postUserReview}
          required
        />
        <textarea
          className="text w-full bg-gray-700 text-yellow-100 border border-gray-600 rounded-md py-2 px-3 my-2"
          placeholder="Review"
          name="review"
          value={userReview.review}
          onChange={postUserReview}
          required
        ></textarea>
        <input
          type="number"
          className="text w-full bg-gray-700 text-yellow-100 border border-gray-600 rounded-md py-2 px-3 my-2"
          placeholder="Stars (Give ratings out of 5)"
          name="stars"
          value={userReview.stars}
          onChange={postUserReview}
          min="0"
          max="5"
          required
        />
        <input
          type="text"
          className="text w-full bg-gray-700 text-yellow-100 border border-gray-600 rounded-md py-2 px-3 my-2"
          placeholder="Image URL (Automatically set after upload)"
          name="imgurl"
          value={userReview.imgurl}
          onChange={postUserReview}
          readOnly
        />
        <button
          type="button"
          onClick={submitReview}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full my-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;

"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { Review } from "@/types/review";
import { FaTruckLoading } from "react-icons/fa";

export function Feedbacks() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onSnapshot(
      collection(db, "portfolio-reviews"),
      (snapshot) => {
        const transformedReviews: Review[] = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            imgurl: data.imgurl,
            name: data.name,
            review: data.review,
            stars: data.stars,
            email: data.email,
          };
        });
        setReviews(transformedReviews);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  return (
    <div className="h-full rounded-md flex flex-col antialiased items-center relative overflow-hidden">
      <h1 className="text-2xl text-center text-gray-500 font-bold lg:text-[40px] mb-6">
        Feedbacks
      </h1>
      {loading ? (
        <FaTruckLoading />
      ) : (
        <InfiniteMovingCards items={reviews} direction="right" speed="fast" />
      )}
    </div>
  );
}

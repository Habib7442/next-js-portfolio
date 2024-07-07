"use client";
import { experiences } from "@/constants";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="w-full min-h-screen p-4 sm:p-8 flex flex-col items-center justify-center">
      <h1 className="text-2xl text-center text-gray-500 font-bold lg:text-[40px] mb-8">
        Experience
      </h1>
      <div className="mt-12 flex flex-col items-center">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row items-center w-full mb-8"
          >
            <div className="w-full md:w-1/2 flex justify-center md:justify-center md:pr-8">
              <Image
                width={100}
                height={100}
                src={experience.icon}
                alt={experience.company_name}
                className="w-[20%] h-[20%] object-contain rounded-full"
                style={{ backgroundColor: experience.iconBg }}
              />
            </div>
            <div className="w-full flex flex-col items-start md:items-start md:pl-8 mt-4 md:mt-0">
              <h3 className="text-xl text-gray-400 font-semibold font-poppins">
                {experience.title}
              </h3>
              <p className="text-teal-500 font-medium" style={{ margin: 0 }}>
                {experience.company_name}
              </p>
              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-gray-300/50 font-normal pl-1 text-sm text-justify"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            {index < experiences.length - 1 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-8 bg-gray-500"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

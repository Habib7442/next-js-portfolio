import React from "react";
import { technologies } from "@/constants";
import Image from "next/image";

const Technologies = () => {
  return (
    <div className="w-full min-h-screen p-4 sm:p-8 flex flex-col items-center justify-center ">
      <h1 className="text-2xl text-center text-gray-500 font-bold lg:text-[40px] mb-8">
        Technologies I Use
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 max-w-6xl w-full">
        {technologies.map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-2 transition-transform duration-300 hover:scale-110 from-blue-100 to-purple-100 backdrop-filter backdrop-blur-lg">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="contain"
                className="rounded-full bg-blue-200 p-2 shadow-lg bg-gradient-to-br "
              />
            </div>
            <p className="text-sm sm:text-base text-center font-medium text-orange-200">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;

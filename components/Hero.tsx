import React from "react";
import { FlipWords } from "./ui/flip-words";

const Hero = () => {
  const words = ["Full Stack Developer", "App Developer"];
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-[50px] md:text-[40px] text-[35px] font-serif text-yellow-100">
        Hi I&apos;m{" "}
        <span className="text-blue-100 font-semibold drop-shadow">
          Habib
        </span>
        🙋 <br />
      </h1>
      <FlipWords words={words} className="lg:text-[52px] md:text-[50px] text-[30px] font-bold text-purple" />
    </div>
  );
};

export default Hero;

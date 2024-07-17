import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { landingPages } from "@/constants";

const LandingPages = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 max-w-7xl">
        {landingPages.map((item) => (
          <CardContainer key={item.id} className="inter-var">
            <CardBody
              className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border"
            >
              <CardItem translateZ="50" className="w-full mt-4">
                <Link href={item.link}>
                  <Image
                    src={item.img}
                    height="1000"
                    width="1000"
                    className="h-40 sm:h-48 md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </Link>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default LandingPages;
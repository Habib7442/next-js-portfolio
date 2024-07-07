"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AnimatedTooltip } from "./animated-tooltip";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string[]; // Changed from string to string[]
    link: string;
    img: string;
    github: string;
    liveUrl: string;
    technologies: string[];
    technologiesName: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardImage src={item.img} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardFooter
              technologies={item.technologies}
              technologiesName={item.technologiesName}
            />
            {/* <Link href={item.link}>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                Explore
              </button>
            </Link> */}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: string[];
}) => {
  return (
    <ul
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm list-disc pl-2",
        className
      )}
    >
      {children.slice(0, 1).map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export const CardImage = ({ src }: { src: string }) => {
  return (
    <img src={src} alt="" className="w-full h-48 object-cover rounded-t-xl" />
  );
};

export const CardFooter = ({
    technologies,
    technologiesName,
  }: {
    technologies: string[];
    technologiesName: string[];
  }) => {
    const items = technologies.map((tech, index) => ({
      id: index,
      name: technologiesName[index],
      designation: "",
      image: tech,
    }));
  
    return (
      <div className="flex space-x-2 mt-4">
        <AnimatedTooltip items={items} className="w-8 h-8 border-purple" />
      </div>
    );
  };

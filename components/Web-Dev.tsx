"use client";
import { projects } from "@/constants";
import dynamic from "next/dynamic";
const ClientHoverEffect = dynamic(() => import("./ClientHoverEffect"), {
  ssr: false,
});

const WebDevelopment = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <ClientHoverEffect items={projects} />
    </div>
  );
};

export default WebDevelopment;

import Experience from "@/components/Experience";
import { Feedbacks } from "@/components/Feedback";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import { social } from "@/constants";

export default function Home() {
  return (
    <main className="relative">
      <div className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.1] bg-[length:20px_20px] absolute left-0 top-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="relative z-20">
          <div className="glassmorphism p-2 flex flex-col gap-4 fixed top-56 right-0 mt">
            {social.map((item, index) => (
              <a key={item.name} href={item.link}>
                <img className="lg:w-10 w-5" src={item.icon} alt="" />
              </a>
            ))}
          </div>
        <Hero />
        <Projects />
        <Technologies />
        <Experience />
        <Feedbacks />
      </div>
    </main>
  );
}

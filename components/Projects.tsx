import { Tabs } from "./ui/tabs";
import LandingPages from "./LandingPages";
import WebDevelopment from "./Web-Dev";

const Projects = () => {
  const tabs = [
    {
      title: "Web Development",
      value: "webdev",
      content: (
        <div className="w-full mx-auto rounded-2xl ">
          <WebDevelopment />
        </div>
      ),
    },
    {
      title: "Landing Pages Design",
      value: "landingpages",
      content: (
        <div className="w-full mx-auto rounded-2xl ">
          <LandingPages />
        </div>
      ),
    },
  ];
  return (
    <div className="w-full h-screen p-2 flex flex-col">
      <h1 className="text-2xl text-center text-gray-500 font-bold lg:text-[40px]">
        Projects
      </h1>
      <div className="mt-8 w-full h-screen z-20 overflow-hidden overflow-y-scroll">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};

export default Projects;

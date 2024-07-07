import { Tabs } from "./ui/tabs";
import WebDevelopment from "./Web-Dev";

const Projects = () => {
  const tabs = [
    {
      title: "Web Development",
      value: "webdev",
      content: (
        <div className="w-full mx-auto rounded-2xl">
          <WebDevelopment />
        </div>
      ),
    },
    {
      title: "App Development",
      value: "appdev",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          {/* <p>App development</p> */}
        </div>
      ),
    },
    {
      title: "AI",
      value: "ai",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          {/* <p>Artificial Intellegence</p> */}
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

import BigCard from "@/components/ui/BigCard";
import { TypeOfProject } from "@/models/projects/Projects.interface";
import { getProjects } from "@/util/getProjects";
import React from "react";

const projects = async () => {
  
  const projects = await getProjects();
  return (
    <div className="container min-h-screen  dark:bg-gray-900 text-black dark:text-white transition-colors ">
      <h1 className="text-center mt-8 text-2xl font-bold">
        {" "}
        My All Awesome Projects Here
      </h1>
      <p className="text-center">
        My All Awesome Projects is a collection of innovative, creative,
        <br /> and impactful works showcasing skills in various domains, from
        tech to design.
      </p>
      <div className="grid grid-cols-3 gap-3">
        {projects?.result?.map((project: TypeOfProject) => (
          <BigCard key={project.livelink} project={project} />
        ))}
      </div>
    </div>
  );
};

export default projects;

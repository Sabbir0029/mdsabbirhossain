import { AiFillProject } from "react-icons/ai";
import SmallCard from "../ui/SmallCard";
import { TypeOfProject } from "@/models/projects/Projects.interface";

const ProjectsHome =async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`,{
    cache:'force-cache'
  })
  const projects = await data.json();
 
  return (
    <div>
      <section className="ml-10">
        <div className="mt-12 ml-5 flex">
          <div className=" bg-info rounded-full mx-2 p-3">
            <AiFillProject />
          </div>
          <h2 className="font-bold text-2xl mt-1  text-black">MY PROJECTS</h2>
        </div>
        <div className="ml-8 ">
          <div className=" m-4 grid grid-cols-2 gap-3">

            {projects?.result?.map((project: TypeOfProject) => (
              <SmallCard key={project.projectName} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsHome;

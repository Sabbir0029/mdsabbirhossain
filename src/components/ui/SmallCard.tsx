import { TypeOfProject } from "@/models/projects/Projects.interface";
// import Image from "next/image";
import React from "react";

const SmallCard = ({ project }: { project: TypeOfProject }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100  shadow-xl ">
        {/* {project?.imageUrl ? (
                <Image
                  src={project?.imageUrl}
                  alt=" Image"
                  className="rounded-full mt-8"
                  width={20}
                  height={20}
                />
              ) : (
                <p>No image available</p>
              )} */}
        <small>{project.projectName}</small>
      </div>
    </div>
  );
};

export default SmallCard;

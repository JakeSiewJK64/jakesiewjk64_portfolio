import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { useFetchPersonalProjects } from "@/tools/github";

const ProjectsSection = async () => {
  const projects = await useFetchPersonalProjects();

  if (!projects) {
    return null;
  }

  return (
    <>
      <p className="text-xl font-bold">Projects</p>
      {projects.map((project) => (
        <div
          className="flex flex-col rounded-sm border-gray-200 my-1 border p-2"
          key={project.title}
        >
          <p>
            <strong>Title: </strong>
            {project.title}
          </p>
          <p>
            <strong>Date: </strong>
            {project.date}
          </p>
          <Link
            className={buttonVariants({
              variant: "link",
              size: "sm",
              className: "w-[8rem] ml-[auto]",
            })}
            href={project.url}
          >
            View Project
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProjectsSection;

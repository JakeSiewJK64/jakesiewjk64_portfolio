import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { useFetchPersonalProjects } from "@/tools/github";
import { Badge } from "./ui/badge";

const ProjectsSection = async () => {
  const projects = await useFetchPersonalProjects();

  if (!projects) {
    return null;
  }

  return (
    <div className="border border-lightgray-500 rounded-sm p-6 mb-4">
      <p className="text-xl font-bold">Projects</p>
      {projects.map((project) => (
        <div
          className="flex flex-col my-1 py-2"
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
          <div className="flex flex-row gap-1">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
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
    </div>
  );
};

export default ProjectsSection;

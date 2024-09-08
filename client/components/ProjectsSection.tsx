import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { useFetchPersonalProjects } from "@/tools/github";
import SkillBadges from "./SkillBadges";

const ProjectsSection = async () => {
  const projects = await useFetchPersonalProjects();

  return (
    <div
      id="project"
      className="border border-lightgray-500 rounded-sm p-6 mb-4"
    >
      <p className="text-xl font-bold">Projects</p>
      {!projects ? (
        <p>No data detected. Please ensure your data source is valid.</p>
      ) : (
        <>
          {projects.map((project) => (
            <div className="flex flex-col my-1 py-2" key={project.title}>
              <p>
                <strong>Title: </strong>
                {project.title}
              </p>
              <p>
                <strong>Date: </strong>
                {project.date}
              </p>
              <div className="flex flex-row gap-2 flex-wrap">
                <SkillBadges tags={project.tags} />
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
        </>
      )}
    </div>
  );
};

export default ProjectsSection;

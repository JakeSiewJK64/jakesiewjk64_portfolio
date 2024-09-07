import Link from "next/link";
import { useFetchEducation } from "@/tools/github";
import { buttonVariants } from "./ui/button";

const EducationSection = async () => {
  const education = await useFetchEducation();

  if (!education) {
    return null;
  }

  return (
    <div id="education" className="mb-4 border border-lightgray-500 rounded-sm p-6">
      <p className="text-xl font-bold">Education</p>
      {education.map((item) => (
        <div
          className="flex flex-col my-1 p-2"
          key={item.title}
        >
          <div className="flex flex-row justify-between">
            <p>{item.title}</p>
            <Link
              className={buttonVariants({
                variant: "link",
                size: "sm",
                className: "ml-[auto]",
              })}
              href={item.link}
            >
              Link
            </Link>
          </div>
          <p>
            {item.institute}, {item.location}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;

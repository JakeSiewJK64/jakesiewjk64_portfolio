import Link from "next/link";
import { useFetchEducation } from "@/tools/github";
import { buttonVariants } from "./ui/button";

const EducationSection = async () => {
  const education = await useFetchEducation();

  if (!education) {
    return null;
  }

  return (
    <div className="mb-4">
      <p className="text-xl font-bold">Education</p>
      {education.map((item) => (
        <div
          className="flex flex-col rounded-sm border-gray-200 my-1 border p-2"
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
          <p>{item.location}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;

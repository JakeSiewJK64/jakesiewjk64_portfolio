import { useFetchWorkExperience } from "@/tools/github";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  TimelineTitle,
} from "./ui/timeline/timeline";
import { Badge } from "./ui/badge";

const WorkExperienceSection = async () => {
  const experiences = await useFetchWorkExperience();

  return (
    <div
      id="work_experience"
      className="border border-lightgray-500 rounded-sm p-6 mb-4"
    >
      <p className="text-xl font-bold">Work Experience</p>
      {!experiences ? (
        <p>
          No data detected. Please ensure your data source is valid.
        </p>
      ) : (
        <>
          {experiences.map((experience) => (
            <Timeline key={experience.start_date}>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon />
                  <TimelineTitle>{experience.company}</TimelineTitle>
                </TimelineHeader>
                <TimelineContent>
                  <p>{experience.start_date}</p>
                  <div className="flex flex-row gap-2 flex-wrap">
                    {experience.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <p>{experience.description}</p>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          ))}
        </>
      )}
    </div>
  );
};

export default WorkExperienceSection;

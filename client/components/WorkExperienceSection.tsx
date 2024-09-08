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
import SkillBadges from "./SkillBadges";

const WorkExperienceSection = async () => {
  const experiences = await useFetchWorkExperience();

  return (
    <div
      id="work_experience"
      className="border border-lightgray-500 rounded-sm p-6 mb-4"
    >
      <p className="text-xl font-bold">Work Experience</p>
      {!experiences ? (
        <p>No data detected. Please ensure your data source is valid.</p>
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
                  <SkillBadges tags={experience.tags} />
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

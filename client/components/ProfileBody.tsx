import EducationSection from "./EducationSection";
import ProjectsSection from "./ProjectsSection";
import WorkExperienceSection from "./WorkExperienceSection";

const ProfileBody = async () => {
  return (
    <div className="overflow-y-auto w-[40rem]">
      <WorkExperienceSection />
      <ProjectsSection />
      <EducationSection />
    </div>
  );
};

export default ProfileBody;

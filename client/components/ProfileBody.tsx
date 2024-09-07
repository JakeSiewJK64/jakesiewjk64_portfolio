import EducationSection from "./EducationSection";
import ProjectsSection from "./ProjectsSection";
import WorkExperienceSection from "./WorkExperienceSection";

const ProfileBody = async () => {
  return (
    <div className="overflow-y-auto w-[40rem] border border-lightgray-500 p-6 rounded-sm">
      <WorkExperienceSection />
      <ProjectsSection />
      <EducationSection />
    </div>
  );
};

export default ProfileBody;

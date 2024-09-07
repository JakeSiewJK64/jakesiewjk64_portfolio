import ProfileBody from "@/components/ProfileBody";
import ProfileCard from "@/components/ProfileCard";

const Home = () => {
  return (
    <div className="flex h-[100vh]">
      <div className="max-w-[80rem] mx-[auto] gap-4 flex-row flex mt-[auto] mb-[auto]">
        <ProfileCard />
        <ProfileBody />
      </div>
    </div>
  );
};

export default Home;

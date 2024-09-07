import Image from "next/image";
import { useFetchGithubProfile } from "@/tools/github";
import CopyToClipboard from "./ui/custom/CopyToClipboard";

const ProfileCard = async () => {
  const profile = await useFetchGithubProfile();

  if (!profile) {
    return null;
  }

  return (
    <div className="border border-lightgray-500 p-6 rounded-sm">
      <Image
        src={profile.avatar_url}
        width={150}
        height={150}
        className="rounded-[50%] mb-8"
        alt="profile"
      />
      <p className="text-xl font-bold uppercase">{profile.name}</p>
      <p>{profile.login}</p>
      <CopyToClipboard value={profile.email} />
    </div>
  );
};

export default ProfileCard;

import Image from "next/image";
import { useFetchGithubProfile } from "@/tools/github";
import CopyToClipboard from "./CopyToClipboard";

const ProfileCard = async () => {
  const profile = await useFetchGithubProfile();

  if (!profile) {
    return null;
  }

  console.log(profile);

  return (
    <div className="border border-lightgray-500 p-2 rounded-sm">
      <Image
        src={profile.avatar_url}
        width={150}
        height={150}
        className="rounded-[50%] mb-8"
        alt="profile"
      />
      <p className="text-xl font-bold">{profile.name}</p>
      <p>{profile.login}</p>
      <CopyToClipboard label="Copy Email" value={profile.email} />
    </div>
  );
};

export default ProfileCard;

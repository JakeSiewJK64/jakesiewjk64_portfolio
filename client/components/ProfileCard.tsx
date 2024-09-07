import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { MailIcon } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { useFetchGithubProfile } from "@/tools/github";
import { buttonVariants } from "./ui/button";
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
      <div className="flex flex-row gap-2">
        <CopyToClipboard icon={<MailIcon />} value={profile.email} />
        <Link
          className={buttonVariants({ variant: "outline", size: "icon" })}
          href={profile.html_url}
        >
          <BsGithub size={20} />
        </Link>
        <Link
          className={buttonVariants({ variant: "outline", size: "icon" })}
          href={profile.blog}
        >
          <LiaLinkedin size={20} />
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;

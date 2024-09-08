import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { MailIcon } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { useFetchGithubProfile } from "@/tools/github";
import { buttonVariants } from "./ui/button";
import CopyToClipboard from "./ui/custom/CopyToClipboard";
import BarcodeComponent from "./ui/custom/BarcodeComponent";
import QrComponent from "./ProfileURLQR";

const ProfileCard = async () => {
  const profile = await useFetchGithubProfile();

  return (
    <div className="border border-lightgray-500 p-6 rounded-sm flex flex-col items-center">
      <div className="w-14 mb-4 h-2 bg-black rounded-sm" />
      {!profile ? (
        <p className="my-auto max-w-[10rem] text-center">
          No data detected. Please ensure your data source is valid.
        </p>
      ) : (
        <>
          <Image
            src={profile.avatar_url}
            width={120}
            height={120}
            className="rounded-[50%]"
            alt="profile"
          />
          <QrComponent />
          <div className="text-center">
            <p className="text-xl font-bold uppercase">{profile.name}</p>
            <p>{profile.login}</p>
          </div>
          <div className="flex flex-row gap-2 mt-4 justify-center">
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
          <BarcodeComponent value={String(profile.id)} />
        </>
      )}
    </div>
  );
};

export default ProfileCard;

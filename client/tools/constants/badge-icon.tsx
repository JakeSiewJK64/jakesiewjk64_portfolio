import { ReactNode } from "react";
import {
  FaAngular,
  FaAws,
  FaDocker,
  FaJava,
  FaLeaf,
  FaPython,
  FaRaspberryPi,
  FaReact,
  FaUnity,
} from "react-icons/fa";
import { MdJavascript } from "react-icons/md";
import {
  SiArduino,
  SiDjango,
  SiDotnet,
  SiPostgresql,
  SiReactquery,
  SiTypescript,
} from "react-icons/si";

type BadgeProperties = {
  bgColor: string;
  fontColor: string;
  icon: ReactNode;
};

export const BADGE_ICON: Record<string, BadgeProperties> = {
  react: { fontColor: "#0891b2", bgColor: "#cffafe", icon: <FaReact /> },
  javascript: { fontColor: "#000", bgColor: "#eab308", icon: <MdJavascript /> },
  unity3d: { fontColor: "#fff", bgColor: "#000", icon: <FaUnity /> },
  postgres: { fontColor: "#fff", bgColor: "#0064a5", icon: <SiPostgresql /> },
  postgresql: { fontColor: "#fff", bgColor: "#0064a5", icon: <SiPostgresql /> },
  angular: { fontColor: "#fff", bgColor: "#f00", icon: <FaAngular /> },
  "angular/cli": { fontColor: "#fff", bgColor: "#f00", icon: <FaAngular /> },
  angularcli: { fontColor: "#fff", bgColor: "#f00", icon: <FaAngular /> },
  ".net": { fontColor: "#fff", bgColor: "#512bd4", icon: <SiDotnet /> },
  dotnet: { fontColor: "#fff", bgColor: "#512bd4", icon: <SiDotnet /> },
  typescript: { fontColor: "#fff", bgColor: "#0ea5e9", icon: <SiTypescript /> },
  python: { fontColor: "#4584b6", bgColor: "#ffde57", icon: <FaPython /> },
  docker: { fontColor: "#0ea5e9", bgColor: "#e0f2fe", icon: <FaDocker /> },
  aws: { fontColor: "#f97316", bgColor: "#0c4a6e", icon: <FaAws /> },
  "aws-ec2": { fontColor: "#f97316", bgColor: "#0c4a6e", icon: <FaAws /> },
  "aws ec2": { fontColor: "#f97316", bgColor: "#0c4a6e", icon: <FaAws /> },
  django: { fontColor: "#092E20", bgColor: "#fff", icon: <SiDjango /> },
  "react-native": {
    fontColor: "#0891b2",
    bgColor: "#cffafe",
    icon: <FaReact />,
  },
  java: { fontColor: "#ea580c", bgColor: "#ffedd5", icon: <FaJava /> },
  arduino: { fontColor: "#10b981", bgColor: "#d1fae5", icon: <SiArduino /> },
  "raspberry pi": {
    fontColor: "#f43f5e",
    bgColor: "#ffe4e6",
    icon: <FaRaspberryPi />,
  },
  "raspberry-pi": {
    fontColor: "#f43f5e",
    bgColor: "#ffe4e6",
    icon: <FaRaspberryPi />,
  },
  "spring-boot": { fontColor: "#fff", bgColor: "#84cc16", icon: <FaLeaf /> },
};

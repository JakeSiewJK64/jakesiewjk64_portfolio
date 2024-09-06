import { Profile } from "@/lib/definitions/global";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/JakeSiewJK64/jakesiewjk64_portfolio/master/data",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const useFetchGithubProfile = async () => {
  try {
    const res = await axiosInstance<Profile>("/profile.json");

    return res.data;
  } catch (error) {}
};

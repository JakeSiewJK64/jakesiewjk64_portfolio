import { Profile } from "@/lib/definitions/global";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const useFetchGithubProfile = async () => {
  try {
    const res = await axiosInstance<Profile>("/users/JakeSiewJK64");

    return res.data;
  } catch (error) {}
};

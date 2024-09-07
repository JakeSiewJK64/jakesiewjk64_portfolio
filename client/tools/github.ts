import {
  Education,
  PersonalProject,
  Profile,
  WorkExperience,
} from "@/lib/definitions/global";
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

export const useFetchWorkExperience = async () => {
  try {
    const res = await axiosInstance<WorkExperience[]>("/workExperience.json");

    return res.data;
  } catch (error) {}
};

export const useFetchPersonalProjects = async () => {
  try {
    const res = await axiosInstance<PersonalProject[]>("/personalProject.json");

    return res.data;
  } catch (error) {}
};

export const useFetchEducation = async () => {
  try {
    const res = await axiosInstance<Education[]>("/education.json");

    return res.data;
  } catch (error) {}
};

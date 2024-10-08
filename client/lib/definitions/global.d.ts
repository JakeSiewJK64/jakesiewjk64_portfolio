export type Profile = {
  login: string;
  name: string;
  avatar_url: string;
  email: string;
  html_url: string;
  blog: string;
  id: number;
};

export type WorkExperience = {
  company: string;
  start_date: string;
  end_date: string;
  position: string;
  tags: string[];
  location: string;
  description: string;
};

export type PersonalProject = {
  title: string;
  tags: string[];
  date: string;
  url: string;
};

export type Education = {
  title: string;
  graduation_date: string;
  institute: string;
  location: string;
  link: string;
};

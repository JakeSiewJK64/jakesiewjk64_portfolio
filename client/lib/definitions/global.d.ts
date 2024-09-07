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

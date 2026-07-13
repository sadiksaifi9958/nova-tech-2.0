import { LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  desc: string;
  icon: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export type Feature = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatarColor: string;
};

export type Stat = {
  number: string;
  suffix: string;
  label: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  featured: boolean;
};

export type FAQ = {
  question: string;
  answer: string;
};

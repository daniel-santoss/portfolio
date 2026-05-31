export interface SocialLink {
  name: string;
  logo: string;
  url: string;
  newTab: boolean;
  hoverColor: string;
}

export interface TechItem {
  name: string;
  color: string;
  icon: string;
  iconType?: 'image' | 'font';
}

export interface Project {
  id: string | number;
  title: string;
  category: string;
  image: string;
  date: string;
  type: string;
  description: string;
  shortDescription?: string;
  techStack: string[]; // Chaves que apontam para o catálogo de tecnologias global
  gallery: string[];
  highlights: string[];
  repoLink: string;
  deployLink?: string;
}

export interface Skill {
  name: string;
  icon?: string;
  invert?: boolean;
  iconClass?: string;
  iconColor?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface TimelineItem {
  icon: string;
  date: string;
  title: string;
  institution: string;
  description: string;
  animate: boolean;
  hasLine: boolean;
  dateColor: string;
}

export interface Certification {
  icon: string;
  title: string;
  institution: string;
  date: string;
  description: string;
  certLink?: string;
}

export interface Language {
  flag: string;
  alt: string;
  name: string;
  level: string;
}

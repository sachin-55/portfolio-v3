
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  details: string[];
  technologies?: string[];
  isCurrent?: boolean;
}

export interface ProjectItem {
  title: string;
  period?: string;
  description: string;
  responsibilities: string;
  technologies?: string[];
  category: 'Work' | 'Personal' | 'Academic';
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

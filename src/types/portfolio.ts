export interface Project {
  title: string;
  category: string;
  description: string;
  images: string[];
  link?: string;
  accentColor?: string;
}

export interface PhaseDividerProps {
  title: string;
  phase: string;
}

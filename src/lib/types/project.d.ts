// Type definitions for Project
export interface Project {
  title: string;
  description: string;
  image: string;
  fit: boolean;
  fill: boolean;
  tags: string[];
  metrics?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

declare global {
  namespace App {
    interface Project extends Project {}
  }
}

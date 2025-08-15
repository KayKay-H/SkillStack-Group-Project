'use client';
import { createContext, ReactNode, useState } from 'react';

interface Project {
  title: string;
  description: string;
}

interface ProjectsContextType {
  projects: Project[];
  addProject: (project: Project) => void;
  updateProject: (index: number, project: Project) => void;
  removeProject: (index: number) => void;
}

export const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export function ProjectsProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (project: Project) => setProjects([...projects, project]);

  const updateProject = (index: number, updatedProject: Project) => {
    setProjects(projects.map((p, i) => (i === index ? updatedProject : p)));
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <ProjectsContext.Provider value={{ projects, addProject, updateProject, removeProject }}>
      {children}
    </ProjectsContext.Provider>
  );
}

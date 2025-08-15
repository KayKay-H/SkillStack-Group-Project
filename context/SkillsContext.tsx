'use client';
import { createContext, ReactNode, useState } from 'react';

interface Skill {
  name: string;
}

interface SkillsContextType {
  skills: Skill[];
  addSkill: (skill: Skill) => void;
  updateSkill: (index: number, skill: Skill) => void;
  removeSkill: (index: number) => void;
}

export const SkillsContext = createContext<SkillsContextType | undefined>(undefined);

export function SkillsProvider({ children }: { children: ReactNode }) {
  const [skills, setSkills] = useState<Skill[]>([]);

  const addSkill = (skill: Skill) => setSkills([...skills, skill]);

  const updateSkill = (index: number, updatedSkill: Skill) => {
    setSkills(skills.map((s, i) => (i === index ? updatedSkill : s)));
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <SkillsContext.Provider value={{ skills, addSkill, updateSkill, removeSkill }}>
      {children}
    </SkillsContext.Provider>
  );
}

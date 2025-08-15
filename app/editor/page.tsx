'use client';
import { useState, useContext } from 'react';
import { ProjectsContext } from '@/context/ProjectsContext';
import { SkillsContext } from '@/context/SkillsContext';

export default function EditorPage() {
  const { projects, addProject, updateProject, removeProject } = useContext(ProjectsContext)!;
  const { skills, addSkill, updateSkill, removeSkill } = useContext(SkillsContext)!;

  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [editingProjectIndex, setEditingProjectIndex] = useState<number | null>(null);

  const [skillName, setSkillName] = useState('');
  const [editingSkillIndex, setEditingSkillIndex] = useState<number | null>(null);

  // Project handlers
  const handleAddOrUpdateProject = () => {
    if (!projectTitle) return;
    if (editingProjectIndex !== null) {
      updateProject(editingProjectIndex, { title: projectTitle, description: projectDescription });
      setEditingProjectIndex(null);
    } else {
      addProject({ title: projectTitle, description: projectDescription });
    }
    setProjectTitle('');
    setProjectDescription('');
  };

  const handleEditProject = (index: number) => {
    const proj = projects[index];
    setProjectTitle(proj.title);
    setProjectDescription(proj.description);
    setEditingProjectIndex(index);
  };

  // Skill handlers
  const handleAddOrUpdateSkill = () => {
    if (!skillName) return;
    if (editingSkillIndex !== null) {
      updateSkill(editingSkillIndex, { name: skillName });
      setEditingSkillIndex(null);
    } else {
      addSkill({ name: skillName });
    }
    setSkillName('');
  };

  const handleEditSkill = (index: number) => {
    const skill = skills[index];
    setSkillName(skill.name);
    setEditingSkillIndex(index);
  };

  return (
    <main className="max-w-3xl mx-auto py-16 px-6 space-y-12">
      <h1 className="text-3xl font-bold text-indigo-700 text-center mb-8">
        Project & Skill Editor
      </h1>

      {/* Project Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Add / Edit Project</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-500 uppercase tracking-wide font-semibold mb-1">
              Project Title
            </label>
            <input
              type="text"
              placeholder="My Awesome Project"
              className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-500 uppercase tracking-wide font-semibold mb-1">
              Project Description
            </label>
            <textarea
              placeholder="Project description..."
              className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
          </div>

          <button
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            onClick={handleAddOrUpdateProject}
          >
            {editingProjectIndex !== null ? 'Update Project' : 'Add Project'}
          </button>
        </div>

        {projects.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">All Projects</h3>
            <ul className="space-y-2">
              {projects.map((proj, idx) => (
                <li key={idx} className="border p-3 rounded shadow-sm bg-gray-50 flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-indigo-700">{proj.title}</p>
                    <p className="text-gray-600">{proj.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={() => handleEditProject(idx)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => removeProject(idx)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Skill Section */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Add / Edit Skill</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-500 uppercase tracking-wide font-semibold mb-1">
              Skill Name
            </label>
            <input
              type="text"
              placeholder="New Skill"
              className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
            />
          </div>

          <button
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            onClick={handleAddOrUpdateSkill}
          >
            {editingSkillIndex !== null ? 'Update Skill' : 'Add Skill'}
          </button>
        </div>

        {skills.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">All Skills</h3>
            <ul className="space-y-2">
              {skills.map((skill, idx) => (
                <li key={idx} className="border p-3 rounded shadow-sm bg-gray-50 flex justify-between items-center">
                  <span>{skill.name}</span>
                  <div className="flex gap-2">
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={() => handleEditSkill(idx)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => removeSkill(idx)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}

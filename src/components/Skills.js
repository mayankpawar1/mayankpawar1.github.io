// src/components/Skills.js
import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-zinc-800 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Technical Skills */}
          <div className="bg-zinc-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>React.js</li>
              <li>Next.js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="bg-zinc-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Content Management Systems (CMS)</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Sitecore</li>
              <li>Contentstack</li>
              <li>Component-driven development</li>
            </ul>
          </div>

          <div className="bg-zinc-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>C</li>
              <li>C++</li>
              <li>Java</li>
              <li>Python</li>
              <li>Data Structures & Algorithms</li>
            </ul>
          </div>

          <div className="bg-zinc-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Machine Learning & AI</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>TensorFlow</li>
              <li>scikit-learn</li>
              <li>Python for ML</li>
            </ul>
          </div>

          <div className="bg-zinc-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">3D Modeling & Game Dev</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Blender</li>
              <li>Unreal Engine</li>
            </ul>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-zinc-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Version Control</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>GitHub</li>
            </ul>
          </div>

          <div className="bg-zinc-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Design Proficiency</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Figma</li>
            </ul>
          </div>

          <div className="bg-zinc-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Project Management</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Jira</li>
              <li>Confluence</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

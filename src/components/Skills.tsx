import React from "react";

type Skill = {
  name: string;
  level: number;
};

const skills: Skill[] = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Tailwind CSS", level: 85 },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-yellow-500 mb-8">Skills</h2>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-yellow-500 h-3 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

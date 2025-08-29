import React from "react";

const Projects: React.FC = () => {
  const projects = [
    { name: "Portfolio Website", link: "https://github.com/username/portfolio" },
    { name: "E-commerce App", link: "https://github.com/username/ecommerce" },
  ];

  return (
    <section id="projects" className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-yellow-500 mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            className="block p-6 bg-white dark:bg-gray-800 shadow rounded-lg hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-sm text-gray-500">View on GitHub</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 px-6">
      <h2 className="text-3xl font-bold text-yellow-500 mb-4">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
        I'm a React developer with experience in building modern, responsive, and
        user-friendly web applications. I love working with TypeScript, Tailwind CSS, 
        and the MERN stack.
      </p>
    </section>
  );
};

export default About;

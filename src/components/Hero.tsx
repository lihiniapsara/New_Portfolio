import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="text-center py-20 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-5xl font-bold text-yellow-500">Hi, I'm Lihini</h1>
      <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
        A passionate React Developer 🚀
      </p>
      <a
        href="/resume.pdf"
        download
        className="mt-6 inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600"
      >
        Download CV
      </a>
    </section>
  );
};

export default Hero;

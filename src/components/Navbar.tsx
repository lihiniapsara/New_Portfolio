import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-yellow-400 dark:bg-yellow-600">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <div className="flex gap-4 items-center">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

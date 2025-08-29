import React from "react";

const Certificates: React.FC = () => {
  const certs = [
    { title: "React Developer Certificate", issuer: "Coursera" },
    { title: "Fullstack Developer", issuer: "Udemy" },
  ];

  return (
    <section id="certificates" className="py-12 px-6">
      <h2 className="text-3xl font-bold text-yellow-500 mb-4">Certificates</h2>
      <ul className="space-y-4">
        {certs.map((cert, idx) => (
          <li key={idx} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
            <h3 className="font-semibold">{cert.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">Issued by {cert.issuer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certificates;

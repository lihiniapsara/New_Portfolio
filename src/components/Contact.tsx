import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 px-6">
      <h2 className="text-3xl font-bold text-yellow-500 mb-4">Chat With Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Feel free to reach out via email or connect on social media!
      </p>
      <div className="flex gap-4">
        <a href="mailto:yourname@email.com" className="px-4 py-2 bg-yellow-500 rounded text-black">
          Email
        </a>
        <a href="https://twitter.com/" className="px-4 py-2 bg-yellow-500 rounded text-black">
          Twitter
        </a>
        <a href="https://linkedin.com/" className="px-4 py-2 bg-yellow-500 rounded text-black">
          LinkedIn
        </a>
        <a href="https://github.com/" className="px-4 py-2 bg-yellow-500 rounded text-black">
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;

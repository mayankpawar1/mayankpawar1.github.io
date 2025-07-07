import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-zinc-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-300 mb-8">
          I'm open to any hireable opportunities and collaboration ideas.
          Feel free to reach out through the platforms below:
        </p>

        <div className="space-y-4 text-lg">
          <p>Email: <a href="mailto:Mayankpawar107@gmail.com" className="text-blue-400 underline">Mayankpawar107@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/mayank-pawar/" className="text-blue-400 underline">Mayank Pawar</a></p>
          <p>GitHub: <a href="https://github.com/mayankpawar1" className="text-blue-400 underline">mayankpawar1</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-full md:w-64 bg-zinc-900 text-white p-4 md:fixed h-full">
      <div className="flex flex-col items-center text-center">
        {/* <img src="../assets/avatar.png" alt="avatar" className="w-24 h-24 rounded-full mb-4" /> */}
        <h1 className="text-xl font-bold mt-20">Mayank Pawar</h1>
        <h2 className="text-sm text-gray-400 mb-6">Software engineer</h2>
      </div>

      <nav className="mb-6">
        <ul className="space-y-2">
          <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
          <li><a href="#skills" className="hover:underline">My Skills</a></li>
          <li><a href="#contact" className="hover:underline">Contact Me</a></li>
          <li><a href="/Resume.pdf" className="hover:underline">My Resume</a></li>
        </ul>
      </nav>

      <div>
        <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-2">Get in touch</h3>
        <div className="flex space-x-3 text-2xl">
          <a href="mailto:Mayankpawar107@gmail.com"><i className="fa fa-envelope" /></a>
          <a href="https://www.linkedin.com/in/mayank-pawar/"><i className="fa fa-linkedin-square" /></a>
          <a href="https://github.com/mayankpawar1"><i className="fa fa-github-square" /></a>
          <a href="https://www.facebook.com/mayank.pawar.73997/"><i className="fa fa-facebook-square" /></a>
          <a href="https://twitter.com/Mayank_pawar_?s=08"><i className="fa fa-twitter-square" /></a>
          <a href="https://www.instagram.com/mayank_pawar._/"><i className="fa fa-instagram" /></a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

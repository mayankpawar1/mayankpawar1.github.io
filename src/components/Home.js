import React from "react";

const Home = () => {
  return (
    <section className="py-16 px-4" id="home">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Mayank,</h1>
        <div className="text-lg md:text-xl space-y-4 text-gray-300">
          <p>
            I'm a Frontend Developer and CMS Specialist with over 3 years of experience crafting scalable, 
            high-performance web applications with a strong focus on user experience. My technical expertise
            spans React.js, Next.js, Tailwind CSS, and enterprise-level CMS platforms such as Sitecore and Contentstack.
          </p>
          <p>
            I’m passionate about building clean, maintainable code and thrive in fast-paced, cross-functional teams.
             Beyond frontend development, I actively pursue growth in AI, machine learning, and 3D modeling, 
             blending creativity with technology to stay ahead of the curve.
          </p>
          <p>
            With a strong problem-solving mindset and a solid work ethic, I consistently deliver under
             pressure and bring reliability, innovation, and clarity to every project I take on.
          </p>
        </div>
        <div className="mt-8 space-x-4">
          <a href="#career" className="inline-block border border-white text-white mb-5 px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Career History
          </a>
          <a href="#portfolio" className="inline-block border border-white text-white mb-5 px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Portfolio
          </a>
          <a href="#skills" className="inline-block border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
            My Skills
          </a>
          <a href="#contacts" className="inline-block border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Contacts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 px-4 bg-zinc-800 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Personal Projects</h2>
        <p className="text-gray-400 mb-8">See my works below.</p>

        <div className="space-y-12">

          {/* Project: Number Plate Detection */}
          <div>
            <h3 className="text-2xl font-semibold">Number Plate Detection Model</h3>
            <p className="text-gray-400 text-sm mb-2">(December 2019)</p>
            <p className="mb-2">A neural network-based vehicle number plate recognition system using images or clips with backend storage.</p>
            <p><strong>Tech Stack:</strong> Python, TensorFlow, OpenCV, Scikit</p>
            <p><strong>Role:</strong> Backend</p>
          </div>

          {/* Project: Number Plate Detection */}
          <div>
            <h3 className="text-2xl font-semibold">Online Multiplayer Game </h3>
            <p className="text-gray-400 text-sm mb-2">(November 2021 - May 2022)</p>
            <p className="mb-2">Designed and developed a competitive online multiplayer third-person shooter game.</p>
            <p><strong>Tech Stack:</strong> Blender, Unreal Engine 5, C#</p>
            <p><strong>Role:</strong> 3D Modeling and World development</p>
          </div>

          {/* Project: Number Plate Detection */}
          <div>
            <h3 className="text-2xl font-semibold">3D Model Portfolio</h3>
            <p className="text-gray-400 text-sm mb-2">(December 2019)</p>
            <p className="mb-2">Designed and developed a competitive online multiplayer third-person shooter game.</p>
            <p><strong>Tech Stack:</strong> </p>
            <p><strong>Role:</strong> Backend</p>
          </div>

          {/* Project: Burnout Predictor */}
          <div>
            <h3 className="text-2xl font-semibold">3D Model Portfolio</h3>
            <p className="text-gray-400 text-sm mb-2">(February 2024 - Present)</p>
            <p className="mb-2">Engaged in learning 3D modeling and animation with Blender.</p>
            <p><strong>Tech Stack:</strong> Blender</p>
          </div>

          {/* Project: Mughaliya Hat */}
          <div>
            <h3 className="text-2xl font-semibold">Mughaliya Hat’s Portfolio</h3>
            <p className="text-gray-400 text-sm mb-2">(January 2021)</p>
            <p className="mb-2">An informational website for a village in MP highlighting places to visit, population graphs, and Panchayat data.</p>
            <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, MongoDB</p>
            <p><strong>Role:</strong> Frontend, Database </p>
          </div>

          

          {/* Internship */}
          <div>
            <h2 className="text-2xl font-semibold mt-8">Internships</h2>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Social Media Content Creator (DevCommunityIN)</h3>
              <p className="text-gray-400 text-sm mb-2">(June 2020 - October 2020)</p>
              <p>Led a team of 4 to create educational content for social platforms (LinkedIn, Instagram, Facebook) to drive traffic to their website.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

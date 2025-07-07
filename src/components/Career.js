import React from "react";

const Career = () => {
  return (
    <section id="career" className="py-16 bg-zinc-800 px-4 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Career History</h2>

        <div className="space-y-12">

          {/* Capgemini Role */}
          <div>
            <h3 className="text-2xl font-semibold">Frontend Developer, Capgemini</h3>
            <p className="text-gray-400 text-sm mb-2">July 2022 - Present</p>
            <p className="mb-4">
              Extensive experience as a Frontend Developer and Content Management System (CMS) specialist, with expertise in Sitecore, Contentstack, React.js, Next.js, .NET, Tailwind CSS, and Storybook. Skills were continually honed through diverse projects and ongoing professional development.
            </p>
          </div>
          <h2 className="text-xl font-bold">Projects in Capgemini</h2>
           <div className="ml-6 md:ml-16 space-y-12">

            

          {/* Daimler Trucks */}
          <div>
            <h3 className="text-xl font-semibold">ECU Management Portal for Daimler Trucks</h3>
            <p className="text-gray-400 text-sm mb-2">April 2024 - Present</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Developed scalable web applications using React.js, reducing load times by 30%.</li>
              <li>Used Tailwind CSS for efficient styling, cutting development time for new features by 40%.</li>
              <li>Implemented component-driven development with Storybook, reducing testing time by 30%.</li>
            </ul>
          </div>

          {/* Travis Mathew */}
          <div>
            <h3 className="text-xl font-semibold">E-Commerce Website for Travis Mathew</h3>
            <p className="text-gray-400 text-sm mb-2">June 2023 - January 2023</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Integrated Contentstack CMS with React using GraphQL, reducing content update time by 50%.</li>
              <li>Built reusable components using React.js and Next.js to improve UX by 20%.</li>
              <li>Managed Storybook for UI consistency and cut design/test errors by 25%.</li>
            </ul>
          </div>

          {/* EPA Australia */}
          <div>
            <h3 className="text-xl font-semibold">Weather & Environmental Data Website – EPA Australia</h3>
            <p className="text-gray-400 text-sm mb-2">February 2023 - May 2023</p>
            <p className="text-gray-300">
              Specialized in Sitecore PowerShell scripts to automate workflows, improving operational efficiency by 35%.
            </p>
          </div>

          {/* ADA */}
          <div>
            <h3 className="text-xl font-semibold">Informational Website – American Dental Association</h3>
            <p className="text-gray-400 text-sm mb-2">October 2022 - December 2022</p>
            <p className="text-gray-300">
              Contributed to Sitecore CMS enhancements, optimizing system performance to better meet user needs.
            </p>
          </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Career;

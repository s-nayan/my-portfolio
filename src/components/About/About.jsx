import React from "react";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex flex-col overflow-hidden bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-col items-start">
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-full">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Experienced in building interactive UIs using React.js, HTML, CSS, and JavaScript. Proficient in creating responsive designs and optimizing web performance.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-full">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Skilled in developing robust APIs and managing databases with Node.js and MongoDB. Adept at handling server-side logic and ensuring data security.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-full">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Proficient in database management and optimization using SQL and MongoDB. Experienced in designing efficient data models to support application needs.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-full">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Problem Solver
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Expertise in Data Structures & Algorithms, enabling effective problem-solving and optimization. Committed to delivering efficient and scalable solutions.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-12">
        <h2 className="text-2xl md:text-4xl font-bold">Education</h2>
        <ul className="mt-6 space-y-6">
          <li>
            <h3 className="text-xl md:text-2xl font-semibold">
              B.Tech in Artificial Intillegence and Machine Learning
            </h3>
            <p className="text-sm md:text-md leading-relaxed">
              <span className="font-bold">BIT Mesra</span>, Ranchi, India | 08/2022 – 06/2026
              <br />
              CGPA: 8.86*
            </p>
          </li>
          <li>
            <h3 className="text-xl md:text-2xl font-semibold">Intermediate</h3>
            <p className="text-sm md:text-md leading-relaxed">
              <span className="font-bold">Delhi Public School</span>, Ranchi, India | 05/2020 – 06/2022
              <br />
              Percentage: 94.8%
            </p>
          </li>
          <li>
            <h3 className="text-xl md:text-2xl font-semibold">Matriculation</h3>
            <p className="text-sm md:text-md leading-relaxed">
              <span className="font-bold">DAV Public School</span>, Aurangabad, Bihar, India | 04/2009 – 04/2020
              <br />
              Percentage: 97.4%
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

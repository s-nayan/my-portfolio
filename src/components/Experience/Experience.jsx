import React from "react";
import {
  FaCss3, FaHtml5, FaJs, FaReact, FaAmazon
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiNodedotjs, SiExpress, SiTailwindcss, SiCplusplus, SiC, SiPython
} from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">Experience</h1>
      {/* Technical Skills */}
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-8">
        {/* Technical Skills Column 1 */}
        <div className="flex flex-col gap-8 md:w-1/2">
          <div className="grid grid-cols-3 gap-6">
            <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
              <FaHtml5 color="#E34F26" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
              <FaCss3 color="#1572B6" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
              <FaJs color="#F7DF1E" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
              <FaReact color="#61DAFB" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
              <SiTailwindcss color="#06B6D4" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
              <SiExpress color="#ffffff" size={50} />
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:w-1/2">
          <div className="grid grid-cols-3 gap-6">
            <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
              <SiNodedotjs color="#339933" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
              <SiMongodb color="#47A248" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
              <SiMysql color="#4479A1" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
              <SiCplusplus color="#00599C" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
              <SiC color="#A8B9CC" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
              <SiPython color="#3776AB" size={50} />
            </span>
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-4 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl md:text-3xl text-white font-semibold mb-6">
            Soft Skills
          </h2>
          <ul className="grid gap-2 text-white text-md md:text-lg">
            <li className="bg-zinc-900 p-4 rounded-md shadow-md">Communication</li>
            <li className="bg-zinc-900 p-4 rounded-md shadow-md">Teamwork</li>
            <li className="bg-zinc-900 p-4 rounded-md shadow-md">Problem-solving</li>
            <li className="bg-zinc-900 p-4 rounded-md shadow-md">Time Management</li>
            <li className="bg-zinc-900 p-4 rounded-md shadow-md">Adaptability</li>
            <li className="bg-zinc-900 p-4 rounded-md shadow-md">Leadership</li>
            <li className="bg-zinc-900 p-4 rounded-md shadow-md">Critical Thinking</li>
            <li className="bg-zinc-900 p-4 rounded-md shadow-md">Attention to Detail</li>
          </ul>
        </div>
      </div>


    </div>
  );
};

export default Experience;

import React from "react";

const ProjectCard = ({ title, main }) => {
  return (
    <div className="p-6 md:p-8 flex flex-col w-full sm:w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl overflow-hidden transform hover:scale-105 duration-300">
      <div className="p-6 flex flex-col justify-center items-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6 text-center relative">
          <span className="text-[#0d9cf2] absolute inset-x-0 bottom-0 w-full h-[4px] bg-black"></span>
          {title}
        </h3>
        <p className="text-sm md:text-md text-gray-300 leading-relaxed mb-6">{main}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

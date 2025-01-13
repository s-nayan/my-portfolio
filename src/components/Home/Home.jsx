import React from "react";
import avatarImg from "../../assets/saket.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-wrap w-full justify-between items-center p-10 md:p-20 gap-10">
      {/* Left Section */}
      <div className="md:w-2/5">
        <h1 className="text-xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-6">
          A dedicated and results-driven professional with a passion for
          continuous growth and development. Committed to excellence and eager
          to contribute positively to any team or organization.
        </p>
        <a href="#Footer">
          <button className="mt-8 text-white py-3 px-5 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Contact Me
          </button>
        </a>
      </div>

      {/* Circular Image Section */}
      <div className="flex justify-center items-center w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full">
        <img
          className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover"
          src={avatarImg}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Home;

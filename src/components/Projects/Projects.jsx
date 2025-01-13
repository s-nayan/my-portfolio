import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-3xl md:text-5xl text-white font-bold mb-8">
        Projects
      </h1>
      <div className="py-12 px-8 flex flex-wrap gap-10">
        <ProjectCard
          title="Bit-Kart"
          main="An e-commerce platform focused on selling used items within a campus. Features person-to-person interactions and integrated WhatsApp communication. Users can easily buy and sell goods, creating a thriving on-campus marketplace."
        />
        <ProjectCard
          title="CleanStream"
          main="A smart waste management platform connecting users and cleaning workers. It aims to make waste collection more efficient and profitable, while also providing a marketplace for buying and selling recyclable items. Features include tracking waste collection schedules and live updates."
        />
        <ProjectCard
          title="Portfolio"
          main="A personal portfolio website created with ReactJs and Tailwind. It highlights my skills, projects, and achievements with an interactive and user-friendly interface. The site is fully responsive and optimized for all devices."
        />
      </div>
    </div>
  );
};

export default Projects;

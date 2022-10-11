import React from "react";
import CryptoImgage from "../public/assets/projects/CryptoAppImage.PNG";
import todo_image from "../public/assets/projects/todo_image.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#72f] to-[#c1b]">
          Projects
        </p>
        <h2 className="py-4">What I´ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Crypto App"
            backgroundImg={CryptoImgage}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectItem
            title="Todo List"
            backgroundImg={todo_image}
            projectUrl="/todo"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

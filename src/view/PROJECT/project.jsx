import { useState } from "react";
import { Files, Folder, File } from "@/components/animate-ui/components/files";
import { cn } from '@/lib/utils';


const projectDetails = {
  "Yasyir's-Kitchen-Tales": {
    title: "Yasyir's Kitchen Tales",
    date: "12 July 2025",
    description:
      "A simple recipe-sharing platform where users can explore, submit, and save recipes. Built with React for the frontend and Express + MySQL for the backend.",
    image: "/assets/project-preview/kitchen-tales.png",
    techStack: ["React + Tailwind CSS", "Express.js REST API", "MySQL Database"],
    github: "https://github.com/username/kitchen-tales",
    demo: "https://kitchen-tales.vercel.app",
  },
  Calculator: {
    title: "Calculator",
    date: "12 July 2025",
    description: "A basic calculator built with React and styled using Tailwind CSS.",
    image: "/assets/project-preview/calculator.png",
    techStack: ["React", "Tailwind CSS"],
    github: "https://github.com/username/calculator",
    demo: "https://calculator.vercel.app",
  },
  "Ecommerce-Platform": {
    title: "Ecommerce Platform",
    date: "12 July 2025",
    description:
      "An e-commerce website that allows users to browse, add to cart, and purchase items. Backend powered by Express and MySQL.",
    image: "/assets/project-preview/ecommerce.png",
    techStack: ["React", "Express.js", "MySQL"],
    github: "https://github.com/username/ecommerce",
    demo: "https://ecommerce.vercel.app",
  },
  "Real-Time Worker Safety Dashboard": {
    title: "Worker Safety Dashboard",
    date: "12 July 2025",
    description:
      "A dashboard to monitor worker health and location using sensors and ESP32. Built with React, Node.js, and WebSocket.",
    image: "/assets/project-preview/safety-dashboard.png",
    techStack: ["React", "Node.js", "WebSocket", "ESP32"],
    github: "https://github.com/username/worker-safety",
    demo: "https://safety-dashboard.vercel.app",
  },
  "Online Resume Generator": {
    title: "Online Resume Generator",
    date: "12 July 2025",
    description:
      "A web app that helps users build and download resumes. Includes templates and PDF export.",
    image: "/assets/project-preview/resume.png",
    techStack: ["React", "Express.js", "MySQL", "PDFKit"],
    github: "https://github.com/username/resume-generator",
    demo: "https://resume-generator.vercel.app",
  },
};

function Project() {
  const [selectedProject, setSelectedProject] = useState("Yasyir's-Kitchen-Tales");
  const project = projectDetails[selectedProject];

  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-4">
      {/* Sidebar */}
      <div className="w-100 h-[20rem] overflow-y-auto border border-white rounded-md">
        <Files className="size-full">
          {Object.keys(projectDetails).map((folderName) => (
      <Folder
      key={folderName}
      name={folderName}
      onClick={() => setSelectedProject(folderName)}
      className={cn(
        "text-white font-normal", // default
        folderName === selectedProject && "text-blue-500 font-semibold" // aktif
      )}
    >
    
       
              {projectDetails[folderName].techStack.map((tech, i) => (
        <File
        key={i}
        name={tech.split(" ")[0] + ".jsx"}
        className="text-white"
      />
      
              ))}
            </Folder>
          ))}
        </Files>
      </div>

      {/* Detail Panel */}
      <div>
        <div className="w-100 rounded-xl border bg-background p-4 shadow-md border-white h-[20rem] overflow-auto">
          <div className="flex flex-col gap-4">
            {/* Preview Image */}
            <img
              src={project.image}
              alt={project.title + " preview"}
              className="w-full h-32 object-cover rounded-md border border-white"
            />

            {/* Title */}
            <div>
              <div className="font-bold text-xl text-white">{project.title}</div>
              <div className="text-sm text-muted-foreground text-white">{project.date}</div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground text-blue-500">{project.description}</p>

            {/* Tech Stack */}
            <div>
              <div className="text-xs font-semibold text-white mb-1">Tech Stack:</div>
              <ul className="text-xs text-muted-foreground list-disc list-inside">
                {project.techStack.map((tech, i) => (
                  <li className="text-white" key={i}>{tech}</li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline"
              >
                GitHub Repo
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

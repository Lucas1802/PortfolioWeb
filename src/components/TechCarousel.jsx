import { techs } from "../data/techs";

import {
  SiCypress,
  SiPostman,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiGit,
  SiGithub,
  SiVite,
  SiTailwindcss,
  SiPostgresql,
  SiJira,
  SiPython,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const iconMap = {
  Cypress: <SiCypress size={42} className="text-green-400" />,
  Postman: <SiPostman size={42} className="text-orange-500" />,
  "VS Code": <VscVscode size={42} className="text-blue-500" />,
  JavaScript: <SiJavascript size={42} className="text-yellow-400" />,
  React: <SiReact size={42} className="text-cyan-400" />,
  "Node.js": <SiNodedotjs size={42} className="text-green-500" />,
  TypeScript: <SiTypescript size={42} className="text-blue-400" />,
  Git: <SiGit size={42} className="text-orange-600" />,
  GitHub: <SiGithub size={42} className="text-white" />,
  Vite: <SiVite size={42} className="text-purple-400" />,
  "Tailwind CSS": <SiTailwindcss size={42} className="text-cyan-400" />,
  PostgreSQL: <SiPostgresql size={42} className="text-blue-500" />,
  Jira: <SiJira size={42} className="text-blue-400" />,
  Python: <SiPython size={42} className="text-yellow-300" />,
};

function TechCarousel() {
  return (
    <div className="relative overflow-hidden mt-20">

      <div className="flex gap-10 animate-scroll w-max">
        {[...techs, ...techs].map((tech, index) => (
          <div
            key={index}
            className="min-w-[220px] bg-gray-900/60 
                       border border-white/10
                       rounded-2xl p-8 
                       backdrop-blur-lg
                       hover:border-blue-500
                       hover:shadow-lg hover:shadow-blue-500/20
                       transition-all duration-300
                       text-center"
          >
            <div className="flex justify-center mb-5">
              {iconMap[tech.name]}
            </div>

            <h3 className="text-lg font-semibold mb-2">
              {tech.name}
            </h3>

            <p
              className={`text-sm ${
                tech.category === "FrontEnd"
                  ? "text-yellow-400"
                  : tech.category === "BackEnd"
                  ? "text-green-400"
                  : "text-blue-400"
              }`}
            >
              {tech.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechCarousel;
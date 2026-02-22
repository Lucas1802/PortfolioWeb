import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { Github } from "lucide-react";

function Projects() {
  return (
    <section id="projects" className="relative py-24 text-white bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-black">
      
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Meus{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projetos
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-gray-900/70 
                        border border-white/10
                        rounded-2xl overflow-hidden backdrop-blur-lg
                        hover:border-blue-500
                        hover:shadow-lg hover:shadow-blue-500/20
                        transition-all duration-300"
            >
              {/* Imagens */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover 
                             group-hover:scale-105 transition duration-500"
                />
              </a>

              <div className="p-6">

                {/* Nome + Techs */}
                <h3 className="text-xl font-semibold mb-4">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full 
                                 bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Descrição */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Botao do GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 
                             w-full py-3 rounded-full 
                             bg-gradient-to-r from-pink-500 to-purple-500
                             hover:scale-105 transition font-medium"
                >
                  <Github size={18} />
                  Ver no GitHub
                </a>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-center">
        <div className="h-[2px] w-2/3 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm opacity-70" />
      </div>
    </section>
  );
}

export default Projects;
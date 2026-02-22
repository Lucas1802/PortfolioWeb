import { motion } from "framer-motion";
import TechCarousel from "./TechCarousel";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden text-white px-6 pt-32 pb-32">

      {/* Fundo gradiente separado */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-black" />

      {/* Fundo em grade */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Forma de brilho à esquerda */}
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>

      {/* Forma de brilho à direita */}
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Eu sou{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            QA Engineer
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Garantindo qualidade do primeiro commit ao deploy.
        </p>

        {/* Imagem Perfil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-52 h-52 mx-auto mt-16"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-3xl opacity-60 animate-pulse"></div>

          <img
            src="/eu.jpg"
            alt="Gabriel"
            className="relative w-full h-full object-cover rounded-full border-4 border-purple-500 shadow-2xl"
          />
        </motion.div>

        {/* Techs */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {["Cypress", "Postman", "JavaScript", "QA", "Testes"].map(
            (tech, index) => (
              <span key={index} className="px-6 py-2 text-base bg-white/5 border border-white/10 
                rounded-full backdrop-blur-sm 
                hover:border-blue-500 
                hover:shadow-md hover:shadow-blue-500/30
                transition-all duration-300"
              >
                {tech}
              </span>
            )
          )}
        </div>

        {/* Botões */}
        <div className="mt-14 flex justify-center gap-8 flex-wrap">
          <a href="#projects" className="px-10 py-4 text-lg rounded-full 
                                         border border-white/10
                                         hover:border-blue-500
                                         hover:shadow-md hover:shadow-blue-500/30
                                         hover:bg-white/5
                                         transition-all duration-300"
          >
            Meu trabalho
          </a>

          <a href="#contact" className="px-10 py-4 text-lg rounded-full 
                                        border border-white/10
                                        hover:border-blue-500
                                        hover:shadow-md hover:shadow-blue-500/30
                                        hover:bg-white/5
                                        transition-all duration-300"
          >
            Vamos conversar
          </a>
        </div>
        <TechCarousel />
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <div className="h-[2px] w-2/3 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm opacity-70" />
      </div>
    </section>
  );
}

export default Hero;

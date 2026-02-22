import Reveal from "./Reveal";

function About() {
  return (
    <section id="about" className="relative py-28 text-white px-6 bg-black">
      <div className="relative z-20"></div>
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Sobre{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Mim
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-gray-400 text-lg leading-relaxed">
            Sou QA em formação com base sólida em desenvolvimento front-end. Trabalho com automação de testes utilizando Cypress, modelagem de cenários e boas práticas como POM.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            Tenho experiência com React e foco em qualidade, organização e melhoria contínua, buscando sempre entregar software mais confiável e bem estruturado.
          </p>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-center">
        <div className="h-[2px] w-2/3 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm opacity-70"/>
      </div>
    </section>
  );
}

export default About;
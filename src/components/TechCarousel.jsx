import { techs } from "../data/techs";

function TechCarousel() {
  return (
    <div className="relative overflow-hidden mt-16">

      <div className="flex gap-8 animate-scroll whitespace-nowrap">
        {[...techs, ...techs].map((tech, index) => (
          <div
            key={index}
            className="min-w-[180px] bg-white/5 border border-white/10 
                       rounded-2xl p-6 backdrop-blur-lg 
                       text-center"
          >
            <div className="text-3xl mb-3">{tech.icon}</div>

            <h3 className="font-semibold text-lg">{tech.name}</h3>

            <p
              className={`text-sm mt-2 ${
                tech.tool === "Back-End"
                  ? "text-green-400"
                  : tech.tool === "Front-End"
                  ? "text-yellow-400"
                  : "text-blue-400"
              }`}
            >
              {tech.tool}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechCarousel;
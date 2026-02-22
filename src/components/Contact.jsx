import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-black text-white overflow-hidden">
      
      {/* Glow sutil de fundo */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600 opacity-10 blur-3xl rounded-full right-[-150px] bottom-[-150px]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Entre em{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Contato
            </span>
          </h2>

          <p className="text-gray-400 mb-10 text-lg">
            Estou aberto a oportunidades, networking e novos projetos. Vamos
            construir algo incrível juntos 🚀
          </p>
        </motion.div>

        {/* Botões de contato */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="flex flex-col md:flex-row justify-center gap-6"
        >
          {[
            {
              icon: <Mail size={20} />,
              label: "Email",
              link: "mailto:lucasgamendes@gmail.com?subject=Contato pelo Portfólio&body=Olá Lucas, vi seu portfólio e gostaria de conversar sobre...",
            },
            {
              icon: <Linkedin size={20} />,
              label: "LinkedIn",
              link: "https://www.linkedin.com/in/lucas-gabriel2002",
            },
            {
              icon: <Github size={20} />,
              label: "GitHub",
              link: "https://github.com/Lucas1802",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-center justify-center gap-3 px-8 py-4 
                         border border-white/10
                         hover:border-blue-500
                         hover:shadow-md hover:shadow-blue-500/20
                         transition-all duration-300"
            >
              {item.icon}
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;

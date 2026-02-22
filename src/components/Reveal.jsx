import { motion } from "framer-motion";

function Reveal({ children, delay = 0, direction = "up" }) {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: -40 },
    right: { x: 40 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;

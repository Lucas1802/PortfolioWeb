import { useEffect, useRef } from "react";

function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const moveGlow = (e) => {
      if (!glowRef.current) return;

      const x = e.clientX;
      const y = e.clientY;

      glowRef.current.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
    };

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full z-10"
      style={{
        background: `
          radial-gradient(
            circle,
            rgba(147,51,234,0.6) 0%,
            rgba(59,130,246,0.5) 40%,
            transparent 70%
          )
        `,
        filter: "blur(80px)",
        transition: "transform 0.05s linear"
      }}
    />
  );
}

export default MouseGlow;
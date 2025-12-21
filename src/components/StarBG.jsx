// src/components/StarBG.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function StarBG({ darkMode }) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // ❌ No stars in light mode
  if (!darkMode) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="w-full h-full"
        options={{
          fullScreen: false,
          background: {
            color: "transparent",
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 120,
              density: { enable: true, area: 900 },
            },
            color: {
              value: ["#ffffff", "#60a5fa", "#a855f7"],
            },
            shape: { type: "circle" },
            opacity: {
              value: 0.8,
              random: true,
            },
            size: {
              value: { min: 0.6, max: 2 },
            },
            move: {
              enable: true,
              speed: 0.4,
              random: true,
              outModes: { default: "out" },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

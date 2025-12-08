// src/components/StarBG.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // ✔ correct for 2.12.x

export default function StarBG({ darkMode }) {
  const particlesInit = useCallback(async (engine) => {
    console.log("tsParticles engine loaded");
    await loadSlim(engine); // ✔ no version errors
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      options={{
        fullScreen: false,
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: {
            value: 150,
            density: { enable: true, area: 900 },
          },
          color: {
            value: darkMode
              ? ["#ffffff", "#60a5fa", "#a855f7"] // galaxy in dark mode
              : ["#000000", "#6b7280"],          // subtle stars in light mode
          },
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.3,
            },
          },
          size: {
            value: { min: 0.5, max: 2 },
          },
          move: {
            enable: true,
            speed: 0.5,
            random: true,
            direction: "none",
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

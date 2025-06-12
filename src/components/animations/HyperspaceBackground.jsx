// components/reusable-components/HyperspaceBackground.jsx
import React, { useEffect, useRef } from "react";
import { Box, useTheme } from "@mui/material";

const HyperspaceBackground = () => {
  const theme = useTheme();
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particleCount = 600;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "star-particle";
      const size = Math.random() * 2 + 1;
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      const delay = Math.random() * 5;

      Object.assign(particle.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${posX}px`,
        top: `${posY}px`,
        animationDelay: `${delay}s`,
      });

      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
        "& .star-particle": {
          position: "absolute",
          background: "white",
          borderRadius: "50%",
          animation: "hyperspace 1.5s linear infinite",
          opacity: 0.6,
        },
        "@keyframes hyperspace": {
          "0%": {
            transform: "translateZ(0px) scale(0.1)",
            opacity: 0.3,
          },
          "80%": {
            transform: "translateZ(500px) scale(2.5)",
            opacity: 1,
          },
          "100%": {
            transform: "translateZ(1000px) scale(5)",
            opacity: 0,
          },
        },
      }}
    />
  );
};

export default HyperspaceBackground;

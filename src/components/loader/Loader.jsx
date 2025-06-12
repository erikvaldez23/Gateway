import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import video from "../../../public/HyperspaceJump.mp4";


export default function Loader() {
  const theme = useTheme();

  const textVariants = {
    glow: {
      textShadow: [
        "0 0 8px rgba(201, 180, 154, 0.7)",
        "0 0 18px rgba(201, 180, 154, 0.9)",
        "0 0 8px rgba(201, 180, 154, 0.7)",
      ],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: theme.zIndex.modal + 10,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 🔁 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/fallback.jpg"
        onError={() => console.error("🚫 VIDEO FAILED TO LOAD")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source
          src={video}
          type="video/mp4"
        />
      </video>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(107, 255, 193, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(107, 255, 193, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          opacity: 0.1,
          zIndex: 1,
        }}
      />

      {/* 🌟 Core Glow */}
      <Box
        component={motion.div}
        animate={{
          boxShadow: [
            "0 0 8px rgba(201, 180, 154, 0.7)",
            "0 0 18px rgba(201, 180, 154, 0.9)",
            "0 0 8px rgba(201, 180, 154, 0.7)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background:
            "linear-gradient(145deg, #c9b49a 0%, #e5ded1 50%, #fffaf2 100%)",
          zIndex: 2,
        }}
      />

      {/* 🔤 Company Text and Progress */}
      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
        }}
      >
        <Typography
          component={motion.div}
          variants={textVariants}
          animate="glow"
          variant="h3"
          sx={{
            color: "#c9b49a",
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textShadow: "0 0 10px rgba(107, 255, 193, 0.8)",
            marginBottom: "16px",
          }}
        >
          GREEN ARK
        </Typography>

        <Typography
          component={motion.div}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          variant="subtitle1"
          sx={{
            color: "#c9b49a",
            fontFamily: "'Roboto Mono', monospace",
            letterSpacing: "0.2em",
            fontSize: "0.8rem",
            opacity: 0.8,
          }}
        >
          LOADING PAGE
        </Typography>

        {/* Progress Bar */}
        <Box
          sx={{
            position: "relative",
            width: "200px",
            height: "4px",
            background: "#ccc",
            margin: "12px auto 0",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          <Box
            component={motion.div}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            sx={{
              position: "absolute",
              width: "50%",
              height: "100%",
              background:
                "linear-gradient(145deg, #c9b49a 0%, #e5ded1 50%, #fffaf2 100%)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

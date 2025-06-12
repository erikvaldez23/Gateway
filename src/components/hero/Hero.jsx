import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "/greenark-logo1.png";
import WhatWeDo from "../landing/WhatWeDo";
import SlideUpReveal from "../animations/SlideUpReveal";

export default function HeroSection({ loadingDone }) {
  const [open, setOpen] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // Show transition element after the hero animations
    if (loadingDone) {
      const timer = setTimeout(() => {
        setShowTransition(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [loadingDone]);

  const learnMoreScroll = () => {
    document.getElementById("what-we-do")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: "120px", transition: { delay: 0.3, duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.8 } },
  };

  // Add the scroll indicator animation
  const scrollIndicatorVariants = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [0, 10, 0],
      opacity: [0, 1, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
        opacity: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <Box
      sx={{
        background: "url(/Commercial-Development/sunset.mp4)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        position: "relative",
        top: 0, // Stick to top
        left: 0,
        right: 0,
        zIndex: 0,
        overflow: "visible",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.1))",
          zIndex: 1,
        }}
      />
      {/* Bottom Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "300px", // Adjust for smoother or faster fade
          background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%)",
          zIndex: 1, // Put above image but below content
          pointerEvents: "none", // Prevent interference with clicks
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, pb: 5 }}>
        <Box
          sx={{
            py: { xs: 6, md: 8 },
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {/* Blurred Glow */}
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={
              loadingDone ? { opacity: [0.4, 0.7, 0.4] } : { opacity: 0 }
            }
            transition={{
              delay: 0.5,
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            sx={{
              position: "absolute",
              top: "-5%",
              left: "50%",
              transform: "translateX(-50%)",
              width: { xs: "200px", md: "300px" },
              height: { xs: "200px", md: "300px" },
              background:
                "radial-gradient(circle, rgba(201,180,154,0.15) 0%, rgba(0,0,0,0) 70%)",
              borderRadius: "50%",
              filter: "blur(40px)",
              zIndex: -1,
            }}
          />

          {/* Center Logo */}
          <motion.img
            src={logo}
            alt="Company Logo"
            animate={{
              y: [5, -10, 5], // Moves up by 15px, then back to center
            }}
            transition={{
              duration: 2, // Slower for smooth float
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: "-10%",
              left: "45%",
              transform: "translateX(-50%)",
              width: "125px",
              height: "auto",
              zIndex: 2,
              pointerEvents: "none",
              filter: "drop-shadow(0 2px 6px rgba(0, 0, 0, 1))"
            }}
          />

          {/* Animated Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={loadingDone ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            style={{
              height: "3px",
              width: "120px",
              background:
                "linear-gradient(90deg, rgba(201,180,154,0) 0%, rgba(201,180,154,1) 50%, rgba(201,180,154,0) 100%)",
              transformOrigin: "center",
              marginTop: "1rem", // 🔥 more space above
              marginBottom: "1rem", // 🔥 more space below
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />

          {/* Animated Heading */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={loadingDone ? "visible" : "hidden"}
          >
            <Typography
              component="h1"
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "3.5rem", sm: "3.5rem", md: "7.5rem" },
                mb: 2,
                background: "linear-gradient(90deg, #ffffff 0%, #c9b49a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 30px rgba(201,180,154,0.3)",
                letterSpacing: "0.5px",
                filter: "drop-shadow(0 2px 6px rgba(0, 0, 0, 1))"
              }}
            >
              TOMORROWS SUSTAINABILITY TODAY
            </Typography>
          </motion.div>

          {/* Subheading */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={loadingDone ? "visible" : "hidden"}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.1rem", md: "2rem" },
                fontWeight: 300,
                color: "rgba(255,255,255,0.85)",
                maxWidth: "700px",
                margin: "0 auto",
                mb: 5,
                lineHeight: 1.7,
                filter: "drop-shadow(0 2px 6px rgba(0, 0, 0, 1))"
              }}
            >
              Green Ark is redefining real estate investments — blending modern
              innovation with lasting impact for a sustainable future.
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate={loadingDone ? "visible" : "hidden"}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(90deg, #c9b49a 0%, #bca486 100%)",
                  color: "#0a0f14",
                  borderRadius: "30px",
                  fontSize: { xs: "0.9rem", md: "1.5rem" },
                  fontWeight: 600,
                  py: 1.5,
                  px: 4,
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, rgba(201,180,154,0.9) 0%, rgba(188,164,134,0.9) 100%)",
                    boxShadow: "0 0 20px rgba(201,180,154,0.4)",
                  },
                  transition: "all 0.3s ease",
                }}
                onClick={handleOpen}
              >
                Start Investing
              </Button>

              <Button
                sx={{
                  border: "3px solid #c9b49a",
                  color: "#c9b49a",
                  borderRadius: "30px",
                  fontSize: { xs: "0.9rem", md: "1.5rem" },
                  fontWeight: 600,
                  py: 1.5,
                  px: 4,
                  "&:hover": {
                    borderColor: "#c9b49a",
                    background: "rgba(201,180,154,0.08)",
                    boxShadow: "0 0 15px rgba(201,180,154,0.2)",
                  },
                  transition: "all 0.3s ease",
                }}
                onClick={learnMoreScroll}
              >
                Learn More
              </Button>
            </Box>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={scrollIndicatorVariants}
            initial="initial"
            animate="animate"
            style={{
              position: "absolute",
              bottom: "5%",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: 0.7,
            }}
          >
            <Typography variant="caption" sx={{ mb: 1, fontSize: "0.9rem" }}>
              Scroll Down
            </Typography>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19M12 19L5 12M12 19L19 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </motion.div>
        </Box>
      </Container>

      {/* Dialog Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent sx={{ position: "relative", padding: 0 }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: "white",
              "&:hover": { backgroundColor: "lightgray" },
            }}
          >
            <FaTimes />
          </IconButton>

          <iframe
            src=""
            width="100%"
            height="800px"
            style={{ border: "none" }}
            title="Fast Quote"
            loading="lazy"
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}

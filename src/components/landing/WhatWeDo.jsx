import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const WhatWeDo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: false, amount: 0.3 });

  const titleY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const dividerWidth = useTransform(
    scrollYProgress,
    [0.6, 0.8],
    ["0%", "100%"]
  );
  const quoteOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const quoteY = useTransform(scrollYProgress, [0.4, 0.6], [30, 0]);

  const items = [
    {
      title: "Smart Cities",
      description: "Designed with AI, powered by purpose.",
      icon: "/Commercial-Development/icons/smart.png",
    },
    {
      title: "Mixed-Use Towers",
      description: "Modular, efficient, connected.",
      icon: "/Commercial-Development/icons/towers.png",
    },
    {
      title: "Eco Communities",
      description: "Off-grid carbon aware. Future ready.",
      icon: "/Commercial-Development/icons/communities.png",
    },
    {
      title: "Regenerative Projects",
      description: "Built to give back more than they take.",
      icon: "/Commercial-Development/icons/projects.png",
    },
  ];

  // Hover state for card animation
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box
      ref={sectionRef}
      sx={{
        background: "#000",
        // background: "-webkit-linear-gradient(to right, #000000, #434343)",
        // background: "linear-gradient(to right, #000000, #434343)",
        height: "100vh",
        py: { xs: 12, md: 16 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "url('/api/placeholder/1920/1080') center/cover no-repeat",
          opacity: 0.08,
          mixBlendMode: "overlay",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          ref={titleRef}
          style={{
            y: titleY,
            opacity: titleOpacity,
          }}
        >
          <Typography
            variant="h1"
            align="center"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              letterSpacing: 2,
              color: "#e2c799",
              mb: { xs: 8, md: 12 },
              fontWeight: 600,
              textShadow: "0 0 40px rgba(226, 199, 153, 0.3)",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -20,
                left: "50%",
                transform: "translateX(-50%)",
                width: "60px",
                height: "4px",
                background:
                  "linear-gradient(90deg, rgba(226,199,153,0) 0%, rgba(226,199,153,1) 50%, rgba(226,199,153,0) 100%)",
              },
            }}
          >
            OUR BLUEPRINT FOR THE FUTURE
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 4,
            my: { xs: 4, md: 8 },
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.215, 0.61, 0.355, 1],
                },
              }}
              viewport={{ once: false, amount: 0.3 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.02 }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  height: "100%",
                  p: 3,
                  borderRadius: 2,
                  background:
                    hoveredIndex === index
                      ? "linear-gradient(145deg, rgba(30,30,30,0.3) 0%, rgba(10,10,10,0.3) 100%)"
                      : "transparent",
                  backdropFilter: hoveredIndex === index ? "blur(8px)" : "none",
                  border: "1px solid",
                  borderColor:
                    hoveredIndex === index
                      ? "rgba(226,199,153,0.2)"
                      : "transparent",
                  transition: "all 0.4s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&::before":
                    hoveredIndex === index
                      ? {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "1px",
                          background:
                            "linear-gradient(90deg, rgba(226,199,153,0) 0%, rgba(226,199,153,0.5) 50%, rgba(226,199,153,0) 100%)",
                          animation: "shimmer 2s infinite",
                        }
                      : {},
                  "@keyframes shimmer": {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(100%)" },
                  },
                }}
              >
                <motion.div
                  animate={{
                    y: hoveredIndex === index ? [-5, 0, -5] : 0,
                    transition: {
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "reverse",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      mb: 3,
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        width: 100,
                        height: 100,
                        background:
                          "radial-gradient(circle, rgba(226,199,153,0.1) 0%, rgba(226,199,153,0) 70%)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={item.icon}
                        alt={item.title}
                        style={{
                          width: 80,
                          height: 80,
                          filter: "drop-shadow(0 0 10px rgba(226,199,153,0.3))",
                        }}
                      />
                    </Box>
                  </Box>
                </motion.div>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    fontSize: { xs: "1.25rem", md: "1.7rem" },
                    transition: "color 0.3s ease",
                    color: hoveredIndex === index ? "#e2c799" : "#fff",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#aaa",
                    maxWidth: "220px",
                    mx: "auto",
                    fontSize: { xs: "0.9rem", md: "1.5rem" },
                    opacity: 0.8,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>

        <Divider
          sx={{
            my: { xs: 5, md: 8 },
            background:
              "linear-gradient(90deg, rgba(201,180,154,0) 0%, rgba(201,180,154,1) 50%, rgba(201,180,154,0) 100%)",
            height: "2px",
            width: "100%",
            mx: "auto",
            boxShadow: "0 0 10px rgba(201,180,154,0.3)",
          }}
        />

          <Typography
            variant="h4"
            align="center"
            sx={{
              color: "#bfae90",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: { xs: "1.5rem", md: "3rem" },
              textShadow: "0 0 20px rgba(191,174,144,0.2)",
              letterSpacing: 1,
              lineHeight: 1.5,
            }}
          >
            "The best way to predict the future is to create it"
          </Typography>
      </Container>
    </Box>
  );
};

export default WhatWeDo;

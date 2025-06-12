import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, useMediaQuery, Fade } from "@mui/material";
import { motion } from "framer-motion";

// Expanded city data with descriptions and statistics
const cities = [
  {
    name: "New York",
    top: "40%",
    left: "27%",
    description:
      "Our flagship sustainable skyscraper featuring 40% reduced energy consumption",
    stat: "3.2M sq ft",
    yearCompleted: "2023",
  },
  {
    name: "Place 2",
    top: "52%",
    left: "47%",
    description:
      "Africa's first carbon-negative commercial development with integrated urban farming",
    stat: "1.8M sq ft",
    yearCompleted: "2024",
  },
  {
    name: "Place 3",
    top: "48%",
    left: "58%",
    description:
      "Desert-adapted complex with innovative water reclamation systems",
    stat: "2.5M sq ft",
    yearCompleted: "2022",
  },
  {
    name: "Place 4",
    top: "32%",
    left: "14%",
    description:
      "Timber-hybrid construction using sustainably sourced materials",
    stat: "1.5M sq ft",
    yearCompleted: "2023",
  },
  {
    name: "Place 5",
    top: "56%",
    left: "72%",
    description:
      "Vertical forest integration with 30,000 plants providing natural cooling",
    stat: "2.1M sq ft",
    yearCompleted: "2024",
  },
  {
    name: "Place 6",
    top: "28%",
    left: "47%",
    description: "Net-zero energy retail complex powered by geothermal heating",
    stat: "0.9M sq ft",
    yearCompleted: "2022",
  },
];

const ModernStewardsOfSpace = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [visible, setVisible] = useState(false);

  // Animation variants for heading text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Staggered animation for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Observer to trigger animations when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const container = document.getElementById("stewards-container");
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        background: "#000",
        py: 20,
      }}
    >
      <Box
        id="stewards-container"
        sx={{
          position: "relative",
          background: `url('/Commercial-Development/map.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "100vh", md: "100vh" },
          color: "#e2c799",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: { xs: 3, md: 10 },
          overflow: "hidden",
        }}
      >
        {/* Glowing overlay effect */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // background: "radial-gradient(circle at 50% 50%, rgba(226, 199, 153, 0.08) 0%, rgba(13, 19, 33, 0) 70%)",
            zIndex: 1,
          }}
        />

        {/* Animated connection lines */}
        <svg
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            opacity: 0.4,
          }}
        >
          {cities.map((city, i) =>
            cities.map((otherCity, j) => {
              if (i < j) {
                const x1 = city.left.replace("%", "") + "%";
                const y1 = city.top.replace("%", "") + "%";
                const x2 = otherCity.left.replace("%", "") + "%";
                const y2 = otherCity.top.replace("%", "") + "%";

                return (
                  <motion.line
                    key={`${i}-${j}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#e2c799"
                    strokeWidth="0.5"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={visible ? { pathLength: 1, opacity: 0.2 } : {}}
                    transition={{ duration: 2, delay: 0.5 + i * 0.2 }}
                  />
                );
              }
              return null;
            })
          )}
        </svg>

        {/* Main content */}
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          sx={{
            maxWidth: { xs: "100%", md: 650 },
            zIndex: 3,
            position: "relative",
          }}
        >
          <Box component={motion.div} variants={textVariants}>
            <Typography
              variant="overline"
              sx={{
                color: "#e2c799",
                letterSpacing: 3,
                fontWeight: 600,
                opacity: 0.9,
                fontSize: "0.9rem",
              }}
            >
              GLOBAL PRESENCE
            </Typography>

            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                color: "#e2c799",
                lineHeight: 1.2,
                mb: 2,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "6rem" },
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              WE'RE NOT DEVELOPERS.
              <br />
              WE'RE STEWARDS OF SPACE.
            </Typography>
          </Box>

          <Box
            component={motion.div}
            variants={textVariants}
            sx={{
              mt: 4,
              p: 3,
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderLeft: "4px solid #e2c799",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#f5f5f5",
                mt: 2,
                fontSize: { xs: "1rem", md: "1.5rem" },
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              officia nisi voluptatibus quo, ipsa, ex deleniti velit sunt at
              totam officiis doloremque harum dolorem pariatur, necessitatibus
              amet magni autem nam.
            </Typography>
          </Box>

          {selectedCity && (
            <Fade in={!!selectedCity} timeout={600}>
              <Box
                sx={{
                  mt: 4,
                  p: 3,
                  backgroundColor: "rgba(226, 199, 153, 0.15)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 2,
                  border: "1px solid rgba(226, 199, 153, 0.3)",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={600}
                  color="#e2c799"
                  sx={{ mb: 1 }}
                >
                  {selectedCity.name}
                </Typography>
                <Typography variant="body1" color="#f5f5f5" sx={{ mb: 2 }}>
                  {selectedCity.description}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box>
                    <Typography variant="caption" color="#e2c799">
                      Development Size
                    </Typography>
                    <Typography variant="body1" fontWeight={500} color="#fff">
                      {selectedCity.stat}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="#e2c799">
                      Completed
                    </Typography>
                    <Typography variant="body1" fontWeight={500} color="#fff">
                      {selectedCity.yearCompleted}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Fade>
          )}
        </Box>

        {/* City markers with animations */}
        {cities.map((city, idx) => (
          <Box
            component={motion.div}
            key={idx}
            initial={{ opacity: 0, scale: 0 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: 1 + idx * 0.15,
              type: "spring",
              stiffness: 200,
            }}
            onClick={() => setSelectedCity(city)}
            sx={{
              position: "absolute",
              top: city.top,
              left: city.left,
              transform: "translate(-50%, -50%)",
              color: "#fff",
              textAlign: "center",
              fontSize: { xs: "0.75rem", md: "0.85rem" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              zIndex: 4,
              "&:hover": {
                transform: "translate(-50%, -50%) scale(1.15)",
              },
            }}
          >
            {/* Pulsing effect */}
            <Box
              component={motion.div}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 0.3, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              sx={{
                position: "absolute",
                width: { xs: 16, md: 20 },
                height: { xs: 16, md: 20 },
                borderRadius: "50%",
                backgroundColor: "rgba(226, 199, 153, 0.3)",
                boxShadow: "0 0 10px rgba(226, 199, 153, 0.5)",
                zIndex: -1,
              }}
            />

            {/* Dot marker */}
            <Box
              sx={{
                width: { xs: 8, md: 10 },
                height: { xs: 8, md: 10 },
                borderRadius: "50%",
                backgroundColor: "#e2c799",
                boxShadow: "0 0 8px #e2c799",
                mb: 1,
              }}
            />

            {/* City name */}
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                whiteSpace: "nowrap",
                display: isMobile && idx % 2 === 0 ? "none" : "block",
              }}
            >
              {city.name}
            </Typography>
          </Box>
        ))}

        {/* Additional decorative elements */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 0.6 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          sx={{
            position: "absolute",
            bottom: { xs: "5%", md: "10%" },
            right: { xs: "5%", md: "10%" },
            zIndex: 2,
            display: { xs: "none", md: "block" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 300,
              color: "#e2c799",
              opacity: 0.6,
              fontStyle: "italic",
            }}
          >
            Transforming spaces.
            <br />
            Preserving places.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ModernStewardsOfSpace;

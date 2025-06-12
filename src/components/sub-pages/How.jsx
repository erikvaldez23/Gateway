import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  useMediaQuery,
  Paper,
  Fade,
  Chip,
  Stack,
  Divider,
  Avatar,
  IconButton,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import EuroIcon from "@mui/icons-material/Euro";
import ApartmentIcon from "@mui/icons-material/Apartment";
import InventoryIcon from "@mui/icons-material/Inventory";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SecurityIcon from "@mui/icons-material/Security";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import PublicIcon from "@mui/icons-material/Public";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Simulated Lottie component
const Lottie = ({ animationData, loop, autoplay, style }) => (
  <Box
    sx={{
      ...style,
      backgroundColor: "rgba(201, 180, 154, 0.1)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "4rem",
      border: "2px solid rgba(201, 180, 154, 0.3)",
    }}
  >
    🪙
  </Box>
);

const coinAnimation = {};
const primaryColor = "#c9b49a";

// Styled Components
const GradientText = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(45deg, #c9b49a 30%, #f4e4bc 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}));

const GlassCard = styled(Card)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(201, 180, 154, 0.1)",
  borderRadius: "20px",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(201, 180, 154, 0.3)",
    transform: "translateY(-8px)",
    boxShadow: "0 20px 40px rgba(201, 180, 154, 0.1)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(135deg, rgba(201, 180, 154, 0.1) 0%, transparent 50%)",
    opacity: 0,
    transition: "opacity 0.4s ease",
  },
  "&:hover::before": {
    opacity: 1,
  },
}));

const ModernButton = styled(Button)(({ theme, variant: buttonVariant }) => ({
  borderRadius: "50px",
  padding: "16px 32px",
  fontSize: "1.1rem",
  fontWeight: 600,
  textTransform: "none",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  ...(buttonVariant === "gradient"
    ? {
        background: "linear-gradient(45deg, #c9b49a 30%, #f4e4bc 90%)",
        color: "#000",
        "&:hover": {
          background: "linear-gradient(45deg, #b8a389 30%, #e6d4a8 90%)",
          transform: "scale(1.05)",
          boxShadow: "0 10px 30px rgba(201, 180, 154, 0.3)",
        },
      }
    : {
        border: "2px solid #c9b49a",
        color: "#c9b49a",
        "&:hover": {
          background: "rgba(201, 180, 154, 0.1)",
          transform: "scale(1.05)",
        },
      }),
}));

const StatsCard = styled(Paper)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "16px",
  padding: theme.spacing(3),
  textAlign: "center",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    border: "1px solid rgba(201, 180, 154, 0.3)",
  },
}));

const ProcessCard = styled(GlassCard)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    right: "-20px",
    width: "40px",
    height: "2px",
    background: "linear-gradient(90deg, #c9b49a, transparent)",
    transform: "translateY(-50%)",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  "&:last-child::after": {
    display: "none",
  },
}));

// Floating particles component
const FloatingParticles = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {[...Array(15)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          sx={{
            position: "absolute",
            width: "4px",
            height: "4px",
            background:
              "linear-gradient(45deg, rgba(201, 180, 154, 0.6), rgba(244, 228, 188, 0.4))",
            borderRadius: "50%",
            left: `${Math.random() * 100}%`,
          }}
          initial={{
            y: "100vh",
            opacity: 0,
          }}
          animate={{
            y: "-100px",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </Box>
  );
};

// Counter component
const CounterNumber = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function ModernizedHow() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [loaded, setLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const processSteps = [
    {
      icon: <EuroIcon sx={{ fontSize: 48, color: primaryColor }} />,
      title: "Buy ARK",
      description:
        "Purchase ARK tokens through our secure platform with multiple payment options and instant verification.",
      color: "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)",
    },
    {
      icon: <ApartmentIcon sx={{ fontSize: 48, color: primaryColor }} />,
      title: "Access Projects",
      description:
        "Unlock exclusive real estate investment opportunities and curated project portfolios worldwide.",
      color: "linear-gradient(135deg, #4fc3f7 0%, #29b6f6 100%)",
    },
    {
      icon: <InventoryIcon sx={{ fontSize: 48, color: primaryColor }} />,
      title: "Earn Rewards",
      description:
        "Stake your tokens and earn passive income through our automated reward distribution system.",
      color: "linear-gradient(135deg, #81c784 0%, #66bb6a 100%)",
    },
    {
      icon: <CheckCircleIcon sx={{ fontSize: 48, color: primaryColor }} />,
      title: "Vote & Govern",
      description:
        "Participate in governance decisions and shape the future direction of the platform and investments.",
      color: "linear-gradient(135deg, #ba68c8 0%, #ab47bc 100%)",
    },
  ];

  const stats = [
    { number: 150, suffix: "M+", label: "Total Value Locked" },
    { number: 25, suffix: "K+", label: "Active Investors" },
    { number: 98, suffix: "%", label: "Satisfaction Rate" },
    { number: 12, suffix: "+", label: "Countries Served" },
  ];

  const trustIndicators = [
    { icon: <SecurityIcon />, label: "Bank-level Security", color: "#4caf50" },
    { icon: <FlashOnIcon />, label: "Instant Access", color: "#2196f3" },
    { icon: <PublicIcon />, label: "Global Platform", color: "#9c27b0" },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#000",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <FloatingParticles />

      {/* Hero Section */}
      <Box
        component={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          height: "75vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background:
            "radial-gradient(circle at 50% 50%, rgba(201, 180, 154, 0.1) 0%, transparent 70%)",
          mt: 10
        }}
      >
        {/* Background gradients */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, #000 0%, #1a1a1a 50%, #000 100%)",
            zIndex: -1,
          }}
        />

        <Container
          maxWidth="lg"
          sx={{ flex: 1, display: "flex", alignItems: "center", py: 4 }}
        >
          <Grid container spacing={6} alignItems="center">
            {/* Left Column */}
            <Grid item xs={12} lg={6}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Chip
                  label="HOW IT WORKS"
                  sx={{
                    background:
                      "linear-gradient(45deg, rgba(201, 180, 154, 0.2), rgba(244, 228, 188, 0.2))",
                    border: "1px solid rgba(201, 180, 154, 0.3)",
                    color: primaryColor,
                    fontWeight: 600,
                    letterSpacing: 2,
                    mb: 4,
                    mt: 5,
                  }}
                />

                <Typography
                  component={motion.h1}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
                    fontWeight: 700,
                    lineHeight: 1.1,
                    mb: 3,
                  }}
                >
                  <Box component="span" sx={{ color: "white" }}>
                    THE DIGITAL TOKEN FOR REAL ESTATE
                  </Box>
                  <Box component="span" sx={{ color: "white" }}>
                    IN THE NEXT ECONOMY
                  </Box>
                </Typography>

                <Typography
                  component={motion.p}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  variant="h6"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontWeight: 300,
                    lineHeight: 1.6,
                    mb: 4,
                    maxWidth: "600px",
                  }}
                >
                  Our investment process is designed to be transparent,
                  efficient, and investor‑friendly. From the first meeting to
                  ongoing performance reporting.
                </Typography>

                <Stack
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ mb: 4 }}
                >
                  <ModernButton
                    variant="gradient"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Get Started Now
                  </ModernButton>
                  <ModernButton variant="outlined" size="large">
                    Learn More
                  </ModernButton>
                </Stack>
              </Box>
            </Grid>

            {/* Right Column - Coin Animation */}
            <Grid item xs={12} lg={6}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: -20,
                      background:
                        "conic-gradient(from 0deg, rgba(201, 180, 154, 0.3), transparent, rgba(201, 180, 154, 0.3))",
                      borderRadius: "50%",
                      filter: "blur(20px)",
                      animation: "spin 10s linear infinite",
                    },
                  }}
                >
                  {/* <Box
        component={motion.div}
        animate={{ 
          rotateY: [0, 360],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        sx={{ position: 'relative', zIndex: 1 }}
      > */}
                  <Box
                    component="img"
                    src="/Commercial-Development/coin.png" // Replace with your actual path
                    alt="Coin Image"
                    sx={{
                      width: isMobile ? "280px" : "400px",
                      height: isMobile ? "280px" : "400px",
                      objectFit: "contain",
                      filter: "drop-shadow(0 0 40px rgba(201, 180, 154, 0.4))",
                    }}
                  />
                </Box>
                {/* </Box> */}
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Stats Bar */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          sx={{
            // borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            // background: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <Container maxWidth="lg" sx={{ py: 4 }}>
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} lg={3} key={index}>
                  <StatsCard
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    elevation={0}
                  >
                    <GradientText variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                      <CounterNumber end={stat.number} suffix={stat.suffix} />
                    </GradientText>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </StatsCard>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>

      {/* Process Section */}
      <Box
        component="section"
        sx={{
          py: 10,
          position: "relative",
          background: "transparent"
          // background:
          //   "linear-gradient(180deg, rgba(26, 26, 26, 0.5) 0%, #000 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{ textAlign: "center", mb: 10 }}
          >
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 3 }}>
              <Box component="span" sx={{ color: "white" }}>
                Process
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Four simple steps to start your real estate investment journey
              with complete transparency and security
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {processSteps.map((step, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <ProcessCard
                  component={motion.div}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <CardContent
                    sx={{
                      p: 4,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Step Number */}
                    <Chip
                      label={index + 1}
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        minWidth: 32,
                        height: 32,
                        background:
                          "linear-gradient(45deg, rgba(201, 180, 154, 0.2), rgba(244, 228, 188, 0.2))",
                        border: "1px solid rgba(201, 180, 154, 0.3)",
                        color: primaryColor,
                        fontWeight: 600,
                      }}
                    />

                    {/* Icon */}
                    <Box
                      component={motion.div}
                      animate={
                        activeCard === index
                          ? { scale: 1.1, rotate: 5 }
                          : { scale: 1, rotate: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      sx={{ mb: 3, display: "flex", justifyContent: "center" }}
                    >
                      <Avatar
                        sx={{
                          width: 80,
                          height: 80,
                          background: step.color,
                          "& .MuiSvgIcon-root": { color: "white" },
                        }}
                      >
                        {React.cloneElement(step.icon, {
                          sx: { fontSize: 40, color: "white" },
                        })}
                      </Avatar>
                    </Box>

                    {/* Content */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        lineHeight: 1.6,
                        textAlign: "center",
                        flex: 1,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </CardContent>
                </ProcessCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        component="section"
        sx={{
          py: 15,
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at center, rgba(201, 180, 154, 0.1) 0%, #000 70%)",
        }}
      >
        {/* Animated background */}
        <Box
          component={motion.div}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          sx={{
            position: "absolute",
            top: "-50%",
            right: "-50%",
            width: "200%",
            height: "200%",
            background:
              "conic-gradient(from 0deg, rgba(201, 180, 154, 0.1), transparent, rgba(201, 180, 154, 0.05))",
            filter: "blur(60px)",
          }}
        />

        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{ textAlign: "center" }}
          >
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 4 }}>
              <GradientText>Ready to Transform</GradientText>
              <br />
              <Box component="span" sx={{ color: "white" }}>
                Your Investment Strategy?
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: "rgba(255, 255, 255, 0.8)", mb: 6, lineHeight: 1.6 }}
            >
              Partner with us to unlock value in real estate. Let's build
              something lasting together with cutting-edge technology and proven
              expertise.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              justifyContent="center"
              sx={{ mb: 8 }}
            >
              <ModernButton
                variant="gradient"
                size="large"
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Consultation
              </ModernButton>

              <ModernButton
                variant="outlined"
                size="large"
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Studies
              </ModernButton>
            </Stack>

            {/* Trust Indicators */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Divider
                sx={{ mb: 4, borderColor: "rgba(255, 255, 255, 0.1)" }}
              />
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={4}
                justifyContent="center"
              >
                {trustIndicators.map((indicator, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <IconButton
                      sx={{
                        color: indicator.color,
                        bgcolor: `${indicator.color}20`,
                        "&:hover": { bgcolor: `${indicator.color}30` },
                      }}
                    >
                      {indicator.icon}
                    </IconButton>
                    <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                      {indicator.label}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Add keyframes for spin animation */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Box>
  );
}

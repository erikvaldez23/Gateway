import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  Tabs,
  Tab,
  useMediaQuery,
  Chip,
  Stack,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import BuildingIcon from "@mui/icons-material/Business";
import ChartIcon from "@mui/icons-material/BarChart";
import MoneyIcon from "@mui/icons-material/AccountBalance";
import GlobeIcon from "@mui/icons-material/Public";
import PortfolioIcon from "@mui/icons-material/Description";
import TrendingIcon from "@mui/icons-material/TrendingUp";
import ShieldIcon from "@mui/icons-material/Security";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ArrowRightIcon from "@mui/icons-material/ArrowForward";
import Matter from "../subpage-components/Matter";
import Services from "../subpage-components/Services";
import Offerings from "../subpage-components/Offerings";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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

const FloatingParticles = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        height: "100vh"
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

// Custom styled components using MUI's styled API
const GoldText = styled(Typography)(({ theme }) => ({
  color: "#c9b49a",
}));

const DarkSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#0f0f0f",
  color: "white",
}));

const DarkerSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#080808",
  color: "white",
}));

const GoldButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#c9b49a",
  color: "#0f0f0f",
  "&:hover": {
    backgroundColor: "#b8a389",
  },
  padding: "12px 24px",
  borderRadius: "28px",
  fontWeight: 600,
}));

const OutlinedGoldButton = styled(Button)(({ theme }) => ({
  color: "#c9b49a",
  borderColor: "#c9b49a",
  "&:hover": {
    borderColor: "#b8a389",
    backgroundColor: "rgba(201,180,154,0.04)",
  },
  padding: "12px 24px",
  borderRadius: "28px",
  fontWeight: 600,
}));

const OfferingCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  border: "1px solid rgba(201,180,154,0.1)",
  transition: "all 0.3s ease",
  height: "100%",
  "&:hover": {
    borderColor: "rgba(201,180,154,0.3)",
    transform: "translateY(-4px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: "rgba(255,255,255,0.7)",
  "&.Mui-selected": {
    color: "#c9b49a",
  },
  minWidth: "unset",
  padding: "12px 18px",
}));

const StatsCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  border: "1px solid rgba(201,180,154,0.1)",
  padding: theme.spacing(4),
  textAlign: "center",
}));

const StyledTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#c9b49a",
  },
});

// Company color
const primaryColor = "#c9b49a";
const darkBg = "#121212";
const darkPaper = "#1E1E1E";
const darkerGray = "#333333";

export default function Offer() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSelectChange = (event) => {
    setActiveTab(event.target.value);
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box sx={{ bgcolor: "#000", color: "white" }}>
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
                  label="WHAT WE OFFER"
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
                    SHAPING THE FUTURE OF
                  </Box>
                  <br />
                  <Box component="span" sx={{ color: "white" }}>
                    COMMERCIAL REAL ESTATE
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
      </Box>
      <Matter />

      <Offerings />

      <Services />

      {/* CTA Section */}
      <Box
        sx={{
          position: "relative",
          py: 12,
          overflow: "hidden",
        }}
      >
        {/* Background gradient and blur elements */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            // background: "linear-gradient(135deg, #0f0f0f 0%, #000000 100%)",
            background: "transparent",
            zIndex: 0,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background:
                // "radial-gradient(circle, rgba(201,180,154,0.1) 0%, rgba(0,0,0,0) 70%)",
                "transparent",
              filter: "blur(100px)",
              top: "-200px",
              right: "-100px",
            }}
          />
        </Box>

        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: "center" }}>
              <GoldText variant="h3" fontWeight={700} gutterBottom>
                Ready to Transform Your Investment Strategy?
              </GoldText>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  mb: 6,
                  maxWidth: 800,
                  mx: "auto",
                }}
              >
                Partner with us to unlock value in real estate. Let's build
                something lasting together.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  justifyContent: "center",
                }}
              >
                <GoldButton>Schedule a Consultation</GoldButton>
                <OutlinedGoldButton variant="outlined">
                  View Case Studies
                </OutlinedGoldButton>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}

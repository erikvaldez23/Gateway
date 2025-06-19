import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  InputBase,
  Paper,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Language as LanguageIcon,
} from "@mui/icons-material";
import AppleAIPopup from "./Popup";
import Video from "../../assets/bg.mp4";

const Hero2 = () => {
  return (
     <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        // Remove any margins/padding that might affect viewport sizing
        margin: 0,
        padding: 0,
        // Ensure consistent behavior across devices
        boxSizing: "border-box",
        // Fix for iOS Safari viewport issues
        minHeight: "-webkit-fill-available",
        // Prevent scrolling issues on mobile
        touchAction: "manipulation",
      }}
    >
      {/* ✅ Video Background - Responsive for all screen sizes */}
      <Box
        component="iframe"
        src="https://player.vimeo.com/video/1049428980?h=d54979a596&background=1&autoplay=1&loop=1&muted=1&autopause=0&controls=0&playsinline=1"
        title="vimeo-player"
        allow="autoplay; fullscreen"
        frameBorder="0"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100vw",
          height: "100vh",
          minWidth: "100%",
          minHeight: "100%",
          zIndex: 0,
          border: "none",
          outline: "none",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          transformOrigin: "center center",
          
          // Responsive scaling for different aspect ratios
          "@media (max-aspect-ratio: 16/9)": {
            width: "auto",
            height: "100vh",
            minWidth: "177.78vh", // 16:9 aspect ratio * 100vh
          },
          "@media (min-aspect-ratio: 16/9)": {
            width: "100vw",
            height: "auto",
            minHeight: "56.25vw", // 9:16 aspect ratio * 100vw
          },
          
          // Mobile-specific optimizations
          "@media (max-width: 768px)": {
            width: "100vw",
            height: "100vh",
            minWidth: "100vw",
            minHeight: "100vh",
            // Ensure video covers full mobile viewport
            transform: "translate(-50%, -50%) scale(1.02)",
          },
          
          // Ultra-wide screen support
          "@media (min-aspect-ratio: 21/9)": {
            width: "100vw",
            height: "auto",
            minHeight: "42.86vw", // 9:21 aspect ratio * 100vw
          },
          
          // Portrait orientation support
          "@media (orientation: portrait)": {
            width: "auto",
            height: "100vh",
            minWidth: "177.78vh",
          },
          
          // Landscape orientation support
          "@media (orientation: landscape)": {
            width: "100vw",
            height: "auto",
            minHeight: "56.25vw",
          },
        }}
      />

      {/* ✅ Overlay (gradient filter over video) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)",
          zIndex: 1,
        }}
      />
      
      {/* Content */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            maxWidth: "800px",
            pl: { xs: 0, md: 4 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", md: "5rem", lg: "6rem" },
              fontWeight: 300,
              color: "white",
              lineHeight: 1.1,
              mb: 4,
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Reflect the present,
            <br />
            <Box component="span" sx={{ fontStyle: "italic", opacity: 0.9 }}>
              imagine the future
            </Box>
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                background: "rgba(255, 255, 255, 0.08)",
                color: "white",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                textTransform: "none",
                borderRadius: 3,
                border: "1px solid rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  transform: "translateY(-1px)",
                },
                "&:active": {
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                  transform: "translateY(0)",
                },
              }}
            >
              CONNECT WITH US
            </Button>

            <Button
              variant="contained"
              sx={{
                background: "rgba(255, 255, 255, 0.08)",
                color: "white",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                textTransform: "none",
                borderRadius: 3,
                border: "1px solid rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  transform: "translateY(-1px)",
                },
                "&:active": {
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                  transform: "translateY(0)",
                },
              }}
            >
              ASK A QUESTION
            </Button>
          </Box>
        </Box>
      </Container>
      <AppleAIPopup />
    </Box>
  );
};

export default Hero2;
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
import { useNavigate } from "react-router-dom";

const Hero2 = () => {
const navigate = useNavigate()

    const handleAskQuestion = () => {
    navigate('/chat'); // Navigate to /chat route
  };
  return (
    <Box
      sx={{
        background: "url(/Gateway/temp-bg.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        // Enhanced mobile viewport handling
        minHeight: "100vh",
        "@supports (-webkit-touch-callout: none)": {
          // iOS Safari specific
          minHeight: "-webkit-fill-available",
        },
        // Prevent zoom on input focus (though no inputs here, good practice)
        touchAction: "manipulation",
        // Prevent overscroll bounce on iOS
        overscrollBehavior: "none",
        // Ensure proper rendering on mobile
        WebkitOverflowScrolling: "touch",
      }}
    >
      {/* Video Background - keeping your existing video setup */}
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
          zIndex: 0,
          border: "none",
          outline: "none",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          transformOrigin: "center center",
          width: "102vw",
          height: "102vh",
          "@media (min-aspect-ratio: 16/9)": {
            width: "102vw",
            height: "calc(102vw * 9 / 16)",
            minHeight: "102vh",
          },
          "@media (max-aspect-ratio: 16/9)": {
            width: "calc(102vh * 16 / 9)",
            height: "102vh",
            minWidth: "102vw",
          },
          "@media (max-width: 768px)": {
            "@media (orientation: portrait)": {
              width: "calc(105vh * 16 / 9)",
              height: "105vh",
              minWidth: "105vw",
            },
            "@media (orientation: landscape)": {
              width: "105vw",
              height: "calc(105vw * 9 / 16)",
              minHeight: "105vh",
            },
          },
          "@media (min-aspect-ratio: 21/9)": {
            width: "102vw",
            height: "calc(102vw * 9 / 16)",
            minHeight: "102vh",
          },
          "@media (max-aspect-ratio: 9/16)": {
            width: "calc(105vh * 16 / 9)",
            height: "105vh",
            minWidth: "105vw",
          },
        }}
      />

      {/* Mobile Layout - Centered Text and Buttons */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none" }, // Only show on mobile
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          flexDirection: "column",
          alignItems: "left",
          textAlign: "left",
          width: "calc(100vw - 32px)",
          maxWidth: "400px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "2.2rem",
            fontWeight: 300,
            color: "white",
            lineHeight: 1.2,
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            mb: 3,
          }}
        >
          Connecting people to god
          {/* <br />
          <Box component="span" sx={{ opacity: 0.9 }}>
            to god
          </Box> */}
        </Typography>

     <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
    alignItems: "flex-start", // Aligns children to the left
    width: "auto",             // Prevents full-width expansion
  }}
>
          <Button
            variant="contained"
            sx={{
              background: "rgba(255, 255, 255, 0.08)",
              color: "white",
              px: 4,
              py: 1.5,
              fontSize: "0.9rem",
              textTransform: "none",
              borderRadius: 3,
              border: "1px solid rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
              minHeight: "44px",
              minWidth: "200px",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.15)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                transform: "translateY(-1px)",
              },
              "&:active": {
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                transform: "translateY(0)",
              },
              "@media (hover: none)": {
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.08)",
                  transform: "none",
                },
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
              fontSize: "0.9rem",
              textTransform: "none",
              borderRadius: 3,
              border: "1px solid rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
              minHeight: "44px",
              minWidth: "200px",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.15)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                transform: "translateY(-1px)",
              },
              "&:active": {
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                transform: "translateY(0)",
              },
              "@media (hover: none)": {
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.08)",
                  transform: "none",
                },
              },
            }}
              onClick={handleAskQuestion}

          >
            ASK A QUESTION
          </Button>
        </Box>
      </Box>

      {/* Desktop/Tablet Layout - Corner Positioning */}
      {/* Text - Bottom Left Corner */}
      <Box
        sx={{
          display: { xs: "none", sm: "block" }, // Hide on mobile
          position: "absolute",
          bottom: { sm: 24, md: 40 },
          left: { sm: 24, md: 40 },
          zIndex: 2,
          maxWidth: { sm: "60vw", md: "50vw" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { 
              sm: "2.5rem", 
              md: "4rem", 
              lg: "5rem" 
            },
            fontWeight: 300,
            color: "white",
            lineHeight: 1.1,
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
          }}
        >
          CONNECTING PEOPLE TO GOD
          {/* <br />
          <Box component="span" sx={{ opacity: 0.9 }}>
            to god
          </Box> */}
        </Typography>
      </Box>

      {/* Buttons - Bottom Right Corner */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" }, // Hide on mobile
          position: "absolute",
          bottom: { sm: 24, md: 40 },
          right: { sm: 24, md: 40 },
          zIndex: 2,
          gap: 2,
          flexDirection: "row",
          alignItems: "flex-end",
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
              whiteSpace: "nowrap",
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
              whiteSpace: "nowrap",
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
            onClick={handleAskQuestion}
          > 
            ASK A QUESTION
          </Button>
        </Box>
      
      <AppleAIPopup />
    </Box>
  );
};

export default Hero2;
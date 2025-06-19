import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  Fade,
  Backdrop,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Close, AutoAwesome, Chat } from "@mui/icons-material";


const AppleAIPopup = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {
    // Show popup on first load
    const hasSeenPopup = sessionStorage.getItem("hasSeenAIPopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("hasSeenAIPopup", "true");
  };

  const handleAskQuestion = () => {
    // Add your AI platform navigation logic here
    console.log("Navigate to AI platform");
    handleClose();
  };

  const handleMaybeLater = () => {
    handleClose();
  };

  return (
    <>
      {/* AI Popup Modal */}
      <Dialog
        open={open}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleClose();
          }
        }}
        maxWidth="sm"
        fullWidth
        TransitionComponent={Fade}
        BackdropComponent={Backdrop}
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(8px)",
          },
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            borderRadius: "20px",
            background: "rgba(255, 255, 255, 0.2)", // less opacity
            backdropFilter: "saturate(180%) blur(20px)", // saturation adds vibrancy
            WebkitBackdropFilter: "saturate(180%) blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.3)", // slightly bolder edge
            boxShadow: "0 16px 40px rgba(0, 0, 0, 0.15)",
            overflow: "visible",
          },
        }}
      >
        <DialogContent sx={{ p: 0, position: "relative" }}>
          {/* Close button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              zIndex: 9999,
              color: "#fff",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              width: 32,
              height: 32,
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Close fontSize="small" />
          </IconButton>

          {/* Content */}
          <Box
            sx={{
              p: "40px 32px 32px 32px",
              textAlign: "center",
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                mb: 3,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "20px",
                  background:
                    "#1f3b70",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 32px rgba(0, 122, 255, 0.3)",
                }}
              >
                <AutoAwesome
                  sx={{
                    fontSize: 36,
                    color: "#fff",
                  }}
                />
              </Box>
            </Box>

            {/* Headline */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                fontSize: isMobile ? '2rem' : '4rem',
                lineHeight: 1.2,
                color: "#fff",
                mb: 2,
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              Meet Your AI Assistant
            </Typography>

            {/* Subheadline */}
            <Typography
              variant="body1"
              sx={{
                fontSize: isMobile ? "1.2rem" : "1.8rem",
                lineHeight: 1.47,
                color: "#fff",
                mb: 4,
                fontWeight: 400,
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              Get instant answers, creative ideas, and personalized help. Our AI
              is here to make your experience smarter and more intuitive.
            </Typography>

            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                onClick={handleAskQuestion}
                startIcon={<Chat />}
                sx={{
                  backgroundColor: "#1f3b70",
                  color: "white",
                  borderRadius: "12px",
                  textTransform: "none",
                  fontSize: isMobile ? "15px" : "20px",
                  fontWeight: 600,
                  padding: "14px 24px",
                  boxShadow: "0 4px 16px #1f3b70",
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  "&:hover": {
                    backgroundColor: "#0056CC",
                    boxShadow: "0 6px 20px rgba(0, 122, 255, 0.4)",
                  },
                }}
              >
                Ask Your First Question
              </Button>

              <Button
                variant="text"
                onClick={handleMaybeLater}
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontSize: isMobile ? "15px" : "20px",
                  fontWeight: 400,
                  padding: "8px 16px",
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                Maybe Later
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AppleAIPopup;

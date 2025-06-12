import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Topbar from "./key-components/Topbar";
import Contact from "./key-components/Contact";
import Footer from "./key-components/Footer";
import CallToAction from "./key-components/CallToAction";
import QuickLinks from "./key-components/QuickLinks";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "transparent",
      }}
    >
      {/* <Topbar notFound={true} /> */}

      {/* Main 404 Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          backgroundColor: "#b6c0c2",
          padding: { xs: 4, md: 8 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          {/* Text Section */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#FF6F61", fontWeight: "bold", mb: 1 }}
            >
              404
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
              Oops! I may have chewed up the power cord.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "#555" }}>
              Go back to our main page to continue your visit.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                fontWeight: "bold",
                borderRadius: "25px",
                px: 4,
                py: 1.5,
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
              href="/"
            >
              Back to main page
            </Button>
          </Box>

          {/* Image Section */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src="/Commercial-Development/dog.jpeg"
              alt="Funny Dog"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>


      <Box>
        <CallToAction />
      </Box>
      {/* Contact Section */}
      <Box sx={{width: "100vw" }}>
        <Contact />
      </Box>

      <QuickLinks />
    </Box>
  );
};

export default NotFound;

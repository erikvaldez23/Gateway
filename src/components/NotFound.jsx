import React from "react";
import { Box, Typography, Button } from "@mui/material";

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
              Page not found!
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
        </Box>
      </Box>
    </Box>
  );
};

export default NotFound;

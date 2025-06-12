import React from "react";
import { Box } from "@mui/material";

export default function HowVideo() {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
        }}
      >
        <source src="/Commercial-Development/how-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
}

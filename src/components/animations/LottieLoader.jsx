import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Box } from "@mui/material"; // Optional, if using MUI for styling

import animationData from "../../assets/coin-animation.json";

const LottieLoader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "200px", width: "200px" }}
      />
    </Box>
  );
};

export default LottieLoader;

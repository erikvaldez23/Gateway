import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Typography, Button } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const GoldText = styled(Typography)(({ theme }) => ({
  color: "#c9b49a",
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

const CTA = () => {
  return (
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
  );
};

export default CTA;

import React from "react";
import { Box, Typography, Container, Grid, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const GoldText = styled(Typography)(({ theme }) => ({
  color: "#c9b49a",
}));

const DarkerSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#000",
  color: "white",
}));

const StatsCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  border: "1px solid rgba(201,180,154,0.1)",
  padding: theme.spacing(4),
  textAlign: "center",
}));

const Matter = () => {

  return (
    <DarkerSection sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <GoldText variant="h3" fontWeight={700} gutterBottom>
              Why Our Services Matter
            </GoldText>
            <Typography
              variant="h6"
              sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 800, mx: "auto" }}
            >
              In today's volatile markets, finding stable, high-return
              investments can be challenging. Our real estate strategies offer
              tangible value, long-term appreciation, and diversification across
              global markets—meeting the growing demand for trusted investment
              solutions.
            </Typography>
          </Box>
        </motion.div>

        {/* Stats Cards */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <StatsCard>
                <GoldText variant="h3" fontWeight={700}>
                  $
                </GoldText>
                <Typography
                  variant="body1"
                  sx={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Category 2
                </Typography>
              </StatsCard>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <StatsCard>
                <GoldText variant="h3" fontWeight={700}>
                  %
                </GoldText>
                <Typography
                  variant="body1"
                  sx={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Category 2
                </Typography>
              </StatsCard>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <StatsCard>
                <GoldText variant="h3" fontWeight={700}>
                  #
                </GoldText>
                <Typography
                  variant="body1"
                  sx={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Category 3
                </Typography>
              </StatsCard>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </DarkerSection>
  );
};

export default Matter;

import React from "react";
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

const offerings = [
  {
    title: "Institutional Real Estate Investment",
    description:
      "We structure and manage high-performance real estate portfolios across residential, industrial, commercial, and mixed-use properties.",
    icon: <BuildingIcon fontSize="large" />,
  },
  {
    title: "Research-Driven Strategy",
    description:
      "Our investment approach is grounded in deep economic analysis and global trends, enabling proactive and informed decision-making.",
    icon: <ChartIcon fontSize="large" />,
  },
  {
    title: "Discretionary Capital Deployment",
    description:
      "Access to significant capital allows us to swiftly pursue large-scale, high-value opportunities with confidence.",
    icon: <MoneyIcon fontSize="large" />,
  },
  {
    title: "Global Reach, Local Expertise",
    description:
      "With offices in key cities, we combine global insights with local market knowledge to identify unique investment opportunities.",
    icon: <GlobeIcon fontSize="large" />,
  },
  {
    title: "Customized Portfolio Management",
    description:
      "Tailored solutions for sovereign funds, pensions, and private investors that match goals, risk tolerance, and liquidity preferences.",
    icon: <PortfolioIcon fontSize="large" />,
  },
  {
    title: "Development & Value-Add Strategies",
    description:
      "From ground-up development to repositioning, we enhance asset value and maximize returns.",
    icon: <TrendingIcon fontSize="large" />,
  },
  {
    title: "Risk Management & Governance",
    description:
      "We apply rigorous oversight and ESG principles to mitigate risks and promote long-term sustainability.",
    icon: <ShieldIcon fontSize="large" />,
  },
  {
    title: "Client Alignment",
    description:
      "With a performance-based structure and co-investment approach, your success is our success.",
    icon: <HandshakeIcon fontSize="large" />,
  },
];

const GoldText = styled(Typography)(({ theme }) => ({
  color: "#c9b49a",
}));

const DarkerSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#000",
  color: "white",
}));

const OfferingCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  border: "1px solid rgba(201,180,154,0.1)",
  transition: "all 0.3s ease",
  height: "250px",
  "&:hover": {
    borderColor: "rgba(201,180,154,0.3)",
    transform: "translateY(-4px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  },
}));

const Services = () => {
  return (
    <DarkerSection sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GoldText variant="h3" fontWeight={700} gutterBottom>
              Our Full Suite of Services
            </GoldText>
            <Typography
              variant="body1"
              sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 700, mx: "auto" }}
            >
              Explore our comprehensive range of investment solutions
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3}>
          {offerings.map((offering, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <OfferingCard>
                  <CardContent>
                    <Box sx={{ color: "#c9b49a", mb: 2 }}>{offering.icon}</Box>
                    <GoldText variant="h6" fontWeight={600} gutterBottom>
                      {offering.title}
                    </GoldText>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {offering.description}
                    </Typography>
                  </CardContent>
                </OfferingCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </DarkerSection>
  );
};

export default Services;

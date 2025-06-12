import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Tabs,
  Tab,
  useMediaQuery,
  MenuItem,
  Select,
  FormControl,
  Paper,
  Fade,
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
import ArrowRightIcon from "@mui/icons-material/ArrowForward";

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

const DarkSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#000",
  color: "white",
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: "rgba(255,255,255,0.7)",
  "&.Mui-selected": {
    color: "#c9b49a",
  },
  minWidth: "unset",
  padding: "12px 18px",
}));

const StyledTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#c9b49a",
  },
});

const Offerings = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSelectChange = (event) => {
    setActiveTab(event.target.value);
  };

  return (
    <DarkSection sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GoldText variant="h3" fontWeight={700} gutterBottom>
              Our Offerings
            </GoldText>
            <Typography
              variant="body1"
              sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 700, mx: "auto" }}
            >
              Comprehensive solutions designed for institutional investors
              seeking superior returns
            </Typography>
          </motion.div>
        </Box>

        {/* Tabs or Select based on screen size */}
        <Box sx={{ width: "100%", mb: 4 }}>
          {isMobile ? (
            <FormControl
              fullWidth
              variant="outlined"
              sx={{
                mb: 4,
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": {
                    borderColor: "rgba(201,180,154,0.3)",
                  },
                  "&:hover fieldset": {
                    borderColor: "#c9b49a",
                  },
                },
              }}
            >
              <Select
                value={activeTab}
                onChange={handleSelectChange}
                sx={{
                  bgcolor: "rgba(255,255,255,0.03)",
                  "& .MuiSelect-icon": { color: "#c9b49a" },
                }}
              >
                {offerings.map((offering, index) => (
                  <MenuItem key={index} value={index}>
                    {offering.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "rgba(255,255,255,0.1)",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <StyledTabs
                value={activeTab}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="offering tabs"
              >
                {offerings.map((offering, index) => (
                  <StyledTab key={index} label={offering.title} />
                ))}
              </StyledTabs>
            </Box>
          )}
        </Box>

        {/* Active tab content */}
        <Fade in={true} timeout={600}>
          <Paper
            sx={{
              bgcolor: "rgba(255,255,255,0.03)",
              borderRadius: 4,
              border: "1px solid rgba(201,180,154,0.2)",
              p: 4,
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    bgcolor: "rgba(201,180,154,0.1)",
                    color: "#c9b49a",
                    mx: "auto",
                  }}
                >
                  {offerings[activeTab].icon}
                </Box>
              </Grid>
              <Grid item xs={12} md={9}>
                <GoldText variant="h4" fontWeight={600} gutterBottom>
                  {offerings[activeTab].title}
                </GoldText>
                <Typography
                  variant="body1"
                  sx={{ color: "rgba(255,255,255,0.8)", mb: 3 }}
                >
                  {offerings[activeTab].description}
                </Typography>
                <Button
                  endIcon={<ArrowRightIcon />}
                  sx={{
                    color: "#c9b49a",
                    "&:hover": {
                      bgcolor: "transparent",
                      "& .MuiSvgIcon-root": { transform: "translateX(4px)" },
                    },
                    "& .MuiSvgIcon-root": { transition: "transform 0.3s" },
                  }}
                >
                  Learn more
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </Container>
    </DarkSection>
  );
};

export default Offerings;

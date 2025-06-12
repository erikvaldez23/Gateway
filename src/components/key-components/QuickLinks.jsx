import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Link,
  useMediaQuery,
  useTheme,
  Container,
  Divider,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

// Updated content for a financial real estate investment company
const quickLinksData = [
  {
    title: "Investment Opportunities",
    links: [
      {
        text: "Commercial Real Estate Funds",
        to: "/investments/commercial-real-estate",
      },
      {
        text: "Multifamily Property Portfolios",
        to: "/investments/multifamily-properties",
      },
      {
        text: "Real Estate Development Projects",
        to: "/investments/development-projects",
      },
      { text: "Retail & Office Investments", to: "/investments/retail-office" },
      {
        text: "Industrial Property Funds",
        to: "/investments/industrial-properties",
      },
      {
        text: "Hospitality & Resort Ventures",
        to: "/investments/hospitality-resorts",
      },
      {
        text: "Mixed-Use Development Opportunities",
        to: "/investments/mixed-use",
      },
      {
        text: "International Real Estate Markets",
        to: "/investments/international",
      },
    ],
  },
  {
    title: "Investor Resources",
    links: [
      { text: "Investment Strategy Guides", to: "/resources/strategy-guides" },
      { text: "Market Research & Analysis", to: "/resources/market-research" },
      { text: "Due Diligence Toolkit", to: "/resources/due-diligence" },
      { text: "ROI Calculator", to: "/tools/roi-calculator" },
      { text: "Cash Flow Projections", to: "/tools/cash-flow-projections" },
      { text: "Tax Benefits Analysis", to: "/tools/tax-benefits" },
      {
        text: "Portfolio Diversification Planner",
        to: "/tools/portfolio-planner",
      },
      { text: "Investment Property Locator", to: "/tools/property-locator" },
    ],
  },
  {
    title: "For Investors",
    links: [
      { text: "Current Investor Login", to: "/investor-portal" },
      { text: "Performance Reports", to: "/reports/performance" },
      { text: "Quarterly Investor Updates", to: "/reports/quarterly-updates" },
      { text: "Investment Webinars", to: "/events/webinars" },
      { text: "Financial Education Center", to: "/education" },
      { text: "Schedule a Consultation", to: "/consultation" },
      { text: "Investment FAQ", to: "/resources/faq" },
      { text: "Contact Investor Relations", to: "/contact/investor-relations" },
    ],
  },
];

const QuickLinks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="quick-links"
      sx={{
        width: "100%",
        background: "transparent",
        color: "#fff",
        py: { xs: 6, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: "center" }}>
          <Typography
            variant= {isMobile ? "h3" : "h2"}
            component={motion.h2}
            fontWeight={700}
            mb={2}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            sx={{
              background: "linear-gradient(to right, #c9b49a, #e2c799)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              letterSpacing: "-0.5px"
            }}
          >
            Investment Resources & Opportunities
          </Typography>

              <Divider
                 sx={{
                   mx: "auto",
                   borderColor: "#c9b49a",
                   borderWidth: 2,
                   opacity: 0.8,
                   width: "80px",
                   my: 3,
                 }}
               />

          <Typography
            variant="h6"
            component={motion.p}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            sx={{
              color: "rgba(255,255,255,0.8)",
              maxWidth: 800, mx: "auto", fontWeight: 400, lineHeight: 1.6,
            }}
          >
            Access our comprehensive collection of investment tools,
            opportunities, and educational resources
          </Typography>
     
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {quickLinksData.map((column, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "20px",
                    background: "rgba(255, 255, 255, 0.04)",
                    backdropFilter: "blur(20px) saturate(180%)", // ← Blur + Saturation boost for "glass" look
                    WebkitBackdropFilter: "blur(20px) saturate(180%)", // ← Safari support
                    boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.37)`, // ← A little stronger shadow
                    border: `1px solid rgba(255, 255, 255, 0.18)`, // ← Faint border
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                      transform: "translateY(-5px)",
                      background: "rgba(255, 255, 255, 0.03)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "#c9b49a",
                      pb: 2,
                      mb: 3,
                      position: "relative",
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "40px",
                        height: "2px",
                        background:
                          "linear-gradient(to right, #c9b49a, rgba(201, 180, 154, 0.3))",
                      },
                    }}
                  >
                    {column.title}
                  </Typography>

                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
                  >
                    {column.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        component={RouterLink}
                        to={link.to}
                        underline="none"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          fontSize: { xs: "0.95rem", md: "1rem" },
                          color: "rgba(255, 255, 255, 0.75)",
                          transition: "all 0.25s ease",
                          pl: 0.5,
                          borderLeft: "2px solid transparent",
                          "&:hover": {
                            color: "#fff",
                            borderLeft: "2px solid #c9b49a",
                            pl: 1.5,
                            "& .arrow-icon": {
                              opacity: 1,
                              transform: "translateX(0)",
                            },
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {link.text}
                          </Typography>
                          <ArrowForwardIosIcon
                            className="arrow-icon"
                            sx={{
                              fontSize: 14,
                              opacity: 0,
                              transform: "translateX(-10px)",
                              transition: "all 0.25s ease",
                              color: "#c9b49a",
                            }}
                          />
                        </Box>
                      </Link>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          sx={{
            mt: 6,
            textAlign: "center",
            p: 3,
            borderRadius: 1,
            background: "rgba(201, 180, 154, 0.05)",
            border: "1px solid rgba(201, 180, 154, 0.15)",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            Need specialized investment guidance?{" "}
            <Link
              component={RouterLink}
              to="/contact"
              sx={{ color: "#c9b49a", fontWeight: 600 }}
            >
              Contact our financial advisors
            </Link>{" "}
            for personalized portfolio recommendations.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default QuickLinks;

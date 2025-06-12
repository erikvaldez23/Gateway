import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  Typography,
  Switch,
  IconButton,
  Avatar,
  Badge,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AirIcon from "@mui/icons-material/Air";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
} from "recharts";
import "react-circular-progressbar/dist/styles.css";
import Sidebar from "./Sidebar";
import "./Dashboard.css";

// Sample data for charts
const energyData = [
  { time: "00:00", solar: 0, usage: 0.8 },
  { time: "03:00", solar: 0, usage: 0.5 },
  { time: "06:00", solar: 0.2, usage: 0.6 },
  { time: "09:00", solar: 0.9, usage: 1.1 },
  { time: "12:00", solar: 1.5, usage: 1.3 },
  { time: "15:00", solar: 1.2, usage: 1.4 },
  { time: "18:00", solar: 0.6, usage: 1.5 },
  { time: "21:00", solar: 0, usage: 1.1 },
];

const temperatureData = [
  { time: "00:00", temp: 68 },
  { time: "03:00", temp: 65 },
  { time: "06:00", temp: 67 },
  { time: "09:00", temp: 69 },
  { time: "12:00", temp: 72 },
  { time: "15:00", temp: 74 },
  { time: "18:00", temp: 71 },
  { time: "21:00", temp: 70 },
];

const StatusIndicator = ({ status }) => {
  const getColor = () => {
    switch (status) {
      case "good":
        return "#00FF88"; // Bright green accent
      case "warning":
        return "#FFD700"; // Gold warning
      case "error":
        return "#FF4757"; // Bright red
      default:
        return "#00FF88";
    }
  };

  return (
    <Box
      component={motion.div}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
      sx={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: getColor(),
        boxShadow: `0 0 15px ${getColor()}`,
      }}
    />
  );
};

const AnimatedCard = ({ children, delay = 0, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    style={{ height: "100%", display: "flex" }}
    className={className}
  >
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "rgba(15, 15, 15, 0.95)", // Deep black with slight transparency
        backdropFilter: "blur(15px)",
        p: 2.5,
        borderRadius: 4,
        color: "#FFFFFF",
        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        }
      }}
    >
      {children}
    </Box>
  </motion.div>
);

const ModernDashboard = () => {
  const [darkMode, setDarkMode] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  // Black-centered color scheme
  const bgGradient = "radial-gradient(ellipse at top, #0a0a0a 0%, #000000 100%)";
  const textColor = "#FFFFFF";
  const subTextColor = "rgba(255,255,255,0.7)";
  const borderColor = "rgba(255, 255, 255, 0.15)";
  const accentColor = "#00FF88"; // Bright green accent
  const secondaryAccent = "#7C3AED"; // Purple accent

  return (
    <Box sx={{ background: bgGradient, height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          width: "90%",
          mx: "auto",
          marginRight: "10px",
        }}
      >
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Sidebar />
        </Box>
        <Box
          sx={{
            width: "100%",
            background: bgGradient,
            minHeight: "100vh",
            overflow: "auto",
            flexGrow: 1,
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 3, sm: 4, md: 10 },
            ml: { xs: 0, md: 8 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}></Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}></Box>
          </Box>

          {/* Grid layout */}
          <Box className="parent">
            <AnimatedCard delay={0.1} className="div1">
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
                  color: "#c9b49a",
                }}
              >
                Project 1
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: subTextColor, fontWeight: 500 }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                rem illum ab assumenda.
              </Typography>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="div2">
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: textColor }}
              >
                Carbon Output
              </Typography>
              <Tooltip title="Better than industry average">
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <StatusIndicator status="good" />
                  <Typography variant="body2" sx={{ color: accentColor }}>
                    -15%
                  </Typography>
                </Box>
              </Tooltip>

              <Box
                sx={{
                  width: { xs: "60%", sm: "70%", md: "50%" },
                  mx: "auto",
                  mt: 2,
                  mb: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexGrow: 1,
                  justifyContent: "center",
                }}
              >
                <CircularProgressbar
                  value={85}
                  text={"85%"}
                  styles={buildStyles({
                    textColor: textColor,
                    pathColor: accentColor,
                    trailColor: "rgba(255, 255, 255, 0.1)",
                    textSize: "16px",
                  })}
                />
                <Typography
                  variant="body2"
                  sx={{ mt: 2, color: subTextColor, textAlign: "center" }}
                >
                  Reduced carbon emissions
                </Typography>
              </Box>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="div3">
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src="/Commercial-Development/city2.jpg"
                  alt="Dashboard Visual"
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: 5,
                    filter: "brightness(0.8) contrast(1.2)", // Darker, more contrast for black theme
                  }}
                  onError={(e) => {
                    e.target.src = "/api/placeholder/800/400";
                    e.target.alt = "City Placeholder";
                  }}
                />
              </Box>
            </AnimatedCard>

            <AnimatedCard delay={0.4} className="div4">
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: textColor }}
              >
                Temperature
              </Typography>
              <Box sx={{ display: "flex" }}>
                <ThermostatIcon sx={{ color: "#FF6B35", mr: 1 }} />
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, color: textColor }}
                >
                  72°F
                </Typography>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <ResponsiveContainer width="100%" height={130}>
                  <AreaChart
                    data={temperatureData}
                    margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="tempGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#FF6B35"
                          stopOpacity={0.6}
                        />
                        <stop
                          offset="95%"
                          stopColor="#FF6B35"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="time"
                      tick={{ fill: subTextColor, fontSize: 10 }}
                      axisLine={{ stroke: borderColor }}
                      tickLine={false}
                      interval={isMobile ? 2 : 1}
                    />
                    <Area
                      type="monotone"
                      dataKey="temp"
                      stroke="#FF6B35"
                      fill="url(#tempGradient)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <Typography
                  variant="body2"
                  sx={{ mt: 1, color: subTextColor, textAlign: "center" }}
                >
                  Temperature over last 24 hours
                </Typography>
              </Box>
            </AnimatedCard>

            <AnimatedCard delay={0.5} className="div5">
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: { xs: "flex-start", sm: "center" },
                  gap: { xs: 1, sm: 0 },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: textColor }}
                >
                  Energy Distribution
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <EnergySavingsLeafIcon sx={{ color: accentColor }} />
                  <Typography variant="body2" sx={{ color: accentColor }}>
                    60% from renewable sources
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ flexGrow: 1, minHeight: "180px" }}>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart
                    data={energyData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="solarGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor={accentColor}
                          stopOpacity={0.6}
                        />
                        <stop
                          offset="95%"
                          stopColor={accentColor}
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient
                        id="usageGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor={secondaryAccent}
                          stopOpacity={0.6}
                        />
                        <stop
                          offset="95%"
                          stopColor={secondaryAccent}
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="time"
                      tick={{ fill: subTextColor, fontSize: 10 }}
                      axisLine={{ stroke: borderColor }}
                      tickLine={false}
                      interval={isMobile ? 2 : 1}
                    />
                    <YAxis
                      tick={{ fill: subTextColor, fontSize: 10 }}
                      axisLine={{ stroke: borderColor }}
                      tickLine={false}
                      tickFormatter={(value) => `${value}`}
                      width={30}
                    />
                    <RechartsTooltip
                      contentStyle={{
                        backgroundColor: "rgba(15,15,15,0.95)",
                        border: `1px solid ${borderColor}`,
                        borderRadius: "8px",
                        color: textColor,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="solar"
                      stackId="1"
                      stroke={accentColor}
                      fillOpacity={1}
                      fill="url(#solarGradient)"
                      strokeWidth={2}
                      name="Solar Production"
                    />
                    <Area
                      type="monotone"
                      dataKey="usage"
                      stackId="2"
                      stroke={secondaryAccent}
                      fillOpacity={1}
                      fill="url(#usageGradient)"
                      strokeWidth={2}
                      name="Energy Usage"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-around",
                  gap: { xs: 1, sm: 2 },
                  mt: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: 6,
                      bgcolor: accentColor,
                      boxShadow: `0 0 8px ${accentColor}`,
                    }}
                  />
                  <Typography variant="body2" sx={{ color: subTextColor }}>
                    Solar Production: 0.78 MW
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: 6,
                      bgcolor: secondaryAccent,
                      boxShadow: `0 0 8px ${secondaryAccent}`,
                    }}
                  />
                  <Typography variant="body2" sx={{ color: subTextColor }}>
                    Energy Usage: 1.32 MW
                  </Typography>
                </Box>
              </Box>
            </AnimatedCard>

            <AnimatedCard delay={0.6} className="div6">
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: textColor }}
                >
                  Air Quality
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <AirIcon sx={{ color: accentColor }} />
                  <Box sx={{ textAlign: "right" }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: textColor,
                        lineHeight: 1,
                      }}
                    >
                      28
                    </Typography>
                    <Typography variant="caption" sx={{ color: accentColor }}>
                      Good
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    p: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: { xs: "wrap", sm: "nowrap" },
                    gap: 2,
                  }}
                >
                  {["PM2.5", "CO2", "VOC", "Humidity"].map((param, index) => (
                    <Box
                      key={param}
                      sx={{
                        textAlign: "center",
                        flex: { xs: "1 0 40%", sm: "1" },
                        mb: { xs: 1, sm: 0 },
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: subTextColor, mb: 0.5 }}
                      >
                        {param}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: textColor }}
                      >
                        {index === 0
                          ? "12µg"
                          : index === 1
                          ? "487ppm"
                          : index === 2
                          ? "Low"
                          : "54%"}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    mt: 2,
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: `rgba(0, 255, 136, 0.1)`,
                    border: `1px solid rgba(0, 255, 136, 0.3)`,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: accentColor,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <CheckCircleIcon fontSize="small" />
                    Air quality is excellent. All parameters within optimal
                    range.
                  </Typography>
                </Box>
              </Box>
            </AnimatedCard>

            <AnimatedCard delay={0.7} className="div7">
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: textColor, mb: 2 }}
              >
                Building Location
              </Typography>

              <Box
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  height: { xs: "200px", sm: "250px", md: "280px" },
                  boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
                  flexGrow: 1,
                  border: `1px solid ${borderColor}`,
                }}
              >
                <iframe
                  title="Building Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8018044740475!2d-101.87771402430353!3d33.58449487333676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c413f31ec847%3A0x52db374b7b07849!2sTexas%20Tech%20University!5e0!3m2!1sen!2sus!4v1746898136720!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </AnimatedCard>

            <AnimatedCard delay={0.8} className="div8">
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: textColor, mb: 2 }}
              >
                Building Maintenance
              </Typography>

              <Grid container spacing={2}>
                {[
                  {
                    title: "Water Leak Detected",
                    location: "Level 2, West Wing",
                    status: "warning",
                    icon: <WaterDropIcon />,
                    time: "30 minutes ago",
                  },
                  {
                    title: "Smoke Alarm Fault",
                    location: "Level 5, Room 507",
                    status: "error",
                    icon: <WarningIcon />,
                    time: "1 hour ago",
                  },
                  {
                    title: "Cooling System Check",
                    location: "Central HVAC",
                    status: "good",
                    icon: <CheckCircleIcon />,
                    time: "Today at 9:00 AM",
                  },
                ].map((alert, index) => (
                  <Grid item xs={12} key={index}>
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: 2,
                        bgcolor: alert.status === "warning"
                          ? "rgba(255, 215, 0, 0.1)"
                          : alert.status === "error"
                          ? "rgba(255, 71, 87, 0.1)"
                          : "rgba(0, 255, 136, 0.1)",
                        border: `1px solid ${
                          alert.status === "warning"
                            ? "rgba(255, 215, 0, 0.3)"
                            : alert.status === "error"
                            ? "rgba(255, 71, 87, 0.3)"
                            : "rgba(0, 255, 136, 0.3)"
                        }`,
                        display: "flex",
                        gap: 2,
                      }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: alert.status === "warning"
                            ? "rgba(255, 215, 0, 0.2)"
                            : alert.status === "error"
                            ? "rgba(255, 71, 87, 0.2)"
                            : "rgba(0, 255, 136, 0.2)",
                          color: alert.status === "warning"
                            ? "#FFD700"
                            : alert.status === "error"
                            ? "#FF4757"
                            : accentColor,
                        }}
                      >
                        {alert.icon}
                      </Avatar>
                      <Box>
                        <Typography sx={{ fontWeight: 600, color: textColor }}>
                          {alert.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: subTextColor, mb: 1 }}
                        >
                          {alert.location}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: subTextColor }}
                        >
                          {alert.time}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </AnimatedCard>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ModernDashboard;
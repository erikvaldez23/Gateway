import { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  Tooltip,
  IconButton,
  Collapse,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/BarChart";
import BuildingsIcon from "@mui/icons-material/Business";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const menuItems = [
  {
    label: "Overview",
    path: "/portfolio",
    icon: <DashboardIcon />,
  },
  {
    label: "Analytics (Coming Soon!)",
    path: "/portfolio/analytics",
    icon: <AnalyticsIcon />,
    subItems: [
      { label: "Path 1", path: "/portfolio/sub-link1" },
      { label: "Path 2", path: "/portfolio/sub-link2" },
    ],
  },
  {
    label: "Buildings",
    path: "/portfolio/buildings",
    icon: <BuildingsIcon />,
  },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleLogoClick = () => {
    navigate("/portfolio");
  };

  // Black-centered color scheme
  const bgGradient = "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #0d0d0d 100%)";
  const accentColor = "#ffffff"; // Pure white for contrast
  const hoverColor = "rgba(255, 255, 255, 0.08)"; // Subtle white overlay
  const activeColor = "rgba(255, 255, 255, 0.12)"; // Slightly more prominent
  const dividerColor = "rgba(255, 255, 255, 0.1)"; // Subtle divider
  const textSecondary = "rgba(255, 255, 255, 0.7)"; // Muted white text

  return (
    <Paper
      elevation={3}
      sx={{
        width: collapsed ? 70 : 260,
        background: bgGradient,
        height: "100vh",
        transition: "width 0.3s ease",
        position: "fixed",
        top: 0,
        left: 0,
        borderRadius: 0,
        display: "flex",
        flexDirection: "column",
        zIndex: 1200,
        overflow: "hidden",
        borderRight: `1px solid ${dividerColor}`,
      }}
    >
      {/* Header with Logo and Collapse Button */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent={collapsed ? "center" : "space-between"}
        py={2}
        px={collapsed ? 1 : 2}
        sx={{
          borderBottom: `1px solid ${dividerColor}`,
        }}
      >
        {!collapsed && (
          <Box
            component="img"
            src="/Commercial-Development/greenark-logo1.png"
            alt="GreenArk Logo"
            sx={{
              height: 40,
              width: "auto",
              filter: "brightness(0) invert(1)", // Makes logo white
              "&:hover": {
                transform: "scale(1.05)",
                cursor: "pointer",
                filter: "brightness(0) invert(1) drop-shadow(0 0 8px rgba(255,255,255,0.3))",
                transition: "all 0.2s ease",
              }
            }}
            onClick={handleLogoClick}
          />
        )}
        <Tooltip title={collapsed ? "Expand sidebar" : "Collapse sidebar"}>
          <IconButton 
            onClick={toggleSidebar} 
            size="small" 
            sx={{
              color: accentColor,
              "&:hover": {
                backgroundColor: hoverColor,
                transform: "scale(1.1)",
              },
              transition: "all 0.2s ease",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Divider sx={{ backgroundColor: dividerColor }} />

      {/* Menu Items */}
      <List sx={{ flexGrow: 1, overflowY: "auto", py: 2 }}>
        {menuItems.map((item, index) => {
          const isActive =
            location.pathname === item.path ||
            (item.subItems &&
              item.subItems.some(
                (subItem) => location.pathname === subItem.path
              ));

          return (
            <Box key={item.label}>
              <ListItem disablePadding>
                <ListItemButton
                  component={item.subItems ? "div" : Link}
                  to={item.subItems ? undefined : item.path}
                  onClick={
                    item.subItems ? () => handleExpand(index) : undefined
                  }
                  sx={{
                    borderRadius: 2,
                    mx: 1,
                    mb: 0.5,
                    py: 1.5,
                    bgcolor: isActive ? activeColor : "transparent",
                    "&:hover": {
                      bgcolor: hoverColor,
                      transform: "translateX(4px)",
                      transition: "all 0.2s ease",
                    },
                    position: "relative",
                    "&::before": isActive
                      ? {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          top: "20%",
                          height: "60%",
                          width: 3,
                          borderRadius: 1,
                          bgcolor: accentColor,
                          boxShadow: `0 0 8px ${accentColor}`,
                        }
                      : {},
                    pl: isActive ? 3 : 2,
                    transition: "all 0.2s ease",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 60,
                      color: isActive ? accentColor : textSecondary,
                      transition: "color 0.2s ease",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {!collapsed && (
                    <>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: 16,
                          fontWeight: isActive ? 600 : 400,
                          color: isActive ? accentColor : textSecondary,
                          transition: "all 0.2s ease",
                        }}
                      />
                      {item.subItems &&
                        (expanded === index ? (
                          <ExpandLessIcon sx={{ color: textSecondary }} />
                        ) : (
                          <ExpandMoreIcon sx={{ color: textSecondary }} />
                        ))}
                    </>
                  )}
                </ListItemButton>
              </ListItem>

              {!collapsed && item.subItems && (
                <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => {
                      const isSubActive = location.pathname === subItem.path;

                      return (
                        <ListItemButton
                          key={subItem.label}
                          component={Link}
                          to={subItem.path}
                          sx={{
                            pl: 6,
                            py: 1,
                            mx: 1,
                            borderRadius: 2,
                            bgcolor: isSubActive ? activeColor : "transparent",
                            "&:hover": {
                              bgcolor: hoverColor,
                              transform: "translateX(2px)",
                              transition: "all 0.2s ease",
                            },
                            position: "relative",
                            "&::before": isSubActive
                              ? {
                                  content: '""',
                                  position: "absolute",
                                  left: 16,
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                  height: 6,
                                  width: 6,
                                  borderRadius: "50%",
                                  bgcolor: accentColor,
                                  boxShadow: `0 0 6px ${accentColor}`,
                                }
                              : {},
                            transition: "all 0.2s ease",
                          }}
                        >
                          <ListItemText
                            primary={subItem.label}
                            primaryTypographyProps={{
                              fontSize: 14,
                              fontWeight: isSubActive ? 500 : 400,
                              color: isSubActive ? accentColor : textSecondary,
                              transition: "color 0.2s ease",
                            }}
                          />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              )}
            </Box>
          );
        })}
      </List>
    </Paper>
  );
}
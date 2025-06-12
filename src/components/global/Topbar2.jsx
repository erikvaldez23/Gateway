import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  InputBase,
  Paper,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Language as LanguageIcon,
} from "@mui/icons-material";
import logo from "/Commercial-Development/gateway-logo.png";

const Topbar2 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [langAnchorEl, setLangAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [scrolled, setScrolled] = useState();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLangMenuOpen = (event) => {
    setLangAnchorEl(event.currentTarget);
  };

  const handleLangMenuClose = () => {
    setLangAnchorEl(null);
  };

  const menuItems = [
    "ABOUT",
    "WATCH",
    "GIVE",
    "LOCATIONS",
    "CONNECT",
    "MINISTRIES",
    "EVENTS",
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? "#000" : "rgba(0, 0, 0, 0.0)",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
        {/* Logo */}
        <Box
          component="img"
          src={logo}
          alt="Gateway Church Logo"
          sx={{
            height: { xs: 40, md: 100 }, // Adjust size as needed
            objectFit: "contain",
          }}
        />

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            {menuItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "white",
                  fontSize: "2.4rem",
                  fontWeight: 400,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        )}

        {/* Right side - Search and Language */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Search */}
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "50px",
              px: 1,
              py: 0.5,
              width: { xs: "120px", md: "200px" },
            }}
          >
            <SearchIcon sx={{ color: "white", mr: 1 }} />
            <InputBase
              placeholder="SEARCH"
              sx={{
                color: "white",
                fontSize: "0.8rem",
                "& .MuiInputBase-input::placeholder": {
                  color: "rgba(255, 255, 255, 0.7)",
                  opacity: 1,
                },
              }}
            />
          </Paper>

          {/* Language Selector */}
          <Button
            onClick={handleLangMenuOpen}
            sx={{
              color: "white",
              minWidth: "auto",
              px: 1,
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "50px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            EN
          </Button>
          <Menu
            anchorEl={langAnchorEl}
            open={Boolean(langAnchorEl)}
            onClose={handleLangMenuClose}
            PaperProps={{
              sx: {
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <MenuItem onClick={handleLangMenuClose} sx={{ color: "white" }}>
              EN
            </MenuItem>
            <MenuItem onClick={handleLangMenuClose} sx={{ color: "white" }}>
              DE
            </MenuItem>
          </Menu>

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton color="inherit" onClick={handleMenuOpen} sx={{ ml: 1 }}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              mt: 1,
            },
          }}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item}
              onClick={handleMenuClose}
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar2;

import React, { useState, useEffect, useCallback, useMemo } from "react";
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
  Fade,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Language as LanguageIcon,
  Close as CloseIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import logo from "../../../public/gateway-logo2.png";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Topbar2 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [langAnchorEl, setLangAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const location = useLocation();

  // Memoized dropdown items to prevent unnecessary re-renders
  const dropdownItems = useMemo(
    () => ({
      MINISTRIES: [
        "Business Leaders",
        "Gateway Espanol",
        "Global Outreach",
        "Jewish",
        "Kids",
        "Marriage",
        "Men",
        "Outreach",
        "Primetime",
        "Prison Ministry",
        "Single Parent Families",
        "Widows",
        "Women",
        "Worship",
        "Young Adults",
        "Youth",
      ],
      CONNECT: [
        "Growth Path",
        "Groups",
        "Equip Classes",
        "Volunteer Team",
        "Membership",
        "Prayer",
        "Care",
        "Plan Your Visit",
      ],
    }),
    []
  );

  // Memoized menu items with proper routing
  const menuItems = useMemo(
    () => [
      { label: "ABOUT", path: "/about" },
      { label: "WATCH", path: "/watch" },
      { label: "GIVE", path: "/give" },
      { label: "LOCATIONS", path: "/locations" },
      { label: "CONNECT", path: "/connect", hasDropdown: true },
      { label: "MINISTRIES", path: "/ministries", hasDropdown: true },
      { label: "EVENTS", path: "/events" },
      { label: "CHAT", path: "/chat" },
    ],
    []
  );

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset;
    setScrolled(scrollTop > 10);
  }, []);

  useEffect(() => {
    let timeoutId;
    const throttledHandleScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 16); // ~60fps
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setExpandedMobileMenu(null);
  }, [location.pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleMenuOpen = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleLangMenuOpen = useCallback((event) => {
    setLangAnchorEl(event.currentTarget);
  }, []);

  const handleLangMenuClose = useCallback(() => {
    setLangAnchorEl(null);
  }, []);

  const handleLanguageChange = useCallback(
    (lang) => {
      setCurrentLanguage(lang);
      handleLangMenuClose();
    },
    [handleLangMenuClose]
  );

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleMobileMenuItemClick = useCallback((item) => {
    if (item.hasDropdown) {
      setExpandedMobileMenu((prev) =>
        prev === item.label ? null : item.label
      );
    } else {
      setMobileMenuOpen(false);
    }
  }, []);

  const isActiveRoute = useCallback(
    (path) => {
      return location.pathname === path;
    },
    [location.pathname]
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled
            ? "rgba(0, 0, 0, 0.95)"
            : "rgba(0, 0, 0, 0.0)",
          backdropFilter: scrolled ? "blur(15px)" : "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.15)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            px: { xs: 2, md: 4 },
            position: "relative",
            minHeight: { xs: 64, md: 80 },
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Gateway Church Logo"
                sx={{
                  height: { xs: 40, md: 60 },
                  objectFit: "contain",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
              <Box sx={{ lineHeight: 1, color: "white" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                    letterSpacing: "0.5px",
                  }}
                >
                  Gateway
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                    letterSpacing: "0.5px",
                  }}
                >
                  Church
                </Typography>
              </Box>
            </Link>
          </Box>

          {/* Center Nav (desktop only) */}
          {!isMobile && (
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {menuItems.map((item) => (
                <Box
                  key={item.label}
                  onMouseEnter={() =>
                    item.hasDropdown
                      ? setHoveredMenu(item.label)
                      : setHoveredMenu(null)
                  }
                  onMouseLeave={() => setHoveredMenu(null)}
                  sx={{ position: "relative" }}
                >
                  <Button
                    component={item.hasDropdown ? "button" : Link}
                    to={item.hasDropdown ? undefined : item.path}
                    sx={{
                      color: isActiveRoute(item.path)
                        ? theme.palette.primary.main
                        : "white",
                      fontSize: "1.4rem",
                      fontWeight: isActiveRoute(item.path) ? 600 : 400,
                      textTransform: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      position: "relative",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        transform: "translateY(-1px)",
                      },
                      "&::after": isActiveRoute(item.path)
                        ? {
                            content: '""',
                            position: "absolute",
                            bottom: -4,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "60%",
                            height: 2,
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: 1,
                          }
                        : {},
                      transition: "all 0.2s ease",
                    }}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ArrowDropDownIcon
                        sx={{
                          fontSize: "1rem",
                          ml: 0.5,
                          transform:
                            hoveredMenu === item.label
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                        }}
                      />
                    )}
                  </Button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hoveredMenu === item.label &&
                      dropdownItems[item.label] && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          style={{
                            position: "absolute",
                            top: "100%",
                            transform: "translateX(-50%)",
                            marginTop: 8,
                            background: "rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(10px)",
                            borderRadius: 12,
                            minWidth: 220,
                            boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                            zIndex: 1000,
                            overflow: "hidden",
                          }}
                        >
                          {dropdownItems[item.label].map((subItem, index) => (
                            <MenuItem
                              key={subItem}
                              onClick={() => setHoveredMenu(null)}
                              sx={{
                                color: "#fff",
                                fontWeight: 400,
                                fontSize: "1.1rem",
                                py: 1.5,
                                px: 2,
                                borderBottom:
                                  index < dropdownItems[item.label].length - 1
                                    ? "1px solid rgba(0,0,0,0.05)"
                                    : "none",
                                "&:hover": {
                                  backgroundColor: "rgba(0,0,0,0.4)",
                                  color: "#fff",
                                },
                                transition: "all 0.2s ease",
                              }}
                            >
                              {subItem}
                            </MenuItem>
                          ))}
                        </motion.div>
                      )}
                  </AnimatePresence>
                </Box>
              ))}
            </Box>
          )}

          {/* Right side - Search and Language */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Search */}
            <IconButton
              component={Link}
              to="/search"
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "scale(1.1)",
                },
                transition: "all 0.2s ease",
              }}
              aria-label="Search"
            >
              <SearchIcon />
            </IconButton>

            {/* Language Selector */}
            <Button
              onClick={handleLangMenuOpen}
              sx={{
                color: "white",
                fontSize: "0.9rem",
                fontWeight: 600,
                minWidth: "auto",
                px: 2,
                py: 0.5,
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.5)",
                },
                transition: "all 0.2s ease",
              }}
              aria-label="Language selector"
            >
              {currentLanguage}
            </Button>

            <Menu
              anchorEl={langAnchorEl}
              open={Boolean(langAnchorEl)}
              onClose={handleLangMenuClose}
              TransitionComponent={Fade}
              PaperProps={{
                sx: {
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: 2,
                  mt: 1,
                },
              }}
            >
              {["EN", "ES"].map((lang) => (
                <MenuItem
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  sx={{
                    color: "rgba(0,0,0,0.8)",
                    fontSize: "0.9rem",
                    fontWeight: currentLanguage === lang ? 600 : 400,
                    backgroundColor:
                      currentLanguage === lang
                        ? "rgba(0,0,0,0.05)"
                        : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  {lang}
                </MenuItem>
              ))}
            </Menu>

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                onClick={toggleMobileMenu}
                sx={{
                  ml: 1,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              backdropFilter: "blur(10px)",
              zIndex: 1200,
              paddingTop: 80,
            }}
          >
            <Container>
              <List sx={{ py: 2 }}>
                {menuItems.map((item) => (
                  <React.Fragment key={item.label}>
                    <ListItem
                      button
                      onClick={() => handleMobileMenuItemClick(item)}
                      sx={{
                        color: "white",
                        fontSize: "1.2rem",
                        fontWeight: 500,
                        py: 2,
                        borderRadius: 2,
                        mb: 1,
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: "1.2rem",
                          fontWeight: 500,
                        }}
                      />
                      {item.hasDropdown &&
                        (expandedMobileMenu === item.label ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        ))}
                    </ListItem>

                    {item.hasDropdown && (
                      <Collapse
                        in={expandedMobileMenu === item.label}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          {dropdownItems[item.label]?.map((subItem) => (
                            <ListItem
                              key={subItem}
                              button
                              sx={{
                                pl: 4,
                                color: "rgba(255, 255, 255, 0.8)",
                                "&:hover": {
                                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                                  color: "white",
                                },
                              }}
                            >
                              <ListItemText
                                primary={subItem}
                                primaryTypographyProps={{
                                  fontSize: "1rem",
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    )}
                  </React.Fragment>
                ))}
              </List>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Topbar2;

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
  Drawer,
  Stack,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Language as LanguageIcon,
  Close as CloseIcon,
  ExpandLess,
  ExpandMore,
  ChevronRight,
  ArrowBack,
} from "@mui/icons-material";
// import logo from "../../../public/gateway-logo2.png";
import logo from "../../../public/alt-logo.png";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Topbar2 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [langAnchorEl, setLangAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
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
        "Gateway Kids",
        "Gateway Students", 
        "Young Adults",
        "Gateway Women",
        "Gateway Men",
        "Preschool Academy",
        "Connect U",
        "re|engage",
        "Grief Share",
        "Foster Family",
        "Embrace Grace",
        "Made With Love",
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
      { label: "SERMONS", path: "/sermons" },
      { label: "GIVE", path: "/give" },
      {
        label: "CONNECT",
        path: "/connect",
        // hasDropdown: true
      },
      { label: "MINISTRIES", path: "/ministries", hasDropdown: true },
      { label: "CALENDAR", path: "/calendar" },
      { label: "BULLETIN", path: "/bulletin" },
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
    setMobileSubmenuOpen(false);
    setActiveSubmenu(null);
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
    if (mobileSubmenuOpen) {
      setMobileSubmenuOpen(false);
      setActiveSubmenu(null);
    }
  }, [mobileSubmenuOpen]);

  const handleMobileMenuItemClick = useCallback((item) => {
    if (item.hasDropdown) {
      setMobileSubmenuOpen(true);
      setActiveSubmenu(item.label);
    } else {
      setMobileMenuOpen(false);
    }
  }, []);

  const handleBackToMainMenu = useCallback(() => {
    setMobileSubmenuOpen(false);
    setActiveSubmenu(null);
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
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
                  height: { xs: 60, md: 80 },
                  objectFit: "contain",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
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
                  mt: -1,
                  borderRadius: '12px',
                  transition: 'all 0.2s ease',
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transform: 'scale(1.05)',
                  },
                }}
                aria-label="Toggle mobile menu"
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </motion.div>
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Apple-Style Mobile Menu */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            width: '100vw',
            backgroundColor: 'rgba(28, 28, 30, 0.98)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            border: 'none',
            boxShadow: 'none',
          },
        }}
        ModalProps={{
          sx: {
            '& .MuiBackdrop-root': {
              backgroundColor: 'transparent',
            },
          },
        }}
        transitionDuration={300}
      >
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Header with close button */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 3,
              pt: 6,
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                fontWeight: 600,
                fontSize: '1rem',
                letterSpacing: '0.5px',
              }}
            >
              Menu
            </Typography>
            <IconButton
              onClick={() => setMobileMenuOpen(false)}
              sx={{
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                width: 40,
                height: 40,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <CloseIcon sx={{ fontSize: '1.2rem' }} />
            </IconButton>
          </Box>

          {/* Main Menu Content */}
          <Box sx={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
            <AnimatePresence mode="wait">
              {!mobileSubmenuOpen ? (
                <motion.div
                  key="main-menu"
                  initial={{ x: 0 }}
                  animate={{ x: 0 }}
                  exit={{ x: -100 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ height: '100%', paddingTop: '24px' }}
                >
                  <Stack spacing={0} sx={{ px: 3 }}>
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                      >
                        <Box
                          component={item.hasDropdown ? 'button' : Link}
                          to={item.hasDropdown ? undefined : item.path}
                          onClick={() => handleMobileMenuItemClick(item)}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                            py: 3,
                            px: 0,
                            color: 'white',
                            textDecoration: 'none',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              mx: -3,
                              px: 3,
                              borderRadius: '16px',
                              borderBottom: '1px solid transparent',
                            },
                            '&:active': {
                              transform: 'scale(0.98)',
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: '0.8rem',
                              fontWeight: isActiveRoute(item.path) ? 600 : 400,
                              color: isActiveRoute(item.path) 
                                ? '#007AFF' 
                                : 'white',
                              letterSpacing: '0.5px',
                            }}
                          >
                            {item.label}
                          </Typography>
                          {item.hasDropdown && (
                            <ChevronRight
                              sx={{
                                fontSize: '1.2rem',
                                color: 'rgba(255, 255, 255, 0.6)',
                              }}
                            />
                          )}
                        </Box>
                      </motion.div>
                    ))}
                  </Stack>
                </motion.div>
              ) : (
                <motion.div
                  key="submenu"
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  exit={{ x: 100 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ height: '100%', paddingTop: '24px' }}
                >
                  {/* Submenu Header */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      px: 3,
                      pb: 3,
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <IconButton
                      onClick={handleBackToMainMenu}
                      sx={{
                        color: '#007AFF',
                        mr: 2,
                        p: 1,
                        '&:hover': {
                          backgroundColor: 'rgba(0, 122, 255, 0.1)',
                        },
                      }}
                    >
                      <ArrowBack />
                    </IconButton>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {activeSubmenu}
                    </Typography>
                  </Box>

                  {/* Submenu Items */}
                  <Stack spacing={0} sx={{ px: 3, pt: 3 }}>
                    {activeSubmenu && dropdownItems[activeSubmenu]?.map((subItem, index) => (
                      <motion.div
                        key={subItem}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.05,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                      >
                        <Box
                          component="button"
                          onClick={() => setMobileMenuOpen(false)}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            py: 2.5,
                            px: 0,
                            color: 'rgba(255, 255, 255, 0.9)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              mx: -3,
                              px: 3,
                              borderRadius: '12px',
                              borderBottom: '1px solid transparent',
                            },
                            '&:active': {
                              transform: 'scale(0.98)',
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: '0.8rem',
                              fontWeight: 400,
                              letterSpacing: '0.3px',
                            }}
                          >
                            {subItem}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Stack>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Topbar2;
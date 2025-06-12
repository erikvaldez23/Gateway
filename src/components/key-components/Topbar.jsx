import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useMediaQuery,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Fade,
} from "@mui/material";
import { styled, useTheme } from "@mui/system";
import logo from "/greenark-logo1.png";
import { motion } from "framer-motion";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // 👈 at the top

// Your nav items
const navItems = [
  { label: "Ark Vision", path: "/Commercial-Development/#/how-it-works" },
  { label: "Ark OS", path: "/Commercial-Development/#/portfolio" },
  { label: "Ark Crypto", path: "/Commercial-Development/#/what-we-offer" },
  { label: "Our Story", path: "/Commercial-Development/#/about" },
  { label: "Get In Touch", path: "/contact", isAnchor: true },
];

// The "pill" wrapper with enhanced styling
const NavWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(2),
  left: "50%",
  transform: "translateX(-50%)",
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(4),
  padding: theme.spacing(2, 4),
 backdropFilter: "blur(12px)",
  borderRadius: theme.shape.borderRadius * 6, // Even rounder pill
  boxShadow: "0 8px 32px rgba(0,0,0,0.2), 0 0 0 1px rgba(201,180,154,0.15)", // Gold accent border
  zIndex: theme.zIndex.appBar + 1,
  border: "1px solid rgba(201,180,154,0.2)",
  transition: "all 0.3s ease-in-out",
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-1px',
    left: '-1px',
    right: '-1px',
    bottom: '-1px',
    borderRadius: 'inherit',
    // background: 'linear-gradient(135deg, rgba(201,180,154,0.5) 0%, rgba(201,180,154,0) 50%, rgba(201,180,154,0.2) 100%)',
    opacity: 0.3,
    pointerEvents: 'none',
    zIndex: -1,
  },
}));

// NavItem with hover effects
const NavItem = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  color: '#fff',
  fontWeight: 500,
  fontSize: '5rem',
  cursor: 'pointer',
  textTransform: 'none',
  padding: '6px 12px',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: 0,
    height: '2px',
    background: 'linear-gradient(90deg, rgba(201,180,154,0) 0%, rgba(201,180,154,1) 50%, rgba(201,180,154,0) 100%)',
    transition: 'all 0.3s ease-in-out',
    transform: 'translateX(-50%)',
  },
  '&:hover': {
    color: '#c9b49a',
    '&::after': {
      width: '80%',
    },
  },
}));

// Mobile menu button
const MenuButton = styled(IconButton)(({ theme }) => ({
  color: '#c9b49a',
  background: 'rgba(10, 10, 12, 0.6)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(201,180,154,0.2)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  '&:hover': {
    background: 'rgba(20, 20, 22, 0.8)',
  },
}));

const AnimatedLogo = ({ handleClick }) => {
  return (
    <Box 
    onClick={handleClick}
    sx={{ 
      position: 'relative', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      height: { xs: "40px", md: "50px" }, // 🔥 control logo container height
      width: "auto",
    }}>
      {/* Glowing background */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.95, 1, 0.95] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        sx={{ 
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,180,154,0.15) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(8px)',
        }}
      />
      
      {/* The actual logo */}
      <Box
        component="img"
        src={logo}
        alt="Green Ark"
        sx={{ 
          height: "100%",  // 🔥 make logo scale to parent height
          width: "auto",
          maxHeight: "100%",
          objectFit: "contain",
          cursor: "pointer",
          position: 'relative',
          zIndex: 2,
          filter: 'drop-shadow(0 0 5px rgba(201,180,154,0.3))',
        }}
      />
    </Box>
  );
};


export default function FuturisticTopbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate(); // 👈 hook from react-router-dom
  
  // Enhanced scroll effect
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };
    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  // Handle navigation
  const handleNavigation = (item) => {
    if (item.isAnchor) {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = item.path;
    }
    
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const handleLogoClick = () => {
    if (window.location.hash === "#/" || window.location.hash === "" || window.location.pathname === "/") {
      // ✅ Already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };
  

  // Mobile drawer content
  const drawer = (
    <Box 
      sx={{ 
        width: 350, 
        height: '100%',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #070707 100%)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={handleDrawerToggle}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton 
          sx={{ color: '#c9b49a' }}
          onClick={handleDrawerToggle}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <AnimatedLogo />
      </Box>
      
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.label} 
            onClick={() => handleNavigation(item)}
            sx={{ 
              '&:hover': { 
                background: 'rgba(201,180,154,0.1)',
              },
              transition: 'all 0.2s ease',
              my: 1,
            }}
          >
            <ListItemText 
              primary={item.label} 
              sx={{ 
                textAlign: 'center',
                '.MuiTypography-root': {
                  color: '#c9b49a',
                  fontWeight: 500,
                  letterSpacing: '1px',
                }
              }} 
            />
          </ListItem>
        ))}
      </List>
      
      {/* Decorative elements for mobile menu */}
      <Box 
        sx={{ 
          position: 'absolute', 
          bottom: 40, 
          left: 0, 
          right: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          component={motion.div}
          animate={{
            boxShadow: [
              '0 0 10px rgba(201,180,154,0.2)',
              '0 0 20px rgba(201,180,154,0.4)',
              '0 0 10px rgba(201,180,154,0.2)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          sx={{
            width: 120,
            height: 1,
            background: 'linear-gradient(90deg, rgba(201,180,154,0) 0%, rgba(201,180,154,0.7) 50%, rgba(201,180,154,0) 100%)',
          }}
        />
      </Box>
    </Box>
  );
  
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "transparent",
        boxShadow: "none",
        padding: 0,
        transition: "all 0.4s ease",
      }}
    >
      <Toolbar sx={{ position: "relative" }}>
        {/* Desktop navigation */}
        {!isMobile ? (
          <Fade in={true} timeout={1000}>
            <NavWrapper>
              {/* Animated Logo */}
              <AnimatedLogo handleClick={handleLogoClick}/>
              
              {/* Links with hover effects */}
              {navItems.map((item, index) => (
                <NavItem
                  key={item.label}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  onClick={() => handleNavigation(item)}
                >
                  <Typography
                  noWrap
                    sx={{
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                      fontSize: "1.5rem"
                    }}
                  >
                    {item.label}
                  </Typography>
                </NavItem>
              ))}
            </NavWrapper>
          </Fade>
        ) : (
          // Mobile view with menu button
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', px: 2, pt: 1 }}>
            <AnimatedLogo />
            
            <MenuButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              size="large"
            >
              <MenuIcon />
            </MenuButton>
          </Box>
        )}
        
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 250,
              borderRight: 'none',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
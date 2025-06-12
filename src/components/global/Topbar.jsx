import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Container,
  Select,
  FormControl,
  InputBase,
  Avatar,
  Chip,
  useTheme,
  alpha,
  Fade,
  Grow,
  Divider
} from '@mui/material';
import {
  Search as SearchIcon,
  ExpandMore as ExpandMoreIcon,
  Language as LanguageIcon,
  Person as PersonIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  ArrowOutward as ArrowOutwardIcon,
  Notifications as NotificationsIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon
} from '@mui/icons-material';

const ModernTopbar = () => {
  const [connectAnchor, setConnectAnchor] = useState(null);
  const [ministriesAnchor, setMinistriesAnchor] = useState(null);
  const [profileAnchor, setProfileAnchor] = useState(null);
  const [language, setLanguage] = useState('English');
  const [searchValue, setSearchValue] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  const theme = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update time
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleConnectClick = (event) => {
    setConnectAnchor(event.currentTarget);
  };

  const handleMinistriesClick = (event) => {
    setMinistriesAnchor(event.currentTarget);
  };

  const handleProfileClick = (event) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setConnectAnchor(null);
    setMinistriesAnchor(null);
    setProfileAnchor(null);
  };

  const navItems = [
    { label: 'About', href: '#', color: '#ef4444' },
    { label: 'Watch', href: '#', color: '#f59e0b' },
    { label: 'Give', href: '#', color: '#10b981' },
    { label: 'Locations', href: '#', color: '#3b82f6' },
    { label: 'Connect', hasDropdown: true, onClick: handleConnectClick, color: '#8b5cf6' },
    { label: 'Ministries', hasDropdown: true, onClick: handleMinistriesClick, color: '#ec4899' },
    { label: 'Events', href: '#', color: '#06b6d4' }
  ];

  return (
    <>
      {/* Floating notification bar */}
      <Box
        sx={{
          position: 'fixed',
          top: scrolled ? -60 : 0,
          left: 0,
          right: 0,
          height: 50,
          background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1200,
          transition: 'top 0.3s ease',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, color: 'white' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationIcon sx={{ fontSize: 16, color: '#10b981' }} />
            <Typography variant="caption" sx={{ fontWeight: 600 }}>
              Dallas, TX
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255,255,255,0.2)' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TimeIcon sx={{ fontSize: 16, color: '#3b82f6' }} />
            <Typography variant="caption" sx={{ fontWeight: 600 }}>
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255,255,255,0.2)' }} />
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            🎵 Join us for Sunday Worship at 9AM & 11AM
          </Typography>
        </Box>
      </Box>

      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{
          top: scrolled ? 0 : 50,
          background: scrolled 
            ? 'rgba(15, 23, 42, 0.95)' 
            : 'rgba(255, 255, 255, 0.85)',
          borderBottom: `1px solid ${scrolled ? 'rgba(71, 85, 105, 0.3)' : 'rgba(226, 232, 240, 0.6)'}`,
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 1100,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: scrolled 
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)'
              : 'linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, rgba(147, 51, 234, 0.02) 100%)',
            transition: 'all 0.3s ease',
            pointerEvents: 'none'
          }
        }}
      >
        <Container maxWidth="xl">
          <Toolbar 
            sx={{ 
              minHeight: '90px !important',
              justifyContent: 'space-between',
              px: { xs: 2, sm: 3 },
              py: 2
            }}
          >
            {/* Logo Section - More Creative */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Box sx={{ position: 'relative' }}>
                {/* Floating rings around logo */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -8,
                    left: -8,
                    width: 68,
                    height: 68,
                    border: '2px solid',
                    borderColor: scrolled ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)',
                    borderRadius: '50%',
                    animation: 'spin 20s linear infinite',
                    '@keyframes spin': {
                      '0%': { transform: 'rotate(0deg)' },
                      '100%': { transform: 'rotate(360deg)' }
                    }
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: -4,
                    left: -4,
                    width: 60,
                    height: 60,
                    border: '1px solid',
                    borderColor: scrolled ? 'rgba(147, 51, 234, 0.4)' : 'rgba(147, 51, 234, 0.3)',
                    borderRadius: '50%',
                    animation: 'spin-reverse 15s linear infinite',
                    '@keyframes spin-reverse': {
                      '0%': { transform: 'rotate(360deg)' },
                      '100%': { transform: 'rotate(0deg)' }
                    }
                  }}
                />
                
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    background: scrolled 
                      ? 'linear-gradient(135deg, #1e293b 0%, #475569 100%)'
                      : 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: scrolled 
                      ? '0 8px 32px rgba(15, 23, 42, 0.4)' 
                      : '0 12px 40px rgba(59, 130, 246, 0.3)',
                    transform: 'rotate(-5deg)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'rotate(5deg) scale(1.1)',
                      boxShadow: scrolled 
                        ? '0 16px 48px rgba(15, 23, 42, 0.6)' 
                        : '0 16px 48px rgba(59, 130, 246, 0.4)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%)',
                      transition: 'opacity 0.3s ease',
                    }
                  }}
                >
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 900,
                      fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
                      fontSize: '1.4rem',
                      textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                      zIndex: 1,
                      position: 'relative'
                    }}
                  >
                    G
                  </Typography>
                </Box>
              </Box>
              
              <Box>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 900,
                    background: scrolled 
                      ? 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
                      : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.05em',
                    fontSize: '1.8rem',
                    fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
                      borderRadius: '1px',
                    }
                  }}
                >
                  Gateway
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: scrolled ? '#94a3b8' : '#64748b',
                    fontWeight: 700,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    fontSize: '0.65rem',
                    fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
                    ml: 0.5
                  }}
                >
                  CHURCH
                </Typography>
              </Box>
            </Box>

            {/* Navigation Items - Redesigned with color coding */}
            <Box 
              sx={{ 
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center',
                gap: 1,
                background: scrolled 
                  ? 'rgba(30, 41, 59, 0.8)' 
                  : 'rgba(248, 250, 252, 0.9)',
                borderRadius: '25px',
                padding: '8px 12px',
                border: '1px solid',
                borderColor: scrolled 
                  ? 'rgba(71, 85, 105, 0.3)' 
                  : 'rgba(226, 232, 240, 0.6)',
                backdropFilter: 'blur(16px)',
                boxShadow: scrolled 
                  ? '0 8px 32px rgba(0, 0, 0, 0.2)' 
                  : '0 4px 16px rgba(0, 0, 0, 0.1)',
              }}
            >
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  onClick={item.onClick || (() => {})}
                  endIcon={item.hasDropdown ? <ExpandMoreIcon sx={{ fontSize: 18 }} /> : null}
                  sx={{
                    color: scrolled ? '#f1f5f9' : '#475569',
                    fontWeight: 600,
                    px: 2,
                    py: 1.5,
                    borderRadius: '18px',
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '2px solid transparent',
                    '&:hover': {
                      backgroundColor: alpha(item.color, 0.1),
                      color: item.color,
                      transform: 'translateY(-3px)',
                      borderColor: alpha(item.color, 0.3),
                      boxShadow: `0 8px 25px ${alpha(item.color, 0.25)}`,
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      background: item.color,
                      borderRadius: '2px',
                      transform: 'scaleY(0)',
                      transition: 'transform 0.3s ease',
                      transformOrigin: 'bottom',
                    },
                    '&:hover::before': {
                      transform: 'scaleY(1)',
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Right Section - Enhanced */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {/* Language Selector - Redesigned */}
              <Box sx={{ 
                display: { xs: 'none', md: 'flex' }, 
                alignItems: 'center', 
                gap: 1,
                background: scrolled 
                  ? 'rgba(30, 41, 59, 0.8)' 
                  : 'rgba(248, 250, 252, 0.9)',
                borderRadius: '15px',
                padding: '10px 14px',
                border: '1px solid',
                borderColor: scrolled 
                  ? 'rgba(71, 85, 105, 0.3)' 
                  : 'rgba(226, 232, 240, 0.6)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  background: scrolled 
                    ? 'rgba(51, 65, 85, 0.9)' 
                    : 'rgba(255, 255, 255, 0.95)',
                  borderColor: '#3b82f6',
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 25px rgba(59, 130, 246, 0.2)',
                }
              }}>
                <LanguageIcon sx={{ 
                  color: scrolled ? '#94a3b8' : '#64748b', 
                  fontSize: 20 
                }} />
                <FormControl size="small">
                  <Select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    variant="standard"
                    disableUnderline
                    sx={{
                      color: scrolled ? '#f1f5f9' : '#475569',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
                      '& .MuiSelect-icon': {
                        color: scrolled ? '#94a3b8' : '#64748b'
                      }
                    }}
                  >
                    <MenuItem value="English">EN</MenuItem>
                    <MenuItem value="Español">ES</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* Enhanced Search with suggestions */}
              <Box
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  alignItems: 'center',
                  backgroundColor: isSearchFocused 
                    ? (scrolled ? 'rgba(51, 65, 85, 0.95)' : 'rgba(255, 255, 255, 0.98)')
                    : (scrolled ? 'rgba(30, 41, 59, 0.8)' : 'rgba(248, 250, 252, 0.9)'),
                  borderRadius: '20px',
                  px: 3,
                  py: 1.5,
                  minWidth: isSearchFocused ? 320 : 260,
                  border: '2px solid',
                  borderColor: isSearchFocused 
                    ? '#3b82f6'
                    : (scrolled ? 'rgba(71, 85, 105, 0.3)' : 'rgba(226, 232, 240, 0.6)'),
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: isSearchFocused 
                    ? '0 12px 40px rgba(59, 130, 246, 0.3)' 
                    : '0 4px 12px rgba(0, 0, 0, 0.08)',
                  position: 'relative',
                }}
              >
                <SearchIcon sx={{ 
                  color: isSearchFocused ? '#3b82f6' : (scrolled ? '#94a3b8' : '#64748b'), 
                  mr: 2,
                  transition: 'color 0.2s ease',
                  fontSize: 22
                }} />
                <InputBase
                  placeholder="Search sermons, events, ministries..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  sx={{
                    flex: 1,
                    color: scrolled ? '#f1f5f9' : '#475569',
                    fontSize: '0.95rem',
                    fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
                    fontWeight: 500,
                    '& ::placeholder': {
                      color: scrolled ? '#64748b' : '#94a3b8',
                      opacity: 1
                    }
                  }}
                />
                {searchValue && (
                  <Fade in={Boolean(searchValue)}>
                    <IconButton
                      size="small"
                      onClick={() => setSearchValue('')}
                      sx={{ 
                        color: scrolled ? '#94a3b8' : '#64748b',
                        '&:hover': { 
                          color: '#ef4444',
                          backgroundColor: 'rgba(239, 68, 68, 0.1)'
                        }
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Fade>
                )}
              </Box>

              {/* Notifications */}
              <IconButton
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  color: scrolled ? '#94a3b8' : '#64748b',
                  background: scrolled 
                    ? 'rgba(30, 41, 59, 0.8)' 
                    : 'rgba(248, 250, 252, 0.9)',
                  border: '1px solid',
                  borderColor: scrolled 
                    ? 'rgba(71, 85, 105, 0.3)' 
                    : 'rgba(226, 232, 240, 0.6)',
                  position: 'relative',
                  '&:hover': {
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    color: '#ef4444',
                    transform: 'scale(1.1)',
                    borderColor: '#ef4444',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#ef4444',
                    boxShadow: '0 0 0 2px white',
                  }
                }}
              >
                <NotificationsIcon fontSize="small" />
              </IconButton>

              {/* Profile Avatar */}
              <Avatar
                onClick={handleProfileClick}
                sx={{
                  width: 44,
                  height: 44,
                  background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
                  cursor: 'pointer',
                  border: '3px solid',
                  borderColor: scrolled ? 'rgba(71, 85, 105, 0.3)' : 'rgba(226, 232, 240, 0.6)',
                  transition: 'all 0.3s ease',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    borderColor: '#3b82f6',
                    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
                  }
                }}
              >
                J
              </Avatar>

              {/* Mobile Menu */}
              <IconButton
                sx={{ 
                  display: { xs: 'flex', lg: 'none' },
                  color: scrolled ? '#94a3b8' : '#64748b',
                  background: scrolled 
                    ? 'rgba(30, 41, 59, 0.8)' 
                    : 'rgba(248, 250, 252, 0.9)',
                  border: '1px solid',
                  borderColor: scrolled 
                    ? 'rgba(71, 85, 105, 0.3)' 
                    : 'rgba(226, 232, 240, 0.6)',
                  '&:hover': {
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    color: '#3b82f6',
                    transform: 'scale(1.05)',
                    borderColor: '#3b82f6',
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>

        {/* Enhanced Dropdown Menus */}
        <Menu
          anchorEl={connectAnchor}
          open={Boolean(connectAnchor)}
          onClose={handleClose}
          TransitionComponent={Grow}
          sx={{
            '& .MuiPaper-root': {
              borderRadius: '20px',
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(226, 232, 240, 0.6)',
              mt: 2,
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(24px)',
              minWidth: 240,
              overflow: 'hidden',
            }
          }}
        >
          {['Small Groups', 'Volunteer Opportunities', 'Community Outreach', 'Prayer Requests'].map((item, index) => (
            <MenuItem 
              key={item}
              onClick={handleClose} 
              sx={{ 
                py: 2, 
                px: 3,
                fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
                fontWeight: 500,
                fontSize: '0.95rem',
                color: '#475569',
                transition: 'all 0.2s ease',
                borderLeft: '4px solid transparent',
                '&:hover': {
                  backgroundColor: 'rgba(139, 92, 246, 0.08)',
                  color: '#8b5cf6',
                  borderLeftColor: '#8b5cf6',
                  transform: 'translateX(8px)',
                }
              }}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>

        <Menu
          anchorEl={ministriesAnchor}
          open={Boolean(ministriesAnchor)}
          onClose={handleClose}
          TransitionComponent={Grow}
          sx={{
            '& .MuiPaper-root': {
              borderRadius: '20px',
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(226, 232, 240, 0.6)',
              mt: 2,
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(24px)',
              minWidth: 260,
              overflow: 'hidden',
            }
          }}
        >
          {[
            { name: 'Youth Ministry', color: '#ef4444' },
            { name: "Children's Ministry", color: '#f59e0b' },
            { name: 'Worship Ministry', color: '#10b981' },
            { name: 'Men\'s Ministry', color: '#3b82f6' },
            { name: 'Women\'s Ministry', color: '#ec4899' },
            { name: 'Senior Ministry', color: '#8b5cf6' }
          ].map((item, index) => (
            <MenuItem 
              key={item.name}
              onClick={handleClose} 
              sx={{ 
                py: 2, 
                px: 3,
                fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
                fontWeight: 500,
                fontSize: '0.95rem',
                color: '#475569',
                transition: 'all 0.2s ease',
                borderLeft: '4px solid transparent',
                position: 'relative',
                '&:hover': {
                  backgroundColor: alpha(item.color, 0.08),
                  color: item.color,
                  borderLeftColor: item.color,
                  transform: 'translateX(8px)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: item.color,
                  opacity: 0,
                  transition: 'opacity 0.2s ease',
                },
                '&:hover::before': {
                  opacity: 1,
                }
              }}
            >
              <Box sx={{ ml: 2 }}>{item.name}</Box>
            </MenuItem>
          ))}
        </Menu>

        <Menu
          anchorEl={profileAnchor}
          open={Boolean(profileAnchor)}
          onClose={handleClose}
          TransitionComponent={Grow}
          sx={{
            '& .MuiPaper-root': {
              borderRadius: '20px',
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(226, 232, 240, 0.6)',
              mt: 2,
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(24px)',
              minWidth: 200,
              overflow: 'hidden',
            }
          }}
        >
          {['Profile', 'My Giving', 'Settings', 'Sign Out'].map((item, index) => (
            <MenuItem 
              key={item}
              onClick={handleClose} 
              sx={{ 
                py: 2, 
                px: 3,
                fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
                fontWeight: 500,
                fontSize: '0.95rem',
                color: '#475569',
                transition: 'all 0.2s ease',
                borderLeft: '4px solid transparent',
                '&:hover': {
                  backgroundColor: 'rgba(59, 130, 246, 0.08)',
                  color: '#3b82f6',
                  borderLeftColor: '#3b82f6',
                  transform: 'translateX(8px)',
                }
              }}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
      </AppBar>
    </>
  );
};

export default ModernTopbar;
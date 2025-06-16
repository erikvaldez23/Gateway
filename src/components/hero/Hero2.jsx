import React, { useState } from 'react';
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
  Paper
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Language as LanguageIcon
} from '@mui/icons-material';
import AppleAIPopup from './Popup';


const Hero2 = () => {
return (
<Box
  sx={{
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  {/* ✅ Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      top: 0,
      left: 0,
      zIndex: 0,
    }}
  >
    <source src="/Commercial-Development/bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* ✅ Overlay (gradient filter over video) */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)',
      zIndex: 1,
    }}
  />
      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            maxWidth: '800px',
            pl: { xs: 0, md: 4 }
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', md: '5rem', lg: '6rem' },
              fontWeight: 300,
              color: 'white',
              lineHeight: 1.1,
              mb: 4,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Reflect the present,
            <br />
            <Box component="span" sx={{ fontStyle: 'italic', opacity: 0.9 }}>
              imagine the future
            </Box>
          </Typography>

          <Box sx={{ mt: 6, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: 'black',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                textTransform: 'none',
                borderRadius: 5,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                }
              }}
            >
              CONNECT WITH US
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: 'black',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                textTransform: 'none',
                borderRadius: 5,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                }
              }}
            >
              ASK A QUESTION
            </Button>

            {/* <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              Subscribe to our newsletter
              <Box
                component="span"
                sx={{
                  width: '20px',
                  height: '1px',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  display: 'inline-block'
                }}
              />
            </Typography> */}
          </Box>
        </Box>
      </Container>
            <AppleAIPopup />
    </Box>
  );
};

export default Hero2;
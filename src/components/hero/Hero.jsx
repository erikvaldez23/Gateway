import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Fade,
  Slide,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  PlayArrow,
  LocationOn,
  Schedule,
  KeyboardArrowDown
} from '@mui/icons-material';

const ChurchHero = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const slides = [
    {
      title: "Join Us in Worship",
      subtitle: "Experience the power of community prayer",
      image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1920&h=1080&fit=crop"
    },
    {
      title: "Grow in Faith",
      subtitle: "Discover your purpose through Christ",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&h=1080&fit=crop"
    }
  ];

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToNext = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<Box
  sx={{
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
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

      {/* Floating Geometric Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 80,
          height: 80,
          background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          borderRadius: '50%',
          zIndex: 2,
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-20px) rotate(180deg)' }
          }
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '25%',
          left: '5%',
          width: 60,
          height: 60,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
          transform: 'rotate(45deg)',
          zIndex: 2,
          animation: 'pulse 4s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { transform: 'rotate(45deg) scale(1)' },
            '50%': { transform: 'rotate(45deg) scale(1.1)' }
          }
        }}
      />

      {/* Main Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          color: 'white',
          px: { xs: 2, md: 4 }
        }}
      >
        <Fade in={loaded} timeout={1000}>
          <Box>
            <Slide direction="up" in={loaded} timeout={1200}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                  fontWeight: 300,
                  mb: 2,
                  background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                {slides[currentSlide].title}
              </Typography>
            </Slide>

            <Slide direction="up" in={loaded} timeout={1400}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                  fontWeight: 300,
                  mb: 4,
                  opacity: 0.9,
                  maxWidth: '800px',
                  mx: 'auto',
                  letterSpacing: '0.02em',
                }}
              >
                {slides[currentSlide].subtitle}
              </Typography>
            </Slide>

            <Slide direction="up" in={loaded} timeout={1600}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 6 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<PlayArrow />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)',
                    boxShadow: '0 8px 25px rgba(33, 150, 243, 0.3)',
                    borderRadius: '50px',
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 35px rgba(33, 150, 243, 0.4)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Watch Live
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    borderColor: 'rgba(255,255,255,0.3)',
                    color: 'white',
                    borderRadius: '50px',
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(255,255,255,0.1)',
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: 'rgba(255,255,255,0.5)',
                      background: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Plan Your Visit
                </Button>
              </Stack>
            </Slide>

            {/* Service Info Cards */}
            <Slide direction="up" in={loaded} timeout={1800}>
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={2}
                justifyContent="center"
                sx={{ mb: 4 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 3,
                    py: 1.5,
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '25px',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <Schedule sx={{ fontSize: '1.2rem' }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Sundays 9:00 & 11:00 AM
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 3,
                    py: 1.5,
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '25px',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <LocationOn sx={{ fontSize: '1.2rem' }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    123 Faith Street, Wylie, TX
                  </Typography>
                </Box>
              </Stack>
            </Slide>
          </Box>
        </Fade>

        {/* Slide Indicators */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 80,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
          }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: currentSlide === index ? 'white' : 'rgba(255,255,255,0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(255,255,255,0.7)',
                }
              }}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </Box>
      </Container>

      {/* Next Section Placeholder */}
      <Box
        id="next-section"
        sx={{
          position: 'absolute',
          bottom: -100,
          width: '100%',
          height: 100,
        }}
      />
    </Box>
  );
};

export default ChurchHero;
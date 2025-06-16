import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  Typography,
  IconButton,
  Grid,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Description } from '@mui/icons-material';

const featuredProjects = [
  {
    title: 'Gateway Kids Summer Bash',
    description: 'Register your child or sign up to serve today!',
    type: 'EVENT',
    date: '20 JUNE 2023 – 01 NOVEMBER 2026',
    image: '/Commercial-Development/intro2/summer-bash.jpg',
  },
  {
    title: "Stream Gateway Worship Espanol's Album",
    description: 'Listen to Eterno Dios and worship with us today!',
    type: 'ONLINE',
    date: 'JUNE 2024 - DECEMBER 2025',
    image: '/Commercial-Development/intro2/spanish-album.jpg',
  },
  {
    title: 'Gateway YouthCON',
    description: 'Sign up for Gateway YouthCON!',
    type: 'EVENT',
    date: 'JUNE 2024 - DECEMBER 2025',
    image: '/Commercial-Development/intro2/youth-con.jpg',
  },
  {
    title: 'Single Parent Families',
    description: 'Get involved with our Single Parent Family Ministry and find community!',
    type: 'MINISTRY',
    date: 'JUNE 2024 - DECEMBER 2025',
    image: '/Commercial-Development/intro2/single-parent.jpg',
  }
];

const FeaturedProjects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{background: "linear-gradient(135deg, #142b52 0%, #1f3b70 100%)"}}>
    <Box sx={{py: 6, maxWidth: "1600px", mx: "auto"}}>
      <Grid container spacing={4} justifyContent="center">
        {featuredProjects.map((project, idx) => (
          <Grid item xs={12} md={6} key={idx}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
                height: 400,
                cursor: 'pointer',
                transition: 'transform 0.3s ease, filter 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                  filter: 'brightness(1.05)'
                }
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.8)'
                }}
              />

              {/* Gradient Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '100%',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1))',
                  zIndex: 1
                }}
              />

              {/* Text Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 24,
                  left: 24,
                  zIndex: 2,
                  color: 'white'
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ opacity: 0.8, letterSpacing: 1 }}
                >
                  {project.type} | {project.date}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                    fontWeight: 600,
                    fontSize: isMobile ? '1rem' : '1.25rem'
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 300,
                    fontSize: isMobile ? '1rem' : '1rem'
                  }}
                >
                  {project.description}
                </Typography>
              </Box>

              {/* Arrow Button */}
              <IconButton
                sx={{
                  position: 'absolute',
                  bottom: 16,
                  right: 16,
                  zIndex: 2,
                  bgcolor: 'white',
                  '&:hover': {
                    bgcolor: 'grey.100'
                  }
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Box>
  );
};

export default FeaturedProjects;

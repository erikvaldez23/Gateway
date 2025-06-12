import React from 'react';
import { 
  Grid, 
  Typography, 
  Paper, 
  Box, 
  useTheme, 
  alpha,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';

const VisionSection = () => {
  // Define colors - you can adjust these to match your theme
  const primaryColor = '#64ffda'; // Teal/cyan for futuristic tech feel
  const darkPaper = '#0a192f'; // Dark blue background
  const accentColor = '#7928ca'; // Purple accent
  
  const theme = useTheme();
  
  return (
    <Grid 
      container 
      spacing={6} 
      alignItems="center" 
      sx={{ 
        mb: 12,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -100,
          right: -150,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(accentColor, 0.4)}, transparent 70%)`,
          filter: 'blur(60px)',
          zIndex: -1
        }
      }}
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      <Grid 
        item 
        xs={12} 
        md={6}
        component={motion.div}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Typography
            variant="overline"
            sx={{
              color: primaryColor,
              fontWeight: 600,
              letterSpacing: '0.2em',
              mb: 1,
              display: 'block'
            }}
          >
            THE FUTURE IS NOW
          </Typography>
          
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
              background: `linear-gradient(135deg, #fff, ${primaryColor})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              mb: 4
            }}
          >
            Our Vision
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              mb: 4,
              mt: 2
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 3,
                background: `linear-gradient(to right, ${primaryColor}, ${accentColor})`,
                borderRadius: 3,
                mr: 2
              }}
            />
            <Typography 
              variant="body2" 
              sx={{ 
                color: alpha(primaryColor, 0.8),
                fontWeight: 500,
                letterSpacing: '0.05em'
              }}
            >
              PIONEERING THE NEXT WAVE
            </Typography>
          </Box>
          
          <Box 
            sx={{ 
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: -20,
                top: 0,
                bottom: 0,
                width: 2,
                background: `linear-gradient(to bottom, ${primaryColor}, transparent)`,
              }
            }}
          >
            <Typography 
              paragraph 
              sx={{ 
                fontSize: '1.1rem', 
                lineHeight: 1.7,
                color: alpha('#fff', 0.87)
              }}
              component={motion.p}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis placeat, rerum fugit, eos excepturi quos sed rem quia provident sunt nam, laboriosam delectus repellat facere exercitationem sint fuga labore iste?
            </Typography>
            
            <Typography 
              paragraph 
              sx={{ 
                fontSize: '1.1rem', 
                lineHeight: 1.7,
                color: alpha('#fff', 0.77)
              }}
              component={motion.p}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus ipsa, quas voluptates, provident ea tempora dolorem totam reprehenderit eius nam odit enim asperiores maxime vel molestiae facilis necessitatibus. Non!
            </Typography>
            
            <Typography 
              paragraph 
              sx={{ 
                fontSize: '1.1rem', 
                lineHeight: 1.7,
                color: alpha('#fff', 0.77),
                mb: 0
              }}
              component={motion.p}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni amet magnam eveniet mollitia blanditiis deleniti corporis vel impedit, illo, illum tenetur! Atque quaerat deserunt ipsa laudantium ratione? Maxime, quaerat?
            </Typography>
          </Box>
        </Box>
      </Grid>
      
      <Grid 
        item 
        xs={12} 
        md={6}
        component={motion.div}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
      >
        <Paper
          elevation={10}
          sx={{
            bgcolor: darkPaper,
            borderRadius: 3,
            overflow: 'hidden',
            position: 'relative',
            height: '450px',
            boxShadow: `0 20px 80px ${alpha(darkPaper, 0.5)}`,
            border: `1px solid ${alpha(primaryColor, 0.1)}`,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: `linear-gradient(to right, transparent, ${primaryColor}, transparent)`,
              zIndex: 2
            }
          }}
        >
          {/* Futuristic overlay elements */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '150px',
              height: '150px',
              background: `radial-gradient(circle at top right, ${alpha(primaryColor, 0.1)}, transparent)`,
              zIndex: 1
            }}
          />
          
          <Box
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
              width: '40px',
              height: '40px',
              border: `1px solid ${alpha(primaryColor, 0.5)}`,
              borderRadius: 1,
              zIndex: 2
            }}
          />
          
          <Box
            sx={{
              position: 'absolute',
              top: 30,
              right: 70,
              width: '20px',
              height: '20px',
              background: alpha(primaryColor, 0.2),
              borderRadius: '50%',
              zIndex: 2
            }}
          />
          
          {/* Main image */}
          <Box
            component="img"
            src="/city2.jpg"
            alt="Modern office building"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'contrast(1.1) brightness(0.9)',
              transition: 'transform 0.8s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          />
          
          {/* Overlay with details */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              background: `linear-gradient(transparent, ${alpha(darkPaper, 0.9)})`,
              p: 3,
              borderTop: `1px solid ${alpha(primaryColor, 0.2)}`,
              backdropFilter: 'blur(10px)'
            }}
          >
            <Typography 
              variant="h6" 
              fontWeight={600} 
              color={primaryColor}
              sx={{
                display: 'flex',
                alignItems: 'center',
                '&::before': {
                  content: '""',
                  display: 'inline-block',
                  width: '15px',
                  height: '2px',
                  bgcolor: primaryColor,
                  mr: 2
                }
              }}
            >
              Excellence in Every Investment
            </Typography>
            
            <Typography 
              variant="body2" 
              sx={{ 
                color: alpha('#fff', 0.7),
                mt: 1
              }}
            >
              Pioneering sustainable solutions for tomorrow's challenges
            </Typography>
          </Box>
          
          {/* Decorative elements */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 120,
              right: 30,
              height: '80px',
              width: '2px',
              background: `linear-gradient(to bottom, ${primaryColor}, transparent)`,
            }}
          />
          
          <Box
            sx={{
              position: 'absolute',
              bottom: 120,
              right: 50,
              height: '40px',
              width: '2px',
              background: `linear-gradient(to bottom, ${alpha(primaryColor, 0.5)}, transparent)`,
            }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default VisionSection;
import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Link,
  Container,
  Divider,
  Stack,
  IconButton,
  Fade,
  useTheme,
  alpha
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components for enhanced aesthetics
const StyledFooterBox = styled(Box)(({ theme }) => ({
  background: "#000",
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(90deg, 
      transparent 0%, 
      ${alpha('#c9b49a', 0.3)} 50%, 
      transparent 100%)`,
  }
}));

const StyledBrandText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(135deg, 
    #c9b49a 0%, 
    #b8a082 50%, 
    #a68f6b 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0 4px 20px rgba(201, 180, 154, 0.3)',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #c9b49a, transparent)',
    borderRadius: '1px',
  }
}));

const StyledLink = styled(Link)(({ theme }) => ({
  position: 'relative',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  '&::before': {
    content: '"›"',
    marginRight: theme.spacing(1),
    color: '#c9b49a',
    transition: 'transform 0.3s ease',
  },
  '&:hover': {
    color: '#c9b49a',
    transform: 'translateX(4px)',
    '&::before': {
      transform: 'translateX(4px) scale(1.2)',
    },
    '&::after': {
      width: 'calc(100% - 20px)',
    }
  }
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  background: `linear-gradient(90deg, 
    transparent 0%, 
    ${alpha('#c9b49a', 0.4)} 20%, 
    ${alpha('#c9b49a', 0.6)} 50%, 
    ${alpha('#c9b49a', 0.4)} 80%, 
    transparent 100%)`,
  height: '1px',
  border: 'none',
  margin: theme.spacing(6, 0, 4, 0),
}));

const footerLinks = [
  {
    title: 'Platform',
    links: [
      { text: 'Link', href: '#' },
      { text: 'Link', href: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { text: 'Creators', href: '#' },
      { text: 'Partners', href: '#' },
      { text: 'For Companies', href: '#' },
      { text: 'Contact Us', href: '#' },
    ],
  },
  {
    title: 'Social',
    links: [
      { text: 'X/Twitter', href: '#' },
      { text: 'Instagram', href: '#' },
      { text: 'LinkedIn', href: '#' },
      { text: 'Tik Tok', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { text: 'Terms & Conditions', href: '#' },
      { text: 'Privacy Policy', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <StyledFooterBox
      sx={{
        height: '80vh',
        pt: 8,
        pb: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <StyledBrandText
            variant="h1"
            sx={{
              fontSize: { xs: 48, sm: 72, md: 300 },
              fontWeight: 900,
              textAlign: 'center',
              mb: 8,
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: { xs: '-2px', md: '-8px' },
            }}
          >
            GREEN ARK
          </StyledBrandText>
        </Fade>

        <Grid container spacing={6} justifyContent="center">
          {footerLinks.map((section, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: 14, sm: 16 },
                    fontWeight: 700,
                    color: '#c9b49a',
                    mb: 3,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    opacity: 0.8,
                  }}
                >
                  {section.title}
                </Typography>
              </Box>
              <Stack spacing={3}>
                {section.links.map(({ text, href }, index) => (
                  <StyledLink
                    key={index}
                    href={href}
                    underline="none"
                    color="#fff"
                    sx={{
                      fontSize: { xs: 16, sm: 18, md: 20 },
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {text}
                  </StyledLink>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <StyledDivider />

        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: 14, sm: 16 },
              color: "#fff",
              fontWeight: 300,
              letterSpacing: '0.5px',
            }}
          >
            © 2025 GREEN ARK, INC. — ALL RIGHTS RESERVED
          </Typography>
        </Box>
      </Container>
    </StyledFooterBox>
  );
};

export default Footer;
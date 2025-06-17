import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  IconButton,
  Divider,
  useTheme,
  alpha
} from '@mui/material';
import {
  YouTube,
  Facebook,
  Twitter,
  Instagram,
  GetApp,
  Phone,
  LocationOn,
  Email
} from '@mui/icons-material';

const footerSections = [
  {
    title: 'About',
    links: [
      'Statement of Faith',
      'Bylaws',
      'Elders',
      'Careers',
      'Contact',
      'Update Profile'
    ]
  },
  {
    title: 'Connect',
    links: [
      'Give',
      'Growth Path',
      'Groups',
      'Equip',
      'Volunteer Team',
      'Membership',
      'Prayer',
      'Care',
      'Plan Your Visit'
    ]
  },
  {
    title: 'Locations',
    links: [
      'Gateway Dallas',
      'Gateway Frisco',
      'Gateway Grand Prairie',
      'Gateway Jackson Hole',
      'Gateway Justin',
      'Gateway NRH',
      'Gateway North Fort Worth',
      'Gateway Online',
      'Gateway Plano',
      'Gateway Prosper',
      'Gateway Southlake',
      'Prison Campuses'
    ]
  },
  {
    title: 'Ministries',
    links: [
      'Business Leaders',
      'Gateway Español',
      'Global Outreach',
      'Jewish',
      'Kids',
      'Marriage',
      'Men',
      'Outreach',
      'Primetime',
      'Prison Ministry',
      'Single Parent Families',
      'Widows',
      'Women',
      'Worship',
      'Young Adults',
      'Youth'
    ]
  },
  {
    title: 'Resources',
    links: [
      'Store',
      'Devotionals',
      'Gateway Publishing',
      'Gateway Worship',
      'The King\'s University',
      'Gateway Center for Israel'
    ]
  }
];

const AppleFooter = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(145deg, ${alpha('#000', 0.95)}, ${alpha('#111', 0.98)})`,
        backdropFilter: 'blur(20px)',
        borderTop: `1px solid ${alpha('#fff', 0.1)}`,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
        }
      }}
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Logo and Download Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
         <Box
  component="div"
  sx={{
    width: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mx: "auto", 
    mb: 4
  }}
>
  <img
    src="/Gateway/gateway-logo2.png"
    alt="Logo"
    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
  />
</Box>

          
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 2,
              background: alpha('#fff', 0.05),
              backdropFilter: 'blur(10px)',
              borderRadius: '50px',
              padding: '12px 24px',
              border: `1px solid ${alpha('#fff', 0.1)}`,
              transition: 'all 0.3s ease',
              '&:hover': {
                background: alpha('#fff', 0.08),
                transform: 'translateY(-1px)',
              }
            }}
          >
            <GetApp sx={{ color: '#007AFF' }} />
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#fff',
                fontWeight: 500,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            >
              Download our official app for your device today.
            </Typography>
          </Box>
        </Box>

        {/* Main Footer Links */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {footerSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={index}>
              <Typography
                variant="h6"
                sx={{
                  color: '#fff',
                  fontWeight: 600,
                  mb: 3,
                  fontSize: '1rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
              >
                {section.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href="#"
                    sx={{
                      color: alpha('#fff', 0.7),
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: 400,
                      transition: 'all 0.2s ease',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      '&:hover': {
                        color: '#007AFF',
                        transform: 'translateX(4px)',
                      }
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Divider */}
        <Divider sx={{ 
          borderColor: alpha('#fff', 0.1), 
          mb: 4,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
        }} />

        {/* Social Media and Contact */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 3,
            mb: 4
          }}
        >
          <Box sx={{ display: 'flex', gap: 1 }}>
            {[
              { icon: <YouTube />, color: '#FF0000' },
              { icon: <Facebook />, color: '#1877F2' },
              { icon: <Twitter />, color: '#1DA1F2' },
              { icon: <Instagram />, color: '#E4405F' }
            ].map((social, index) => (
              <IconButton
                key={index}
                sx={{
                  width: 44,
                  height: 44,
                  background: alpha('#fff', 0.05),
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${alpha('#fff', 0.1)}`,
                  borderRadius: '12px',
                  color: alpha('#fff', 0.7),
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: alpha(social.color, 0.1),
                    color: social.color,
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 25px ${alpha(social.color, 0.3)}`,
                  }
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>

          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <Link
              href="#"
              sx={{
                color: alpha('#fff', 0.7),
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 400,
                transition: 'color 0.2s ease',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                '&:hover': { color: '#007AFF' }
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{
                color: alpha('#fff', 0.7),
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 400,
                transition: 'color 0.2s ease',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                '&:hover': { color: '#007AFF' }
              }}
            >
              Terms of Use
            </Link>
            <Link
              href="#"
              sx={{
                color: alpha('#fff', 0.7),
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 400,
                transition: 'color 0.2s ease',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                '&:hover': { color: '#007AFF' }
              }}
            >
              Subscribe
            </Link>
          </Box>
        </Box>

        {/* Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{
              color: alpha('#fff', 0.5),
              fontSize: '0.75rem',
              fontWeight: 400,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            © 2025 Gateway Church. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AppleFooter;
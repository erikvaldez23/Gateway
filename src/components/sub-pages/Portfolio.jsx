import React, { useState, useEffect } from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Button, 
  Card, 
  CardContent, 
  Tabs, 
  Tab, 
  useMediaQuery, 
  MenuItem, 
  Select, 
  FormControl, 
  IconButton, 
  Paper,
  Fade
} from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import { motion } from "framer-motion";
import CTA from "../subpage-components/CTA"

// Custom styled components using MUI's styled API
const GoldText = styled(Typography)(({ theme }) => ({
  color: '#c9b49a',
}));

const DarkSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#0f0f0f',
  color: 'white',
}));

const DarkerSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#080808',
  color: 'white',
}));

const GoldButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#c9b49a',
  color: '#0f0f0f',
  '&:hover': {
    backgroundColor: '#b8a389',
  },
  padding: '12px 24px',
  borderRadius: '28px',
  fontWeight: 600,
}));

const OutlinedGoldButton = styled(Button)(({ theme }) => ({
  color: '#c9b49a',
  borderColor: '#c9b49a',
  '&:hover': {
    borderColor: '#b8a389',
    backgroundColor: 'rgba(201,180,154,0.04)',
  },
  padding: '12px 24px',
  borderRadius: '28px',
  fontWeight: 600,
}));

const OfferingCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.03)',
  borderRadius: '16px',
  border: '1px solid rgba(201,180,154,0.1)',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    borderColor: 'rgba(201,180,154,0.3)',
    transform: 'translateY(-4px)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: 'rgba(255,255,255,0.7)',
  '&.Mui-selected': {
    color: '#c9b49a',
  },
  minWidth: 'unset',
  padding: '12px 18px',
}));

const StatsCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.03)',
  borderRadius: '16px',
  border: '1px solid rgba(201,180,154,0.1)',
  padding: theme.spacing(4),
  textAlign: 'center',
}));

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: '#c9b49a',
  },
});

// Company color
const primaryColor = "#c9b49a";
const darkBg = "#121212";
const darkPaper = "#1E1E1E";
const darkerGray = "#333333";

export default function Portfolio() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSelectChange = (event) => {
    setActiveTab(event.target.value);
  };

    useEffect(() => {
      setLoaded(true);
    }, []);

  return (
    <Box sx={{ background: "linear-gradient(135deg, #0f0f0f 0%, #000000 100%)", color: 'white' }}>
      {/* Hero Section with 3D-like elements */}
      <Fade in={loaded} timeout={1000}>
        <Box 
          sx={{ 
            height: isMobile ? '50vh' : '70vh', 
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            background: "transparent",
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ maxWidth: isMobile ? '100%' : '60%' }}>
              <Typography 
                variant="overline" 
                sx={{ 
                  color: primaryColor, 
                  fontWeight: 600,
                  letterSpacing: 3
                }}
              >
                PORTFOLIO
              </Typography>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 2,
                  fontSize: isMobile ? '2.5rem' : '3.5rem'
                }}
              >
                Delivering Results Through Commercial Real Estate
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 300,
                  mb: 4,
                  opacity: 0.9
                }}
              >
                From stabilized assets to value-add opportunities, our portfolio reflects our disciplined investment approach and operational expertise.
              </Typography>
              <Box 
                sx={{ 
                  width: '100px', 
                  height: '4px', 
                  bgcolor: primaryColor 
                }} 
              />
            </Box>
          </Container>
        </Box>
      </Fade>

      {/* CTA Section */}
      <Box sx={{ 
        position: 'relative',
        py: 12,
        overflow: 'hidden'
      }}>
        {/* Background gradient and blur elements */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #0f0f0f 0%, #000000 100%)',
            zIndex: 0,
          }}
        >
          <Box 
            sx={{ 
              position: 'absolute', 
              width: '600px', 
              height: '600px', 
              borderRadius: '50%', 
              background: 'radial-gradient(circle, rgba(201,180,154,0.1) 0%, rgba(0,0,0,0) 70%)',
              filter: 'blur(100px)',
              top: '-200px',
              right: '-100px',
            }} 
          />
        </Box>
       <CTA />
      </Box>
    </Box>
  );
}
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Tab,
  Tabs,
  Box,
  Container,
  Paper,
  IconButton,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Fade,
  Avatar
} from '@mui/material';
import {
  Search as SearchIcon,
  Close as CloseIcon,
  Event as EventIcon,
  Group as GroupIcon,
  Class as ClassIcon,
  VideoLibrary as VideoIcon
} from '@mui/icons-material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#007AFF',
    },
    secondary: {
      main: '#5AC8FA',
    },
    background: {
      default: '#000000',
      paper: '#1C1C1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#EBEBF5',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.5px',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(28, 28, 30, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 500,
          minWidth: 0,
          marginRight: '2rem',
          '&.Mui-selected': {
            color: '#007AFF',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#007AFF',
          height: 3,
          borderRadius: '3px 3px 0 0',
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
});

const StyledSearch = ({ value, onChange, onClear }) => (
  <Paper
    sx={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: 48,
      backgroundColor: 'rgba(118, 118, 128, 0.12)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      px: 2,
      mx: 'auto',
      '&:hover': {
        backgroundColor: 'rgba(118, 118, 128, 0.16)',
      },
      '&:focus-within': {
        backgroundColor: 'rgba(118, 118, 128, 0.2)',
        borderColor: '#007AFF',
      },
      transition: 'all 0.2s ease-in-out',
    }}
    elevation={0}
  >
    <SearchIcon sx={{ color: 'rgba(255, 255, 255, 0.6)', mr: 1 }} />
    <InputBase
      placeholder="What are you looking for?"
      value={value}
      onChange={onChange}
      sx={{
        flex: 1,
        '& input': {
          padding: 0,
          fontSize: '1.5rem',
          color: 'white',
          '&::placeholder': {
            color: 'rgba(255, 255, 255, 0.6)',
            opacity: 1,
          },
        },
      }}
    />
    {value && (
      <IconButton
        size="small"
        onClick={onClear}
        sx={{
          color: 'rgba(255, 255, 255, 0.6)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    )}
  </Paper>
);

const EmptyState = () => (
  <Fade in timeout={600}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        px: 3,
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          borderRadius: '20px',
          backgroundColor: 'rgba(118, 118, 128, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3,
        }}
      >
        <SearchIcon sx={{ fontSize: 40, color: 'rgba(255, 255, 255, 0.4)' }} />
      </Box>
      <Typography
        variant="h5"
        sx={{
          mb: 1,
          fontWeight: 600,
          color: 'white',
        }}
      >
        Start your search above!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'rgba(255, 255, 255, 0.7)',
          maxWidth: 400,
          lineHeight: 1.6,
        }}
      >
        Try using the Events, Groups, Classes, and Video selections for an even better experience.
      </Typography>
    </Box>
  </Fade>
);

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClear = () => {
    setSearchValue('');
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const tabIcons = [null, <EventIcon />, <GroupIcon />, <ClassIcon />, <VideoIcon />];
  const tabLabels = ['All', 'Events', 'Groups', 'Classes', 'Videos'];

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)', }}>
        <Container maxWidth="lg" sx={{ py: 10 }}>
          <Box sx={{ mb: 4 }}>
            <StyledSearch
              value={searchValue}
              onChange={handleSearchChange}
              onClear={handleSearchClear}
            />
          </Box>

          <Box sx={{ mb: 4 }}>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              sx={{
                '& .MuiTabs-flexContainer': {
                  gap: 1,
                },
              }}
            >
              {tabLabels.map((label, index) => (
                <Tab
                  key={label}
                  icon={tabIcons[index]}
                  iconPosition="start"
                  label={label}
                  sx={{
                    '& .MuiTab-iconWrapper': {
                      mr: tabIcons[index] ? 1 : 0,
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>

          <EmptyState />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
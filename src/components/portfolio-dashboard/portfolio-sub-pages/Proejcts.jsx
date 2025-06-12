import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Chip, 
  Button, 
  TextField, 
  Stack, 
  InputAdornment, 
  Paper, 
  ToggleButtonGroup, 
  ToggleButton, 
  MenuItem, 
  FormControl, 
  Select, 
  ThemeProvider, 
  createTheme, 
  alpha,
  useMediaQuery,
  Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import FilterListIcon from '@mui/icons-material/FilterList';
import BusinessIcon from '@mui/icons-material/Business';
import StorefrontIcon from '@mui/icons-material/Storefront';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import Sidebar from '../Sidebar';

// Create a sophisticated black theme with beige accents
const blackTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c9b49a', // warm beige
    },
    secondary: {
      main: '#E5E5E5', // light silver
    },
    background: {
      default: '#000000', // pure black
      paper: '#0A0A0A', // near black
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    divider: 'rgba(201, 180, 154, 0.15)',
    error: {
      main: '#FF4444',
    },
    warning: {
      main: '#FFB000',
    },
    success: {
      main: '#00C851',
    }
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", "Helvetica", "Arial", serif',
    h4: {
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    button: {
      fontWeight: 500,
      letterSpacing: '0.03em',
    },
    body1: {
      letterSpacing: '0.01em',
    }
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'radial-gradient(ellipse at center, #1A1A1A 0%, #000000 70%)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #0F0F0F 0%, #1A1A1A 100%)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          border: '1px solid rgba(201, 180, 154, 0.1)',
          boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.8), 0 1px 8px rgba(201, 180, 154, 0.1)',
          '&:hover': {
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.9), 0 0 25px rgba(201, 180, 154, 0.2)',
            border: '1px solid rgba(201, 180, 154, 0.3)',
            '& .MuiCardMedia-root': {
              filter: 'brightness(1.2) contrast(1.1) saturate(1.1)',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          background: 'linear-gradient(145deg, #0A0A0A 0%, #151515 100%)',
        },
        outlined: {
          borderColor: 'rgba(201, 180, 154, 0.2)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 600,
        },
        filledPrimary: {
          background: 'linear-gradient(135deg, #c9b49a 0%, #d4c2aa 100%)',
          color: '#000000',
          boxShadow: '0 2px 12px rgba(201, 180, 154, 0.4)',
        },
        filledSuccess: {
          background: 'linear-gradient(135deg, #00C851 0%, #00FF88 100%)',
          color: '#000000',
          boxShadow: '0 2px 12px rgba(0, 200, 81, 0.4)',
        },
        filledWarning: {
          background: 'linear-gradient(135deg, #FFB000 0%, #FFC107 100%)',
          color: '#000000',
          boxShadow: '0 2px 12px rgba(255, 176, 0, 0.4)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #c9b49a 0%, #d4c2aa 100%)',
          color: '#000000',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(201, 180, 154, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #d4c2aa 0%, #dfd0bb 100%)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4), 0 0 20px rgba(201, 180, 154, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            '& fieldset': {
              borderColor: 'rgba(201, 180, 154, 0.3)',
              transition: 'all 0.3s',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(201, 180, 154, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#c9b49a',
              boxShadow: '0 0 0 2px rgba(201, 180, 154, 0.2)',
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          '&.MuiOutlinedInput-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            '& fieldset': {
              borderColor: 'rgba(201, 180, 154, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(201, 180, 154, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#c9b49a',
              boxShadow: '0 0 0 2px rgba(201, 180, 154, 0.2)',
            },
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(201, 180, 154, 0.2)',
          color: 'rgba(255, 255, 255, 0.8)',
          '&.Mui-selected': {
            backgroundColor: alpha('#c9b49a', 0.15),
            color: '#c9b49a',
            border: '1px solid rgba(201, 180, 154, 0.5)',
            boxShadow: `0 0 15px ${alpha('#c9b49a', 0.3)}`,
            '&:hover': {
              backgroundColor: alpha('#c9b49a', 0.25),
            }
          },
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
          }
        }
      }
    }
  },
});

// Get icon by project type
const getTypeIcon = (type) => {
  switch(type) {
    case 'Office':
      return <BusinessIcon sx={{ fontSize: 16 }} />;
    case 'Retail':
      return <StorefrontIcon sx={{ fontSize: 16 }} />;
    case 'Industrial':
      return <WarehouseIcon sx={{ fontSize: 16 }} />;
    case 'Mixed-Use':
      return <ApartmentIcon sx={{ fontSize: 16 }} />;
    default:
      return <ViewModuleIcon sx={{ fontSize: 16 }} />;
  }
};

// Main component
const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const isSmallScreen = useMediaQuery(blackTheme.breakpoints.down('sm'));

  // Sample project data
  const projectsData = [
    {
      id: 1,
      title: "Project 1",
      location: "Dallas, TX",
      type: "Office",
      status: "In Development",
      squareFootage: "245,000 sq ft",
      investment: "$120M",
      description: "A premium office tower with waterfront views and LEED certification.",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Project 2",
      location: "Dallas, TX",
      type: "Retail",
      status: "Completed",
      squareFootage: "125,000 sq ft",
      investment: "$65M",
      description: "Urban retail center with mixed-use facilities and underground parking.",
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Project 3",
      location: "Dallas, TX",
      type: "Industrial",
      status: "In Development",
      squareFootage: "450,000 sq ft",
      investment: "$95M",
      description: "Modern industrial complex with advanced logistics infrastructure.",
      thumbnail: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Project 4",
      location: "Dallas, TX",
      type: "Mixed-Use",
      status: "Planned",
      squareFootage: "320,000 sq ft",
      investment: "$180M",
      description: "Luxury residential with ground-floor retail and amenities.",
      thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Project 5",
      location: "Dallas, TX",
      type: "Office",
      status: "Completed",
      squareFootage: "175,000 sq ft",
      investment: "$145M",
      description: "Modern tech-focused office space with collaborative areas.",
      thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Project 6",
      location: "Dallas, TX",
      type: "Industrial",
      status: "In Development",
      squareFootage: "550,000 sq ft",
      investment: "$110M",
      description: "State-of-the-art logistics facility with port access.",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
    }
  ];

  // Filter types
  const filterOptions = ['All', 'Office', 'Retail', 'Industrial', 'Mixed-Use'];
  
  // Status options for dropdown
  const statusOptions = ['All Statuses', 'In Development', 'Completed', 'Planned'];
  
  // Filter projects based on active filter and search query
  const filteredProjects = projectsData.filter(project => {
    const matchesFilter = activeFilter === 'All' || project.type === activeFilter;
    const matchesStatus = statusFilter === 'All Statuses' || project.status === statusFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch && matchesStatus;
  });

  // Handle filter change
  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setActiveFilter(newFilter);
    }
  };

  // Handle status change
  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value);
  };

  return (
    <ThemeProvider theme={blackTheme}>
      <Box sx={{ 
        bgcolor: 'background.default', 
        minHeight: '100vh',
        backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(201, 180, 154, 0.05) 0%, rgba(0, 0, 0, 0) 50%), radial-gradient(circle at 70% 80%, rgba(201, 180, 154, 0.03) 0%, rgba(0, 0, 0, 0) 40%)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        pt: 15,
      }}>
           <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Sidebar />
                </Box>
        {/* Filters and Search */}
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Paper 
            elevation={8} 
            sx={{ 
              p: 3, 
              mb: 4, 
              background: 'linear-gradient(145deg, rgba(10, 10, 10, 0.95) 0%, rgba(25, 25, 25, 0.95) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(201, 180, 154, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(201, 180, 154, 0.1)',
              borderRadius: 3,
            }}
          >
            <Stack 
              direction={{ xs: 'column', md: 'row' }} 
              justifyContent="space-between" 
              alignItems={{ xs: 'flex-start', md: 'center' }}
              spacing={3}
            >
              {/* Filter Pills */}
              <ToggleButtonGroup
                value={activeFilter}
                exclusive
                onChange={handleFilterChange}
                aria-label="project type filter"
                sx={{ 
                  flexWrap: 'wrap',
                  '& .MuiToggleButtonGroup-grouped': {
                    mx: 0.5,
                    my: { xs: 0.5, sm: 0 },
                    borderRadius: '25px !important',
                    px: 2.5,
                    py: 1,
                  }
                }}
              >
                {filterOptions.map((filter) => (
                  <ToggleButton 
                    key={filter} 
                    value={filter}
                    sx={{ 
                      textTransform: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      fontWeight: 500,
                    }}
                  >
                    {filter !== 'All' && getTypeIcon(filter)}
                    {filter}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>

              {/* Search and Additional Filters */}
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2} 
                width={{ xs: '100%', md: 'auto' }}
              >
                {/* Search Bar */}
                <TextField
                  placeholder="Search projects..."
                  variant="outlined"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" sx={{ color: 'rgba(201, 180, 154, 0.7)' }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ 
                    minWidth: { sm: '250px' }
                  }}
                  size="small"
                />

                {/* Status Filter Dropdown */}
                <FormControl variant="outlined" size="small">
                  <Select
                    value={statusFilter}
                    onChange={handleStatusChange}
                    displayEmpty
                    startAdornment={
                      <InputAdornment position="start">
                        <FilterListIcon fontSize="small" sx={{ color: 'rgba(201, 180, 154, 0.7)' }} />
                      </InputAdornment>
                    }
                    sx={{ minWidth: '150px' }}
                  >
                    {statusOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            </Stack>
          </Paper>

          {/* Projects Grid */}
          <Grid container spacing={3}>
            {filteredProjects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Card elevation={12}>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.thumbnail}
                      alt={project.title}
                      sx={{
                        transition: 'all 0.4s ease',
                        filter: 'brightness(0.8) contrast(1.2) saturate(0.9)',
                      }}
                    />
                    <Chip
                      label={project.status}
                      color={
                        project.status === 'Completed' ? 'success' :
                        project.status === 'In Development' ? 'primary' : 'warning'
                      }
                      sx={{ 
                        position: 'absolute', 
                        top: 16, 
                        right: 16,
                        fontWeight: 'bold',
                      }}
                      size="small"
                    />
                    <Box 
                      sx={{ 
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '120px',
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0) 100%)'
                      }} 
                    />
                    
                    {/* Project type badge with icon */}
                    <Chip
                      icon={getTypeIcon(project.type)}
                      label={project.type}
                      variant="outlined"
                      size="small"
                      sx={{
                        position: 'absolute',
                        bottom: 16,
                        left: 16,
                        border: '1px solid rgba(201, 180, 154, 0.4)',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        backdropFilter: 'blur(8px)',
                        color: '#c9b49a',
                      }}
                    />
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography 
                        variant="h6" 
                        component="h2" 
                        gutterBottom={false}
                        sx={{ 
                          mb: 0.5,
                          background: 'linear-gradient(135deg, #FFFFFF 0%, #c9b49a 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          fontWeight: 600,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <LocationOnIcon fontSize="small" sx={{ color: 'rgba(201, 180, 154, 0.7)', fontSize: 16 }} />
                        <Typography variant="body2" color="text.secondary">
                          {project.location}
                        </Typography> 
                      </Stack>
                    </Box>
                    
                    <Divider sx={{ 
                      my: 2, 
                      borderColor: 'rgba(201, 180, 154, 0.15)',
                      '&::before, &::after': {
                        borderColor: 'rgba(201, 180, 154, 0.15)',
                      } 
                    }} />
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, minHeight: isSmallScreen ? 'auto' : '50px' }}>
                      {project.description}
                    </Typography>

                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      <Grid item xs={6}>
                        <Paper 
                          variant="outlined" 
                          sx={{ 
                            p: 2, 
                            backgroundColor: 'rgba(201, 180, 154, 0.05)',
                            backgroundImage: 'linear-gradient(145deg, rgba(201, 180, 154, 0.03) 0%, rgba(201, 180, 154, 0.08) 100%)',
                            borderColor: 'rgba(201, 180, 154, 0.2)',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: 2,
                          }}
                        >
                          {/* Beige corner accent */}
                          <Box sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '20px',
                            height: '20px',
                            borderRight: '2px solid rgba(201, 180, 154, 0.6)',
                            borderTop: '2px solid rgba(201, 180, 154, 0.6)',
                          }} />
                          
                          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                            Size
                          </Typography>
                          <Typography 
                            variant="body2" 
                            fontWeight="600"
                            sx={{ color: '#FFFFFF', mt: 0.5 }}
                          >
                            {project.squareFootage}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper 
                          variant="outlined" 
                          sx={{ 
                            p: 2, 
                            backgroundColor: 'rgba(201, 180, 154, 0.05)',
                            backgroundImage: 'linear-gradient(145deg, rgba(201, 180, 154, 0.03) 0%, rgba(201, 180, 154, 0.08) 100%)',
                            borderColor: 'rgba(201, 180, 154, 0.2)',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: 2,
                          }}
                        >
                          {/* Beige corner accent */}
                          <Box sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '20px',
                            height: '20px',
                            borderRight: '2px solid rgba(201, 180, 154, 0.6)',
                            borderTop: '2px solid rgba(201, 180, 154, 0.6)',
                          }} />
                          
                          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                            Investment
                          </Typography>
                          <Typography 
                            variant="body2" 
                            fontWeight="600"
                            sx={{ color: '#FFFFFF', mt: 0.5 }}
                          >
                            {project.investment}
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>

                    <Button 
                      variant="contained" 
                      fullWidth 
                      disableElevation
                      endIcon={<ArrowOutwardIcon fontSize="small" />}
                      sx={{ 
                        background: 'linear-gradient(135deg, #c9b49a 0%, #d4c2aa 100%)',
                        position: 'relative',
                        overflow: 'hidden',
                        py: 1.5,
                        fontWeight: 600,
                      }}
                    >
                      <span>View Project Details</span>
                      {/* Button shimmer effect */}
                      <Box 
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                          animation: 'shimmer 4s infinite',
                          '@keyframes shimmer': {
                            '0%': {
                              left: '-100%',
                            },
                            '100%': {
                              left: '100%',
                            },
                          }
                        }}
                      />
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <Box 
              textAlign="center" 
              sx={{ 
                py: 8,
                background: 'linear-gradient(145deg, rgba(10, 10, 10, 0.8) 0%, rgba(25, 25, 25, 0.8) 100%)',
                borderRadius: 3,
                border: '1px solid rgba(201, 180, 154, 0.15)',
                backdropFilter: 'blur(10px)',
                mt: 4
              }}
            >
              <Typography variant="h6" color="text.secondary" gutterBottom>
                No projects match your search criteria.
              </Typography>
              <Button 
                onClick={() => {
                  setActiveFilter('All');
                  setSearchQuery('');
                  setStatusFilter('All Statuses');
                }}
                color="primary"
                variant="outlined"
                sx={{ 
                  mt: 2,
                  borderColor: 'rgba(201, 180, 154, 0.5)',
                  color: '#c9b49a',
                  '&:hover': {
                    borderColor: '#c9b49a',
                    boxShadow: '0 0 12px rgba(201, 180, 154, 0.4)',
                    backgroundColor: 'rgba(201, 180, 154, 0.05)',
                  },
                }}
              >
                Reset Filters
              </Button>
            </Box>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ProjectsPage;
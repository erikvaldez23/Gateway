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
import Sidebar from "../Sidebar"


// Create a futuristic dark theme with MUI
const futuristicTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c9b49a', // bright cyan blue
    },
    secondary: {
      main: '#FF5EFF', // neon pink
    },
    background: {
      default: '#050510', // very dark blue-black
      paper: '#0A0A1E', // dark blue-black
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    divider: 'rgba(0, 194, 255, 0.12)',
    error: {
      main: '#FF5252',
    },
    warning: {
      main: '#FFD740',
    },
    success: {
      main: '#69F0AE',
    }
  },
  typography: {
    fontFamily: '"Exo 2", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
    h6: {
      fontWeight: 500,
      letterSpacing: '0.03em',
    },
    button: {
      fontWeight: 500,
      letterSpacing: '0.05em',
    },
    body1: {
      letterSpacing: '0.03em',
    }
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(135deg, #050510 0%, #0A1A2C 100%)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #0A0A1E 0%, #101035 100%)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          borderLeft: '1px solid rgba(0, 194, 255, 0.2)',
          borderTop: '1px solid rgba(0, 194, 255, 0.1)',
          boxShadow: '0 4px 20px 0 rgba(0, 0, 30, 0.8), 0 0 15px rgba(0, 194, 255, 0.1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 30px 0 rgba(0, 0, 30, 0.9), 0 0 20px rgba(0, 194, 255, 0.2)',
            '& .MuiCardMedia-root': {
              filter: 'brightness(1.1) contrast(1.1)',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        outlined: {
          borderColor: 'rgba(0, 194, 255, 0.2)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontWeight: 500,
        },
        filledPrimary: {
          background: 'linear-gradient(90deg, #0092CF 0%, #00C2FF 100%)',
          boxShadow: '0 0 8px rgba(0, 194, 255, 0.5)',
        },
        filledSuccess: {
          background: 'linear-gradient(90deg, #00A676 0%, #69F0AE 100%)',
          boxShadow: '0 0 8px rgba(105, 240, 174, 0.5)',
        },
        filledWarning: {
          background: 'linear-gradient(90deg, #CC9320 0%, #FFD740 100%)',
          boxShadow: '0 0 8px rgba(255, 215, 64, 0.5)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          fontWeight: 500,
        },
        containedPrimary: {
          background: 'linear-gradient(90deg, #0092CF 0%, #00C2FF 100%)',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25), 0 0 15px rgba(0, 194, 255, 0.3)',
          '&:hover': {
            background: 'linear-gradient(90deg, #00A7EC 0%, #33CFFF 100%)',
            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 194, 255, 0.4)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 194, 255, 0.3)',
              transition: 'border-color 0.3s',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 194, 255, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00C2FF',
              boxShadow: '0 0 0 2px rgba(0, 194, 255, 0.2)',
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          '&.MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 194, 255, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 194, 255, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00C2FF',
              boxShadow: '0 0 0 2px rgba(0, 194, 255, 0.2)',
            },
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: alpha('#00C2FF', 0.15),
            color: '#00C2FF',
            boxShadow: `0 0 10px ${alpha('#00C2FF', 0.3)}`,
            '&:hover': {
              backgroundColor: alpha('#00C2FF', 0.25),
            }
          }
        }
      }
    }
  },
});

// Get icon by project type
const SubPage2 = (type) => {
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
  const isSmallScreen = useMediaQuery(futuristicTheme.breakpoints.down('sm'));

  // Sample project data
  const projectsData = [
    {
      id: 1,
      title: "Riverfront Office Tower",
      location: "Chicago, IL",
      type: "Office",
      status: "In Development",
      squareFootage: "245,000 sq ft",
      investment: "$120M",
      description: "A premium office tower with waterfront views and LEED certification.",
      thumbnail: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Midtown Retail Plaza",
      location: "Atlanta, GA",
      type: "Retail",
      status: "Completed",
      squareFootage: "125,000 sq ft",
      investment: "$65M",
      description: "Urban retail center with mixed-use facilities and underground parking.",
      thumbnail: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Eastside Industrial Park",
      location: "Dallas, TX",
      type: "Industrial",
      status: "In Development",
      squareFootage: "450,000 sq ft",
      investment: "$95M",
      description: "Modern industrial complex with advanced logistics infrastructure.",
      thumbnail: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Downtown Residential Tower",
      location: "Miami, FL",
      type: "Mixed-Use",
      status: "Planned",
      squareFootage: "320,000 sq ft",
      investment: "$180M",
      description: "Luxury residential with ground-floor retail and amenities.",
      thumbnail: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Westside Tech Hub",
      location: "San Francisco, CA",
      type: "Office",
      status: "Completed",
      squareFootage: "175,000 sq ft",
      investment: "$145M",
      description: "Modern tech-focused office space with collaborative areas.",
      thumbnail: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Harbor Logistics Center",
      location: "Seattle, WA",
      type: "Industrial",
      status: "In Development",
      squareFootage: "550,000 sq ft",
      investment: "$110M",
      description: "State-of-the-art logistics facility with port access.",
      thumbnail: "/api/placeholder/600/400"
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
    <ThemeProvider theme={futuristicTheme}>
      <Box sx={{ 
        bgcolor: 'background.default', 
        minHeight: '100vh',
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(0, 194, 255, 0.08) 0%, rgba(0, 0, 0, 0) 50%)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      }}>
        <Sidebar />
        {/* Header Section with Futuristic Line effect */}
        <Paper 
          elevation={0} 
          square 
          sx={{ 
            bgcolor: 'background.paper', 
            py: 6,
            borderBottom: '1px solid',
            borderColor: 'rgba(0, 194, 255, 0.15)',
            paddingTop: "15vh",
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Futuristic line overlay */}
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.04,
            backgroundImage: `repeating-linear-gradient(90deg, #00C2FF, #00C2FF 2px, transparent 2px, transparent 40px),
                             repeating-linear-gradient(0deg, #00C2FF, #00C2FF 2px, transparent 2px, transparent 40px)`,
            pointerEvents: 'none',
          }} />
          
          {/* Glow effect */}
          <Box sx={{
            position: 'absolute',
            top: '-100px',
            left: '0',
            width: '100%',
            height: '200px',
            background: 'radial-gradient(ellipse at center, rgba(0, 194, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
            pointerEvents: 'none',
          }} />
          
          <Container maxWidth="lg">
            <Typography 
              variant="h4" 
              component="h1" 
              gutterBottom
              sx={{
                background: 'linear-gradient(90deg, #FFFFFF 0%, #00C2FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 20px rgba(0, 194, 255, 0.4)',
                fontWeight: 700,
                position: 'relative',
                display: 'inline-block',
                pb: 1,
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '60px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #00C2FF 0%, rgba(0, 194, 255, 0) 100%)',
                  borderRadius: '3px',
                }
              }}
            >
              Our Projects
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 'md' }}>
              Explore our portfolio of premium commercial real estate investments across various sectors and locations.
            </Typography>
          </Container>
        </Paper>

        {/* Filters and Search */}
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3, 
              mb: 4, 
              background: 'linear-gradient(135deg, rgba(10, 10, 30, 0.9) 0%, rgba(16, 16, 40, 0.9) 100%)',
              backdropFilter: 'blur(10px)',
              borderLeft: '1px solid rgba(0, 194, 255, 0.2)',
              borderTop: '1px solid rgba(0, 194, 255, 0.1)',
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
                    border: '1px solid rgba(0, 194, 255, 0.2)',
                    borderRadius: '20px !important',
                    px: 2,
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
                        <SearchIcon fontSize="small" sx={{ color: 'rgba(0, 194, 255, 0.7)' }} />
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
                        <FilterListIcon fontSize="small" sx={{ color: 'rgba(0, 194, 255, 0.7)' }} />
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
                <Card elevation={5}>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.thumbnail}
                      alt={project.title}
                      sx={{
                        transition: 'all 0.4s ease',
                        filter: 'brightness(0.85) contrast(1.1)',
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
                        height: '100px',
                        background: 'linear-gradient(to top, rgba(10, 10, 30, 1) 0%, rgba(10, 10, 30, 0) 100%)'
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
                        border: '1px solid rgba(0, 194, 255, 0.3)',
                        backgroundColor: 'rgba(10, 10, 30, 0.8)',
                        backdropFilter: 'blur(4px)',
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Box sx={{ mb: 1.5 }}>
                      <Typography 
                        variant="h6" 
                        component="h2" 
                        gutterBottom={false}
                        sx={{ 
                          mb: 0.5,
                          background: 'linear-gradient(90deg, #FFFFFF 30%, #00C2FF 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <LocationOnIcon fontSize="small" sx={{ color: futuristicTheme.palette.text.secondary, fontSize: 16 }} />
                        <Typography variant="body2" color="text.secondary">
                          {project.location}
                        </Typography> 
                      </Stack>
                    </Box>
                    
                    <Divider sx={{ 
                      my: 1.5, 
                      borderColor: 'rgba(0, 194, 255, 0.1)',
                      '&::before, &::after': {
                        borderColor: 'rgba(0, 194, 255, 0.1)',
                      } 
                    }} />
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: isSmallScreen ? 'auto' : '50px' }}>
                      {project.description}
                    </Typography>

                    <Grid container spacing={2} sx={{ mb: 2 }}>
                      <Grid item xs={6}>
                        <Paper 
                          variant="outlined" 
                          sx={{ 
                            p: 1.5, 
                            backgroundColor: alpha('#00C2FF', 0.03),
                            backgroundImage: 'linear-gradient(135deg, rgba(0, 194, 255, 0.03) 0%, rgba(0, 194, 255, 0.06) 100%)',
                            borderColor: alpha('#00C2FF', 0.2),
                            position: 'relative',
                            overflow: 'hidden',
                          }}
                        >
                          {/* Animated corner accent */}
                          <Box sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '15px',
                            height: '15px',
                            borderRight: '2px solid rgba(0, 194, 255, 0.5)',
                            borderTop: '2px solid rgba(0, 194, 255, 0.5)',
                          }} />
                          
                          <Typography variant="caption" color="text.secondary">
                            Size
                          </Typography>
                          <Typography 
                            variant="body2" 
                            fontWeight="medium"
                            sx={{ color: alpha('#FFFFFF', 0.95) }}
                          >
                            {project.squareFootage}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper 
                          variant="outlined" 
                          sx={{ 
                            p: 1.5, 
                            backgroundColor: alpha('#00C2FF', 0.03),
                            backgroundImage: 'linear-gradient(135deg, rgba(0, 194, 255, 0.03) 0%, rgba(0, 194, 255, 0.06) 100%)',
                            borderColor: alpha('#00C2FF', 0.2),
                            position: 'relative',
                            overflow: 'hidden',
                          }}
                        >
                          {/* Animated corner accent */}
                          <Box sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '15px',
                            height: '15px',
                            borderRight: '2px solid rgba(0, 194, 255, 0.5)',
                            borderTop: '2px solid rgba(0, 194, 255, 0.5)',
                          }} />
                          
                          <Typography variant="caption" color="text.secondary">
                            Investment
                          </Typography>
                          <Typography 
                            variant="body2" 
                            fontWeight="medium"
                            sx={{ color: alpha('#FFFFFF', 0.95) }}
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
                        background: 'linear-gradient(90deg, #0092CF 0%, #00C2FF 100%)',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <span>View Project Details</span>
                      {/* Button glow effect */}
                      <Box 
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
                          animation: 'ripple 3s infinite',
                          '@keyframes ripple': {
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
                background: 'rgba(10, 10, 30, 0.5)',
                borderRadius: 2,
                border: '1px solid rgba(0, 194, 255, 0.1)',
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
                  borderColor: 'rgba(0, 194, 255, 0.5)',
                  '&:hover': {
                    borderColor: '#00C2FF',
                    boxShadow: '0 0 10px rgba(0, 194, 255, 0.3)',
                  }
                }}
              >
                Clear all filters
              </Button>
            </Box>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default SubPage2;
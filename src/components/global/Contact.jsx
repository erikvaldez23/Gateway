import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Snackbar,
  TextField,
  Typography,
  Alert,
  Slider,
  useMediaQuery,
  useTheme,
  InputAdornment,
  CircularProgress,
  alpha,
  styled
} from "@mui/material";
import { 
  Building, 
  Mail, 
  Phone, 
  User, 
  MessageSquare, 
  Settings, 
  DollarSign, 
  CheckCircle 
} from "lucide-react";

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.05)",
  borderRadius: "24px",
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  boxShadow: `0 10px 40px 0 rgba(0, 0, 0, 0.37)`,
  border: `1px solid rgba(255, 255, 255, 0.18)`,
  overflow: 'hidden',
  position: 'relative',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 15px 50px 0 rgba(0, 0, 0, 0.45)`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${alpha(theme.palette.primary.light, 0.6)})`,
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
    backgroundColor: alpha('#000', 0.2),
    color: '#fff',
    transition: 'all 0.3s ease',
    '& input': {
      color: '#fff',
      '&::placeholder': {
        color: alpha('#fff', 0.6),
        opacity: 1,
      }
    },
    '& textarea': {
      color: '#fff',
      '&::placeholder': {
        color: alpha('#fff', 0.6),
        opacity: 1,
      }
    },
    '& fieldset': {
      borderColor: alpha('#fff', 0.2),
      transition: 'border-color 0.3s ease',
    },
    '&:hover fieldset': {
      borderColor: alpha('#fff', 0.5),
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: '2px',
    }
  },
  '& .MuiInputLabel-root': {
    color: alpha('#fff', 0.7),
    transition: 'color 0.3s ease',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiFormHelperText-root': {
    color: theme.palette.error.main,
    marginTop: '6px',
    fontSize: '0.75rem',
  },
  '& .MuiInputAdornment-root .MuiSvgIcon-root, & .MuiInputAdornment-root svg': {
    color: alpha('#fff', 0.7),
  }
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  backgroundColor: alpha('#000', 0.2),
  color: '#fff',
  '& .MuiSelect-select': {
    color: '#fff',
  },
  '& .MuiSvgIcon-root': {
    color: '#fff',
  },
  '& fieldset': {
    borderColor: alpha('#fff', 0.2),
    transition: 'border-color 0.3s ease',
  },
  '&:hover fieldset': {
    borderColor: alpha('#fff', 0.5),
  },
  '&.Mui-focused fieldset': {
    borderColor: theme.palette.primary.main,
    borderWidth: '2px',
  }
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  fontWeight: 600,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
  '& svg': {
    color: theme.palette.primary.main,
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  borderRadius: '50%',
  padding: theme.spacing(1),
  width: 40,
  height: 40,
  boxShadow: `0 4px 8px ${alpha(theme.palette.primary.main, 0.25)}`,
}));

const GlowDivider = styled(Divider)(({ theme }) => ({
  background: `linear-gradient(to right, ${alpha(theme.palette.primary.main, 0.7)}, transparent)`,
  height: '2px',
  marginBottom: theme.spacing(3),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.4)}`,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(1.75, 3),
  fontWeight: 600,
  letterSpacing: '0.5px',
  transition: theme.transitions.create(['transform', 'box-shadow'], {
    duration: theme.transitions.duration.standard,
  }),
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.6)}`,
  },
  '&:active': {
    transform: 'translateY(-1px)',
  },
  '&.Mui-disabled': {
    background: alpha(theme.palette.primary.main, 0.4),
  }
}));

const BudgetSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primary.main,
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.16)}`,
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: `0 0 0 8px ${alpha(theme.palette.primary.main, 0.32)}`,
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: theme.palette.primary.main,
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
  '& .MuiSlider-mark': {
    backgroundColor: alpha('#fff', 0.5),
    height: 8,
    width: 1,
    '&.MuiSlider-markActive': {
      backgroundColor: 'currentColor',
    },
  },
}));

const propertyTypesOptions = [
  { value: "office", label: "Office Space" },
  { value: "retail", label: "Retail" },
  { value: "industrial", label: "Industrial" },
  { value: "mixed", label: "Mixed Use" },
  { value: "land", label: "Land" },
  { value: "residential", label: "Residential" },
  { value: "hospitality", label: "Hospitality" }
];

const budgetMarks = [
  { value: 100000, label: '$100K' },
  { value: 500000, label: '$500K' },
  { value: 1000000, label: '$1M' },
  { value: 5000000, label: '$5M' },
  { value: 10000000, label: '$10M+' },
];

export default function ContactForm() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [formData, setFormData] = useState({
    name: "", 
    email: "", 
    phone: "", 
    company: "", 
    message: "",
    propertyType: "", 
    budget: 1000000, 
    contactPreference: "email", 
    newsletter: true
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Format budget value for display
  const formatBudget = (value) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    return `$${(value / 1000).toFixed(0)}K`;
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    
    // Mark field as touched
    if (!touched[name]) {
      setTouched({ ...touched, [name]: true });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleSliderChange = (_, newValue) => {
    setFormData({ ...formData, budget: newValue });
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return !value.trim() ? "Name is required" : "";
      case 'email':
        return !value.trim() 
          ? "Email is required" 
          : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) 
            ? "Email is invalid" 
            : "";
      case 'phone':
        return !value.trim() 
          ? "Phone number is required" 
          : !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(value)
            ? "Phone number is invalid"
            : "";
      case 'message':
        return !value.trim() ? "Message is required" : "";
      case 'propertyType':
        return !value ? "Please select a property type" : "";
      default:
        return "";
    }
  };

  // Validate fields when they're touched
  useEffect(() => {
    const newErrors = {};
    Object.keys(touched).forEach(field => {
      if (touched[field]) {
        const error = validateField(field, formData[field]);
        if (error) {
          newErrors[field] = error;
        }
      }
    });
    setErrors(newErrors);
  }, [formData, touched]);

  const validateAllFields = () => {
    const allTouched = {};
    const validationErrors = {};
    
    // Mark all fields as touched
    ['name', 'email', 'phone', 'message', 'propertyType'].forEach(field => {
      allTouched[field] = true;
      const error = validateField(field, formData[field]);
      if (error) {
        validationErrors[field] = error;
      }
    });
    
    setTouched(allTouched);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateAllFields()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        name: "", email: "", phone: "", company: "", message: "",
        propertyType: "", budget: 1000000, contactPreference: "email", newsletter: true
      });
      setTouched({});
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setIsSubmitted(false);
    setSubmitError(null);
  };

  return (
    <Box sx={{ width: "100%", background: '#000' }}>
      <Box sx={{ maxWidth: "90vw", mx: "auto", px: { xs: 2, sm: 4 }, py: 8, color: 'white' }} id="contact">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            variant={isMobile ? "h3" : "h2"}
            fontWeight={700}
            mb={2}
            sx={{
              background: "linear-gradient(to right, #c9b49a, #e2c799)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              letterSpacing: "-0.5px"
            }}
          >
            Contact Us
          </Typography>
          <Box
            sx={{
              mx: "auto", width: 80, height: 4, mb: 3,
              background: "linear-gradient(to right, rgba(201,180,154,0.9), rgba(201,180,154,0.2))",
              borderRadius: 2,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255,255,255,0.8)",
              maxWidth: 800, mx: "auto", fontWeight: 400, lineHeight: 1.6,
            }}
          >
            Interested in exploring investment opportunities? Reach out to our team of experts and let us guide you through your next venture.
          </Typography>
        </Box>

        {/* Form Card with subtle animation */}
        <StyledCard>
          <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
            <form onSubmit={handleSubmit} noValidate aria-label="Contact form">

              {/* Personal Info */}
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <SectionTitle variant="h6">
                    <IconWrapper><User size={20} /></IconWrapper>
                    Personal Information
                  </SectionTitle>
                  <GlowDivider />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                  <StyledTextField 
                    fullWidth 
                    label="Full Name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && !!errors.name} 
                    helperText={touched.name && errors.name} 
                    required 
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <User size={18} />
                        </InputAdornment>
                      ),
                    }}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                  <StyledTextField 
                    fullWidth 
                    label="Company Name (Optional)" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Building size={18} />
                        </InputAdornment>
                      ),
                    }} 
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                  <StyledTextField 
                    fullWidth 
                    label="Email Address" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && !!errors.email} 
                    helperText={touched.email && errors.email} 
                    required 
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Mail size={18} />
                        </InputAdornment>
                      ),
                    }}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                  <StyledTextField 
                    fullWidth 
                    label="Phone Number" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.phone && !!errors.phone} 
                    helperText={touched.phone && errors.phone} 
                    required 
                    variant="outlined"
                    placeholder="(123) 456-7890"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Phone size={18} />
                        </InputAdornment>
                      ),
                    }}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                </Grid>

                {/* Property Requirements */}
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <SectionTitle variant="h6">
                    <IconWrapper><Building size={20} /></IconWrapper>
                    Property Requirements
                  </SectionTitle>
                  <GlowDivider />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth error={touched.propertyType && !!errors.propertyType} required>
                    <FormLabel sx={{ mb: 1, color: alpha('#fff', 0.7) }}>Property Type</FormLabel>
                    <StyledSelect 
                      name="propertyType" 
                      value={formData.propertyType} 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Property type' }}
                    >
                      <StyledMenuItem value="" disabled>Select property type</StyledMenuItem>
                      {propertyTypesOptions.map(option => (
                        <StyledMenuItem key={option.value} value={option.value}>
                          {option.label}
                        </StyledMenuItem>
                      ))}
                    </StyledSelect>
                    {touched.propertyType && errors.propertyType && (
                      <FormHelperText>{errors.propertyType}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <FormLabel sx={{ mb: 1, color: alpha('#fff', 0.7), display: 'flex', alignItems: 'center', gap: 1 }}>
                      <DollarSign size={16} /> Investment Budget
                    </FormLabel>
                    <Box sx={{ px: 2, pt: 3, pb: 1 }}>
                      <BudgetSlider
                        value={formData.budget}
                        onChange={handleSliderChange}
                        min={100000}
                        max={10000000}
                        step={100000}
                        marks={budgetMarks}
                        valueLabelDisplay="auto"
                        valueLabelFormat={formatBudget}
                        aria-label="Budget slider"
                      />
                    </Box>
                    <Typography sx={{ textAlign: 'center', mt: 1, color: alpha('#fff', 0.9) }}>
                      Budget: <strong>{formatBudget(formData.budget)}</strong>
                    </Typography>
                  </FormControl>
                </Grid>

                {/* Message */}
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <SectionTitle variant="h6">
                    <IconWrapper><MessageSquare size={20} /></IconWrapper>
                    Your Message
                  </SectionTitle>
                  <GlowDivider />
                </Grid>

                <Grid item xs={12}>
                  <StyledTextField 
                    fullWidth 
                    label="Message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.message && !!errors.message} 
                    helperText={touched.message && errors.message} 
                    required 
                    multiline 
                    rows={4} 
                    variant="outlined"
                    placeholder="Tell us about your investment goals and requirements..."
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                </Grid>

                {/* Contact Preferences */}
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <SectionTitle variant="h6">
                    <IconWrapper><Settings size={20} /></IconWrapper>
                    Contact Preferences
                  </SectionTitle>
                  <GlowDivider />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl component="fieldset">
                    <FormLabel sx={{ color: alpha('#fff', 0.7) }}>Preferred Contact Method</FormLabel>
                    <RadioGroup 
                      row 
                      name="contactPreference" 
                      value={formData.contactPreference} 
                      onChange={handleChange}
                      aria-label="contact preference"
                    >
                      <FormControlLabel 
                        value="email" 
                        control={<Radio sx={{ color: '#fff', '&.Mui-checked': { color: "theme.palette.primary.main" } }} />} 
                        label="Email" 
                      />
                      <FormControlLabel 
                        value="phone" 
                        control={<Radio sx={{ color: '#fff', '&.Mui-checked': { color: theme.palette.primary.main } }} />} 
                        label="Phone" 
                      />
                      <FormControlLabel 
                        value="either" 
                        control={<Radio sx={{ color: '#fff', '&.Mui-checked': { color: theme.palette.primary.main } }} />} 
                        label="Either" 
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={formData.newsletter} 
                        onChange={handleChange} 
                        name="newsletter" 
                        sx={{ 
                          color: '#fff',
                          '&.Mui-checked': { 
                            color: theme.palette.primary.main 
                          } 
                        }} 
                      />
                    } 
                    label="Subscribe to our newsletter for market insights and property listings" 
                  />
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                  <SubmitButton 
                    type="submit" 
                    variant="contained" 
                    fullWidth 
                    disableElevation
                    disabled={isSubmitting}
                    startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <CheckCircle size={20} />}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </SubmitButton>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </StyledCard>

        {/* Success Snackbar */}
        <Snackbar 
          open={isSubmitted} 
          autoHideDuration={6000} 
          onClose={handleCloseSnackbar} 
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity="success" 
            variant="filled"
            sx={{ 
              borderRadius: 2, 
              bgcolor: alpha(theme.palette.success.main, 0.9), 
              color: '#fff',
              boxShadow: `0 4px 12px ${alpha(theme.palette.success.main, 0.5)}`
            }}
          >
            Thank you for contacting us! We'll get back to you shortly.
          </Alert>
        </Snackbar>

        {/* Error Snackbar */}
        <Snackbar 
          open={!!submitError} 
          autoHideDuration={6000} 
          onClose={handleCloseSnackbar} 
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity="error" 
            variant="filled"
            sx={{ 
              borderRadius: 2, 
              bgcolor: alpha(theme.palette.error.main, 0.9), 
              color: '#fff',
              boxShadow: `0 4px 12px ${alpha(theme.palette.error.main, 0.5)}`
            }}
          >
            {submitError}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
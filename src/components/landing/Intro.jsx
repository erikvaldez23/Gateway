import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
  Grid,
  Chip,
  IconButton,
  Paper,
  Fade,
  useTheme,
  alpha,
} from "@mui/material";
import {
  PlayArrow,
  CalendarToday,
  Group,
  Hub,
  ArrowForward,
  LiveTv,
} from "@mui/icons-material";

const Intro = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const theme = useTheme();

  const featuredContent = {
    title: "Still with Us",
    speaker: "Dr. Megan Fate Marshman",
    date: "June 7, 2025",
    description:
      "Is the Holy Spirit still at work today? Dr. Megan Fate Marshman continues our Empowered series with a powerful reminder that God hasn't left us—He's still moving. Through the story of Pentecost, we see that the same Holy Spirit who filled and empowered the early Church is still present today—calling, equipping, and transforming lives!",
    image: "/Commercial-Development/intro/maxresdefault.jpg",
    isLive: false,
  };

  const ministryCards = [
    {
      id: "visiting",
      title: "Visiting Gateway?",
      description:
        "We can't wait to welcome you in person or online! Information is available to answer questions ahead of time about your visit so you can feel at home right away.",
      image: "/Commercial-Development/intro/visit.jpg",
      action: "Plan your visit",
      color: "#667eea",
    },
    {
      id: "children",
      title: "Weekend Children's Ministry",
      description:
        "Children's ministry (birth through sixth grade) is available at all campuses during weekend services, and registration is not required.",
      image: "/Commercial-Development/intro/kids-registration.jpg",
      action: "Learn more about Gateway Kids",
      color: "#764ba2",
    },
    {
      id: "connect",
      title: "Let's Connect!",
      description:
        "Are you looking for meaningful ways to connect with others in the Gateway family? There are resources available to help you find a group, host a weekend sermon watch party, or dive deeper in your personal relationship with Jesus.",
      image: "/Commercial-Development/intro/Connect-card.jpg",
      action: "Learn more",
      color: "#f093fb",
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Featured Content */}
        <Fade in timeout={1000}>
          <Paper
            elevation={12}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              mb: 6,
              background: "white",
              position: "relative",
            }}
          >
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{ position: "relative" }}
                >
                  <CardMedia
                    component="img"
                    height="100%"
                    image={featuredContent.image}
                    alt={featuredContent.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    {featuredContent.isLive && (
                      <Chip
                        icon={<LiveTv />}
                        label="Live"
                        color="error"
                        variant="filled"
                        size="small"
                        sx={{ fontWeight: 600 }}
                      />
                    )}
                    <Chip
                      label="Livestreamed Service"
                      variant="filled"
                      size="small"
                      sx={{
                        bgcolor: alpha("#667eea", 0.9),
                        color: "white",
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      bgcolor: "rgba(255,255,255,0.9)",
                      width: 80,
                      height: 80,
                      "&:hover": {
                        bgcolor: "white",
                        transform: "translate(-50%, -50%) scale(1.1)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <PlayArrow sx={{ fontSize: 40, color: "#667eea" }} />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CalendarToday
                      sx={{ mr: 1, color: "#667eea", fontSize: 20 }}
                    />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontWeight={600}
                    >
                      {featuredContent.date}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: "#2c3e50",
                      fontSize: { xs: "1.5rem", md: "2rem" },
                    }}
                  >
                    "{featuredContent.title}"
                  </Typography>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: 600 }}
                  >
                    by {featuredContent.speaker}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 4, lineHeight: 1.7, flex: 1 }}
                  >
                    {featuredContent.description}
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<PlayArrow />}
                    sx={{
                      borderRadius: 3,
                      py: 1.5,
                      fontWeight: 600,
                      background:
                        "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Watch Now
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
          </Paper>
        </Fade>

        {/* Ministry Cards */}
        <Grid container spacing={4}>
          {ministryCards.map((card, index) => (
            <Grid item xs={12} md={4} key={card.id}>
              <Fade in timeout={1200 + index * 200}>
                <Card
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                    transform:
                      hoveredCard === card.id
                        ? "translateY(-12px)"
                        : "translateY(0)",
                    boxShadow:
                      hoveredCard === card.id
                        ? "0 20px 40px rgba(0,0,0,0.2)"
                        : "0 8px 24px rgba(0,0,0,0.12)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${
                        card.color
                      }, ${alpha(card.color, 0.7)})`,
                      transform:
                        hoveredCard === card.id ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.3s ease",
                    },
                    position: "relative",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={card.image}
                    alt={card.title}
                    sx={{
                      transition: "transform 0.4s ease",
                      transform:
                        hoveredCard === card.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <CardContent
                    sx={{
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: "#2c3e50",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {card.id === "visiting" && (
                        <Group sx={{ mr: 1, color: card.color }} />
                      )}
                      {card.id === "children" && (
                        <Group sx={{ mr: 1, color: card.color }} />
                      )}
                      {card.id === "connect" && (
                        <Hub sx={{ mr: 1, color: card.color }} />
                      )}
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.6, flex: 1, fontSize: "1rem" }}
                    >
                      {card.description}
                    </Typography>
                    <Button
                      variant="text"
                      endIcon={<ArrowForward />}
                      sx={{
                        color: card.color,
                        fontWeight: 600,
                        alignSelf: "flex-start",
                        "&:hover": {
                          bgcolor: alpha(card.color, 0.1),
                          transform: "translateX(4px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {card.action}
                    </Button>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Intro;

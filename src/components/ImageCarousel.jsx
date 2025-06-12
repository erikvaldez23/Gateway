import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const callToActionData = {
  "vehicle-window-tinting": {
    images: [
      "/v-window-tint/Tint Tek-63.jpeg",
    ],
  },
  "tesla-window-tinting": {
    images: [
      "/tesla/Tint Tek-165.jpg",
      "/tesla/Tint Tek-166.jpg",
      "/tesla/Tint Tek-170.jpg",
      "/tesla/Tint Tek-181.jpg",
      "/tesla/Tint Tek-190.jpg",
      "/tesla/Tint Tek-195.jpg",
      "/tesla/tesla test.jpg",
    ],
  },
  "residential-window-tinting": {
    images: [
      "/residential/residential-1.png",
      "/residential/residential-2.png",
      "/residential/residential-4.png",
    ],
  },
  "commercial-window-tinting": {
    images: [
      "/commercial/Tint Tek-116.jpg",
      "/commercial/Tint Tek-121.jpg",
      "/commercial/Tint Tek-125.jpg",
      "/commercial/Tint Tek-128.jpg",
      "/commercial/Tint Tek-138.jpg",
      "/commercial/Tint Tek-139.jpg",
      "/commercial/Tint Tek-146.jpg",
      "/commercial/Tint Tek-152.jpg",
    ],
  },
  "vehicle-paint-correction": {
    images: [
      "/",
      "/",
      "/",
      "/",
      "/",
    ],
  },
  "vehicle-paint-protection": {
    images: [
      "/",
      "/",
      "/",
      "/",
      "/",
    ],
  },
  "headlight-services": {
    images: [
      "/",
      "/",
      "/",
      "/",
      "/",
    ],
  },
  "windshield-protection-film": {
    images: [
      "/",
      "/",
      "/",
      "/",
      "/",
    ],
  },
};

const ImageCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { serviceId } = useParams();
  const currentData =
    callToActionData[serviceId] ||
    callToActionData["commercial-window-tinting"];

  const { title, description, images } = currentData;

  // Framer Motion animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeSlideVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const sliderSettings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "#000",
          color: "#000",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            width: "100%",
          }}
        >
          {/* Image Carousel */}
          <Box sx={{py: 3 }}>
            <Slider {...sliderSettings}>
              {images.map((src, index) => (
                <Box key={index} sx={{ px: 2 }} className="carousel-slide">
                  <Box
                    component="img"
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="carousel-img"
                    sx={{
                      width: "100%",
                      maxHeight: isMobile ? "300px" : "450px",
                      objectFit: "cover",
                      borderRadius: "24px",
                      transition: "all 0.4s ease",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                      "&:hover": {
                        cursor: "pointer",
                        transform: "scale(1.02)",
                      },
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
{/* 
          <Typography
            variant={isMobile ? "h4" : "h2"}
            component={motion.h3}
            variants={fadeSlideVariant}
            sx={{
              fontWeight: "bold",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            component={motion.p}
            variants={fadeSlideVariant}
            transition={{ delay: 0.3 }}
            sx={{
              mt: 2,
              fontSize: isMobile ? "1rem" : "1.2rem",
              lineHeight: "1.6",
              opacity: 0.9,
            }}
          >
            {description}
          </Typography> */}

          {/* <Button
            component={motion.button}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{
              mt: 3,
              backgroundColor: "#000",
              color: "#fff",
              fontWeight: "bold",
              px: isMobile ? 3 : 4,
              py: isMobile ? 1.2 : 1.5,
              borderRadius: "30px",
              textTransform: "uppercase",
              fontSize: isMobile ? "1rem" : "1.1rem",
              width: isMobile ? "100%" : "auto",
            }}
            href="/quote"
          >
            Get a Free Quote
          </Button> */}
        </Box>
      </Box>
    </motion.div>
  );
};

export default ImageCarousel;
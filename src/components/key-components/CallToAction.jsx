import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { FaTimes } from "react-icons/fa";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function CallToAction() {
  const navigate = useNavigate();
  const handleOpen = () => setOpen(false);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ background: "#000" }}>
      <Box
        sx={{
          minHeight: "90vh",
          color: "#fff",
          px: { xs: 4, md: 10 },
          py: 10,
          background: "#000",
          background: "-webkit-linear-gradient(to right, #000000, #434343)",
          background: " linear-gradient(to right, #000000, #434343)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 10,
        }}
      >
        {/* Headline */}
        <Box sx={{ maxWidth: 800 }}>
          <Typography variant="h1" sx={{ fontWeight: "bold", mb: 2 }}>
            GET STARTED WITH GREEN ARK
          </Typography>
          <Typography variant="h4" sx={{ color: "#ccc", mb: 4 }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            quas ex, ipsum itaque qui doloribus illo officia neque quia tenetur
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#c9b49a",
              color: "#000",
              fontWeight: 600,
              borderRadius: 2,
              px: 3,
              py: 1,
              "&:hover": {
                backgroundColor: "#000",
                color: "#fff",
              },
            }}
            startIcon={<AddIcon />}
          >
            GET STARTED
          </Button>
        </Box>

        {/* Footer CTA */}
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius: 4,
            mt: 10,
            p: 4,
            minHeight: "30vh",
            display: "flex",
            alignItems: "center",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
                STAY UP TO DATE
              </Typography>
              <Box display="flex" gap={1}>
                <TextField
                  placeholder="Email address"
                  variant="filled"
                  fullWidth
                  sx={{
                    bgcolor: "#000",
                    input: { color: "#fff" },
                    borderRadius: 5,
                  }}
                />
                <Button
                  sx={{
                    backgroundColor: "#c9b49a",
                    color: "#000",
                    fontWeight: 600,
                    px: 6,
                    borderRadius: 5,
                    "&:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
                    },
                  }}
                >
                  SIGN UP
                </Button>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              container
              spacing={4}
              justifyContent="flex-end"
              marginLeft="150px"
            >
              {/* Column 1 */}
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: "left" }}>
                  <Typography variant="h2" fontWeight={600}>
                    Company
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/about")}
                  >
                    About Us
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/careers")}
                  >
                    Careers
                  </Typography>
                </Box>
              </Grid>

              {/* Column 2 */}
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: "left" }}>
                  <Typography variant="h2" fontWeight={600}>
                    Support
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/support")}
                  >
                    Help Center
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/contact")}
                  >
                    Contact
                  </Typography>
                </Box>
              </Grid>

              {/* Column 3 */}
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: "left" }}>
                  <Typography variant="h2" fontWeight={600}>
                    Legal
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/privacy")}
                  >
                    Privacy Policy
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/terms")}
                  >
                    Terms of Use
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
  IconButton,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

import "./App.css";

// core components
import Topbar from "./components/key-components/Topbar";
import Footer from "./components/key-components/Footer";
// import Loader from "./components/loader/Loader";
import UpdatedLoader from "./components/loader/UpdatedLoader";
import Chatbot from "./ChatBot";
import RevealSection from "./components/animations/RevealSection";
import VideoBackground from "./components/animations/VideoBackground";
import SlideUpReveal from "./components/animations/SlideUpReveal";
import OceanLoader from "./components/loader/Loader3";
import LottieLoader from "./components/animations/LottieLoader";

// landing & sub-pages
import Hero from "./components/hero/Hero";
import WhatWeDo from "./components/landing/WhatWeDo";
import WhyInvestWithUs from "./components/landing/WhyInvestWithUs";
import CallToAction from "./components/key-components/CallToAction";
import QuickLinks from "./components/key-components/QuickLinks";
import Contact from "./components/key-components/Contact";
import PrivacyPolicy from "./components/sub-pages/PrivacyPolicy";
import Offer from "./components/sub-pages/Offer";
import About from "./components/sub-pages/About";
import How from "./components/sub-pages/How";
import Portfolio from "./components/sub-pages/Portfolio";
import Team from "./components/sub-pages/Team";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Dashboard from "./components/portfolio-dashboard/Dashboard"
import Projects from "./components/portfolio-dashboard/portfolio-sub-pages/Proejcts";
import SubPage1 from "./components/portfolio-dashboard/portfolio-sub-pages/SubPage1";
import SubPage2 from "./components/portfolio-dashboard/portfolio-sub-pages/SubPage2";


// theme
const theme = createTheme({
  palette: {
    primary: { main: "#c9b49a" },
  },
});

// allow scrolling-to-anchor on navigation
const ScrollHandler = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const offset = 100;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);
  return null;
};

export default function App() {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  const loading = !(pageLoaded && animationDone);

  const handleOpenChatbot = () => setChatbotOpen(true);
  const handleCloseChatbot = () => setChatbotOpen(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setPageLoaded(true);
      return;
    }
    const onLoad = () => setPageLoaded(true);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    const minTime = 3000;
    const timer = setTimeout(() => setAnimationDone(true), minTime);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <ScrollHandler />

        {/* Background Video */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -999,
          }}
        >
          {/* <VideoBackground /> */}
        </Box>

        {!loading && <Topbar handleOpenChatbot={handleOpenChatbot} />}

        <>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {loading ? (
                    <LottieLoader />
                  ) : (
                    <>
                      {/* <Box
                        sx={{
                          position: "fixed",
                          top: 0,
                          left: 0,
                          width: "100vw",
                          height: "100vh",
                          zIndex: 1,
                        }}
                      > */}
                        <Hero loadingDone />
                      {/* </Box> */}

                      {/* <Box sx={{ height: "100vh" }} /> */}

                      {/* <SlideUpReveal zIndex={2}> */}
                        <WhatWeDo />
                      {/* </SlideUpReveal> */}

                      {/* <SlideUpReveal zIndex={3}> */}
                        <WhyInvestWithUs />
                      {/* </SlideUpReveal> */}

                      {/* <SlideUpReveal zIndex={4}> */}
                        <CallToAction />
                      {/* </SlideUpReveal> */}

                      {/* <SlideUpReveal zIndex={6}> */}
                        <Contact />
                      {/* </SlideUpReveal> */}
                    </>
                  )}
                </>
              }
            />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/what-we-offer" element={<Offer />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<How />} />
            <Route path="/portfolio" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />


            {/* DASHBOARD SUB-PAGES */}
            <Route path="/portfolio/overview" element={<NotFound />} />
            <Route path="/portfolio/analytics" element={<NotFound />} />
            <Route path="/portfolio/buildings" element={<Projects />} />
            <Route path="/portfolio/sub-link1" element={<SubPage1 />} />
            <Route path="/portfolio/sub-link1" element={<SubPage1 />} />
          </Routes>

          {/* <Chatbot open={chatbotOpen} onClose={handleCloseChatbot} />

          {!chatbotOpen && (
            <Box
              sx={{
                position: "fixed",
                bottom: 20,
                right: 20,
                zIndex: (theme) => theme.zIndex.modal + 5,
              }}
            >
              <IconButton
                onClick={handleOpenChatbot}
                sx={{
                  backgroundColor: "#c9b49a",
                  color: "white",
                  "&:hover": { backgroundColor: "#000" },
                  width: 70,
                  height: 70,
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
                }}
              >
                <ChatIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
          )} */}

          {!loading && <Footer />}
        </>
      </Router>
    </ThemeProvider>
  );
}

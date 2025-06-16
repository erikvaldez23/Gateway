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
import Topbar from "./components/global/Topbar";
import Topbar2 from "./components/global/Topbar2";
import Footer from "./components/global/Footer";
import Chatbot from "./ChatBot"

// landing & sub-pages
import Hero from "./components/hero/Hero";
import Hero2 from "./components/hero/Hero2";
// import CallToAction from "./components/global/CallToAction";
import QuickLinks from "./components/global/QuickLinks";
// import Contact from "./components/global/Contact";
// import PrivacyPolicy from "./components/sub-pages/PrivacyPolicy";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";

import Intro from "./components/landing/Intro"
import Intro2 from "./components/landing/Intro2"
import Chat from "./components/sub-pages/Chat";


// theme
const theme = createTheme({
  palette: {
    primary: { main: "#1f3b70" },
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

        <Topbar2 handleOpenChatbot={handleOpenChatbot} />

        <>
          <Routes>
            <Route
              path="/"
              element={
                <>
                    <>
                        <Hero2 />
                        <Intro />
                        <Intro2 />
                        {/* <CallToAction /> */}
                        {/* <Contact /> */}
                    </>
                </>
              }
            />

            {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/what-we-offer" element={<Offer />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<How />} />
            <Route path="/portfolio" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} /> */}
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<NotFound />} />


          </Routes>

          {!loading && <Chatbot open={chatbotOpen} onClose={handleCloseChatbot} />}

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
                  backgroundColor: "#1f3b70",
                  color: "white",
                  "&:hover": { backgroundColor: "#000" },
                  width: 60,
                  height: 60,
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
                }}
              >
                <ChatIcon sx={{ fontSize: 28 }} />
              </IconButton>
            </Box>
          )}

          {!location.hash.includes('#/chat') && <Footer />}
        </>
      </Router>
    </ThemeProvider>
  );
}

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
import Topbar2 from "./components/global/Topbar2";
import Footer from "./components/global/Footer";
import Chatbot from "./ChatBot";

// landing & sub-pages
import Hero2 from "./components/hero/Hero2";
import Intro from "./components/landing/Intro";
import Intro2 from "./components/landing/Intro2";
import NotFound from "./components/NotFound";
import Chat from "./components/sub-pages/Chat";
import ScrollToTop from "./components/ScrollToTop";

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

function AppRoutes({
  chatbotOpen,
  loading,
  handleOpenChatbot,
  handleCloseChatbot,
}) {
  const location = useLocation();

  return (
    <>
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

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero2 />
              <Intro />
              <Intro2 />
            </>
          }
        />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!loading && location.pathname !== "/chat" && (
        <Chatbot open={chatbotOpen} onClose={handleCloseChatbot} />
      )}

      {!chatbotOpen && location.pathname !== "/chat" && (
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

      {location.pathname !== "/chat" && <Footer />}
    </>
  );
}

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
    const timer = setTimeout(() => setAnimationDone(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppRoutes
          chatbotOpen={chatbotOpen}
          loading={loading}
          handleOpenChatbot={handleOpenChatbot}
          handleCloseChatbot={handleCloseChatbot}
        />
      </Router>
    </ThemeProvider>
  );
}

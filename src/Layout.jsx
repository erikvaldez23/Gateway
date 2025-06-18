import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/global/Footer";
import Chatbot from "./ChatBot";
import { Box, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const Layout = ({ chatbotOpen, handleOpenChatbot, handleCloseChatbot, loading }) => {
  const location = useLocation();
  const isChatPage = location.pathname === "/chat";

  return (
    <>
      <Outlet />

      {!loading && !isChatPage && (
        <Chatbot open={chatbotOpen} onClose={handleCloseChatbot} />
      )}

      {!chatbotOpen && !isChatPage && (
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

      {!isChatPage && <Footer />}
    </>
  );
};

export default Layout;

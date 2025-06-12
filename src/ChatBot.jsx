import { useRef, useEffect, useState } from "react";
import {
  Box,
  IconButton,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

export default function Chatbot({ open, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // ✅ Welcome message when chatbot opens
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          sender: "bot",
          text: "👋 Hi there! Welcome to Green Ark Investments. Ask me anything!",
        },
      ]);
    }
  }, [open, messages.length]);

  // ✅ Scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setTyping(true);

    try {
      const { data } = await axios.post("https://tinttek-website.onrender.com/chat", {
      // const { data } = await axios.post("http://localhost:5001/chat", {
        message: input,
      });

      setTimeout(() => {
        setTyping(false);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: data.reply },
        ]);
      }, 1200);
    } catch (error) {
      console.error("Error fetching response:", error);
      setTimeout(() => {
        setTyping(false);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Error connecting to AI" },
        ]);
      }, 1200);
    }
  };

  if (!open) return null;

  return (
    <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
      <Paper
        elevation={6}
        sx={{
          width: 350,
          height: 500,
          display: "flex",
          flexDirection: "column",
          borderRadius: "15px",
          overflow: "hidden",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            p: 2,
            bgcolor: "black",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Chatbot
          </Typography>
          <IconButton onClick={onClose} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Messages */}
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            scrollbarWidth: "none",
          }}
        >
          <AnimatePresence>
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
                style={{
                  display: "flex",
                  justifyContent:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                <Typography
                  sx={{
                    maxWidth: "75%",
                    p: 1.5,
                    borderRadius: "20px",
                    fontSize: "0.95rem",
                    background:
                      msg.sender === "user"
                        ? "linear-gradient(135deg, #007AFF, #0056D2)"
                        : "#E5E5EA",
                    color: msg.sender === "user" ? "white" : "black",
                    textAlign: "left",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    transition: "all 0.3s ease",
                    whiteSpace: "pre-line",
                  }}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: msg.text.replace(/\n/g, "<br>"),
                    }}
                  />
                </Typography>
              </motion.div>
            ))}

            {/* Typing animation */}
            {typing && (
              <motion.div
                key="typing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <Typography
                  sx={{
                    background: "#E5E5EA",
                    color: "black",
                    borderRadius: "20px",
                    p: 1.5,
                    fontSize: "0.95rem",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    display: "inline-block",
                  }}
                >
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    Typing...
                  </motion.span>
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </Box>

        {/* Input */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 1,
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            bgcolor: "rgba(0, 0, 0, 0.8)",
          }}
        >
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            sx={{
              input: {
                color: "white",
                bgcolor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                padding: "10px",
              },
            }}
          />
          <IconButton onClick={sendMessage} sx={{ color: "#c9b49a", ml: 1 }}>
            <SendIcon />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
}

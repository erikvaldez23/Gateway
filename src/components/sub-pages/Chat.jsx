import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  IconButton,
  Avatar,
  Chip,
  Fade,
  Container,
  AppBar,
  Toolbar,
  useTheme,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Divider,
  Stack,
} from "@mui/material";
import {
  Send as SendIcon,
  SmartToy as BotIcon,
  Person as UserIcon,
  Add as AddIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#212121",
      paper: "#2d2d2d",
    },
    primary: {
      main: "#1f3b70", // ← Changed from green to navy blue
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});


const ChatMessage = ({ message, isUser, timestamp }) => {
  const theme = useTheme();

  return (
    <Fade in={true} timeout={300}>
      <Box
        sx={{
          display: "flex",
          justifyContent: isUser ? "flex-end" : "flex-start",
          mb: 2,
          alignItems: "flex-start",
          gap: 1,
        }}
      >
        {!isUser && (
          <Avatar
            sx={{
              bgcolor: theme.palette.primary.main,
              width: 32,
              height: 32,
              mt: 0.5,
            }}
          >
            <BotIcon sx={{ fontSize: 18 }} />
          </Avatar>
        )}

        <Paper
          elevation={1}
          sx={{
            px: 2,
            py: 1.5,
            maxWidth: "70%",
            bgcolor: isUser
              ? theme.palette.primary.main
              : theme.palette.background.paper,
            color: isUser ? "#fff" : theme.palette.text.primary,
            borderRadius: 2,
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
            {message}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: isUser ? "#fff" : "#fff",
              mt: 0.5,
              display: "block",
            }}
          >
            {timestamp}
          </Typography>
        </Paper>

        {isUser && (
          <Avatar
            sx={{
              bgcolor: theme.palette.grey[600],
              width: 32,
              height: 32,
              mt: 0.5,
            }}
          >
            <UserIcon sx={{ fontSize: 18 }} />
          </Avatar>
        )}
      </Box>
    </Fade>
  );
};

const SuggestedPrompts = ({ onPromptClick }) => {
  const prompts = [
    "What can you help me with?",
    "When are services?",
    "How can I get involved as a volunteer?",
    "What ministries are available for kids and teens?",
  ];

  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="h6"
        sx={{ mb: 2, textAlign: "center", opacity: 0.8 }}
      >
        Try asking me about:
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        justifyContent="center"
      >
        {prompts.map((prompt, index) => (
          <Chip
            key={index}
            label={prompt}
            onClick={() => onPromptClick(prompt)}
            sx={{
              cursor: "pointer",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "primary.main",
              },
              mb: 1,
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const theme = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: getBotResponse(inputValue),
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const getBotResponse = (input) => {
    const responses = [
      "That's an interesting question! I'd be happy to help you explore that topic further.",
      "I understand what you're asking. Let me provide you with a comprehensive answer.",
      "Great question! Here's what I think about that...",
      "I can definitely help you with that. Let me break it down for you.",
      "That's a thoughtful inquiry. Based on my knowledge, here's my perspective...",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handlePromptClick = (prompt) => {
    setInputValue(prompt);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          pt: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Scrollable Chat Container */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            maxWidth: "md",
            overflowY: "auto",
            px: 2,
            pb: 2,
            mb: 8, // space for fixed input
          }}
        >
          {messages.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                textAlign: "center",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                  color: "#fff",
                  width: 64,
                  height: 64,
                  mb: 2,
                }}
              >
                <BotIcon sx={{ fontSize: 32 }} />
              </Avatar>
              <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
                How can I help you today?
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, opacity: 0.7 }}>
                I'm here to assist you with questions, tasks, and conversations.
              </Typography>
              <SuggestedPrompts onPromptClick={handlePromptClick} />
            </Box>
          ) : (
            <>
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.text}
                  isUser={message.isUser}
                  timestamp={message.timestamp}
                />
              ))}
              {isTyping && (
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      width: 32,
                      height: 32,
                    }}
                  >
                    <BotIcon sx={{ fontSize: 18 }} />
                  </Avatar>
                  <Paper
                    elevation={1}
                    sx={{
                      px: 2,
                      py: 1.5,
                      bgcolor: "background.paper",
                      borderRadius: 2,
                      border: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Typography variant="body1">
                      <Box
                        component="span"
                        sx={{
                          "&::after": {
                            content: '"..."',
                            animation: "blink 1.4s infinite",
                            "@keyframes blink": {
                              "0%, 20%": { opacity: 0 },
                              "50%": { opacity: 1 },
                            },
                          },
                        }}
                      >
                        Typing
                      </Box>
                    </Typography>
                  </Paper>
                </Box>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </Box>

        {/* Fixed Input Bar */}
        <Paper
          elevation={2}
          sx={{
            position: "fixed",
            bottom: 20,
            left: 0,
            right: 0,
            width: "100%",
            maxWidth: "md",
            mx: "auto",
            p: 1,
            bgcolor: "background.paper",
            borderTop: `1px solid ${theme.palette.divider}`,
            borderRadius: 50,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-end", gap: 1 }}>
            <TextField
              fullWidth
              multiline
              maxRows={4}
              placeholder="Message ChatBot..."
              variant="standard"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              InputProps={{
                disableUnderline: true,
                sx: {
                  px: 2,
                  py: 1,
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center", // ✅ This centers the text vertically
                  height: "48px", // ✅ Fixed height for consistent alignment
                },
              }}
            />

            <IconButton
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              sx={{
                bgcolor: inputValue.trim() ? "primary.main" : "action.disabled",
                color: inputValue.trim() ? "#fff" : "text.disabled",
                "&:hover": {
                  bgcolor: inputValue.trim()
                    ? "primary.dark"
                    : "action.disabled",
                },
                mb: 0.5,
              }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

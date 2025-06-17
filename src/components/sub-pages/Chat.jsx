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
  useMediaQuery,
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
      main: "#1f3b70",
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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Fade in={true} timeout={300}>
      <Box
        sx={{
          display: "flex",
          justifyContent: isUser ? "flex-end" : "flex-start",
          mb: isMobile ? 1.5 : 2,
          alignItems: "flex-start",
          gap: isMobile ? 0.5 : 1,
          px: isMobile ? 1 : 0,
        }}
      >
        {!isUser && (
          <Avatar
            sx={{
              bgcolor: theme.palette.primary.main,
              width: isMobile ? 28 : 32,
              height: isMobile ? 28 : 32,
              mt: 0.5,
              flexShrink: 0,
            }}
          >
            <BotIcon sx={{ fontSize: isMobile ? 16 : 18 }} />
          </Avatar>
        )}

        <Paper
          elevation={1}
          sx={{
            px: isMobile ? 1.5 : 2,
            py: isMobile ? 1 : 1.5,
            maxWidth: isMobile ? "85%" : "70%",
            bgcolor: isUser
              ? theme.palette.primary.main
              : "theme.palette.background.paper",
            color: isUser ? "#fff" : theme.palette.text.primary,
            borderRadius: isMobile ? 1.5 : 2,
            border: `1px solid ${theme.palette.divider}`,
            wordBreak: "break-word",
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: 1.5,
              fontSize: isMobile ? '0.9em' : '1em',
            }}
          >
            {message}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: isUser ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.6)",
              mt: 0.5,
              display: "block",
              fontSize: isMobile ? '0.7em' : '0.75em',
            }}
          >
            {timestamp}
          </Typography>
        </Paper>

        {isUser && (
          <Avatar
            sx={{
              bgcolor: theme.palette.grey[600],
              width: isMobile ? 28 : 32,
              height: isMobile ? 28 : 32,
              mt: 0.5,
              flexShrink: 0,
            }}
          >
            <UserIcon sx={{ fontSize: isMobile ? 16 : 18 }} />
          </Avatar>
        )}
      </Box>
    </Fade>
  );
};

const SuggestedPrompts = ({ onPromptClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const prompts = [
    "What can you help me with?",
    "When are services?",
    "How can I get involved as a volunteer?",
    "What ministries are available for kids and teens?",
  ];

  return (
    <Box sx={{ mb: 3, px: isMobile ? 2 : 0 }}>
      <Typography
        variant={isMobile ? "h6" : "h6"}
        sx={{ 
          mb: 2, 
          textAlign: "center", 
          opacity: 0.8,
          fontSize: isMobile ? '1.1em' : '1.25em',
        }}
      >
        Try asking me about:
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        justifyContent="center"
        sx={{ gap: isMobile ? 0.5 : 1 }}
      >
        {prompts.map((prompt, index) => (
          <Chip
            key={index}
            label={prompt}
            onClick={() => onPromptClick(prompt)}
            sx={{
              cursor: "pointer",
              fontSize: isMobile ? "0.8rem" : "1rem",
              height: isMobile ? 32 : 'auto',
              "& .MuiChip-label": {
                px: isMobile ? 1 : 1.5,
                py: isMobile ? 0.5 : 1,
              },
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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Prevent zoom on input focus for iOS
  useEffect(() => {
    if (isMobile) {
      const viewport = document.querySelector("meta[name=viewport]");
      if (viewport) {
        viewport.setAttribute("content", 
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        );
      }
    }
  }, [isMobile]);

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
          height: "100dvh", // Use dynamic viewport height for mobile
          pt: isMobile ? 2 : 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden", // Prevent body scroll on mobile
        }}
      >
        {/* Scrollable Chat Container */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            maxWidth: isMobile ? "100%" : "md",
            overflowY: "auto",
            px: isMobile ? 0 : 2,
            pb: 2,
            mb: isMobile ? 10 : 8, // More space for mobile keyboard
            // Momentum scrolling for iOS
            WebkitOverflowScrolling: "touch",
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
                px: isMobile ? 2 : 0,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                  color: "#fff",
                  width: isMobile ? 48 : 64,
                  height: isMobile ? 48 : 64,
                  mb: 2,
                }}
              >
                <BotIcon sx={{ fontSize: isMobile ? 24 : 32 }} />
              </Avatar>
              <Typography 
                variant={isMobile ? "h5" : "h4"} 
                sx={{ 
                  mb: 1, 
                  fontWeight: 600,
                  fontSize: isMobile ? '1.5rem' : '2.125rem',
                }}
              >
                How can I help you today?
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4, 
                  opacity: 0.7,
                  fontSize: isMobile ? '0.9rem' : '1rem',
                }}
              >
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
                  sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: isMobile ? 0.5 : 1, 
                    mb: 2,
                    px: isMobile ? 1 : 0,
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      width: isMobile ? 28 : 32,
                      height: isMobile ? 28 : 32,
                    }}
                  >
                    <BotIcon sx={{ fontSize: isMobile ? 16 : 18 }} />
                  </Avatar>
                  <Paper
                    elevation={1}
                    sx={{
                      px: isMobile ? 1.5 : 2,
                      py: isMobile ? 1 : 1.5,
                      bgcolor: "background.paper",
                      borderRadius: isMobile ? 1.5 : 2,
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

        {/* Fixed Input Bar - Mobile Optimized */}
        <Paper
          elevation={2}
          sx={{
            position: "fixed",
            bottom: isMobile ? 0 : 20,
            left: 0,
            right: 0,
            width: "100%",
            maxWidth: isMobile ? "100%" : "md",
            mx: "auto",
            p: isMobile ? 1 : 1,
            bgcolor: "background.paper",
            borderTop: `1px solid ${theme.palette.divider}`,
            borderRadius: isMobile ? 0 : 50,
            // Safe area padding for mobile
            paddingBottom: isMobile ? "calc(1rem + env(safe-area-inset-bottom))" : "1rem",
            // Prevent input zoom on mobile
            fontSize: isMobile ? "16px" : "inherit",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-end", gap: 1 }}>
            <TextField
              fullWidth
              multiline
              maxRows={isMobile ? 3 : 4}
              placeholder="Message ChatBot..."
              variant="standard"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              InputProps={{
                disableUnderline: true,
                sx: {
                  px: isMobile ? 1.5 : 2,
                  py: 1,
                  fontSize: isMobile ? "16px" : "1rem", // Prevent zoom on iOS
                  display: "flex",
                  alignItems: "center",
                  minHeight: isMobile ? "44px" : "48px", // Touch target size
                },
              }}
              // Prevent autocomplete/autocorrect on mobile
              inputProps={{
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "off",
                spellCheck: false,
              }}
            />

            <IconButton
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              sx={{
                bgcolor: inputValue.trim() ? "primary.main" : "action.disabled",
                color: inputValue.trim() ? "#fff" : "text.disabled",
                width: isMobile ? 44 : 48, // Touch target size
                height: isMobile ? 44 : 48,
                "&:hover": {
                  bgcolor: inputValue.trim()
                    ? "primary.dark"
                    : "action.disabled",
                },
                mb: 0.5,
              }}
            >
              <SendIcon sx={{ fontSize: isMobile ? 20 : 24 }} />
            </IconButton>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
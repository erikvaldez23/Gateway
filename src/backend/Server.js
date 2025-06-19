require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });
const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;
const openai = new OpenAI({
  apiKey: process.env.XAI_API_KEY, // Update with Grok API key
  baseURL: "https://api.x.ai/v1", // Set to Grok's API base URL
});

const generateAIResponse = async (userMessage) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "grok-3",  // Use Grok model
      messages: [
        {
          role: "system",
          content: ``,
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error("❌ Error in generateAIResponse:", error);
    return "Hmm... something broke. Try again later...";
  }
};

// ✅ Chat Endpoint
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    console.log("📩 User Input:", message);

    const botReply = await generateAIResponse(message);

    res.json({ reply: botReply });
  } catch (error) {
    console.error("❌ Error in /chat endpoint:", error);
    res.status(500).json({
      reply: "Oops! Something went wrong. Please contact us at (972) 362-8468.",
    });
  }
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

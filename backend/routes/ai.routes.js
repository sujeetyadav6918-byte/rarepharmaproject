const express = require("express");
const { randomUUID } = require("crypto");
const { GoogleGenAI } = require("@google/genai");
const ChatMessage = require("../models/ChatMessage");

const router = express.Router();

const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const SYSTEM_PROMPT = `
You are the customer support assistant for Rare Pharma.
Reply in the language used by the customer: English, Hindi, or Hinglish.
Keep replies friendly, clear, and concise.
Help with website navigation and general product enquiries.
Never invent medicine availability, prices, delivery promises, or product details.
Never diagnose conditions or recommend medicines or dosages.
For medical advice, direct customers to a qualified healthcare professional.
For specific availability or ordering questions, guide customers to contact Rare Pharma support.
`;

router.post("/chat", async (req, res) => {
  let conversationId;

  try {
    const { message } = req.body || {};

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please enter a message.",
      });
    }

    const userMessage = message.trim();

    if (userMessage.length > 2000) {
      return res.status(400).json({
        success: false,
        message: "Message is too long. Please use fewer than 2000 characters.",
      });
    }

    if (!ai) {
      return res.status(503).json({
        success: false,
        message: "AI service is not configured.",
      });
    }

    conversationId =
      typeof req.body.conversationId === "string" &&
      req.body.conversationId.length <= 100
        ? req.body.conversationId
        : randomUUID();

    // Save the customer's message before calling Gemini.
    await ChatMessage.create({
      conversationId,
      role: "user",
      message: userMessage,
    });

    // Load recent messages for conversation context.
    const history = await ChatMessage.find({ conversationId })
      .sort({ createdAt: -1 })
      .limit(10)
      .lean();

    history.reverse();

    const contents = history.map((item) => ({
      role: item.role === "assistant" ? "model" : "user",
      parts: [{ text: item.message }],
    }));

    const result = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.3,
        maxOutputTokens: 200,
      },
    });

    const reply = result.text?.trim();

    if (!reply) {
      throw new Error("Gemini returned an empty response.");
    }

    // Save the assistant's actual reply.
    await ChatMessage.create({
      conversationId,
      role: "assistant",
      message: reply,
    });

    return res.status(200).json({
      success: true,
      conversationId,
      reply,
    });
  } catch (error) {
    console.error("Chat API error:", error.message);

    return res.status(503).json({
      success: false,
      conversationId,
      message: "AI support is temporarily unavailable. Please try again.",
    });
  }
});


// Get saved messages for an existing conversation
router.get("/chat/:conversationId", async (req, res) => {
  try {
    const { conversationId } = req.params;

    if (!conversationId || conversationId.length > 100) {
      return res.status(400).json({
        success: false,
        message: "Invalid conversation ID.",
      });
    }

    const messages = await ChatMessage.find({ conversationId })
      .sort({ createdAt: 1 })
      .select("role message createdAt")
      .lean();

    return res.status(200).json({
      success: true,
      conversationId,
      messages: messages.map((item) => ({
        role: item.role,
        text: item.message,
        createdAt: item.createdAt,
      })),
    });
  } catch (error) {
    console.error("Chat history error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to load chat history.",
    });
  }
});






module.exports = router;

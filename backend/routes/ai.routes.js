
const express = require("express");
const { GoogleGenAI } = require("@google/genai");

const router = express.Router();

const apiKey = process.env.GEMINI_API_KEY;

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body || {};

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please enter a message.",
      });
    }

    if (!ai) {
      return res.status(500).json({
        success: false,
        message: "AI service is not configured.",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: `You are Rare Pharma's website customer support assistant.
Answer politely, clearly, and concisely.
Help with website navigation, general product enquiries, and contacting support.
Never invent product availability, prices, or delivery promises.
Do not diagnose medical conditions or recommend medicines or dosages.
For medical advice, direct the customer to a qualified healthcare professional.

Customer message: ${message.trim()}`,
    });

    return res.status(200).json({
      success: true,
      reply: response.text || "Sorry, I could not generate a reply.",
    });
 } catch (error) {
  console.error("Gemini API error message:", error.message);
  console.error("Gemini API error status:", error.status);
  console.error("Gemini API error details:", error);

  return res.status(500).json({
    success: false,
    message: "AI support is temporarily unavailable. Please try again.",
  });
}
});

module.exports = router;

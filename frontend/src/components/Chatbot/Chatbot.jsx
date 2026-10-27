
import { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! Welcome to Rare Pharma. How can I help you today?",
    },
  ]);

  async function sendMessage(event) {
    event.preventDefault();

    const text = message.trim();
    if (!text || loading) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", text },
    ]);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ message: text }),
});

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to get a reply.");
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text: data.reply || "Sorry, I could not generate a reply.",
        },
      ]);
    } catch (error) {
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text: "Sorry, support is temporarily unavailable. Please try again.",
        },
      ]);
      console.error("Chatbot error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="chatbot">
      {isOpen && (
        <section className="chatbot-window">
        
<header className="chatbot-header">
  <img
    src="/logo/chatbot.svg"
    alt="Rare Pharma AI assistant"
    className="chatbot-avatar"
  />

  <div className="chatbot-heading">
    <strong>Rare Pharma Support</strong>
    <small>
      <span className="online-dot" />
      AI Assistant · Online
    </small>
  </div>

  <button
    type="button"
    className="chatbot-close"
    onClick={() => setIsOpen(false)}
    aria-label="Close chat"
  >
    ×
  </button>
</header>


          <div className="chatbot-messages" aria-live="polite">
            {messages.map((item, index) => (
              <div
                key={index}
                className={`chat-message ${item.role}`}
              >
                {item.text}
              </div>
            ))}

            {loading && (
              <div className="chat-message assistant">
                Thinking...
              </div>
            )}
          </div>

          <form className="chatbot-form" onSubmit={sendMessage}>
            <input
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Type your message..."
              aria-label="Your message"
              disabled={loading}
            />
            <button type="submit" disabled={loading || !message.trim()}>
              Send
            </button>
          </form>
          <p className="chatbot-disclaimer">
            For medical advice, please consult a qualified healthcare professional.
          </p>
        </section>
      )}

      
<button
  type="button"
  className="chatbot-toggle"
  onClick={() => setIsOpen((open) => !open)}
  aria-label={isOpen ? "Close chat" : "Open Rare Pharma support"}
>
  <img src="/logo/chatbot.svg" alt="" />
  <span>{isOpen ? "Close chat" : "Chat with us"}</span>
</button>

    </div>
  );
}

export default Chatbot;

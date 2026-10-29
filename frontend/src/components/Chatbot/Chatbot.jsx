
import { useEffect, useState } from "react";
import "./Chatbot.css";

const API_BASE_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:5001"
).replace(/\/$/, "");

const CONVERSATION_KEY = "rarePharmaConversationId";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversationId, setConversationId] = useState(
    () => sessionStorage.getItem(CONVERSATION_KEY) || ""
  );
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! Welcome to Rare Pharma. How can I help you today?",
    },
  ]);

  // Load saved messages when a conversation ID exists.
  useEffect(() => {
    let cancelled = false;

    async function loadHistory() {
      if (!conversationId) return;

      try {
        const response = await fetch(
          `${API_BASE_URL}/api/chat/${encodeURIComponent(conversationId)}`
        );
        const data = await response.json();

        if (cancelled) return;

        if (response.ok && data.success && data.messages?.length) {
          setMessages(
            data.messages.map((item) => ({
              role: item.role,
              text: item.text,
            }))
          );
        }
      } catch (error) {
        console.error("Chat history error:", error);
      }
    }

    loadHistory();

    return () => {
      cancelled = true;
    };
  }, [conversationId]);

  async function sendMessage(event) {
    event.preventDefault();

    const text = message.trim();
    if (!text || loading) return;

    setMessages((previous) => [...previous, { role: "user", text }]);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          ...(conversationId ? { conversationId } : {}),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to get a reply.");
      }

      if (data.conversationId && data.conversationId !== conversationId) {
        sessionStorage.setItem(CONVERSATION_KEY, data.conversationId);
        setConversationId(data.conversationId);
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
              <div key={index} className={`chat-message ${item.role}`}>
                {item.text}
              </div>
            ))}
            {loading && (
              <div className="chat-message assistant">Thinking...</div>
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
            For medical advice, please consult a qualified healthcare
            professional.
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

import { useState } from "react";
import { ArrowUpRight, CheckCircle } from "lucide-react";

import { openWhatsApp } from "../utils/whatsapp";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    medicine: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("https://rarepharmaprojectbackend.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to send enquiry."
        );
      }

      setStatus({
        type: "success",
        message:
          data.message || "Enquiry sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        medicine: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          error.message ||
          "Unable to send enquiry. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <p className="products-eyebrow">MEDICINE ENQUIRY</p>

          <h1>
            Let's talk
            <br />
            <span>medicine.</span>
          </h1>

          <p>
            Send us your requirement and our team will
            assist you with medicine availability,
            documentation and the next steps.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <p className="products-eyebrow">GET IN TOUCH</p>

          <h2>
            Have a medicine
            <br />
            requirement?
          </h2>
          <p>
            Share your requirement with us. Our team can
            assist with availability, documentation and
            the next steps.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <CheckCircle size={20} />
              </div>

              <div>
                <span>Medicine enquiry</span>
                <p>Prescription-based assistance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="name">Full Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="phone">Phone Number</label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="medicine">Medicine Name</label>

                <input
                  id="medicine"
                  name="medicine"
                  type="text"
                  placeholder="Enter medicine name"
                  value={formData.medicine}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="message">
                Requirement / Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell us about your requirement..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Enquiry"}

              {!loading && <ArrowUpRight size={20} />}
            </button>

            <button
              type="button"
              className="contact-whatsapp"
              onClick={() => openWhatsApp()}
            >
              WhatsApp Us
              <ArrowUpRight size={20} />
            </button>

            {status.message && (
              <div
                className={`contact-status ${status.type}`}
              >
                {status.type === "success" && (
                  <CheckCircle size={20} />
                )}

                <span>{status.message}</span>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;

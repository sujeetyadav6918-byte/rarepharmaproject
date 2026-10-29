const express = require("express");
const nodemailer = require("nodemailer");
const { Resend } = require("resend");

const router = express.Router();

const getReceiverEmail = () =>
  process.env.CONTACT_RECEIVER_EMAIL || process.env.EMAIL_USER;

const getEmailContent = (fields) => ({
  subject: `New Medicine Enquiry - ${fields.medicine}`,
  text: `New Medicine Enquiry

Name: ${fields.name}
Email: ${fields.email}
Phone: ${fields.phone}
Medicine: ${fields.medicine}

Message:
${fields.message}`,
});

const sendWithResend = async (fields) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const content = getEmailContent(fields);

  return resend.emails.send({
    from:
      process.env.CONTACT_FROM_EMAIL ||
      "Rare Pharma <onboarding@resend.dev>",
    to: getReceiverEmail(),
    replyTo: fields.email,
    ...content,
  });
};

const sendWithGmail = async (fields) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const content = getEmailContent(fields);

  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: getReceiverEmail(),
    replyTo: fields.email,
    ...content,
  });
};

router.post("/contact", async (req, res) => {
  const { name, email, phone, medicine, message } = req.body || {};
  const fields = {
    name: typeof name === "string" ? name.trim() : "",
    email: typeof email === "string" ? email.trim() : "",
    phone: typeof phone === "string" ? phone.trim() : "",
    medicine: typeof medicine === "string" ? medicine.trim() : "",
    message: typeof message === "string" ? message.trim() : "",
  };

  if (Object.values(fields).some((value) => !value)) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address.",
    });
  }

  const hasResend = Boolean(
    process.env.RESEND_API_KEY && getReceiverEmail()
  );
  const hasGmail = Boolean(
    process.env.EMAIL_USER && process.env.EMAIL_PASS && getReceiverEmail()
  );

  if (!hasResend && !hasGmail) {
    console.error(
      "Contact email service is not configured. Set RESEND_API_KEY and CONTACT_RECEIVER_EMAIL, or EMAIL_USER and EMAIL_PASS."
    );
    return res.status(503).json({
      success: false,
      message: "Contact service is temporarily unavailable.",
    });
  }

  try {
    if (hasResend) {
      await sendWithResend(fields);
    } else {
      await sendWithGmail(fields);
    }

    console.log("Email sent successfully.");

    return res.status(200).json({
      success: true,
      message: "Enquiry sent successfully.",
    });
  } catch (error) {
    console.error("Email sending failed:", error.message);

    return res.status(503).json({
      success: false,
      message: "Contact service is temporarily unavailable.",
    });
  }
});

module.exports = router;
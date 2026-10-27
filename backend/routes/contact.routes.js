
const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/contact", async (req, res) => {
  const { name, email, phone, medicine, message } = req.body || {};

  if (!name || !email || !phone || !medicine || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Medicine Enquiry - ${medicine}`,
      text: `New Medicine Enquiry

Name: ${name}
Email: ${email}
Phone: ${phone}
Medicine: ${medicine}

Message:
${message}`,
    });

    console.log("Email sent successfully.");

    return res.status(200).json({
      success: true,
      message: "Enquiry sent successfully.",
    });
  } catch (error) {
    console.error("Email sending failed:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to send enquiry. Please try again later.",
    });
  }
});

module.exports = router;

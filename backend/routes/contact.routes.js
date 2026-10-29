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

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: fields.email,
      subject: `New Medicine Enquiry - ${fields.medicine}`,
      text: `
New Medicine Enquiry

Name: ${fields.name}
Email: ${fields.email}
Phone: ${fields.phone}
Medicine: ${fields.medicine}

Message:
${fields.message}
      `,
    });

    console.log("Email sent successfully.");

    return res.status(200).json({
      success: true,
      message: "Enquiry sent successfully.",
    });
  } catch (error) {
    console.error("Email sending failed:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send enquiry.",
    });
  }
});

module.exports = router;
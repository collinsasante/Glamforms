// server.js
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const upload = multer();

// CORS config
app.use(
  cors({
    origin: "*",
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Endpoint to receive form submissions
app.post(
  "/send-email",
  upload.fields([
    { name: "businessLogo", maxCount: 1 },
    { name: "itemPhotos" },
    { name: "referencePhotos" },
  ]),
  async (req, res) => {
    const fields = req.body;
    const files = req.files;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    let emailText = "New form submission:\n\n";
    for (const [key, value] of Object.entries(fields)) {
      emailText += `${key}: ${value}\n`;
    }

    const attachments = [];

    if (files.businessLogo) {
      attachments.push({
        filename: files.businessLogo[0].originalname,
        content: files.businessLogo[0].buffer,
      });
    }

    if (files.itemPhotos) {
      files.itemPhotos.forEach((file) => {
        attachments.push({
          filename: file.originalname,
          content: file.buffer,
        });
      });
    }

    if (files.referencePhotos) {
      files.referencePhotos.forEach((file) => {
        attachments.push({
          filename: file.originalname,
          content: file.buffer,
        });
      });
    }

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_RECEIVER,
      subject: "New Form Submission",
      text: emailText,
      attachments,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Email sending failed." });
    }
  }
);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

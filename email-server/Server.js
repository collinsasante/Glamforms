const express = require("express");
const cors = require("cors");
const multer = require("multer");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const upload = multer();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Friendly labels for fields
const fieldLabels = {
  productName: "Product Name",
  preferredColors: "Preferred Colors",
  productWeight: "Product Weight",
  ingredients: "Ingredients",
  manufacturingDate: "Manufacturing Date",
  expiryDate: "Expiry Date",
  batchNumber: "Batch Number",
  countryOfOrigin: "Country of Origin",
  manufacturerAddress: "Manufacturer Address",
  directionsOfUse: "Directions of Use",
  storageInstructions: "Storage Instructions",
  labelDimensions: "Label Dimensions",
  specialConsiderations: "Special Considerations",
  customerName: "Customer Name",
  customerPhone: "Customer Phone",
  terms: "Terms Accepted",
};

app.post(
  "/send-email",
  upload.fields([
    { name: "businessLogo", maxCount: 1 },
    { name: "itemPhotos" },
    { name: "referencePhotos" },
  ]),
  async (req, res) => {
    try {
      const fields = req.body;
      const files = req.files;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      // Build a clean table with labels
      let htmlBody = `
        <h2 style="font-family: Arial, sans-serif;">New Form Submission</h2>
        <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif; width: 100%;">
          <thead>
            <tr style="background-color: #f0f0f0;">
              <th align="left">Field</th>
              <th align="left">Value</th>
            </tr>
          </thead>
          <tbody>
      `;

      for (const [key, value] of Object.entries(fields)) {
        const label = fieldLabels[key] || key;
        htmlBody += `
          <tr>
            <td style="font-weight: bold;">${label}</td>
            <td>${value}</td>
          </tr>
        `;
      }

      htmlBody += `
          </tbody>
        </table>
        <p style="font-family: Arial, sans-serif; color: #555;">Uploaded files are attached below.</p>
      `;

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
        html: htmlBody,
        attachments,
      };

      await transporter.sendMail(mailOptions);

      console.log("Email sent.");
      res.status(200).json({ success: true });
    } catch (err) {
      console.error("Error sending email:", err);
      res.status(500).json({ success: false, message: "Email sending failed." });
    }
  }
);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

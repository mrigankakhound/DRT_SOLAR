const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');
const Enquiry = require('../models/Enquiry');

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// @desc    Submit contact enquiry
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  // Check DB is connected (readyState 1 = connected)
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      success: false,
      message: 'Service temporarily unavailable. Please try again in a moment.',
    });
  }

  const { name, phone, email, city, message } = req.body;

  try {
    // Save to MongoDB
    const enquiry = await Enquiry.create({ name, phone, email, city, message });

    // Send email notification to admin
    try {
      const transporter = createTransporter();
      await transporter.sendMail({
        from: `"DRT ENTERPRISE Website" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: `New Enquiry from ${name} — DRT ENTERPRISE`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
            <div style="background:#166534;padding:20px 30px;">
              <h2 style="color:#fff;margin:0;">New Enquiry — DRT ENTERPRISE</h2>
            </div>
            <div style="padding:30px;">
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:8px 0;color:#6b7280;width:120px;">Name</td><td style="padding:8px 0;font-weight:bold;">${name}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;">Phone</td><td style="padding:8px 0;">${phone}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;">Email</td><td style="padding:8px 0;">${email}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;">City</td><td style="padding:8px 0;">${city}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;vertical-align:top;">Message</td><td style="padding:8px 0;">${message}</td></tr>
              </table>
            </div>
            <div style="background:#f9fafb;padding:16px 30px;color:#6b7280;font-size:13px;">
              Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      // Log email error but don't fail the request
      console.error('📧 Email notification failed:', emailError.message);
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! We will get back to you within 24 hours.',
      data: { id: enquiry._id },
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

// @desc    Get all enquiries (admin)
// @route   GET /api/contact/enquiries
// @access  Public (add auth middleware in production)
const getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, count: enquiries.length, data: enquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { submitContact, getEnquiries };

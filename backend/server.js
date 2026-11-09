import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'epicosportofficial@gmail.com';

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ONLINE',
    brand: 'EPICO',
    slogan: 'MAKE IT EPIC',
    timestamp: new Date().toISOString(),
  });
});

// Helper function to create Nodemailer transport
function createTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

// POST /api/send-comment handler
app.post('/api/send-comment', async (req, res) => {
  try {
    const { name, contact, message } = req.body || {};

    // Validate incoming payload
    if (!name || !name.trim() || !contact || !contact.trim() || !message || !message.trim()) {
      return res.status(400).json({
        success: false,
        error: 'ALL FIELDS ARE REQUIRED: NAME, CONTACT, AND MESSAGE.',
      });
    }

    const cleanName = String(name).trim();
    const cleanContact = String(contact).trim();
    const cleanMessage = String(message).trim();

    const transporter = createTransporter();

    if (!transporter) {
      // Development / unconfigured SMTP fallback:
      // Logs inquiry cleanly so developers can test without requiring live credentials
      console.log('====================================================');
      console.log('[EPICO INQUIRY RECEIVED - DEV / FALLBACK MODE]');
      console.log(`From:    ${cleanName}`);
      console.log(`Contact: ${cleanContact}`);
      console.log(`Message: ${cleanMessage}`);
      console.log(`Target:  ${RECIPIENT_EMAIL}`);
      console.log('To send real emails, define SMTP_USER & SMTP_PASS in .env');
      console.log('====================================================');

      return res.status(200).json({
        success: true,
        message: 'MESSAGE RECEIVED. MAKE IT EPIC.',
        devMode: true,
      });
    }

    // High-contrast, clean athletic HTML email template
    const mailOptions = {
      from: `"EPICO Web Portal" <${process.env.SMTP_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: cleanContact.includes('@') ? cleanContact : undefined,
      subject: `[EPICO INQUIRY] New Message from ${cleanName}`,
      text: `EPICO BRAND INQUIRY\n\nName: ${cleanName}\nContact: ${cleanContact}\n\nMessage:\n${cleanMessage}\n\nTimestamp: ${new Date().toISOString()}`,
      html: `
        <div style="background-color: #000000; color: #FFFFFF; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border: 1px solid #222222;">
          <div style="border-bottom: 2px solid #FFFFFF; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="color: #FFFFFF; font-size: 26px; font-weight: 900; letter-spacing: 4px; margin: 0; text-transform: uppercase;">EPICO</h1>
            <p style="color: #888888; font-size: 11px; letter-spacing: 2px; margin: 5px 0 0 0; text-transform: uppercase;">MAKE IT EPIC | OFFICIAL INQUIRY</p>
          </div>
          <div style="margin-bottom: 25px;">
            <p style="color: #888888; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; margin: 0 0 4px 0;">Sender Name</p>
            <p style="color: #FFFFFF; font-size: 16px; font-weight: 700; margin: 0;">${cleanName}</p>
          </div>
          <div style="margin-bottom: 25px;">
            <p style="color: #888888; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; margin: 0 0 4px 0;">Contact / Social Handle</p>
            <p style="color: #FFFFFF; font-size: 16px; font-weight: 700; margin: 0;">${cleanContact}</p>
          </div>
          <div style="margin-bottom: 35px; background: #0A0A0A; border-left: 3px solid #FFFFFF; padding: 16px;">
            <p style="color: #888888; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; margin: 0 0 8px 0;">Message</p>
            <p style="color: #FFFFFF; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${cleanMessage}</p>
          </div>
          <div style="border-top: 1px solid #222222; padding-top: 20px; font-size: 10px; color: #555555; letter-spacing: 1px; text-transform: uppercase;">
            EPICO Sport Official &bull; Sent via Official Brand Bio-Link Hub
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'MESSAGE SENT. MAKE IT EPIC.',
    });
  } catch (error) {
    console.error('Email dispatch error:', error);
    return res.status(500).json({
      success: false,
      error: 'UNABLE TO DISPATCH MESSAGE AT THIS MOMENT. PLEASE TRY AGAIN OR CONTACT US DIRECTLY.',
    });
  }
});

// Run standalone server if started directly
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`[EPICO BACKEND] Running on http://localhost:${PORT}`);
  });
}

export default app;


import nodemailer from 'nodemailer';

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'epicosportofficial@gmail.com';

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

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'METHOD NOT ALLOWED' });
  }

  try {
    const { name, contact, message } = req.body || {};

    if (!name || !name.trim() || !contact || !contact.trim() || !message || !message.trim()) {
      return res.status(400).json({
        success: false,
        error: 'MOHON LENGKAPI SEMUA KOLOM: NAMA, KONTAK, DAN PESAN.',
      });
    }

    const cleanName = String(name).trim();
    const cleanContact = String(contact).trim();
    const cleanMessage = String(message).trim();

    const transporter = createTransporter();

    if (!transporter) {
      console.log('====================================================');
      console.log('[VERCEL SERVERLESS] EPICO INQUIRY (DEV / DEMO MODE)');
      console.log(`From:    ${cleanName}`);
      console.log(`Contact: ${cleanContact}`);
      console.log(`Message: ${cleanMessage}`);
      console.log(`Target:  ${RECIPIENT_EMAIL}`);
      console.log('Define SMTP_USER and SMTP_PASS in Vercel Environment Variables to send live emails.');
      console.log('====================================================');

      return res.status(200).json({
        success: true,
        message: 'MESSAGE RECEIVED. MAKE IT EPIC.',
        devMode: true,
      });
    }

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
      message: 'PESAN TERKIRIM. MAKE IT EPIC.',
    });
  } catch (error) {
    console.error('Email dispatch error:', error);
    return res.status(500).json({
      success: false,
      error: 'TIDAK DAPAT MENGIRIM PESAN SAAT INI. SILAKAN COBA LAGI ATAU HUBUNGI KAMI LANGSUNG.',
    });
  }
}


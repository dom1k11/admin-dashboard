import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: 'apikey', 
    pass: process.env.SENDGRID_API_KEY,
  },
});

const baseUrl = process.env.APP_URL || 'http://localhost:3000';

export async function sendVerificationEmail(to: string, token: string) {
  const verifyUrl = `${baseUrl}/auth/verify/${token}`;
  const sender = process.env.EMAIL_SENDER
  try {
    await transporter.sendMail({
      from: sender,
      to,
      subject: 'Verify your account',
      text: `Click the link to verify: ${verifyUrl}`,
      html: `<p>Click here to verify: <a href="${verifyUrl}">${verifyUrl}</a></p>`,
    });

    console.log('✅ Verification email sent:', to);
  } catch (err) {
    console.error('❌ Email send error:', err);
  }
}

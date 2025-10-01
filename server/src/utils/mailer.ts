import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const baseUrl = process.env.APP_URL || 'http://localhost:3000';

export async function sendVerificationEmail(to: string, token: string) {
  const verifyUrl = `${baseUrl}/auth/verify/${token}`;

  setImmediate(() => {
    transporter.sendMail({
      from: `"Admin Dashboard" <${process.env.SMTP_USER}>`,
      to,
      subject: "Verify your account",
      text: `Click the link to verify: ${verifyUrl}`,
      html: `<p>Click here to verify: <a href="${verifyUrl}">${verifyUrl}</a></p>`,
    })
    .then(() => console.log("Verification email sent:", to))
    .catch(err => console.error("Email send error:", err));
  });
}

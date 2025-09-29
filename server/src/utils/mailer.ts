import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendVerificationEmail(to: string, token: string) {
  const verifyUrl = `http://localhost:3000/auth/verify/${token}`;
  await transporter.sendMail({
    from: '"Admin Dashboard" <no-reply@example.com>',
    to,
    subject: 'Verify your account',
    text: `Click the link to verify: ${verifyUrl}`,
    html: `<p>Click here to verify: <a href="${verifyUrl}">${verifyUrl}</a></p>`,
  });
}

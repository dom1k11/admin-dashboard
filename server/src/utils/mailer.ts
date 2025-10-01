import nodemailer from "nodemailer";
const sgTransport = require("nodemailer-sendgrid");

const transporter = nodemailer.createTransport(
  sgTransport({
    apiKey: process.env.SENDGRID_API_KEY!,
  })
);

const baseUrl = process.env.APP_URL || "http://localhost:3000";

export async function sendVerificationEmail(to: string, token: string) {
  const verifyUrl = `${baseUrl}/auth/verify/${token}`;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_SENDER, 
      to,
      subject: "Verify your account",
      text: `Click the link to verify: ${verifyUrl}`,
      html: `<p>Click here to verify: <a href="${verifyUrl}">${verifyUrl}</a></p>`,
    });

    console.log("✅ Verification email sent:", to);
  } catch (err) {
    console.error("❌ Email send error:", err);
  }
}

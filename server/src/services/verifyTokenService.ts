import crypto from "crypto";
import { saveVerificationToken } from "../queries/verification.js";

export async function generateAndSaveToken(userId: number): Promise<string> {
  const token = crypto.randomBytes(32).toString("hex");
  await saveVerificationToken(userId, token);
  return token;
}

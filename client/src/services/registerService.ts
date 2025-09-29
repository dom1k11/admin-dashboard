import { API_URL } from "../constants/api_url";
import type { User } from "../types/user";

export async function register(
  name: string,
  email: string,
  password: string
): Promise<User> {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  if (!res.ok) throw new Error("Failed to register user");
  return res.json();
}

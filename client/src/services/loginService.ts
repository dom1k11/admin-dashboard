import type { User } from "../types/user";

import { API_URL } from "../constants/api_url";
export async function login(name: string, password: string): Promise<User> {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password }),
  });
  if (!res.ok) throw new Error("Failed to login");
  return res.json();
}

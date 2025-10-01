import { API_URL } from "../constants/api_url";
import { LoginResponse } from "../types/loginResponse";
import { User } from "../types/user";

export async function login(name: string, password: string): Promise<User> {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password }),
  });

  if (!res.ok) throw new Error("Failed to login");
 

  const data: LoginResponse = await res.json();

  localStorage.setItem("token", data.token);
  return data.user;
}

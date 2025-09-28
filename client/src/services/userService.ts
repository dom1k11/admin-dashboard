import type { User } from "../types/user";

const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : import.meta.env.VITE_API_URL;

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}
export async function deleteUnverified(): Promise<User[]> {
  const res = await fetch(`${API_URL}/unverified`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete unverified users");
  return res.json();
}

export async function deleteSelected(id: number[]): Promise<User[]> {
  const res = await fetch(`${API_URL}/users`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  if (!res.ok) throw new Error("Failed to delete selected users");
  return res.json();
}

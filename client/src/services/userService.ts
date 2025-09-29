import type { User } from "../types/user";
import { API_URL } from "../constants/api_url";

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

export async function blockSelected(id: number[]): Promise<User[]> {
  const res = await fetch(`${API_URL}/block`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  if (!res.ok) throw new Error("Failed to block selected users");
  return res.json();
}
export async function unblockSelected(id: number[]): Promise<User[]> {
  const res = await fetch(`${API_URL}/unblock`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  if (!res.ok) throw new Error("Failed to unblock selected users");
  return res.json();
}

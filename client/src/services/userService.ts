import type { User } from "../types/user";
import { apiWrapper } from "../utils/apiWrapper";

export function fetchUsers(): Promise<User[]> {
  return apiWrapper("/users");
}

export function deleteUnverified(): Promise<User[]> {
  return apiWrapper("/unverified", { method: "DELETE" });
}

export function deleteSelected(id: number[]): Promise<User[]> {
  return apiWrapper("/users", {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
}

export function blockSelected(id: number[]): Promise<User[]> {
  return apiWrapper("/block", {
    method: "PATCH",
    body: JSON.stringify({ id }),
  });
}

export function unblockSelected(id: number[]): Promise<User[]> {
  return apiWrapper("/unblock", {
    method: "PATCH",
    body: JSON.stringify({ id }),
  });
}

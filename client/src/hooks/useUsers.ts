import { useEffect, useState } from "react";
import type { User } from "../types/user";
import { fetchUsers } from "../services/userService";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers()
    
      .then(setUsers)
      .catch((err) => console.error("Failed to fetch users", err));


  }, []);


  return { users };
}

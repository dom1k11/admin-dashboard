import { Response, NextFunction } from "express";
import { AuthRequest } from "./authMiddleware";
import { findUserStatus } from "../queries/users";

export async function checkUserStatus(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  try {
    if (!req.user?.id) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    const status = await findUserStatus(req.user.id);
    if (!status) return res.status(401).json({ error: "User not found" });
    if (status == "blocked") {
      return res.status(403).json({ error: "Access denied" });
    }

    next();
  } catch {
    res.status(500).json({ error: "Server error" });
  }
}

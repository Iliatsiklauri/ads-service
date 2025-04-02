import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

type decoded = {
  id: number;
  role: string;
  exp: number;
};

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("authorization")?.split(" ")[1]; // Extract token
  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const decoded: decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as any;

    if (decoded.role !== "admin") {
      res.status(403).json({ error: "Forbidden" });
      return;
    }

    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

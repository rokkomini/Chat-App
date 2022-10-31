import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { send } from "process";

export type TokenPayload = {
  username: string;
};

export interface JwtRequest<T> extends Request<T> {
  jwt?: TokenPayload;
}

const authenticateToken = async (
  req: JwtRequest<any>,
  res: Response,
  next: any
) => {
  res.send("hello");

  const token: string | undefined = req.header("Authorization")?.split(" ")[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as TokenPayload;
      req.jwt = decoded;
      next();
    } catch {
      return res.status(401).send("Invalid token");
    }
  } else {
    return res.status(401).send("No token");
  }
};

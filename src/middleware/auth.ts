import * as jwt from 'jsonwebtoken'; 
import { Request, Response, NextFunction } from 'express';

declare global {
    namespace Express {
      interface Request {
        user?: jwt.JwtPayload | string;
      }
    }
  }

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

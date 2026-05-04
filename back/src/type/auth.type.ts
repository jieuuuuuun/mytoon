import { Request } from 'express';

export interface JwtPayload {
  id: number;
  email?: string;
  name?: string;
  role?: string; //권한
  iat?: number; // 만들어진 시간
  exp?: number; // 만료 시간
}

export interface AuthRequest extends Request {
  user: JwtPayload;
}

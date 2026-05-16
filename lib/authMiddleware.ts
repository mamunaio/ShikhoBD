import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import { apiResponse } from './apiResponse';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key-12345';

export interface AuthRequest extends NextRequest {
  user?: {
    userId: string;
    role: string;
    email: string;
  };
}

export const verifyToken = (req: NextRequest) => {
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    return decoded;
  } catch (error) {
    return null;
  }
};

export const requireAuth = async (
  req: NextRequest,
  handler: (req: AuthRequest) => Promise<Response>
) => {
  const decoded = verifyToken(req);
  if (!decoded) {
    return apiResponse.error('অননুমোদিত অ্যাক্সেস। অনুগ্রহ করে লগইন করুন।', 401);
  }

  const authReq = req as AuthRequest;
  authReq.user = {
    userId: decoded.userId,
    role: decoded.role,
    email: decoded.email
  };

  return handler(authReq);
};

export const requireRole = (roles: string[]) => {
  return async (
    req: NextRequest,
    handler: (req: AuthRequest) => Promise<Response>
  ) => {
    return requireAuth(req, async (authReq) => {
      if (!roles.includes(authReq.user!.role)) {
        return apiResponse.error('আপনার এই পেজটি দেখার অনুমতি নেই।', 403);
      }
      return handler(authReq);
    });
  };
};

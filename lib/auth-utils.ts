import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key-12345';

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 12);
};

export const verifyPassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};

export const generateRandomToken = (bytes: number = 32) => {
  return crypto.randomBytes(bytes).toString('hex');
};

export const generateJWT = (payload: any, expiresIn: string = '7d') => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

export const verifyJWT = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

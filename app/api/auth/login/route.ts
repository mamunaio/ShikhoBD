import { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { connectDB } from '@/lib/connectDB';
import User from '@/models/User';
import { apiResponse } from '@/lib/apiResponse';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key-12345';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return apiResponse.error('ইমেইল বা পাসওয়ার্ড সঠিক নয়।', 401);
    }

    if (!user.isActive) {
      return apiResponse.error('আপনার অ্যাকাউন্টটি সাময়িকভাবে বন্ধ আছে।', 403);
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return apiResponse.error('ইমেইল বা পাসওয়ার্ড সঠিক নয়।', 401);
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const userObj = user.toObject();
    delete userObj.passwordHash;

    return apiResponse.success({ user: userObj, token }, 'লগইন সফল হয়েছে।');
  } catch (error: any) {
    return apiResponse.error(error.message, 500);
  }
}

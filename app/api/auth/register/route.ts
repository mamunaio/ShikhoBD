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
    const { name, email, password, role } = await req.json();

    if (!name || !email || !password) {
      return apiResponse.error('নাম, ইমেইল এবং পাসওয়ার্ড প্রয়োজন।', 400);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return apiResponse.error('এই ইমেইল দিয়ে ইতিমধ্যে একটি অ্যাকাউন্ট খোলা হয়েছে।', 400);
    }

    const passwordHash = await bcrypt.hash(password, 12);
    
    const user = await User.create({
      name,
      email,
      passwordHash,
      role: role || 'student',
      isVerified: false,
    });

    const token = jwt.sign(
      { userId: user._id, role: user.role, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const userObj = user.toObject();
    delete userObj.passwordHash;

    return apiResponse.success({ user: userObj, token }, 'অ্যাকাউন্ট তৈরি সফল হয়েছে।', 201);
  } catch (error: any) {
    return apiResponse.error(error.message, 500);
  }
}

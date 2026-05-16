import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/connectDB';
import User from '@/models/User';
import { apiResponse } from '@/lib/apiResponse';
import { requireAuth } from '@/lib/authMiddleware';

export async function GET(req: NextRequest) {
  return requireAuth(req, async (authReq) => {
    try {
      await connectDB();
      const user = await User.findById(authReq.user!.userId).select('-passwordHash');
      if (!user) {
        return apiResponse.error('ব্যবহারকারী পাওয়া যায়নি।', 404);
      }
      return apiResponse.success(user);
    } catch (error: any) {
      return apiResponse.error(error.message, 500);
    }
  });
}

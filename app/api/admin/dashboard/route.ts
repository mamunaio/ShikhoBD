import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/connectDB';
import User from '@/models/User';
import Course from '@/models/Course';
import Order from '@/models/Order';
import { apiResponse } from '@/lib/apiResponse';
import { requireRole } from '@/lib/authMiddleware';

export async function GET(req: NextRequest) {
  return requireRole(['admin'])(req, async () => {
    try {
      await connectDB();
      
      const [totalUsers, totalCourses, totalOrders, activeInstructors] = await Promise.all([
        User.countDocuments({ role: 'student' }),
        Course.countDocuments({ status: 'published' }),
        Order.countDocuments({ status: 'completed' }),
        User.countDocuments({ role: 'instructor', 'instructorProfile.isApproved': true })
      ]);

      const revenueData = await Order.aggregate([
        { $match: { status: 'completed' } },
        { $group: { _id: null, total: { $sum: '$amount' } } }
      ]);

      const recentOrders = await Order.find({ status: 'completed' })
        .populate('studentId', 'name')
        .populate('courseId', 'title')
        .sort({ createdAt: -1 })
        .limit(5);

      return apiResponse.success({
        stats: {
          totalUsers,
          totalCourses,
          totalOrders,
          activeInstructors,
          totalRevenue: revenueData[0]?.total || 0
        },
        recentOrders
      });
    } catch (error: any) {
      return apiResponse.error(error.message, 500);
    }
  });
}

import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/connectDB';
import Course from '@/models/Course';
import Enrollment from '@/models/Enrollment';
import Order from '@/models/Order';
import { apiResponse } from '@/lib/apiResponse';
import { requireRole } from '@/lib/authMiddleware';

export async function GET(req: NextRequest) {
  return requireRole(['instructor'])(req, async (authReq) => {
    try {
      await connectDB();
      const instructorId = authReq.user!.userId;

      const courses = await Course.find({ instructorId });
      const courseIds = courses.map(c => c._id);

      const [totalStudents, recentEnrollments] = await Promise.all([
        Enrollment.countDocuments({ courseId: { $in: courseIds } }),
        Enrollment.find({ courseId: { $in: courseIds } })
          .populate('studentId', 'name email')
          .populate('courseId', 'title')
          .sort({ enrolledAt: -1 })
          .limit(5)
      ]);

      const revenueData = await Order.aggregate([
        { $match: { courseId: { $in: courseIds }, status: 'completed' } },
        { $group: { _id: null, total: { $sum: '$amount' } } }
      ]);

      return apiResponse.success({
        stats: {
          totalCourses: courses.length,
          totalStudents,
          totalRevenue: revenueData[0]?.total || 0,
        },
        recentEnrollments,
        courses: courses.map(c => ({
          id: c._id,
          title: c.title,
          students: c.stats.totalStudents,
          rating: c.stats.avgRating,
          status: c.status
        }))
      });
    } catch (error: any) {
      return apiResponse.error(error.message, 500);
    }
  });
}

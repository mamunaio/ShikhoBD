import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/connectDB';
import Enrollment from '@/models/Enrollment';
import Order from '@/models/Order';
import Course from '@/models/Course';
import { apiResponse } from '@/lib/apiResponse';
import { requireAuth } from '@/lib/authMiddleware';

export async function POST(req: NextRequest) {
  return requireAuth(req, async (authReq) => {
    try {
      await connectDB();
      const { courseId } = await authReq.json();

      // Check if already enrolled
      const existing = await Enrollment.findOne({
        studentId: authReq.user!.userId,
        courseId
      });
      if (existing) return apiResponse.error('আপনি ইতিমধ্যে এই কোর্সে এনরোল করেছেন।', 400);

      // Check for completed order
      const order = await Order.findOne({
        studentId: authReq.user!.userId,
        courseId,
        status: 'completed'
      });

      // Special case: Free courses (if allowed) or verified payment
      if (!order) {
        const course = await Course.findById(courseId);
        if (!course?.isFree) {
          return apiResponse.error('এনরোল করার আগে পেমেন্ট সম্পন্ন করুন।', 402);
        }
      }

      const enrollment = await Enrollment.create({
        studentId: authReq.user!.userId,
        courseId,
        enrolledAt: new Date()
      });

      // Increment student count in course
      await Course.findByIdAndUpdate(courseId, { $inc: { 'stats.totalStudents': 1 } });

      return apiResponse.success(enrollment, 'এনরোলমেন্ট সফল হয়েছে!', 201);
    } catch (error: any) {
      return apiResponse.error(error.message, 500);
    }
  });
}

export async function GET(req: NextRequest) {
  return requireAuth(req, async (authReq) => {
    try {
      await connectDB();
      const enrollments = await Enrollment.find({ studentId: authReq.user!.userId })
        .populate('courseId', 'title thumbnailUrl slug instructorId')
        .sort({ updatedAt: -1 });
      return apiResponse.success(enrollments);
    } catch (error: any) {
      return apiResponse.error(error.message, 500);
    }
  });
}

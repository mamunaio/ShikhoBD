import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/connectDB';
import Review from '@/models/Review';
import Course from '@/models/Course';
import Enrollment from '@/models/Enrollment';
import { apiResponse } from '@/lib/apiResponse';
import { requireAuth } from '@/lib/authMiddleware';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    await connectDB();
    const { courseId } = await params;
    const reviews = await Review.find({ courseId, isApproved: true })
      .populate('studentId', 'name avatarUrl')
      .sort({ createdAt: -1 });
    return apiResponse.success(reviews);
  } catch (error: any) {
    return apiResponse.error(error.message, 500);
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ courseId: string }> }
) {
  return requireAuth(req, async (authReq) => {
    try {
      await connectDB();
      const { courseId } = await params;
      const { rating, comment } = await authReq.json();

      // Check if enrolled
      const enrolled = await Enrollment.findOne({
        studentId: authReq.user!.userId,
        courseId
      });
      if (!enrolled) return apiResponse.error('রিভিউ দেওয়ার আগে কোর্সে এনরোল করুন।', 403);

      const review = await Review.create({
        courseId,
        studentId: authReq.user!.userId,
        rating,
        comment
      });

      // Update course average rating
      const reviews = await Review.find({ courseId });
      const avgRating = reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length;
      
      await Course.findByIdAndUpdate(courseId, {
        'stats.avgRating': avgRating,
        'stats.totalReviews': reviews.length
      });


      return apiResponse.success(review, 'আপনার রিভিউ সফলভাবে যুক্ত হয়েছে।', 201);
    } catch (error: any) {
      return apiResponse.error(error.message, 500);
    }
  });
}

import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/connectDB';
import Course from '@/models/Course';
import { apiResponse } from '@/lib/apiResponse';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();
    const { slug } = await params;
    const course = await Course.findOne({ slug })
      .populate('instructorId', 'name avatarUrl instructorProfile')
      .populate('categoryId', 'name icon');

    if (!course) {
      return apiResponse.error('কোর্সটি পাওয়া যায়নি।', 404);
    }

    return apiResponse.success(course);
  } catch (error: any) {
    return apiResponse.error(error.message, 500);
  }
}

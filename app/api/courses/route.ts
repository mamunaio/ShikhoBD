import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/connectDB';
import Course from '@/models/Course';
import User from '@/models/User';
import Category from '@/models/Category';
import { apiResponse } from '@/lib/apiResponse';
import { requireRole } from '@/lib/authMiddleware';

// GET all courses with filtering and pagination
export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    
    const category = searchParams.get('category');
    const level = searchParams.get('level');
    const priceType = searchParams.get('price'); // free | paid
    const sort = searchParams.get('sort');
    const search = searchParams.get('search');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');

    const filter: any = { status: 'published' };

    if (category) filter.categoryId = category;
    if (level) filter.level = level;
    if (priceType === 'free') filter.isFree = true;
    if (priceType === 'paid') filter.isFree = false;
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    let sortOptions: any = { createdAt: -1 };
    if (sort === 'popular') sortOptions = { 'stats.totalStudents': -1 };
    if (sort === 'price_low') sortOptions = { price: 1 };
    if (sort === 'price_high') sortOptions = { price: -1 };

    const total = await Course.countDocuments(filter);
    const courses = await Course.find(filter)
      .populate('instructorId', 'name avatarUrl')
      .populate('categoryId', 'name icon')
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(limit);

    return apiResponse.paginate(courses, total, page, limit);
  } catch (error: any) {
    return apiResponse.error(error.message, 500);
  }
}

// POST new course (Instructor only)
export async function POST(req: NextRequest) {
  return requireRole(['instructor', 'admin'])(req, async (authReq) => {
    try {
      await connectDB();
      const body = await authReq.json();
      
      const slug = body.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
      
      const course = await Course.create({
        ...body,
        slug,
        instructorId: authReq.user!.userId,
        status: 'draft'
      });

      return apiResponse.success(course, 'কোর্সটি ড্রাফট হিসেবে সেভ করা হয়েছে।', 201);
    } catch (error: any) {
      return apiResponse.error(error.message, 500);
    }
  });
}

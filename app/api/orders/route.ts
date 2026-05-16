import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/connectDB';
import Order from '@/models/Order';
import Course from '@/models/Course';
import Coupon from '@/models/Coupon';
import { apiResponse } from '@/lib/apiResponse';
import { requireAuth } from '@/lib/authMiddleware';

// Create Order
export async function POST(req: NextRequest) {
  return requireAuth(req, async (authReq) => {
    try {
      await connectDB();
      const { courseId, couponCode, paymentMethod } = await authReq.json();

      const course = await Course.findById(courseId);
      if (!course) return apiResponse.error('কোর্স পাওয়া যায়নি।', 404);

      let finalAmount = course.price;
      let discountAmount = 0;
      let couponId = null;

      if (couponCode) {
        const coupon = await Coupon.findOne({ code: couponCode.toUpperCase(), isActive: true });
        if (coupon && coupon.expiresAt > new Date()) {
          couponId = coupon._id;
          if (coupon.discountType === 'percentage') {
            discountAmount = (finalAmount * coupon.discountValue) / 100;
          } else {
            discountAmount = coupon.discountValue;
          }
          finalAmount -= discountAmount;
        }
      }

      const order = await Order.create({
        studentId: authReq.user!.userId,
        courseId,
        amount: finalAmount,
        originalAmount: course.price,
        discountAmount,
        couponId,
        paymentMethod,
        transactionId: `TXN-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        status: 'pending'
      });

      return apiResponse.success(order, 'অর্ডার তৈরি হয়েছে। পেমেন্ট সম্পন্ন করুন।', 201);
    } catch (error: any) {
      return apiResponse.error(error.message, 500);
    }
  });
}

// Get user orders
export async function GET(req: NextRequest) {
  return requireAuth(req, async (authReq) => {
    try {
      await connectDB();
      const orders = await Order.find({ studentId: authReq.user!.userId })
        .populate('courseId', 'title thumbnailUrl')
        .sort({ createdAt: -1 });
      return apiResponse.success(orders);
    } catch (error: any) {
      return apiResponse.error(error.message, 500);
    }
  });
}

import mongoose, { Schema, model, models } from 'mongoose';

const OrderSchema = new Schema(
  {
    studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    amount: { type: Number, required: true },
    originalAmount: { type: Number, required: true },
    discountAmount: { type: Number, default: 0 },
    couponId: { type: Schema.Types.ObjectId, ref: 'Coupon', default: null },
    paymentMethod: {
      type: String,
      enum: ['bkash', 'nagad', 'card', 'bank'],
      required: true,
    },
    transactionId: { type: String, required: true, unique: true },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending',
    },
    paidAt: Date,
  },
  { timestamps: true }
);

const Order = models.Order || model('Order', OrderSchema);
export default Order;

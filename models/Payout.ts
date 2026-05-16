import mongoose, { Schema, model, models } from 'mongoose';

const PayoutSchema = new Schema(
  {
    instructorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    platformFee: { type: Number, required: true },
    netAmount: { type: Number, required: true },
    method: {
      type: String,
      enum: ['bkash', 'nagad', 'bank'],
      required: true,
    },
    accountNumber: { type: String, required: true },
    status: {
      type: String,
      enum: ['pending', 'processing', 'paid', 'failed'],
      default: 'pending',
    },
    processedAt: Date,
  },
  { timestamps: true }
);

const Payout = models.Payout || model('Payout', PayoutSchema);
export default Payout;

import mongoose, { Schema, model, models } from 'mongoose';

const ReviewSchema = new Schema(
  {
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: String,
    isApproved: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Compound unique index: One review per student per course
ReviewSchema.index({ studentId: 1, courseId: 1 }, { unique: true });

const Review = models.Review || model('Review', ReviewSchema);
export default Review;

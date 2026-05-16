import mongoose, { Schema, model, models } from 'mongoose';

const EnrollmentSchema = new Schema(
  {
    studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    enrolledAt: { type: Date, default: Date.now },
    completedAt: Date,
    isCompleted: { type: Boolean, default: false },
    progress: { type: Number, default: 0 },
    lastAccessed: { type: Date, default: Date.now },
    lessonProgress: [
      {
        lessonId: String,
        isCompleted: { type: Boolean, default: false },
        watchDuration: { type: Number, default: 0 },
        completedAt: Date,
      },
    ],
  },
  { timestamps: true }
);

// Compound unique index to prevent duplicate enrollments
EnrollmentSchema.index({ studentId: 1, courseId: 1 }, { unique: true });

const Enrollment = models.Enrollment || model('Enrollment', EnrollmentSchema);
export default Enrollment;

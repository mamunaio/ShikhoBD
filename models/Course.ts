import mongoose, { Schema, model, models } from 'mongoose';

const LessonSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  videoUrl: String,
  videoDuration: Number,
  position: Number,
  isFree: { type: Boolean, default: false },
  type: {
    type: String,
    enum: ['video', 'live', 'quiz', 'resource'],
    default: 'video',
  },
});

const ModuleSchema = new Schema({
  title: { type: String, required: true },
  position: Number,
  lessons: [LessonSchema],
});

const CourseSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: String,
    shortDesc: String,
    thumbnailUrl: String,
    previewVideo: String,
    instructorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    language: { type: String, default: 'Bengali' },
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner',
    },
    price: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    isFree: { type: Boolean, default: false },
    hasCertificate: { type: Boolean, default: true },
    status: {
      type: String,
      enum: ['draft', 'under_review', 'published', 'archived'],
      default: 'draft',
    },
    modules: [ModuleSchema],
    stats: {
      totalLessons: { type: Number, default: 0 },
      totalDuration: { type: Number, default: 0 },
      totalStudents: { type: Number, default: 0 },
      avgRating: { type: Number, default: 0 },
      totalReviews: { type: Number, default: 0 },
    },
    publishedAt: Date,
  },
  { timestamps: true }
);

const Course = models.Course || model('Course', CourseSchema);
export default Course;

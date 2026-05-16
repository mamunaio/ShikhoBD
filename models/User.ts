import mongoose, { Schema, model, models } from 'mongoose';

const InstructorProfileSchema = new Schema({
  bio: String,
  designation: String,
  website: String,
  socialLinks: {
    facebook: String,
    twitter: String,
    linkedin: String,
    youtube: String,
  },
  isApproved: { type: Boolean, default: false },
  approvedAt: Date,
  totalStudents: { type: Number, default: 0 },
  totalRevenue: { type: Number, default: 0 },
});

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String },
    avatarUrl: String,
    role: {
      type: String,
      enum: ['student', 'instructor', 'admin'],
      default: 'student',
    },
    isVerified: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    instructorProfile: InstructorProfileSchema,
  },
  { timestamps: true }
);

const User = models.User || model('User', UserSchema);
export default User;

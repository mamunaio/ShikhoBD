export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  avatarUrl?: string;
  isVerified: boolean;
  isActive: boolean;
  instructorProfile?: InstructorProfile;
  createdAt: string;
}

export interface InstructorProfile {
  bio?: string;
  designation?: string;
  website?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
  };
  isApproved: boolean;
  totalStudents: number;
  totalRevenue: number;
}

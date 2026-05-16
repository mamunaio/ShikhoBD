export interface Course {
  _id: string;
  title: string;
  slug: string;
  description: string;
  shortDesc: string;
  thumbnailUrl: string;
  price: number;
  originalPrice: number;
  instructorId: string | any;
  categoryId: string | any;
  level: 'beginner' | 'intermediate' | 'advanced';
  status: 'draft' | 'under_review' | 'published' | 'archived';
  modules: Module[];
  stats: {
    totalLessons: number;
    totalDuration: number;
    totalStudents: number;
    avgRating: number;
    totalReviews: number;
  };
  createdAt: string;
}

export interface Module {
  _id: string;
  title: string;
  position: number;
  lessons: Lesson[];
}

export interface Lesson {
  _id: string;
  title: string;
  videoUrl?: string;
  videoDuration?: number;
  type: 'video' | 'live' | 'quiz' | 'resource';
  isFree: boolean;
  position: number;
}

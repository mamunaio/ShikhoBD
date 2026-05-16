import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../models/User';
import Category from '../models/Category';
import Course from '../models/Course';
import dns from 'dns';

// Force use Google DNS to bypass local network issues
dns.setServers(['8.8.8.8', '8.8.4.4']);

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI is not defined in .env.local');
  process.exit(1);
}

async function seed() {
  try {
    console.log('⏳ Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI as string);
    console.log('✅ Connected to MongoDB');

    // 1. Create/Update Instructor
    console.log('👤 Creating instructor...');
    const hashedPassword = await bcrypt.hash('password123', 10);
    const instructor = await User.findOneAndUpdate(
      { email: 'instructor@shikhobd.com' },
      {
        name: 'John Doe',
        email: 'instructor@shikhobd.com',
        passwordHash: hashedPassword,
        role: 'instructor',
        isVerified: true,
        instructorProfile: {
          bio: 'Expert Web Developer with 10+ years of experience in MERN stack and Next.js.',
          designation: 'Senior Full Stack Developer',
          isApproved: true,
          approvedAt: new Date(),
        },
      },
      { upsert: true, new: true }
    );

    // 2. Create/Update Categories
    console.log('📂 Creating categories...');
    const categories = [
      { name: 'Web Development', slug: 'web-development', icon: 'Globe', colorHex: '#185FA5' },
      { name: 'App Development', slug: 'app-development', icon: 'Smartphone', colorHex: '#E91E63' },
      { name: 'Graphic Design', slug: 'graphic-design', icon: 'Palette', colorHex: '#4CAF50' },
      { name: 'Digital Marketing', slug: 'digital-marketing', icon: 'Megaphone', colorHex: '#FF9800' },
    ];

    const categoryDocs: any[] = [];
    for (const cat of categories) {
      const doc = await Category.findOneAndUpdate(
        { slug: cat.slug },
        cat,
        { upsert: true, new: true }
      );
      categoryDocs.push(doc);
    }

    // 3. Create/Update Courses
    console.log('📚 Creating courses...');
    const courses = [
      {
        title: 'Full Stack Web Development (MERN)',
        slug: 'full-stack-web-development-mern',
        shortDesc: 'মাস্টার করুন MERN স্ট্যাক এবং তৈরি করুন প্রফেশনাল ওয়েব অ্যাপ্লিকেশন।',
        description: 'এই কোর্সে আপনি শিখবেন কিভাবে MongoDB, Express.js, React, এবং Node.js ব্যবহার করে একটি পূর্ণাঙ্গ ওয়েব অ্যাপ্লিকেশন তৈরি করতে হয়।',
        thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop',
        instructorId: instructor._id,
        categoryId: categoryDocs[0]._id,
        price: 4500,
        originalPrice: 6000,
        level: 'beginner',
        status: 'published',
        language: 'Bengali',
        hasCertificate: true,
        modules: [
          {
            title: 'শুরু করা যাক',
            position: 1,
            lessons: [
              { title: 'কোর্স পরিচিতি', position: 1, isFree: true, type: 'video' },
              { title: 'প্রয়োজনীয় টুলস ইন্সটলেশন', position: 2, isFree: false, type: 'video' },
            ],
          },
        ],
        stats: {
          totalLessons: 45,
          totalDuration: 1200,
          totalStudents: 150,
          avgRating: 4.8,
          totalReviews: 24,
        },
        publishedAt: new Date(),
      },
      {
        title: 'Next.js 16 Mastery (Bengali)',
        slug: 'nextjs-16-mastery',
        shortDesc: 'Next.js ১৬ এর লেটেস্ট ফিচারগুলো শিখে হয়ে উঠুন একজন প্রো ডেভেলপার।',
        description: 'App Router, Server Actions, এবং Turbopack এর মতো আধুনিক প্রযুক্তি ব্যবহার করে হাই-পারফরম্যান্স অ্যাপ্লিকেশন তৈরি শিখুন।',
        thumbnailUrl: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800&auto=format&fit=crop',
        instructorId: instructor._id,
        categoryId: categoryDocs[0]._id,
        price: 3500,
        originalPrice: 5000,
        level: 'intermediate',
        status: 'published',
        language: 'Bengali',
        hasCertificate: true,
        stats: {
          totalLessons: 30,
          totalDuration: 900,
          totalStudents: 85,
          avgRating: 4.9,
          totalReviews: 12,
        },
        publishedAt: new Date(),
      },
      {
        title: 'Mobile App Development with Flutter',
        slug: 'mobile-app-development-flutter',
        shortDesc: 'একটি মাত্র কোডবেস দিয়ে অ্যান্ড্রয়েড এবং আইওএস অ্যাপ তৈরি শিখুন।',
        description: 'ফ্লাটার ব্যবহার করে আধুনিক ও দ্রুতগতির মোবাইল অ্যাপ্লিকেশন তৈরির সম্পূর্ণ গাইডলাইন।',
        thumbnailUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
        instructorId: instructor._id,
        categoryId: categoryDocs[1]._id,
        price: 5000,
        originalPrice: 7500,
        level: 'beginner',
        status: 'published',
        language: 'Bengali',
        hasCertificate: true,
        stats: {
          totalLessons: 60,
          totalDuration: 1800,
          totalStudents: 210,
          avgRating: 4.7,
          totalReviews: 45,
        },
        publishedAt: new Date(),
      },
    ];

    for (const course of courses) {
      await Course.findOneAndUpdate(
        { slug: course.slug },
        course,
        { upsert: true, new: true }
      );
    }

    console.log('🚀 Seed data inserted successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
}

seed();

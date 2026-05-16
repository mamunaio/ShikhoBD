# 🎓 ShikhoBD - Modern E-Learning Platform

ShikhoBD একটি আধুনিক এবং শক্তিশালী লার্নিং ম্যানেজমেন্ট সিস্টেম (LMS), যা বাংলাদেশের ছাত্রছাত্রীদের জন্য একটি প্রিমিয়াম অনলাইন লার্নিং অভিজ্ঞতা প্রদানের লক্ষ্যে তৈরি করা হয়েছে। এটি Next.js 16 (Turbopack), Auth.js v5 এবং MongoDB Atlas এর মতো লেটেস্ট টেকনোলজি ব্যবহার করে তৈরি করা হয়েছে।

## 🚀 Key Features

- **🔐 Secure Authentication**: Auth.js (NextAuth v5) ব্যবহার করে Google OAuth এবং Credentials লগইন সিস্টেম।
- **🎥 Course Management**: ভিডিও লেসন, মডিউল এবং ক্যাটাগরি অনুযায়ী সাজানো কোর্স।
- **👤 User Roles**: শিক্ষার্থী (Student), ইন্সট্রাক্টর (Instructor) এবং অ্যাডমিন (Admin) এর জন্য আলাদা ড্যাশবোর্ড এবং এক্সেস।
- **⚡ High Performance**: Next.js 16 এবং Turbopack ব্যবহারের ফলে সুপার-ফাস্ট পেজ লোডিং স্পিড।
- **🎨 Premium UI/UX**: Tailwind CSS এবং Framer Motion ব্যবহার করে একটি আধুনিক, ক্লিন এবং রেসপনসিভ ডিজাইন।
- **📊 Progress Tracking**: ছাত্রছাত্রীদের কোর্সের প্রগ্রেস ট্র্যাক করার সুবিধা।
- **📱 Responsive Design**: মোবাইল, ট্যাবলেট এবং ডেস্কটপ সব ডিভাইসের জন্য অপ্টিমাইজড।

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Authentication**: [Auth.js (NextAuth v5)](https://authjs.dev/)
- **Database**: [MongoDB Atlas](https://www.mongodb.com/)
- **ODM**: [Mongoose](https://mongoosejs.com/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: React Hook Form & Zod
- **Deployment**: Vercel

## ⚙️ Environment Variables Setup

প্রজেক্টটি সঠিকভাবে চালানোর জন্য আপনার রুট ডিরেক্টরিতে একটি `.env.local` ফাইল তৈরি করুন এবং নিচের ভেরিয়েবলগুলো সেট করুন:

```env
# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# Auth.js Configuration
AUTH_SECRET=your_auth_secret # Run: openssl rand -base64 32
AUTH_URL=http://localhost:3000

# Google OAuth
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret

# Public Vars
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🚀 Getting Started

প্রথমে রিপোজিটরি ক্লোন করুন এবং ডিপেন্ডেন্সি ইনস্টল করুন:

```bash
git clone https://github.com/yourusername/shikhobd.git
cd shikhobd
npm install
```

ডেভেলপমেন্ট সার্ভার চালু করতে:

```bash
npm run dev
```

এখন ব্রাউজারে [http://localhost:3000](http://localhost:3000) ওপেন করে প্রজেক্টটি দেখুন।

## 📂 Project Structure

```text
├── app/              # Next.js App Router (Pages, API, Layouts)
├── components/       # Reusable UI Components
├── lib/              # Database & Shared Utilities
├── models/           # Mongoose Data Models
├── public/           # Static Assets (Images, Fonts)
├── styles/           # Global CSS & Tailwind Config
├── types/            # TypeScript Type Definitions
└── .env.local        # Environment Variables (Keep it private!)
```

## 📜 License

এই প্রজেক্টটি MIT লাইসেন্সের অধীনে লাইসেন্সকৃত। বিস্তারিত জানতে [LICENSE](LICENSE) ফাইলটি দেখুন।

---

Developed with ❤️ by **ShikhoBD Team**

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const APP_URL = process.env.NEXTAUTH_URL || 'http://localhost:3000';

export const sendVerificationEmail = async (to: string, token: string) => {
  const verifyUrl = `${APP_URL}/auth/verify-email?token=${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject: 'আপনার ইমেইল যাচাই করুন - ShikhoBD',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e1e1e1; border-radius: 10px; overflow: hidden;">
        <div style="background: #185FA5; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">ShikhoBD</h1>
        </div>
        <div style="padding: 40px; text-align: center;">
          <h2>ইমেইল যাচাইকরণ</h2>
          <p>ShikhoBD-তে যোগ দেওয়ার জন্য ধন্যবাদ! আপনার অ্যাকাউন্ট সক্রিয় করতে নিচের লিংকে ক্লিক করুন।</p>
          <a href="${verifyUrl}" style="display: inline-block; background: #185FA5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 20px;">অ্যাকাউন্ট ভেরিফাই করুন</a>
          <p style="margin-top: 30px; font-size: 12px; color: #666;">যদি আপনি এই অনুরোধ না করে থাকেন, তবে এই ইমেইলটি উপেক্ষা করুন।</p>
        </div>
      </div>
    `,
  });
};

export const sendPasswordResetEmail = async (to: string, token: string) => {
  const resetUrl = `${APP_URL}/auth/reset-password?token=${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject: 'পাসওয়ার্ড রিসেট করুন - ShikhoBD',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e1e1e1; border-radius: 10px; overflow: hidden;">
        <div style="background: #185FA5; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">ShikhoBD</h1>
        </div>
        <div style="padding: 40px; text-align: center;">
          <h2>পাসওয়ার্ড রিসেট</h2>
          <p>আপনার অ্যাকাউন্টের পাসওয়ার্ড রিসেট করার জন্য একটি অনুরোধ পাওয়া গেছে। পাসওয়ার্ড পরিবর্তন করতে নিচের লিংকে ক্লিক করুন।</p>
          <a href="${resetUrl}" style="display: inline-block; background: #185FA5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 20px;">পাসওয়ার্ড রিসেট করুন</a>
          <p style="margin-top: 30px; font-size: 12px; color: #666;">লিংকটি ১ ঘণ্টা পর অকেজো হয়ে যাবে।</p>
        </div>
      </div>
    `,
  });
};

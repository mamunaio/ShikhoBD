# Production Readiness Checklist

Before going live with ShikhoBD, ensure all these boxes are checked.

## ✅ Pre-Launch
- [ ] **Environment Variables**: All keys set in Vercel (Production environment).
- [ ] **Database**: MongoDB Atlas cluster is active and seeded.
- [ ] **Auth**: Google OAuth callback URIs include the production domain.
- [ ] **Emails**: Nodemailer is configured with a valid SMTP (e.g., SendGrid/Gmail App Password).
- [ ] **Media**: Cloudinary presets created for thumbnails and avatars.

## 🔒 Security
- [ ] `NEXTAUTH_SECRET` is a strong 32+ character string.
- [ ] `JWT_SECRET` is different from auth secret and equally strong.
- [ ] API routes use `requireAuth` and `requireRole` wrappers.
- [ ] Input validation (Zod) is implemented for all POST/PATCH requests.
- [ ] Sensitive MongoDB user has only `readWrite` permissions (not `AtlasAdmin` in production).

## 🚀 Performance
- [ ] `next/image` is used for all course thumbnails and avatars.
- [ ] React Query `staleTime` is set (e.g., 5 mins) to avoid excessive API calls.
- [ ] MongoDB indexes are created for `slug`, `email`, and compound keys.
- [ ] Lighthouse Performance score is 90+.

## 🧪 Critical Flow Testing
- [ ] User can Register and verify email.
- [ ] User can Login via Google and Credentials.
- [ ] Student can enroll in a course (payment simulation).
- [ ] Lesson progress is saved correctly.
- [ ] Instructor can create a module and lesson.
- [ ] Admin can approve a pending course.

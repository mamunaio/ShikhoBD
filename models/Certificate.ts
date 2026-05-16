import mongoose, { Schema, model, models } from 'mongoose';

const CertificateSchema = new Schema(
  {
    studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    certificateUrl: { type: String, required: true },
    issuedAt: { type: Date, default: Date.now },
  },
  { timestamps: false }
);

CertificateSchema.index({ studentId: 1, courseId: 1 }, { unique: true });

const Certificate = models.Certificate || model('Certificate', CertificateSchema);
export default Certificate;

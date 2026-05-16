import mongoose, { Schema, model, models } from 'mongoose';

const LiveClassSchema = new Schema(
  {
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    instructorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: String,
    scheduledAt: { type: Date, required: true },
    duration: { type: Number, required: true }, // in minutes
    meetingUrl: String,
    meetingId: String,
    status: {
      type: String,
      enum: ['scheduled', 'live', 'ended'],
      default: 'scheduled',
    },
    recordingUrl: String,
  },
  { timestamps: true }
);

const LiveClass = models.LiveClass || model('LiveClass', LiveClassSchema);
export default LiveClass;

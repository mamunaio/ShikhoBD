import mongoose, { Schema, model, models } from 'mongoose';

const NotificationSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    type: {
      type: String,
      enum: [
        'enrollment',
        'live_class',
        'payment',
        'certificate',
        'review',
        'system',
      ],
      required: true,
    },
    isRead: { type: Boolean, default: false },
    link: String,
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const Notification = models.Notification || model('Notification', NotificationSchema);
export default Notification;

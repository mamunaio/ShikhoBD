import mongoose, { Schema, model, models } from 'mongoose';

const AnswerSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  answer: { type: String, required: true },
  isInstructor: { type: Boolean, default: false },
  upvotes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const QnASchema = new Schema(
  {
    lessonId: { type: String, required: true },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    question: { type: String, required: true },
    isAnswered: { type: Boolean, default: false },
    upvotes: { type: Number, default: 0 },
    answers: [AnswerSchema],
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const QnA = models.QnA || model('QnA', QnASchema);
export default QnA;

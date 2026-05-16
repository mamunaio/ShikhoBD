import mongoose, { Schema, model, models } from 'mongoose';

const QuizAttemptSchema = new Schema(
  {
    quizId: { type: Schema.Types.ObjectId, ref: 'Quiz', required: true },
    studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    answers: {
      type: Map,
      of: String, // questionId -> selectedOptionId
    },
    score: { type: Number, required: true },
    totalQuestions: { type: Number, required: true },
    isPassed: { type: Boolean, required: true },
    attemptedAt: { type: Date, default: Date.now },
  },
  { timestamps: false }
);

const QuizAttempt = models.QuizAttempt || model('QuizAttempt', QuizAttemptSchema);
export default QuizAttempt;

import mongoose, { Schema, model, models } from 'mongoose';

const QuestionSchema = new Schema({
  questionText: { type: String, required: true },
  options: [
    {
      id: { type: String, required: true },
      text: { type: String, required: true },
    },
  ],
  correctOption: { type: String, required: true },
  explanation: String,
  position: Number,
});

const QuizSchema = new Schema(
  {
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    lessonId: { type: String, required: true }, // References the ID in Course.modules.lessons
    title: { type: String, required: true },
    passPercentage: { type: Number, default: 70 },
    questions: [QuestionSchema],
  },
  { timestamps: true }
);

const Quiz = models.Quiz || model('Quiz', QuizSchema);
export default Quiz;

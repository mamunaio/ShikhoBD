import mongoose, { Schema, model, models } from 'mongoose';

const NoteSchema = new Schema(
  {
    studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    lessonId: { type: String, required: true },
    content: { type: String, required: true },
    timestamp: Number, // seconds into the video
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const Note = models.Note || model('Note', NoteSchema);
export default Note;

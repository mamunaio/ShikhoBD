import mongoose, { Schema, model, models } from 'mongoose';

const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    icon: String,
    colorHex: String,
    parentId: { type: Schema.Types.ObjectId, ref: 'Category', default: null },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Category = models.Category || model('Category', CategorySchema);
export default Category;

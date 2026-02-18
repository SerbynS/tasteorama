import { model, Schema } from 'mongoose';

const categoriesSchema = new Schema(
  {
    name: { type: String, require: true, unique: true },
  },
  { timestamps: true, versionKey: false },
);

export const CategoriesCollection = model('categories', categoriesSchema);

import { model, Schema } from 'mongoose';

const recipesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'categories',
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    area: {
      type: Schema.Types.ObjectId,
      ref: 'areas',
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumb: { type: String },
    time: { type: Number },
    ingredients: [
      {
        ingredient: {
          type: Schema.Types.ObjectId,
          ref: 'ingredients',
        },
        measure: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true, versionKey: false },
);

export const RecipesCollection = model('recipes', recipesSchema);

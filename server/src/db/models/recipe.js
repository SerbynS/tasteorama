import { model, Schema } from 'mongoose';

const recipesSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'categories',
      require: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      require: true,
    },
    area: {
      type: Schema.Types.ObjectId,
      ref: 'areas',
      require: true,
    },
    instructions: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
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

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: "Le champ nom est requis",
      minlength: 1,
      maxLength: 150,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.Category ||
  mongoose.model("Category", CategorySchema);

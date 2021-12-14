import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: "Le champs nom est requis",
      unique: "Le nom doit etre unique",
      minlength: 1,
    },
    shortDescription: {
      type: String,
      required: "Le champs shortDescription est requis",
      minlength: 8,
      maxlength: 80,
    },
    description: {
      type: String,
      required: "Le champs description est requis",
      minlength: 8,
      maxlength: 9999,
    },
    countInStock: {
      type: Number,
      required: "Le champs countInStock est requis",
      min: 0,
      max: 9999,
    },
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    image: {
      type: String,
      required: "Le champs image est requis",
      minlength: 1,
      maxlength: 1000,
    },
    price: {
      type: Number,
      required: "Le champs price est requis",
      min: 0.01,
      max: 9999999999,
    },
    numReviews: {
      type: Number,
      required: "Le champs numReviews est requis",
      default: 0,
      min: 0,
      max: 999999999,
    },
    rating: {
      type: Number,
      required: "Le champs rating est requis",
      default: 0,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);

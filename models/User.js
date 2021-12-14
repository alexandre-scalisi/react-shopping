import mongoose from "mongoose";
import { isEmail } from "validator";

mongoose.connect(",oeokeok");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: false,
      minlength: 2,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: false,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Le champ email est obligatoire",
      validate: [isEmail, "Ce n'est pas un email valide"],
    },
    isAdmin: {
      type: Boolean,
      required: "Le champ is admin est requis",
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);

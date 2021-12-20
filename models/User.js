import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { isEmail } from "validator";

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
      minlength: 8,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Le champ email est obligatoire",
      validate: [isEmail, "Ce n'est pas un email valide"],
    },
    isAdmin: {
      type: Boolean,
      required: "Le champ isAdmin est requis",
      default: false,
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Le champ mot de passe est obligatoire"],
      minlength: 8,
      select: false,
    },
    passwordConfirm: {
      type: String,
      trim: true,
      required: [true, "Veuillez confirmer votre mot de passe"],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: "Les mots de passe ne correspondent pas",
      },
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
});

export default mongoose.models.User || mongoose.model("User", UserSchema);

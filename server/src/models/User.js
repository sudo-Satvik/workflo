import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImageUrl: { type: String, required: true },
    role: { type: String, enum: ["admin", "member"], default: "member" }, // RBAC
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);

import mongoose from "mongoose";

const userObject = {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
};
// timestamps: true automatically adds createdAt and updatedAt
const UserSchema = new mongoose.Schema(userObject, { timestamps: true });

export default mongoose.model("User", UserSchema);

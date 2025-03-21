import mongoose from "mongoose";

const productData = {
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
};

const salesSchema = new mongoose.Schema(productData, { timestamps: true });
export default mongoose.model("Sales", salesSchema);

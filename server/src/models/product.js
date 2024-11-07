import { required, string } from "joi";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    available: { type: Boolean },
    type: { type: String, enum: ["type1", "type2"], required: true },
    category: { type: String, required: true },
    description: { type: String },
    images: { type: [String] },
  },
  { versionKey: false, timestamps: true }
);
export default mongoose.model("Product", productSchema);

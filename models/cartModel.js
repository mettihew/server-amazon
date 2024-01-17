import mongoose from "mongoose";

export const cartSchema = new mongoose.Schema({
  userId: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "User",
    type: String,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quality: {
    type: Number,
    default: 1,
    required: true,
},
  title: {
    type: String,
    required: true,
  },
  image: {
      type: String,
      required: true
  },
  size: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Cart", cartSchema);

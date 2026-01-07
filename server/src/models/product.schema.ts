import mongoose, { Schema } from "mongoose";

export interface ProductDocument extends Document {
  name: string;
  price: number;
  image: string;
}

const productSchema = new Schema<ProductDocument>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
});

const productModel = mongoose.model<ProductDocument>("Product", productSchema);
export default productModel;

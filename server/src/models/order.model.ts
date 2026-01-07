import mongoose, { Schema, Document } from "mongoose";

export interface OrderItem {
  productId: mongoose.Types.ObjectId;
  quantity: number;
  price: number;
}

export interface OrderDocument extends Document {
  userId: mongoose.Types.ObjectId;
  items: OrderItem[];
  totalAmount: number;
  paymentStatus: "PENDING" | "PAID" | "FAILED";
  orderStatus: "PLACED" | "CANCELLED";
}

const orderSchema = new Schema<OrderDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["PENDING", "PAID", "FAILED"],
      default: "PENDING",
    },
    orderStatus: {
      type: String,
      enum: ["PLACED", "CANCELLED"],
      default: "PLACED",
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model<OrderDocument>("Order", orderSchema);
export default Order;

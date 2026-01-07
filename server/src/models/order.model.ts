import mongoose, { Schema, Document } from "mongoose";

export interface OrderItem {
  _id: mongoose.Types.ObjectId;
  quantity: number;
  price: number;
  image:string
}

export interface OrderDocument extends Document {
  userId: string
  items: OrderItem[];
  totalAmount: number;
  paymentStatus: "PENDING" | "PAID" | "FAILED";
  orderStatus: "PLACED" | "CANCELLED";
}

const orderSchema = new Schema<OrderDocument>(
  {
    userId: {
      type: String,
      required: true,
    },
    items: [
      {
        _id: {
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
        image: {
          type: String,
          required:true
        }
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

const OrderModel = mongoose.model<OrderDocument>("Order", orderSchema);
export default OrderModel

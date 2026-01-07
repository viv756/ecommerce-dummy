import { Request, Response } from "express";
import ProductModel from "../models/product.schema";
import asyncHandler from "../middlewares/async-handler";
import OrderModel from "../models/order.model";

export const getProductsController = asyncHandler(async (req: Request, res: Response) => {
  const products = await ProductModel.find();

  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
});

export const paymentController = asyncHandler(async (req: Request, res: Response) => {
  const { orders, totalAmount } = req.body;

  console.log(req.body);
  

  if (!orders || orders.length === 0) {
    return res.status(400).json({
      message: "No orders found",
    });
  }

  const userId = Date.now().toString();

  // create order (dummy payment success)
  const createdOrder = await OrderModel.create({
    userId,
    items: orders,
    totalAmount,
    paymentStatus: "PAID", // dummy payment
    orderStatus: "PLACED",
  });

  res.status(201).json({
    success: true,
    message: "Order placed successfully (Dummy Payment)",
    order: createdOrder,
  });
});

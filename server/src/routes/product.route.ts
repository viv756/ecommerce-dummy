import { Router } from "express";
import { getProductsController, paymentController } from "../controllers/product.controller";

const productRoutes = Router();

productRoutes.get("/get/all", getProductsController);
productRoutes.post("/payment",paymentController)

export default productRoutes;

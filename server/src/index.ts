import "dotenv/config";

import express from "express";
import cors from "cors";
import connectDatabase from "./config/database";
import { errorHandler } from "./middlewares/error-handler";
import productRoutes from "./routes/product.route";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN,
    credentials: true,
  })
);

app.use("/api/product", productRoutes);

app.use(errorHandler);

app.listen(PORT, async () => {
  await connectDatabase();
  console.log(`server is listening ${PORT}`);
});

import "dotenv/config";

import express from "express";
import connectDatabase from "./config/database";
import { errorHandler } from "./middlewares/error-handler";

const PORT = process.env.PORT;
const app = express();

app.use("")

app.use(errorHandler);

app.listen(PORT, async () => {
  await connectDatabase();
  console.log(`server is listening ${PORT}`);
});

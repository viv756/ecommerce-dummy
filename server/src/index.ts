import "dotenv/config";

import express from "express";
import connectDatabase from "./config/database";

const PORT = process.env.PORT;
const app = express();

app.listen(PORT, async () => {
  await connectDatabase();
  console.log(`server is listening ${PORT}`);
});

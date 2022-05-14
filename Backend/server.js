import express from "express";

import dotenv from "dotenv";
import connectDB from "./config/db.js";
import habitRoutes from './Routes/habitRoute.js'
import {errorHandler} from './middleware/errorMiddleware.js'
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/habit",habitRoutes)
app.use(errorHandler);
app.listen(5000, console.log("server is running..."));
import express from "express";
import productRouter from "./routes/product";
import cors from "cors";
import mongoose from "mongoose";
import categoryRouter from "./routes/category"
import { connectDatabase } from "./config/mongodb";
import { err } from "../utils/handles/err";
const app = express();
connectDatabase();
// middleware
app.use(express.json());
app.use(cors())
// router
app.use("/api", productRouter);
app.use("/api", categoryRouter)
app.use(err)


export const viteNodeApp = app;
import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health",(req,res)=>{
    res.json({message:"Server is running..."})
})

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

export default app;
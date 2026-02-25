import express from "express";
import morgan from "morgan";
import productRoutes from "./routes/product.routes.js";
import { loggerMiddleware } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Middleware Layer
app.use(express.json());
app.use(morgan("dev"));
app.use(loggerMiddleware);

// Routes
app.use("/api/products", productRoutes);

// Error Handler
app.use(errorHandler);

export default app;
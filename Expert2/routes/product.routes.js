import express from "express";
import { fetchProducts, addProduct } from "../controllers/product.controller.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.get("/", fetchProducts);
router.post("/", authMiddleware, addProduct);

export default router;
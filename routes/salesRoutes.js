import express from "express";
import {
  createSale,
  getUserSales,
  getAllSales,
} from "../controllers/salesController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Sales Routes - Protected
router.post("/", authMiddleware, createSale);
router.get("/", authMiddleware, getUserSales);
router.get("/admin", authMiddleware, getAllSales); // Admin-only route

export default router;

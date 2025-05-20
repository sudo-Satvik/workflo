import express from "express";
import { adminOnly, protect } from "../middlewares/auth.middleware.js";
import { getUsers, getUserById } from "../controllers/user.controller.js";

export const router = express.Router();

// User Management Routes
router.get("/", protect, adminOnly, getUsers);
router.get("/:id", protect, getUserById);

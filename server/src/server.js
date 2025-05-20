import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { connectDB } from "./config/database.js";
import { router as authRoutes } from "./routes/auth.routes.js";
import { router as userRoutes } from "./routes/user.routes.js";
import { router as taskRoutes } from "./routes/task.routes.js";
import { router as reportRoutes } from "./routes/report.routes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware to handle CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Connect the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/reports", reportRoutes);

// Server Health
app.get("/health", (_req, res) => {
  res.json("Server is healthy");
});

// Initiate Server

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

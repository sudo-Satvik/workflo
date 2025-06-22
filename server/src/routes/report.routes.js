import express from "express";
import { protect, adminOnly } from "../middlewares/auth.middleware.js";
import {
  exportTasksReport,
  exportUsersReport,
} from "../controllers/report.controller.js";
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Reports
 *   description: Report generation and export operations
 */

/**
 * @swagger
 * /api/reports/export/tasks:
 *   get:
 *     summary: Export tasks report (Admin only)
 *     tags: [Reports]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [csv, xlsx, pdf]
 *           default: csv
 *         description: Export format
 *       - in: query
 *         name: dateFrom
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter tasks from this date
 *       - in: query
 *         name: dateTo
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter tasks to this date
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [Pending, "Work in progress", Completed]
 *         description: Filter tasks by status
 *       - in: query
 *         name: priority
 *         schema:
 *           type: string
 *           enum: [Low, Medium, High]
 *         description: Filter tasks by priority
 *     responses:
 *       200:
 *         description: Tasks report exported successfully
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 *           text/csv:
 *             schema:
 *               type: string
 *               example: "Title,Description,Priority,Status,Due Date,Assigned To,Created By,Created At\n..."
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Forbidden - Admin access required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/export/tasks", protect, adminOnly, exportTasksReport);

/**
 * @swagger
 * /api/reports/export/users:
 *   get:
 *     summary: Export users report (Admin only)
 *     tags: [Reports]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [csv, xlsx, pdf]
 *           default: csv
 *         description: Export format
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *           enum: [admin, member]
 *         description: Filter users by role
 *       - in: query
 *         name: includeTaskStats
 *         schema:
 *           type: boolean
 *           default: false
 *         description: Include task statistics for each user
 *     responses:
 *       200:
 *         description: Users report exported successfully
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 *           text/csv:
 *             schema:
 *               type: string
 *               example: "Name,Email,Role,Created At,Total Tasks,Completed Tasks\n..."
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Forbidden - Admin access required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/export/users", protect, adminOnly, exportUsersReport);

export { router };

import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/database.js";
import { router as authRoutes } from "./routes/auth.routes.js";
import { router as userRoutes } from "./routes/user.routes.js";
import { router as taskRoutes } from "./routes/task.routes.js";
import { router as reportRoutes } from "./routes/report.routes.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerui from "swagger-ui-express";
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

// Swagger Configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Workflo API",
      version: "1.0.0",
      description: "A comprehensive task management and collaboration API"
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        User: {
          type: "object",
          required: ["name", "email", "password", "profileImageUrl"],
          properties: {
            _id: {
              type: "string",
              example: "507f1f77bcf86cd799439011",
            },
            name: {
              type: "string",
              example: "John Doe",
            },
            email: {
              type: "string",
              example: "john.doe@example.com",
            },
            password: {
              type: "string",
              example: "password123",
            },
            profileImageUrl: {
              type: "string",
              example: "http://localhost:8000/uploads/profile.jpg",
            },
            role: {
              type: "string",
              enum: ["admin", "member"],
              default: "member",
              example: "member",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2023-01-01T00:00:00.000Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              example: "2023-01-01T00:00:00.000Z",
            },
          },
        },
        Task: {
          type: "object",
          required: ["title", "dueDate"],
          properties: {
            _id: {
              type: "string",
              example: "507f1f77bcf86cd799439011",
            },
            title: {
              type: "string",
              example: "Complete project documentation",
            },
            description: {
              type: "string",
              example: "Write comprehensive documentation for the project",
            },
            priority: {
              type: "string",
              enum: ["Low", "Medium", "High"],
              default: "Medium",
              example: "High",
            },
            status: {
              type: "string",
              enum: ["Pending", "Work in progress", "Completed"],
              default: "Pending",
              example: "Work in progress",
            },
            dueDate: {
              type: "string",
              format: "date-time",
              example: "2023-12-31T23:59:59.000Z",
            },
            assignedTo: {
              type: "array",
              items: {
                type: "string",
                example: "507f1f77bcf86cd799439011",
              },
            },
            createdBy: {
              type: "string",
              example: "507f1f77bcf86cd799439011",
            },
            attachments: {
              type: "array",
              items: {
                type: "string",
                example: "http://localhost:8000/uploads/document.pdf",
              },
            },
            todoChecklist: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  text: {
                    type: "string",
                    example: "Review requirements",
                  },
                  completed: {
                    type: "boolean",
                    default: false,
                    example: false,
                  },
                },
              },
            },
            progress: {
              type: "number",
              minimum: 0,
              maximum: 100,
              default: 0,
              example: 75,
            },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2023-01-01T00:00:00.000Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              example: "2023-01-01T00:00:00.000Z",
            },
          },
        },
        LoginRequest: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
              example: "john.doe@example.com",
            },
            password: {
              type: "string",
              example: "password123",
            },
          },
        },
        RegisterRequest: {
          type: "object",
          required: ["name", "email", "password", "profileImageUrl"],
          properties: {
            name: {
              type: "string",
              example: "John Doe",
            },
            email: {
              type: "string",
              example: "john.doe@example.com",
            },
            password: {
              type: "string",
              example: "password123",
            },
            profileImageUrl: {
              type: "string",
              example: "http://localhost:8000/uploads/profile.jpg",
            },
            role: {
              type: "string",
              enum: ["admin", "member"],
              default: "member",
              example: "member",
            },
          },
        },
        AuthResponse: {
          type: "object",
          properties: {
            token: {
              type: "string",
              example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
            },
            user: {
              $ref: "#/components/schemas/User",
            },
          },
        },
        Error: {
          type: "object",
          properties: {
            message: {
              type: "string",
              example: "An error occurred",
            },
            error: {
              type: "string",
              example: "Internal server error",
            },
          },
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.js", "./src/controllers/*.js", "./src/models/*.js"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Swagger UI setup
app.use(
  "/docs",
  swaggerui.serve,
  swaggerui.setup(swaggerSpec, {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "Workflo API Documentation",
  })
);

// Serve swagger.json
app.get("/api-docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

// Initiate Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import allRoutes from "./routes/app.routes.js"; // Importing routes

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use routes
app.use("/api/v1", allRoutes);

export default app;

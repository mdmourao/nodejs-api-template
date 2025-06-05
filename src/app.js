console.log("Starting Personal Finance Tracker API");

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import helmet from "helmet";
import apiRoutes from "./routes/api.js";
import { errorHandler } from "./middlewares/errorHandler.js";

import { pingDb } from "./database/connection.js";
import { limiter } from "./middlewares/limiter.js";
await pingDb();

const app = express();
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ok");
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use(limiter);

app.use("/api/v1", apiRoutes);

app.all(/(.*)/, (req, res) => {
  res.status(404).json({
    status: "not found",
    detail: req.url + " not found on this server",
  });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

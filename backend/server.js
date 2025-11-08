import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import motorRoutes from "./routes/motorRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", motorRoutes);  // ✅ Prefix all motor routes with /api

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`✅ Server running on ${PORT}`));

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import motorRoutes from "./routes/motorRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = "mongodb+srv://126158051_db_user:Srihari%4018@cluster0.xqfp7i6.mongodb.net/motor?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ DB Error:", err));

app.use("/api", motorRoutes);

app.get("/", (req, res) => {
  res.send("✅ Backend running");
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

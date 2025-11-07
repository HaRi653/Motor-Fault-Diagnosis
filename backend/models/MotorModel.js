import mongoose from "mongoose";

const motorSchema = new mongoose.Schema({
  motor_id: String,
  temperature: Number,
  humidity: Number,
  vibration: Number,
  status: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("Motor", motorSchema);

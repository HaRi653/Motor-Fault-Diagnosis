import Motor from "../models/MotorModel.js";
import axios from "axios";

const ML_URL = process.env.ML_URL;


export async function receiveData(req, res) {
  try {
    const { temperature, humidity, vibration } = req.body;

    // Send to ML for prediction
    const mlResponse = await axios.post(ML_URL, {
      temperature,
      humidity,
      vibration
    });

    const status = mlResponse.data.status; 

    // Save to MongoDB
    const data = new Motor({
      motor_id: "M1",
      temperature,
      humidity,
      vibration,
      status
    });

    await data.save();
    console.log("✅ Saved to DB =>", data);

    res.json({ message: "OK", status });
  } catch (err) {
    console.error("❌ Error in receiveData:", err);
    res.status(500).json({ error: err.message });
  }
}

export async function getLatestData(req, res) {
  try {
    const latest = await Motor.findOne().sort({ timestamp: -1 });
    res.json(latest);
  } catch (err) {
    console.error("❌ Error in getLatestData:", err);
    res.status(500).json({ error: err.message });
  }
}

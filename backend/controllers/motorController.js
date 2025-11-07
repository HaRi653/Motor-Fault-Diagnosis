import Motor from "../models/MotorModel.js";

export async function receiveData(req, res) {
  try {
    const { temperature, humidity, vibration } = req.body;

    // Temporary ML disabled → just random status
    const status = Math.random() > 0.5 ? "✅ Normal" : "⚠️ Fault Detected";

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

import Motor from "../models/MotorModel.js";

export async function receiveData(req, res) {
  try {
    const { temperature, humidity, vibration } = req.body;

    const status = Math.random() > 0.5 ? "✅ Normal" : "⚠️ Fault";

    const data = new Motor({
      motor_id: "M1",
      temperature,
      humidity,
      vibration,
      status
    });

    await data.save();
    res.json({ message: "OK", status });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getLatestData(req, res) {
  try {
    const latest = await Motor.findOne().sort({ timestamp: -1 });
    res.json(latest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

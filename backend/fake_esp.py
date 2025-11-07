import requests
import random
import time

URL = "https://motor-backend.onrender.com/api/esp-data"

while True:
    data = {
        "temperature": round(random.uniform(30, 90), 2),
        "humidity": round(random.uniform(20, 80), 2),
        "vibration": round(random.uniform(0.1, 5.0), 2)
    }

    try:
        res = requests.post(URL, json=data)
        print("Sent:", data, "Status:", res.status_code)
    except Exception as e:
        print("Error sending data:", e)

    time.sleep(2)

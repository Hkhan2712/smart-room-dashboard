# ⚡ Smart Room Dashboard - ESP32 Firmware

ESP32 firmware for the **Smart Room Dashboard** project.  
This firmware reads sensor data, controls actuators, and communicates with the **MQTT broker** to interact with the frontend dashboard.

---

## ✨ Features

- 🌡️ Read temperature and humidity (DHT22)  
- ☀️ Read light intensity (LDR)  
- 📺 Display sensor data locally on OLED SSD1336  
- 💡 Control LED lights  
- 🔔 Optional buzzer alerts  
- 🔌 Connects to **MQTT broker** (Mosquitto) for real-time communication  
- ⚡ Compatible with PlatformIO and Arduino IDE  

---

## 🛠️ Hardware Components

| Component          | Pin / Description                       |
|--------------------|-----------------------------------------|
| ⚡ ESP32            | Main microcontroller                     |
| 🌡️ DHT22           | Temperature & humidity sensor           |
| ☀️ LDR             | Light intensity sensor                  |
| 📺 OLED SSD1336    | Local display for sensor data           |
| 💡 LED             | Actuator controlled via dashboard       |
| 🔔 Buzzer          | Optional alert / notification device    |

---

## 📂 Project Structure (example PlatformIO)
```
esp32/
├── include/ # Header files
├── lib/ # Custom libraries (sensors, display)
| ├── adapters
| ├── controller 
| ├── core
| ├── elements
| ├── network
├── src/
│ ├── main.cpp # Main firmware entrypoint
├── platformio.ini # PlatformIO configuration
└── README.md
```

--- 


## 🚀 Getting Started

### 1️⃣ Install PlatformIO
- Install [VSCode](https://code.visualstudio.com/)  
- Install **PlatformIO IDE extension**

### 2️⃣ Open project
- Open `esp32/` folder in VSCode + PlatformIO

### 3️⃣ Configure WiFi & MQTT
- Edit `secrets.h` (or `config.h`) to set:
```cpp
#define WIFI_SSID "YourWiFiSSID"
#define WIFI_PASSWORD "YourWiFiPassword"
#define MQTT_BROKER "mqtt://<broker-ip>:1883"
```

### 4️⃣ Build & Upload
```bash
pio run --target upload
```
- Make sure ESP32 is connected via USB
- Serial monitor: `pio device monitor`

---

## 🌐 MQTT Topics (example)

| Topic              | Direction      | Description           |
| ------------------ | -------------- | --------------------- |
| `smartroom/sensor` | ESP32 → Server | Send sensor data      |
| `smartroom/led`    | Server → ESP32 | Control LED           |
| `smartroom/buzzer` | Server → ESP32 | Trigger buzzer alerts |

---

## 🔮 Future Improvements

- Add more sensors (motion, CO2, etc.)
- OTA firmware updates
- Sleep mode / power optimization
- Advanced data parsing for client dashboard

---

## 📜 License

MIT License
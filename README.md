# 🏠 Smart Room Dashboard

[![GitHub stars](https://img.shields.io/github/stars/Hkhan2712/smart-room-dashboard?style=flat-square)](https://github.com/your-username/smart-room-dashboard/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/Hkhan2712/smart-room-dashboard?style=flat-square)](https://github.com/your-username/smart-room-dashboard/issues)
[![GitHub license](https://img.shields.io/github/license/Hkhan2712/smart-room-dashboard?style=flat-square)](./LICENSE)
A **mini IoT project** for monitoring and controlling a smart room environment using **ESP32 + MQTT + Web Dashboard + Backend Server**.  

---

## ✨ Features  

- 🌡️ Monitor **temperature & humidity** (DHT22)  
- 💡 Measure **light intensity** (LDR)  
- 📺 Local display via **OLED SSD1336**  
- 🔔 Control actuators (**LED, buzzer**)  
- 🔌 MQTT communication with **Mosquitto broker (Docker)**  
- 📊 Web dashboard with **Svelte + TypeScript**  
- 🗄️ Backend with **Express + MongoDB**  

---

## 🛠️ Hardware Components  

| Component           | Description                         |
|---------------------|-------------------------------------|
| ⚡ **ESP32**        | WiFi-enabled microcontroller        |
| 🌡️ **DHT22**        | Temperature & humidity sensor       |
| ☀️ **LDR**           | Light intensity sensor              |
| 📺 **OLED SSD1336** | 0.96" OLED display                  |
| 💡 **LED**          | Light actuator                      |
| 🔔 **Buzzer**       | Optional alarm/notification device  |

---

## 🖥️ Software Stack

- **Frontend** -> [Svelte](https://svelte.dev/) + TypeScript
- **Backend**  -> Node.js + ExpressJS + JOI + CORS + MongoDB (Dockerized)
- **Broker**   -> [Mosquitto](https://mosquitto.org/) (Dockerized MQTT broker)
- **Device**   -> ESP32 firmware (C++ with PlatformIO/Arduino)

---

## 📂 Project Structure

```

smart-room-dashboard
|--client/# Svelte + TypeScript frontend
|--esp32/# ESP32 firmware (C++ with PlatformIO / Arduino)
|--mosquitto/# MQTT broker (Docker configuration)
|--server/# Express + TypeScript + MongoDB backend
|--README.md # Main documentation

```

---

## 🚀 Getting Started  

### 1️⃣ Clone repository  
```bash
git clone https://github.com/your-username/smart-room-dashboard.git
cd smart-room-dashboard
```

### 2️⃣ Run Client (Svelte Dashboard)
```bash 
cd client 
npm install 
npm run dev
```
👉 Open at: http://localhost:5173/

### 3️⃣ Flash ESP32 Firmware
- Open esp32/ with [PlatformIO](https://platformio.org/)
- Update secrets.h with WiFi + MQTT broker credentials
- Build & upload:
```bash
pio run --target upload 
```

### 4️⃣ Start Mosquitto (MQTT Broker)
```bash
cd mosquitto
docker compose up -d
```

Broker -> mqtt://localhost:1883

### 5️⃣ Start Server (Express + MongoDB)
```bash 
cd server
docker compose up -d # start MongoDB
yarn install 
yarn dev
```

Server -> http://localhost:3000

---

### 🏗️ System Architecture
```mermaid
flowchart LR
    ESP32((ESP32)) -- MQTT --> Mosquitto((Mosquitto Broker))
    Mosquitto -- MQTT --> Client[Web Dashboard (Svelte)]
    Mosquitto -- MQTT --> Server[Express Server]
    Server -- REST API --> Client
    Server -- DB --> MongoDB[(MongoDB)]
```

---

### Roadmap 
- 🔒 User authentication & authorization
- 📈 Historical data logging
- 🎨 Improved dashboard UI/UX
- 🛋️ More IoT devices (smart plugs, motion sensors, etc.)

---

### 🤝 Contributing

Contributions, issues and feature requests are welcome!
Feel free to open a PR or an issue.

---
 
###📜 License

This project is licensed under the [MIT License]().



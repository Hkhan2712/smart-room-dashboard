# 🔌 Smart Room Dashboard - Mosquitto Broker

This folder contains the **Mosquitto MQTT broker** configuration for the Smart Room Dashboard project.  
Mosquitto acts as the **message broker** between IoT devices (ESP32) and the frontend dashboard.

---

## ✨ Features

- 📡 MQTT broker for real-time IoT communication  
- 🗄️ Persist messages and retained topics using **mosquitto.db**  
- 📝 Logs all broker events to `mosquitto.log`  
- 🔧 Configurable via `mosquitto.conf`  
- 🐳 Dockerized for easy deployment  

---

## 🛠️ Tech Stack

- [Eclipse Mosquitto](https://mosquitto.org/) MQTT broker  
- Docker + Docker Compose for containerized deployment  

---

## 📂 Project Structure

```
mosquitto/
├── config/
│ └── mosquitto.conf # Custom broker configuration
├── data/
│ └── mosquitto.db # Persisted MQTT messages
├── log/
│ └── mosquitto.log # Broker log file
├── docker-compose.yml # Docker Compose configuration
└── mosquitto.conf # Alternate/legacy configuration
```

---

## 🚀 Getting Started

### 1️⃣ Start Mosquitto broker with Docker Compose

```bash
cd mosquitto
docker compose up -d
```
- Broker will run at default MQTT port 1883
- MQTT messages are persisted in data/mosquitto.db
- Logs are written to log/mosquitto.log

### 2️⃣ Stop the broker
```bash 
docker compose down
```

--- 

## ⚙️ Configuration
- mosquitto.conf (or config/mosquitto.conf) contains broker settings:
    + Ports (1883 for MQTT, 9001 for WebSocket if enabled)
    + Persistence (persistence true / persistence_location /mosquitto/data/)
    + Logging (log_dest file /mosquitto/log/mosquitto.log)
- Modify the file if you need authentication, TLS, or other advanced settings

---

## 🔮 Future Improvements
- 🔒 Add authentication and access control for clients
- 🛡️ Enable TLS for secure MQTT connections
- 📊 Integrate with monitoring tools (e.g., Prometheus + Grafana)
- 🌐 Enable MQTT over WebSocket for web clients

---

## 📜 License

MIT License
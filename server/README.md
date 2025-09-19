# 🖥️ Smart Room Dashboard - Server

Backend server for the **Smart Room Dashboard** project.  
Acts as a middleware between **IoT devices (ESP32)** and the **web client**, handles **REST API**, **data validation**, and stores logs in **MongoDB**.

---

## ✨ Features

- 🔌 Connects to MQTT broker (Mosquitto)  
- 📦 REST API for client requests  
- 🛡️ Data validation using **Joi**  
- 🌐 Enable **CORS** for frontend communication  
- 🗄️ Stores sensor data in **MongoDB**  
- 🏗️ Ready for scaling and additional device integration  

---

## 🛠️ Tech Stack

- **Node.js** + **Express**  
- **TypeScript**  
- **MongoDB** (Dockerized)  
- **MQTT.js** (for MQTT communication)  
- **Joi** (data validation)  
- **CORS**  
- **Docker Compose** (for MongoDB service)  

---

## 📂 Project Structure

```
server/
├── src/
│ ├── controllers/ # Express route handlers
│ ├── routes/ # REST API routes
│ ├── models/ # MongoDB schemas
│ ├── services/ # Business logic / MQTT client
│ ├── utils/ # Utility functions
│ ├── app.ts # Express app setup
│ └── server.ts # Entrypoint to start server
├── docker-compose.yml # MongoDB service
├── package.json
├── tsconfig.json
└── README.md
```


---

## 🚀 Getting Started

### 1️⃣ Install dependencies
```bash
cd server
yarn install
```

### 2️⃣ Start MongoDB (Docker)
```bash
docker compose up -d
```

### 3️⃣ Run server (development)
```bash
yarn dev
```

### 4️⃣ Build for production
```bash
yarn build 
yarn start
```

--- 

## 🌐 Environment Variables

Create a >.env file with at least:
```ini
PORT=3000
MONGO_URI=mongodb://localhost:27017/smartroom
MQTT_BROKER_URL=mqtt://localhost:1883
```
You can add more config variables as needed (e.g., authentication keys).

---

## 🔮 Future Improvements
- 🔒 Authentication & JWT for client access
- 📈 Logging & analytics dashboard
- 🧩 Support multiple device types
- 🏗️ Microservices architecture for scaling

---

## 📜 License
MIT License

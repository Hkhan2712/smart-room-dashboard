# 🌐 Smart Room Dashboard - Client

Frontend of the **Smart Room Dashboard** project.  
Built with **Svelte + TypeScript + TailwindCSS + DaisyUI** to provide a modern, responsive, and minimal dashboard UI for monitoring and controlling IoT devices.

---

## ✨ Features

- 📊 Real-time data visualization from MQTT broker  
- 🎨 Styled with **TailwindCSS + DaisyUI**  
- ⚡ Powered by **Svelte + Vite**  
- 📱 Responsive design for desktop & mobile  
- 🔌 Connects to backend server & Mosquitto broker  

---

## 🛠️ Tech Stack

- [Svelte](https://svelte.dev/) + [Vite](https://vitejs.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [TailwindCSS](https://tailwindcss.com/)  
- [DaisyUI](https://daisyui.com/)  
- [MQTT.js](https://github.com/mqttjs/MQTT.js) (for broker communication)  

---

## 📂 Project Structure
client/
├── public/
├── src/
│ ├── lib/
│ ├── components/
│ ├── routes/ # pages and routing
│ ├── styles/ # Tailwind & DaisyUI config
│ └── main.ts # entrypoint
├── static/ # static assets
├── package.json
├── tailwind.config.js
└── README.md
--- 

## 🚀 Getting Started

### 1️⃣ Install dependencies
```bash
cd client
npm install
```

### 2️⃣ Run development server
```bash
npm run dev
```
👉 Open in Browser: http//localhost:5173/

### 3️⃣ Build for production
```bash
npm run build
```

### 4️⃣ Preview production build
```bash
npm run preview
```

## 🎨 UI Customization
- TailwindCSS is configured in tailwind.config.js
- Daisy themes can be customized in tailwind.config.js under daisyui.themes

Example (dark + light theme):
```js
daisyui: {
    themes: ["light", "dark"]
}
```

## 🔮 Future Improvements
- Add charts (e.g. Recharts / ApexCharts) for data visualization
- Support multi-language (i18n)
- Add authentication & user roles
- Dark mode toggle

## 📜 License
MIT License

import mqtt from "mqtt";
import { sensorsStore, devicesStore } from "./stores";

let client: mqtt.MqttClient | null = null; 

function createClient() {
	const c = mqtt.connect("ws://localhost:9001", {
		keepalive: 30,
		reconnectPeriod: 3000,
	});

	function subscribeTopics() {
		c.subscribe("smart_room/sensors/#");
		c.subscribe("smart_room/control/#");
	}

	c.on("connect", () => {
		console.log("✅ MQTT connected");
		subscribeTopics();
	});

	c.on("reconnect", () => {
		console.log("🔄 MQTT reconnecting...");
	});

	c.on("close", () => {
		console.warn("⚠️ MQTT connection closed");
	});

	c.on("error", (err) => {
		console.error("❌ MQTT error:", err);
	});

	c.on("message", (topic, payload) => {
		const msg = payload.toString();

		if (topic === "smart_room/sensors") {
		try {
			const data = JSON.parse(msg);
			sensorsStore.set(data);
		} catch (err) {
			console.error("Invalid JSON from sensors:", err);
		}
		} else if (topic.startsWith("iot/devices/")) {
		const key = topic.split("/")[2];
		devicesStore.update((d) => ({ ...d, [key]: msg === "ON" }));
		}
	});

	return c;
}

if (typeof window !== "undefined") {
	client = createClient();

	document.addEventListener("visibilitychange", () => {
		if (!document.hidden) {
		console.log("🔎 Tab active → force reconnect check");
		if (!client?.connected) {
			console.log("💡 Forcing MQTT reconnect...");
			try {
			client?.end(true); // đóng socket cũ
			} catch (e) {
			console.warn("Error closing client:", e);
			}
			client = createClient(); // tạo lại client mới
		} else {
			console.log("MQTT still connected, re-subscribing...");
			client.subscribe("smart_room/sensors/#");
			client.subscribe("smart_room/control/#");
		}
		}
	});
}

export const publish = (topic: string, message: string) =>
	client?.publish(topic, message);
import { writable } from "svelte/store";

// Sensor data
export const sensorsStore = writable({
    temperature: 0,
    humidity: 0,
    light: 0
});

// Devices state
export const devicesStore = writable({
	led: true
});

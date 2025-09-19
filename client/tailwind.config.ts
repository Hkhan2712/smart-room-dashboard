import type { Config } from "tailwindcss";
import daisyui from "daisyui";

interface MyTailwindConfig extends Config {
  daisyui?: {
    themes?: string[];
  };
}

const config: MyTailwindConfig = {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: { extend: {} },
	plugins: [
		daisyui,
	],
	daisyui: { themes: ["light", "dark"] },
};

export default config;
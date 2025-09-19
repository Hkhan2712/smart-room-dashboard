<script lang="ts">
	import { devicesStore } from "../lib/stores";
	import { publish } from "../lib/mqtt";

	function toggleLED() {
		const newState = !$devicesStore.led;
		publish("smart_room/devices/led", newState ? "ON" : "OFF");
	}
</script>

<div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex items-center justify-between gap-2">
	<!-- Thông tin LED -->
	<div class="flex items-center space-x-4">
		<div class="flex items-center justify-center w-12 h-12 rounded-full 
					{$devicesStore.led 
						? 'bg-yellow-100 dark:bg-yellow-900' 
						: 'bg-gray-200 dark:bg-gray-700'}">
			<!-- Icon light bulb -->
			<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 
						{$devicesStore.led 
							? 'text-yellow-500 dark:text-yellow-300' 
							: 'text-gray-400 dark:text-gray-500'}"
				fill="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M12 3a6 6 0 0 0-6 6c0 2.22 1.21 4.155 3 5.197V16a3 3 0 0 0 6 0v-1.803c1.79-1.042 3-2.977 3-5.197a6 6 0 0 0-6-6z" />
			</svg>
		</div>
		<div>
			<h3 class="text-lg font-semibold text-gray-800 dark:text-white">LED Light</h3>
			<p class="text-sm text-gray-500 dark:text-gray-400">
				Status:
				<span class={$devicesStore.led 
					? "text-green-600 dark:text-green-400 font-medium" 
					: "text-red-600 dark:text-red-400 font-medium"}>
					{$devicesStore.led ? "ON" : "OFF"}
				</span>
			</p>
		</div>
	</div>

	<!-- Nút bấm -->
	<button
		type="button"
		on:click={toggleLED}
		class="px-3 py-1 rounded-lg font-medium text-white transition-colors duration-200
			{$devicesStore.led 
				? 'bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-400' 
				: 'bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-400'}"
	>
		{$devicesStore.led ? "OFF" : "ON"}
	</button>
</div>

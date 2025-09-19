<script lang="ts">
	import { sensorsStore } from "../lib/stores";
</script>

<div class="bg-base-200 shadow-lg rounded-lg p-4 flex flex-col gap-4">

	<!-- Temperature -->
	<div class="flex items-center gap-3 bg-red-100 dark:bg-red-900 rounded-lg p-3">
		<!-- Icon Thermometer -->
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 14.76V3a2 2 0 10-4 0v11.76a4 4 0 104 0z" />
		</svg>
		<div class="flex flex-col">
			<span class="font-semibold text-red-700 dark:text-red-300">Temperature</span>
			<span class="text-lg font-bold text-white">{$sensorsStore.temperature} °C</span>
		</div>
	</div>

	<!-- Humidity -->
	<div class="flex items-center gap-3 bg-blue-100 dark:bg-blue-900 rounded-lg p-3">
		<!-- Icon Droplet -->
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3.12l.61.6c.22.22 5.39 5.57 5.39 9.8A5.99 5.99 0 0112 21a5.99 5.99 0 01-6-6.48c0-4.23 5.17-9.58 5.39-9.8l.61-.6z" />
		</svg>
		<div class="flex flex-col">
			<span class="font-semibold text-blue-700 dark:text-blue-300">Humidity</span>
			<span class="text-lg font-bold text-white">{$sensorsStore.humidity} %</span>
		</div>
	</div>

	<!-- Light -->
	<div class="flex items-center gap-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg p-3">
		<!-- Icon Sun -->
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36l-1.42-1.42M6.05 6.05l-1.42-1.42m12.02 0l-1.42 1.42M6.05 17.95l-1.42 1.42M12 8a4 4 0 100 8 4 4 0 000-8z" />
		</svg>
		<div class="flex flex-col">
			<span class="font-semibold text-yellow-700 dark:text-yellow-300">Light</span>
			<span class="text-lg font-bold text-white">{$sensorsStore.light} lx</span>
		</div>
	</div>

</div>

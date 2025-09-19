<script lang="ts">
    import CameraView from "../components/CameraView.svelte";
    import SensorPanel from "../components/SensorPanel.svelte";
    import LedControl from "../components/LedControl.svelte";
    import SideBar from "../components/SideBar.svelte";
</script>

<div class="flex bg-gray-100 dark:bg-white-800 min-h-screen">
    <!-- Sidebar -->
    <aside class="hidden sm:flex sm:flex-col w-64 bg-white dark:bg-gray-500 border-r border-gray-200 dark:border-gray-700 p-4">
        <SideBar />
    </aside>
    <!-- Main content -->
    <main class="flex-1 p-6">
        <div class="flex flex-col md:flex-row gap-6">
            <!-- Camera lớn bên trái -->
            <div class="md:flex-1 bg-gray-700 dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col">
                <!-- Icon Camera lớn -->
                <div class="flex items-center justify-center mb-4 p-4 bg-gray-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-full h-16 text-white">
                        <path d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                </div>

                <!-- Camera view -->
                <div class="flex-1 overflow-hidden rounded-lg">
                    <CameraView />
                </div>
            </div>
            <!-- Panel bên phải: Sensor + Controls -->
            <div class="md:w-80 flex flex-col gap-4">
                <!-- Card tổng hợp SensorPanel -->
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
                    <h3 class="text-lg font-semibold text-white-800 dark:text-gray-200 mb-2">Sensors</h3>
                    <SensorPanel />
                </div>
                <!-- Card LED / Devices Control -->
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
                    <h3 class="text-lg font-semibold text-white-800 dark:text-gray-200 mb-2">Device Controls</h3>
                    <LedControl />
                </div>
            </div>
        </div>
    </main>
</div>
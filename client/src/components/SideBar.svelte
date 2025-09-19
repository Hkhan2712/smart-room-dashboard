<button
    data-drawer-target="smart-sidebar"
    data-drawer-toggle="smart-sidebar"
    aria-controls="smart-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden 
            hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 
         focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
>
    <span class="sr-only">Open sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" clip-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 
            01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 
            01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 
            0 010 1.5H2.75A.75.75 0 012 10z" />
      </svg>
</button>


<aside
    id="smart-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700"
    aria-label="Smart Room Dashboard Sidebar"
>
    <div class="h-full px-4 py-6 overflow-y-auto flex flex-col justify-between">
        
        <!-- Logo / Title -->
        <div class="mb-6">
            <h1 class="text-xl font-bold text-gray-800 dark:text-gray-100">Smart Room</h1>
        </div>

        <!-- Navigation Menu -->
        <nav class="flex-1">
            <ul class="space-y-2 font-medium">

                <!-- Dashboard -->
                <li>
                    <a href="/" class="flex items-center p-2 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                        </svg>
                        <span class="ms-3">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="/room" class="flex items-center p-2 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a1 1 0 011 1v7h7a1 1 0 110 2h-7v7a1 1 0 11-2 0v-7H2a1 1 0 110-2h7V3a1 1 0 011-1z"/>
                        </svg>
                        <span class="ms-3">Room</span>
                    </a>
                </li>
                <!-- Camera -->
                <li>
                    <a href="/camera" class="flex items-center p-2 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                        </svg>

                        <span class="ms-3">Camera</span>
                    </a>
                </li>

                <!-- Sensors -->
                <li>
                    <a href="#/sensors" class="flex items-center p-2 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span class="ms-3">Sensors</span>
                    </a>
                </li>

                <!-- Devices / LED -->
                <li>
                    <a href="#/devices" class="flex items-center p-2 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2a2 2 0 012 2v2h-4V4a2 2 0 012-2zm6 6h2a2 2 0 012 2v12a2 2 0 01-2 2h-2V8zM4 8h2v14H4a2 2 0 01-2-2V10a2 2 0 012-2z"/>
                        </svg>
                        <span class="ms-3">Devices</span>
                    </a>
                </li>

                <!-- Alerts -->
                <li>
                    <a href="#/alerts" class="flex items-center p-2 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 8a6 6 0 10-12 0v4H4l1 9h14l1-9h-2V8z"/>
                        </svg>
                        <span class="ms-3">Alerts</span>
                    </a>
                </li>

                <!-- User Settings -->
                <li>
                    <a href="#/settings" class="flex items-center p-2 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4z"/>
                        </svg>
                        <span class="ms-3">Settings</span>
                    </a>
                </li>

            </ul>
        </nav>

        <!-- Footer / Version -->
        <div class="mt-6 text-sm text-gray-500 dark:text-gray-400">
            v1.0.0
        </div>
    </div>
</aside>

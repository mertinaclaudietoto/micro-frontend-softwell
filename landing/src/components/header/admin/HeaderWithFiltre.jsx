export default function HeaderWithFiltre(){
    return(
        <div class="flex items-center justify-between mb-2">
                    <h1 class="text-2xl font-bold">Les critères</h1>
                    <div class="flex items-center gap-4 mb-6">
                    <div class="ml-auto flex items-center gap-4">
                        <div class="relative">
                            <input type="text" placeholder="Search number, order or etc..." class="pl-4 pr-10 py-2 border border-gray-200 rounded-lg w-80"/>
                            <i class="fas fa-search absolute right-3 top-3 text-gray-400"></i>
                        </div>
                        <button class="p-2 border border-gray-200 rounded-lg">
                            <i class="fas fa-filter text-gray-600"></i>
                        </button>
                    </div>
                    <div class="flex gap-2">
                        <button class="iconerond10">
                            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>
                        <button class="iconerond10indigo">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="text-sm text-gray-500">Wednesday, 12 July 2023</div>
        </div>
    )
}
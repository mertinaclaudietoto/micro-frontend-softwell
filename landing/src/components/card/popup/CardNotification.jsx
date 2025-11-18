import { HiOutlineXMark } from "react-icons/hi2";
export default function CardNotification({closePopup}){
    const close =()=>{
        closePopup(false);
    }
return (
    <div class="background_transparent_popup">
        
        <div class="w-full max-w-lg bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6">
            <div class="flex items-center justify-end mb-6 gap-9">
                <button class="text-sm text-gray-500 hover:text-gray-700 transition">See All</button>
                <button class="text-sm text-gray-500 hover:text-gray-700 transition" onClick={()=>{close()}}><HiOutlineXMark  className="h-8 w-8" /></button>
            </div>
            <div class="flex gap-2 mb-6">
                <button class="px-6 py-2.5 bg-white text-gray-800 rounded-full shadow-sm font-medium text-sm">
                    Today
                </button>
                <button class="px-6 py-2.5 text-gray-500 hover:text-gray-700 rounded-full font-medium text-sm transition">
                    This Week
                </button>
                <button class="px-6 py-2.5 text-gray-500 hover:text-gray-700 rounded-full font-medium text-sm transition">
                    Earlier
                </button>
            </div>
            <div class="space-y-4">
                <div class="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex gap-4">
                        <div class="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                            </svg>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-start justify-between mb-1">
                                <h3 class="font-semibold text-gray-800 flex items-center gap-2">
                                    <span class="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                                    Your AI Just Got Smarter
                                </h3>
                                <span class="text-xs text-gray-400">1h ago</span>
                            </div>
                            <p class="text-sm text-gray-600 leading-relaxed">
                                Adaptive learning speed increased by <span class="font-semibold text-gray-800">27%</span>. New feature: AI-driven trend forecasting
                            </p>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex gap-4">
                        <div class="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                            </svg>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-start justify-between mb-1">
                                <h3 class="font-semibold text-gray-800 flex items-center gap-2">
                                    <span class="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                                    Data Analysis Completed
                                </h3>
                                <span class="text-xs text-gray-400">3h ago</span>
                            </div>
                            <p class="text-sm text-gray-600 leading-relaxed">
                                Your AI has processed <span class="font-semibold text-gray-800">10,000+</span> records and identified key trends.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex gap-4">
                        <div class="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-start justify-between mb-1">
                                <h3 class="font-semibold text-gray-800 flex items-center gap-2">
                                    <span class="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                                    System Maintenance
                                </h3>
                                <span class="text-xs text-gray-400">5h ago</span>
                            </div>
                            <p class="text-sm text-gray-600 leading-relaxed">
                                Performance tuning & security updates will be applied at <span class="font-semibold text-gray-800">2:00 AM</span> UTC
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

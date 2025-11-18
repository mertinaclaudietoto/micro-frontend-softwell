export default function Sidebar(){
    return (
      
<div class="bg-gray-200 min-h-screen p-8">
    
    <div class="flex gap-4 max-w-4xl">
        <div class="w-16 bg-white rounded-2xl shadow-lg flex flex-col items-center py-6 gap-6">
            
            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                <div class="relative w-6 h-6">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-full h-full" 
                        // style="
                        //     background: conic-gradient(from 0deg, white 0deg 30deg, transparent 30deg 60deg, white 60deg 90deg, transparent 90deg 120deg, white 120deg 150deg, transparent 150deg 180deg, white 180deg 210deg, transparent 210deg 240deg, white 240deg 270deg, transparent 270deg 300deg, white 300deg 330deg, transparent 330deg 360deg);
                        //     border-radius: 50%;
                        //     transform: scale(0.6);
                        // "
                        ></div>
                    </div>
                </div>
            </div>

           
            <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 transition">
                <i class="fas fa-search text-lg"></i>
            </button>
            
            <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 transition">
                <i class="fas fa-inbox text-lg"></i>
            </button>
            
            <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 transition">
                <i class="fas fa-bell text-lg"></i>
            </button>

            <div class="w-10 h-px bg-gray-200 my-2"></div>

            
            <button class="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 hover:bg-gray-200 transition">
                <i class="fas fa-th text-lg"></i>
            </button>
            
            <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 transition">
                <i class="fas fa-chart-bar text-lg"></i>
            </button>
            
            <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 transition">
                <i class="fas fa-chart-line text-lg"></i>
            </button>
            
            <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 transition">
                <i class="fas fa-file-alt text-lg"></i>
            </button>
            
            <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 transition">
                <i class="fas fa-file-invoice text-lg"></i>
            </button>
            
            <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 transition">
                <i class="fas fa-building text-lg"></i>
            </button>
            
            <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 transition">
                <i class="fas fa-trash text-lg"></i>
            </button>

            <div class="flex-1"></div>

        
            <button class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition">
                <i class="fas fa-bolt text-sm"></i>
            </button>

            <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 transition">
                <i class="fas fa-sliders-h text-lg"></i>
            </button>
            
            <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 transition">
                <i class="fas fa-moon text-lg"></i>
            </button>
            
            <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 transition">
                <i class="fas fa-palette text-lg"></i>
            </button>
            
            <button class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 transition">
                <i class="fas fa-question-circle text-lg"></i>
            </button>

            
            <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
                <img src="https://i.pravatar.cc/150?img=12" alt="User" class="w-full h-full object-cover"/>
            </div>
        </div>

       
        <div class="w-96 bg-white rounded-2xl shadow-lg overflow-hidden">
           
            <div class="p-6 border-b border-gray-100 flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                        <div class="relative w-5 h-5">
                            <div class="absolute inset-0 flex items-center justify-center">
                                <div class="w-full h-full"
                                //  style="
                                //     background: conic-gradient(from 0deg, white 0deg 30deg, transparent 30deg 60deg, white 60deg 90deg, transparent 90deg 120deg, white 120deg 150deg, transparent 150deg 180deg, white 180deg 210deg, transparent 210deg 240deg, white 240deg 270deg, transparent 270deg 300deg, white 300deg 330deg, transparent 330deg 360deg);
                                //     border-radius: 50%;
                                //     transform: scale(0.6);
                                // "
                                ></div>
                            </div>
                        </div>
                    </div>
                    <h1 class="text-xl font-semibold text-gray-800">Pointsale</h1>
                </div>
                <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition">
                    <i class="fas fa-grip-vertical"></i>
                </button>
            </div>
{/* style="max-height: calc(100vh - 200px);" */}
            <div class="overflow-y-auto" >
                
                <div class="px-6 py-4 border-b border-gray-100">
                    <div class="flex items-center gap-3 text-gray-600">
                        <i class="fas fa-search"></i>
                        <span class="text-base">Quick search</span>
                    </div>
                </div>

             
                <div class="px-6 py-4 border-b border-gray-100">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3 text-gray-700">
                            <i class="fas fa-inbox"></i>
                            <span class="text-base">Inbox</span>
                        </div>
                        <span class="text-sm font-medium text-gray-500">12</span>
                    </div>
                </div>

              
                <div class="px-6 py-4 border-b border-gray-100">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3 text-gray-700">
                            <i class="fas fa-bell"></i>
                            <span class="text-base">Notifications</span>
                        </div>
                        <span class="text-sm font-medium text-gray-500">15+</span>
                    </div>
                </div>

               
                <div class="px-6 py-4">
                    <h2 class="text-sm font-semibold text-gray-500 mb-4">Menu</h2>
                    
                    
                    <button class="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl text-gray-800 mb-2 hover:bg-gray-100 transition">
                        <i class="fas fa-th"></i>
                        <span class="text-base">Dashboard</span>
                    </button>

                    
                    <button class="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl mb-2 transition">
                        <i class="fas fa-chart-bar"></i>
                        <span class="text-base">Product analytics</span>
                    </button>

                
                    <button class="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl mb-2 transition">
                        <i class="fas fa-chart-line"></i>
                        <span class="text-base">Reporting</span>
                    </button>

                   
                    <button class="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl mb-2 transition">
                        <i class="fas fa-file-alt"></i>
                        <span class="text-base">Order summary</span>
                    </button>

                    
                    <button class="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl mb-2 transition">
                        <i class="fas fa-file-invoice"></i>
                        <span class="text-base">Invoices</span>
                    </button>

                 
                    <button class="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl mb-2 transition">
                        <i class="fas fa-building"></i>
                        <span class="text-base">Manufactures</span>
                    </button>

                
                    <button class="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl mb-2 transition">
                        <i class="fas fa-trash"></i>
                        <span class="text-base">Trash</span>
                    </button>
                </div>

           
                <div class="mx-6 mb-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5">
                    <div class="flex items-start gap-3 mb-3">
                        <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <i class="fas fa-bolt text-blue-600"></i>
                        </div>
                        <div>
                            <p class="text-xs text-gray-600 mb-0.5">Current plan:</p>
                            <p class="text-base font-semibold text-gray-800">Pro trial</p>
                        </div>
                    </div>
                    <p class="text-sm text-gray-600 mb-4">
                        Upgrade to Pro to get the latest and exclusive features
                    </p>
                    <button class="w-full bg-white border-2 border-blue-100 text-blue-600 py-3 rounded-xl font-medium hover:bg-blue-50 transition flex items-center justify-center gap-2">
                        <i class="fas fa-bolt"></i>
                        Upgrade to Pro
                    </button>
                </div>

              
                <div class="px-6 pb-6">
                    <button class="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl mb-2 transition">
                        <i class="fas fa-sliders-h"></i>
                        <span class="text-base">Preferences</span>
                    </button>

                    <button class="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl mb-2 transition">
                        <i class="fas fa-moon"></i>
                        <span class="text-base">Dark mode</span>
                    </button>

                    <button class="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl mb-2 transition">
                        <i class="fas fa-palette"></i>
                        <span class="text-base">Themes</span>
                    </button>

                    <button class="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl mb-2 transition">
                        <i class="fas fa-question-circle"></i>
                        <span class="text-base">Help</span>
                    </button>
                </div>

              
                <div class="px-6 py-4 border-t border-gray-100">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full overflow-hidden">
                                <img src="https://i.pravatar.cc/150?img=12" alt="Brooklyn" class="w-full h-full object-cover"/>
                            </div>
                            <div>
                                <p class="text-sm font-semibold text-gray-800">Brooklyn</p>
                                <p class="text-xs text-gray-500">Pro trial</p>
                            </div>
                        </div>
                        <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition">
                            <i class="fas fa-chevron-up"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}
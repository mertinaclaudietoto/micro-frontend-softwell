import { useState } from "react"

export default function Sidebar(){
    const [isOpen ,setIsOpen]=useState(false);
    return (
        <div class="bg-white-200 ">
            <div class="flex gap-4 max-w-4xl">
                {isOpen ? (
                <aside class="w-16 bg-white border-r border-gray-200 p-3 flex flex-col items-center gap-3">
                
                    <button class="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-gray-50" onClick={()=>{setIsOpen(!isOpen)}}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M16 4L19 13L28 16L19 19L16 28L13 19L4 16L13 13L16 4Z" fill="#4F46E5"/>
                        </svg>
                    </button>

                    <div class="w-full h-px bg-gray-200 my-1"></div>

                
                    <button class="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <i class="fas fa-search"></i>
                    </button>

                    <button class="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <i class="fas fa-inbox"></i>
                    </button>

                    <button class="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <i class="fas fa-bell"></i>
                    </button>

                    <div class="w-full h-px bg-gray-200 my-1"></div>
                    <button class="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700">
                        <i class="fas fa-th"></i>
                    </button>

                    <button class="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <i class="fas fa-chart-bar"></i>
                    </button>

                    <button class="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <i class="fas fa-chart-line"></i>
                    </button>

                    <button class="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <i class="fas fa-file-alt"></i>
                    </button>

                    <button class="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <i class="fas fa-file-invoice"></i>
                    </button>

                    <button class="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <i class="fas fa-building"></i>
                    </button>

                    <button class="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <i class="fas fa-trash"></i>
                    </button>

                    <div class="flex-1"></div>

                    
                    <button class="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 mb-4">
                        <i class="fas fa-bolt"></i>
                    </button>

                
                    <button class="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <i class="fas fa-sliders-h"></i>
                    </button>

                    <button class="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <i class="fas fa-moon"></i>
                    </button>

                    <button class="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <i class="fas fa-palette"></i>
                    </button>

                    <button class="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <i class="fas fa-question-circle"></i>
                    </button>

                    <div class="w-full h-px bg-gray-200 my-1"></div>
                    <button class="w-10 h-10 rounded-full overflow-hidden">
                        <img src="https://i.pravatar.cc/100?img=8" alt="User" class="w-full h-full object-cover"/>
                    </button>
                </aside>

                ) : (
                <aside class="w-80 bg-white  flex flex-col border-r border-gray-200">
                    <div class="p-4 border-b border-gray-100 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M16 4L19 13L28 16L19 19L16 28L13 19L4 16L13 13L16 4Z" fill="#4F46E5"/>
                            </svg>
                            <span class="text-xl font-semibold text-gray-800">Pointsale</span>
                        </div>
                        <button class="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500" onClick={()=>{setIsOpen(!isOpen)}}>
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>

                    <div class="p-4 border-b border-gray-100">
                        <button class="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-left text-gray-600">
                            <i class="fas fa-search text-gray-400"></i>
                            <span>Quick search</span>
                        </button>
                    </div>
                    <div class="p-4 border-b border-gray-100 space-y-1">
                        <button class="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 text-left">
                            <div class="flex items-center gap-3 text-gray-700">
                                <i class="fas fa-inbox"></i>
                                <span>Inbox</span>
                            </div>
                            <span class="text-sm font-medium text-gray-500">12</span>
                        </button>

                        <button class="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 text-left">
                            <div class="flex items-center gap-3 text-gray-700">
                                <i class="fas fa-bell"></i>
                                <span>Notifications</span>
                            </div>
                            <span class="text-sm font-medium text-gray-500">15+</span>
                        </button>
                    </div>
                    <div class="flex-1 overflow-y-auto">
                        <div class="p-4">
                            <h3 class="text-sm font-medium text-gray-500 mb-3 px-4">Menu</h3>
                            
                            <div class="space-y-1">
                                <button class="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-50 text-gray-900 hover:bg-gray-100 text-left">
                                    <i class="fas fa-th"></i>
                                    <span class="font-medium">Dashboard</span>
                                </button>

                                <button class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 text-left">
                                    <i class="fas fa-chart-bar"></i>
                                    <span>Product analytics</span>
                                </button>

                                <button class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 text-left">
                                    <i class="fas fa-chart-line"></i>
                                    <span>Reporting</span>
                                </button>

                                <button class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 text-left">
                                    <i class="fas fa-file-alt"></i>
                                    <span>Order summary</span>
                                </button>

                                <button class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 text-left">
                                    <i class="fas fa-file-invoice"></i>
                                    <span>Invoices</span>
                                </button>

                                <button class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 text-left">
                                    <i class="fas fa-building"></i>
                                    <span>Manufactures</span>
                                </button>

                                <button class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 text-left">
                                    <i class="fas fa-trash"></i>
                                    <span>Trash</span>
                                </button>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="bg-indigo-50 rounded-xl p-4">
                                <div class="flex items-center gap-3 mb-3">
                                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600">
                                        <i class="fas fa-bolt"></i>
                                    </div>
                                    <div>
                                        <div class="text-xs text-gray-600">Current plan:</div>
                                        <div class="font-semibold text-gray-900">Pro trial</div>
                                    </div>
                                </div>
                                <p class="text-sm text-gray-600 mb-4">
                                    Upgrade to Pro to get the latest and exclusive features
                                </p>
                                <button class="w-full bg-white border border-indigo-200 text-indigo-600 font-medium py-3 px-4 rounded-lg hover:bg-indigo-50 flex items-center justify-center gap-2">
                                    <i class="fas fa-bolt"></i>
                                    <span>Upgrade to Pro</span>
                                </button>
                            </div>
                        </div>
                        <div class="p-4 border-t border-gray-100 space-y-1">
                            <button class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 text-left">
                                <i class="fas fa-sliders-h"></i>
                                <span>Preferences</span>
                            </button>

                            <button class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 text-left">
                                <i class="fas fa-moon"></i>
                                <span>Dark mode</span>
                            </button>

                            <button class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 text-left">
                                <i class="fas fa-palette"></i>
                                <span>Themes</span>
                            </button>

                            <button class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 text-left">
                                <i class="fas fa-question-circle"></i>
                                <span>Help</span>
                            </button>
                        </div>
                    </div>
                    <div class="p-4 border-t border-gray-100">
                        <button class="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 text-left">
                            <div class="flex items-center gap-3">
                                <img src="https://i.pravatar.cc/100?img=8" alt="Brooklyn" class="w-10 h-10 rounded-full"/>
                                <div>
                                    <div class="font-medium text-gray-900">Brooklyn</div>
                                    <div class="text-sm text-gray-500">Pro trial</div>
                                </div>
                            </div>
                            <i class="fas fa-chevron-up text-gray-400"></i>
                        </button>
                    </div>
                </aside>
                )

                }
            
            
            </div>
        </div>
    )
}
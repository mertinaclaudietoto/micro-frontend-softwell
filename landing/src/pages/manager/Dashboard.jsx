import CardCalendar from "../../components/card/CardCalendar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Dashboard(){
    return (
        <div class="flex">
                <Sidebar/>
                <main className="flex-1">
                    <div class="bg-white p-6 mb-6">
                        <div class="flex items-center justify-between mb-2">
                            <h1 class="text-2xl font-bold">Dasboard</h1>
                        </div>
                        <div className="flex">
                            <div className="flex-1 border-r-1 border-gray-200 ">
                                {/* <div class="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-3xl p-6 mb-6 relative overflow-hidden">
                                    <div class="relative z-10">
                                        <h2 class="text-white text-xl font-bold mb-2">Hello Katie!</h2>
                                        <p class="text-white text-sm mb-4 opacity-90">
                                            You have 96 new applications. It is a lot of<br/>
                                            work for today! So let's start 💪
                                        </p>
                                        <button class="text-white text-sm font-medium underline">
                                            review all
                                        </button>
                                    </div>
                                    
                                
                                    <div class="absolute right-4 top-1/2 -translate-y-1/2">
                                        <div class="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                            <div class="text-6xl">👩‍💼</div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* states */}
                                <div class="bg-white px-6 m-2 mb-0 ">
                                    {/* <div class="flex items-center justify-between mb-6">
                                        <button class="text-indigo-600 text-sm font-medium">see all</button>
                                    </div> */}

                                    <div class="grid grid-cols-4 gap-4">
                                    
                                        <div class="bg-gray-50 rounded-2xl p-4 relative">
                                            <div class="mb-3">
                                                <div class="text-3xl font-bold text-gray-900">3</div>
                                                <div class="text-sm text-gray-600 font-medium">Content</div>
                                                <div class="text-sm text-gray-600 font-medium">Designers</div>
                                                <div class="text-xs text-gray-400 mt-1">391 candidates</div>
                                            </div>
                                            
                                        
                                            <div class="absolute top-4 right-4">
                                                <svg class="w-12 h-12 transform -rotate-90">
                                                    <circle cx="24" cy="24" r="20" stroke="#E5E7EB" stroke-width="4" fill="none"/>
                                                    <circle cx="24" cy="24" r="20" stroke="#6366F1" stroke-width="4" fill="none"
                                                        stroke-dasharray="125.6" stroke-dashoffset="31.4" stroke-linecap="round"/>
                                                </svg>
                                            </div>
                                        </div>

                                        
                                        <div class="bg-gray-50 rounded-2xl p-4 relative">
                                            <div class="mb-3">
                                                <div class="text-3xl font-bold text-gray-900">9</div>
                                                <div class="text-sm text-gray-600 font-medium">Node.js</div>
                                                <div class="text-sm text-gray-600 font-medium">Developers</div>
                                                <div class="text-xs text-gray-400 mt-1">183 candidates</div>
                                            </div>
                                            
                                            
                                            <div class="absolute top-4 right-4">
                                                <svg class="w-12 h-12 transform -rotate-90">
                                                    <circle cx="24" cy="24" r="20" stroke="#E5E7EB" stroke-width="4" fill="none"/>
                                                    <circle cx="24" cy="24" r="20" stroke="#EF4444" stroke-width="4" fill="none"
                                                        stroke-dasharray="125.6" stroke-dashoffset="62.8" stroke-linecap="round"/>
                                                </svg>
                                            </div>
                                        </div>

                                        
                                        <div class="bg-gray-50 rounded-2xl p-4 relative">
                                            <div class="mb-3">
                                                <div class="text-3xl font-bold text-gray-900">1</div>
                                                <div class="text-sm text-gray-600 font-medium">Senior UI</div>
                                                <div class="text-sm text-gray-600 font-medium">Designer</div>
                                                <div class="text-xs text-gray-400 mt-1">129 candidates</div>
                                            </div>
                                            
                                            
                                            <div class="absolute top-4 right-4">
                                                <svg class="w-12 h-12 transform -rotate-90">
                                                    <circle cx="24" cy="24" r="20" stroke="#E5E7EB" stroke-width="4" fill="none"/>
                                                    <circle cx="24" cy="24" r="20" stroke="#D1D5DB" stroke-width="4" fill="none"
                                                        stroke-dasharray="125.6" stroke-dashoffset="94.2" stroke-linecap="round"/>
                                                </svg>
                                            </div>
                                        </div>

                                        
                                        <div class="bg-gray-50 rounded-2xl p-4 relative">
                                            <div class="mb-3">
                                                <div class="text-3xl font-bold text-gray-900">2</div>
                                                <div class="text-sm text-gray-600 font-medium">Marketing</div>
                                                <div class="text-sm text-gray-600 font-medium">Managers</div>
                                                <div class="text-xs text-gray-400 mt-1">54 candidates</div>
                                            </div>
                                            
                                            
                                            <div class="absolute top-4 right-4">
                                                <svg class="w-12 h-12 transform -rotate-90">
                                                    <circle cx="24" cy="24" r="20" stroke="#E5E7EB" stroke-width="4" fill="none"/>
                                                    <circle cx="24" cy="24" r="20" stroke="#D1D5DB" stroke-width="4" fill="none"
                                                        stroke-dasharray="125.6" stroke-dashoffset="100.5" stroke-linecap="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* table */}
                               
                                <div class="bg-white p-6 m-2">
                                    <div class="flex items-center justify-between mb-4">
                                        <h2 class="text-xl font-medium text-gray-900">Avancement du recrutement</h2>
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
                                    <table class="w-full text-left">
                                        <thead>
                                            <tr class="text-gray-500 text-sm border-b">
                                                <th class="pb-3">Candidate</th>
                                                <th class="pb-3">Rôle</th>
                                                <th class="pb-3">Status</th>
                                            </tr>
                                        </thead>

                                        <tbody class="text-sm text-gray-800">

                                        
                                            <tr class="border-b">
                                                <td class="py-3 flex items-center gap-3">
                                                    <div class="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 
                                                                rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                        JD
                                                    </div>
                                                    Jane Doe
                                                </td>
                                                <td class="py-3 text-gray-500">UI Designer</td>
                                                <td class="py-3 flex items-center gap-2">
                                                    <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                                                    <span class="text-xs text-gray-600">Tech Interview</span>
                                                </td>
                                            </tr>

                                        
                                            <tr class="border-b">
                                                <td class="py-3 flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 
                                                                    rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                        JD
                                                    </div>

                                                    {/* Nom + Label en dessous */}
                                                    <div className="flex flex-col">
                                                        <span className="text-gray-900 text-sm font-semibold">Jane Doe</span>
                                                        <label className="text-gray-400 text-xs">12-11-2025 / 20-11-2025</label>
                                                    </div>
                                                </td>
                                                <td class="py-3 text-gray-500">Concepteur de contenu</td>
                                                <td class="py-3 flex items-center gap-2">
                                                    <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                                                    <span class="text-xs text-gray-600">Task</span>
                                                </td>
                                            </tr>

                                        
                                            <tr class="border-b">
                                                <td class="py-3 flex items-center gap-3">
                                                    <div class="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 
                                                                rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                        MT
                                                    </div>
                                                    Mike Tyler
                                                </td>
                                                <td class="py-3 text-gray-500">Node.js Developer</td>
                                                <td class="py-3 flex items-center gap-2">
                                                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                    <span class="text-xs text-gray-600">Revue du CV</span>
                                                </td>
                                            </tr>

                                        
                                            <tr class="border-b">
                                                <td class="py-3 flex items-center gap-3">
                                                    <div class="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 
                                                                rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                        MA
                                                    </div>
                                                    Maria Ardi
                                                </td>
                                                <td class="py-3 text-gray-500">Node.js Developer</td>
                                                <td class="py-3 flex items-center gap-2">
                                                    <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                                    <span class="text-xs text-gray-600">Interview</span>
                                                </td>
                                            </tr>

                                        
                                            <tr className="border-b">
                                                <td class="py-3 flex items-center gap-3">
                                                    <div class="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 
                                                                rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                        SH
                                                    </div>
                                                    Sandra Huffman
                                                </td>
                                                <td class="py-3 text-gray-500">UX Designer</td>
                                                <td class="py-3 flex items-center gap-2">
                                                    <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                                    <span class="text-xs text-gray-600">Final Interview</span>
                                                </td>
                                            </tr>
                                            <tr className="border-b">
                                                <td class="py-3 flex items-center gap-3">
                                                    <div class="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 
                                                                rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                        SH
                                                    </div>
                                                    Sandra Huffman
                                                </td>
                                                <td class="py-3 text-gray-500">UX Designer</td>
                                                <td class="py-3 flex items-center gap-2">
                                                    <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                                    <span class="text-xs text-gray-600">Final Interview</span>
                                                </td>
                                            </tr>
                                            <tr className="border-b">
                                                <td class="py-3 flex items-center gap-3">
                                                    <div class="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 
                                                                rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                        SH
                                                    </div>
                                                    Sandra Huffman
                                                </td>
                                                <td class="py-3 text-gray-500">UX Designer</td>
                                                <td class="py-3 flex items-center gap-2">
                                                    <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                                    <span class="text-xs text-gray-600">Final Interview</span>
                                                </td>
                                            </tr>
                                            <tr className="border-b">
                                                <td class="py-3 flex items-center gap-3">
                                                    <div class="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 
                                                                rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                        SH
                                                    </div>
                                                    Sandra Huffman
                                                </td>
                                                <td class="py-3 text-gray-500">UX Designer</td>
                                                <td class="py-3 flex items-center gap-2">
                                                    <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                                    <span class="text-xs text-gray-600">Final Interview</span>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <CardCalendar/>
                        </div>
                    </div>
                </main>
        </div>
    )
}
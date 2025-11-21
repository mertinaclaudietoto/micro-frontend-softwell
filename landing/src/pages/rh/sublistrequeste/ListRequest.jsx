import HeaderWithFiltre from "../../../components/header/admin/HeaderWithFiltre"
export default function ListRequest(){
    return (
        <>
            <div class="bg-white p-6 m-2">
                <HeaderWithFiltre ></HeaderWithFiltre>
            </div>
            <table class="w-full text-left">
                        <thead>
                            <tr class="text-gray-500 text-sm border-b">
                                <th class="pb-3">Candidate</th>
                                <th class="pb-3">Role</th>
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
                                <td class="py-3 text-gray-500">Content designer</td>
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
                                    <span class="text-xs text-gray-600">Resume review</span>
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
        </>
    )
}
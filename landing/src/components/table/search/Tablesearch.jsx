import ProfileSummaryCards from "../../summarycards/ProfileSummaryCards";
import Filter from "../Filter";
import Pagination from "../Pagination";

export default function Tablesearch(){
    return(
        <body class="bg-gray-50 p-6">
            <div class="max-w-7xl mx-auto">
               <ProfileSummaryCards/>

                <div class="bg-white rounded-lg shadow">
                    <Filter/>
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead class="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-8">#</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lesson & Section</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enrolled Students</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                               
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 text-sm text-gray-500">1</td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm font-medium text-gray-900">Product Photography Techniques</div>
                                        <div class="text-xs text-gray-500">Instructor: Emily Carter</div>
                                    </td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">Web Design</span></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Session: 4<br/>Lesson: 11</td>
                                    <td class="px-6 py-4 text-sm text-gray-500"><div class="w-full bg-gray-200 rounded-full h-4 relative">
                                        <div class="bg-blue-500 h-4 rounded-full w-[75%]" ></div>
                                            <span class="absolute inset-0 flex justify-center items-center text-xs font-semibold text-white ">75%</span>
                                        </div>
                                        </td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Active</span></td>
                                    <td class="px-6 py-4"><div class="text-sm font-medium text-blue-600">$35</div><div class="text-xs text-gray-500">Lifetime Plan</div></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">⋮</td>
                                </tr>
                                
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 text-sm text-gray-500">2</td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm font-medium text-gray-900">Mobile App Design with Figma</div>
                                        <div class="text-xs text-gray-500">Instructor: Sarah Lee</div>
                                    </td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">Graphic Design</span></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Web Design</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enrollments: 8</td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Active</span></td>
                                    <td class="px-6 py-4"><div class="text-sm font-medium text-orange-600">FREE</div><div class="text-xs text-gray-500">Lifetime Plan</div></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">⋮</td>
                                </tr>
                                
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 text-sm text-gray-500">3</td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm font-medium text-gray-900">HTML & CSS for Beginners</div>
                                        <div class="text-xs text-gray-500">Instructor: Joseph Green</div>
                                    </td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-pink-100 text-pink-800">Digital Marketing</span></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Session: 4<br/>Lesson: 15</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enrollments: 1</td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">Upcoming</span></td>
                                    <td class="px-6 py-4"><div class="text-sm font-medium text-orange-600">FREE</div><div class="text-xs text-gray-500">Lifetime Plan</div></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">⋮</td>
                                </tr>
                        
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 text-sm text-gray-500">4</td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm font-medium text-gray-900">SEO Strategies for Business Growth</div>
                                        <div class="text-xs text-gray-500">Instructor: Michael Brown</div>
                                    </td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">Programming</span></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Graphic Design</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enrollments: 12</td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Active</span></td>
                                    <td class="px-6 py-4"><div class="text-sm font-medium text-blue-600">$35</div><div class="text-xs text-gray-500">Lifetime Plan</div></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">⋮</td>
                                </tr>
                               
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 text-sm text-gray-500">5</td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm font-medium text-gray-900">Visual Effects (VFX) Fundamentals</div>
                                        <div class="text-xs text-gray-500">Instructor: Alex Miller</div>
                                    </td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-cyan-100 text-cyan-800">Motion Graphics</span></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Session: 4<br/>Lesson: 10</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enrollments: 4</td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">Upcoming</span></td>
                                    <td class="px-6 py-4"><div class="text-sm font-medium text-blue-600">$35</div><div class="text-xs text-gray-500">Lifetime Plan</div></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">⋮</td>
                                </tr>
                             
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 text-sm text-gray-500">6</td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm font-medium text-gray-900">Creating Engaging Content</div>
                                        <div class="text-xs text-gray-500">Instructor: Laura White</div>
                                    </td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">Video Editing</span></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Session: 4<br/>Lesson: 7</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enrollments: 0</td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Active</span></td>
                                    <td class="px-6 py-4"><div class="text-sm font-medium text-blue-600">$35</div><div class="text-xs text-gray-500">Lifetime Plan</div></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">⋮</td>
                                </tr>
                                
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 text-sm text-gray-500">7</td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm font-medium text-gray-900">Creating Stunning Logos</div>
                                        <div class="text-xs text-gray-500">Instructor: Elizabeth Davis</div>
                                    </td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Photography</span></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Digital Marketing</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enrollments: 34</td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Active</span></td>
                                    <td class="px-6 py-4"><div class="text-sm font-medium text-blue-600">$35</div><div class="text-xs text-gray-500">Lifetime Plan</div></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">⋮</td>
                                </tr>
                               
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 text-sm text-gray-500">8</td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm font-medium text-gray-900">Animation Basics with After Effects</div>
                                        <div class="text-xs text-gray-500">Instructor: Alexander Martin</div>
                                    </td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">Animation</span></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Session: 4<br/>Lesson: 6</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enrollments: 3</td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">Upcoming</span></td>
                                    <td class="px-6 py-4"><div class="text-sm font-medium text-blue-600">$35</div><div class="text-xs text-gray-500">Lifetime Plan</div></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">⋮</td>
                                </tr>
                              
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 text-sm text-gray-500">9</td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm font-medium text-gray-900">Advanced Graphic Design Techniques</div>
                                        <div class="text-xs text-gray-500">Instructor: Joshua Anderson</div>
                                    </td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">Graphic Design</span></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Session: 4<br/>Lesson: 8</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enrollments: 10</td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Active</span></td>
                                    <td class="px-6 py-4"><div class="text-sm font-medium text-blue-600">$35</div><div class="text-xs text-gray-500">Lifetime Plan</div></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">⋮</td>
                                </tr>
                                
                                <tr class="hover:bg-gray-50">
                                    <td class="px-6 py-4 text-sm text-gray-500">10</td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm font-medium text-gray-900">Mastering WordPress Development</div>
                                        <div class="text-xs text-gray-500">Instructor: Dr.Alex Patel</div>
                                    </td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">Web Design</span></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Session: 4<br/>Lesson: 9</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enrollments: 9</td>
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">Upcoming</span></td>
                                    <td class="px-6 py-4"><div class="text-sm font-medium text-blue-600">$35</div><div class="text-xs text-gray-500">Lifetime Plan</div></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">⋮</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Pagination/>
                </div>

            </div>
        </body>
    )
}
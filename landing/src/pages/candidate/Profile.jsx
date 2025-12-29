import {  HiOutlineMap,HiOutlineXMark} from "react-icons/hi2";
import Header from "../../components/header/candidate/Header";

export default function Profile(){
    return (
    <div className="p-8">
    <Header></Header>
    <div class="relative z-10 bg-white  w-full max-w-4xl  mx-auto p-6 md:p-10 ">
       {/* etaps formulaire */}
       {/* fin formulaire */}
       {/* etap 1 */}
        <div>
            <div class="grid grid-cols-1">
            <div >
                <div class="flex flex-col items-center">
                    <div class="w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-orange-600 transition-colors">
                        <i class="fas fa-camera text-white text-3xl"></i>
                    </div>
                    <p class="text-sm font-semibold text-gray-700">Add Photo</p>
                </div>
            </div>
            <div >
                <h2 class="text-xl font-bold text-gray-900 mb-4">Votre Information</h2>
                <div className='my-2'>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                    <input 
                        type="text" 
                        placeholder="Entrer votre nom complte" 
                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Date Of Birth</label>
                        <div class="relative">
                            <input 
                                type="date" 
                                placeholder="MM/DD/YYYY" 
                                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                            <i class="fas fa-calendar-alt absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                        <div class="flex gap-4">
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="gender" value="male" checked class="w-5 h-5 text-orange-500 focus:ring-orange-500"/>
                                <span class="text-sm text-gray-700">Male</span>
                            </label>
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="gender" value="female" class="w-5 h-5 text-orange-500 focus:ring-orange-500"/>
                                <span class="text-sm text-gray-700">Female</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <div class="relative">
                            <input 
                                type="email" 
                                placeholder="votre email" 
                                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                            <HiOutlineMap className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                    
                    <div>
                        <label class="sm font-medium text-gray-700 mb-2">Tel</label>
                        <div class="relative">
                            <input 
                                type="email" 
                                placeholder="votre email" 
                                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                            <HiOutlineMap className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                </div>
                <div className='my-2'>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
                    <div class="relative">
                        <input 
                            type="email" 
                            placeholder="votre email" 
                            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                        <HiOutlineMap className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
                    </div>
                </div>
                <div class=" border-t border-gray-200">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="block text-sm font-medium text-gray-700 mb-2">Softskill</h3>
                        <button class="text-orange-500 hover:text-orange-600 font-semibold text-sm flex items-center gap-1">
                            <i class="fas fa-plus"></i>
                            Add Another Education
                        </button>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                        <div>
                            <input 
                                type="text" 
                                placeholder="Enter Degree" 
                                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        </div>
                        <div>   
                            <div class="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-gray-100 text-xs rounded-full inline-flex items-center gap-1">
                                    Full Time
                                    <HiOutlineXMark className="w-3 h-3" />
                                </span>
                                <span className="px-3 py-1 bg-gray-100 text-xs rounded-full inline-flex items-center gap-1">
                                    Desin
                                    <HiOutlineXMark className="w-3 h-3" />
                                </span>
                                <span className="px-3 py-1 bg-gray-100 text-xs rounded-full inline-flex items-center gap-1">
                                    Time
                                    <HiOutlineXMark className="w-3 h-3" />
                                </span>
                            </div>
                        </div>
                      
                    </div>  
                </div>
                <div class="border-t border-gray-200">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="block text-sm font-medium text-gray-700 mb-2">Softskill</h3>
                        <button class="text-orange-500 hover:text-orange-600 font-semibold text-sm flex items-center gap-1">
                            <i class="fas fa-plus"></i>
                            Add Another Education
                        </button>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                        <div>
                            <input 
                                type="text" 
                                placeholder="Enter Degree" 
                                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        </div>
                        <div>   
                            <div class="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-gray-100 text-xs rounded-full inline-flex items-center gap-1">
                                    Full Time
                                    <HiOutlineXMark className="w-3 h-3" />
                                </span>
                                <span className="px-3 py-1 bg-gray-100 text-xs rounded-full inline-flex items-center gap-1">
                                    Desin
                                    <HiOutlineXMark className="w-3 h-3" />
                                </span>
                                <span className="px-3 py-1 bg-gray-100 text-xs rounded-full inline-flex items-center gap-1">
                                    Time
                                    <HiOutlineXMark className="w-3 h-3" />
                                </span>
                            </div>
                        </div>
                      
                    </div>  
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Vision & Mission</label>
                    <textarea 
                        placeholder="Type here..." 
                        rows="4"
                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    ></textarea>
                </div>

            </div>
        </div>
      
        </div> 
       {/* etap 2 */}
         <div>
            <div class="grid grid-cols-1">
                <div class="pt-6 border-t border-gray-200">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-bold text-gray-900">Education</h3>
                        <button class="text-orange-500 hover:text-orange-600 font-semibold text-sm flex items-center gap-1">
                            <i class="fas fa-plus"></i>
                            Add Another Education
                        </button>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Degree</label>
                            <input 
                                type="text" 
                                placeholder="Enter Degree" 
                                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">College / University</label>
                            <input 
                                type="text" 
                                placeholder="Enter College / University" 
                                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
                            <div class="relative">
                                <input 
                                    type="date" 
                                    placeholder="MM/DD/YYYY" 
                                    class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                                <i class="fas fa-calendar-alt absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-4 bg-gray-50 rounded-lg p-4 relative">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <p class="text-xs text-gray-500 mb-1">Degree</p>
                                <p class="font-medium text-gray-900">Degree Name</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-500 mb-1">College / University</p>
                                <p class="font-medium text-gray-900">Collage name appears here</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-500 mb-1">Graduation Year</p>
                                <p class="font-medium text-gray-900">1999</p>
                            </div>
                        </div>
                        
                       
                        <div class="absolute top-4 right-4 flex gap-2">
                            <button class="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-100">
                                <i class="fas fa-pen text-gray-600 text-xs"></i>
                            </button>
                            <button class="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-100">
                                <i class="fas fa-trash text-gray-600 text-xs"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        {/* etape 3 */}
        <div>
            <div class="grid grid-cols-1">
                <div class="">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-bold text-gray-900">Education</h3>
                        <div class="flex items-center justify-end gap-3">
                            <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium">
                                Cancel
                            </button>
                            <button class="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium">
                                Save
                            </button>
                        </div>
                    </div>
                    {/*input */}
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Degree</label>
                            <input 
                                type="text" 
                                placeholder="Enter Degree" 
                                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">College / University</label>
                            <input 
                                type="text" 
                                placeholder="Enter College / University" 
                                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
                            <div class="relative">
                                <input 
                                    type="date" 
                                    placeholder="MM/DD/YYYY" 
                                    class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                                <i class="fas fa-calendar-alt absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Vision & Mission</label>
                        <textarea 
                            placeholder="Type here..." 
                            rows="4"
                            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                        ></textarea>
                    </div>
                    <label class="block text-sm font-medium text-gray-700 mb-2 py-2">List de vos experiences</label>
                    <div class="mt-4 bg-gray-50 rounded-lg p-4 relative">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <p class="text-xs text-gray-500 mb-1">Degree</p>
                                <p class="font-medium text-gray-900">Degree Name</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-500 mb-1">College / University</p>
                                <p class="font-medium text-gray-900">Collage name appears here</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-500 mb-1">Graduation Year</p>
                                <p class="font-medium text-gray-900">1999</p>
                            </div>
                        </div>
                        <p class="text-xs text-gray-500 mb-1 py-2">Description</p>
                        <p className='text-sm'>dgeygdegggggggggggggggggggggggggggggggggggggddgyyyyyyye
                            deuhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhduhe
                            deujuhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhdeu
                        </p>
                        <div class="absolute top-4 right-4 flex gap-2">
                            <button class="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-100">
                                <i class="fas fa-pen text-gray-600 text-xs"></i>
                            </button>
                            <button class="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-100">
                                <i class="fas fa-trash text-gray-600 text-xs"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        <div class="flex justify-between mt-8">
             <button class="px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
                Retoure
            </button>
            <button class="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
                Save 
            </button>
        </div>
        </div>
    </div> 
    </div>
    
    );
}
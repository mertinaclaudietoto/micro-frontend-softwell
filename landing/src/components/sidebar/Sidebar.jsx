
import { useState } from "react"
import SidebarLargButton from "./button/SidebarLargButton";
import CardPub from "./card/CardPub";
import SidebarShortButton from "./button/SidebarShortButton";
import { parametres,short } from "../../data/rh";
import { datasidebar } from "../../data/Sidebar";
export default function Sidebar(){
    const [isOpen ,setIsOpen]=useState(false);
    const datasidebarvalue =datasidebar(2);
    return (
        <div class="bg-white-200 ">
            <div class="flex gap-4 max-w-4xl">
                {isOpen ? (
                    // short siderbar version
                <aside class="w-16 bg-white border-r border-gray-200 p-3 flex flex-col items-center gap-3">
                    {/* shrunk  logo*/}
                    <button class="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-gray-50" onClick={()=>{setIsOpen(!isOpen)}}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M16 4L19 13L28 16L19 19L16 28L13 19L4 16L13 13L16 4Z" fill="#4F46E5"/>
                        </svg>
                    </button>
                    {/* notification */}
                    <div class="w-full h-px bg-gray-200 my-1"></div>
                        {short.map((value,index)=>(
                            <SidebarShortButton link={value.link} index={index} icone={value.icone} actif={value.actif}  />
                        ))}
                    {/* dasboard */}
                    <div class="w-full h-px bg-gray-200 my-1"></div>
                        {datasidebarvalue.map((value,index)=>(
                            <SidebarShortButton link={value.link} index={index} icone={value.icone} actif={value.actif}  />
                        ))}
                    <div class="flex-1"></div>
                    {/* pro version */}
                    <button class="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 mb-4">
                        <i class="fas fa-bolt"></i>
                    </button>

                    {/* parametre */}
                        {parametres.map((value,index)=>(
                            <SidebarShortButton  link={value.link} icone={value.icone} index={index} />
                        )) }
                    <div class="w-full h-px bg-gray-200 my-1"></div>
                    {/* change password user */}
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
                                    {datasidebarvalue.map((value,index)=>(<SidebarLargButton link={value.link} index={index} icone={value.icone} item={value.item}  actif={value.actif}/>))}
                                </div>
                            </div>
                            {/* pub */}
                            {/* <CardPub/> */}
                            <div class="flex-1"></div>
                            {/* pro version */}
                            <div className="pl-4">
                                <button class="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 mb-4">
                                    <i class="fas fa-bolt"></i>
                                </button>
                            </div>
                          
                            <div class="p-4 border-t border-gray-100 space-y-1">
                                {parametres.map((value,index)=>(<SidebarLargButton index={index} item={value.item} icone={value.icone} actif={value.actif}/>))}
                            </div>
                        </div>
                        {/* compte */}
                        <div class="p-4 border-t border-gray-100">
                            <button class="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 text-left">
                                <div class="flex items-center gap-3">
                                    <img src="https://i.pravatar.cc/100?img=8" alt="Brooklyn" class="w-10 h-10 rounded-full"/>
                                    <div>
                                        <div class="font-medium text-gray-900">Brooklyn</div>
                                        <div class="text-sm text-gray-500">Essai Pro</div>
                                    </div>
                                </div>
                                <i class="fas fa-chevron-up text-gray-400"></i>
                            </button>
                        </div>
                    </aside>
                ) }
            </div>
        </div>
    )
}
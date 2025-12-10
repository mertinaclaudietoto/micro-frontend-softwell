
import { listProfile, widthClasses } from "../../data/data"
import {Pagination,Filter,Sidebar} from "../../components"
import { Link } from "react-router-dom"
import { useState } from "react";
export default function ProfileAccess(){
    const [search ,setSearch]=useState("");
    const sendsearch = async()=>{ 
    }
    return(
        <>
            <div class="flex h-screen ">
                <Sidebar/>
                <main class="flex-1 ">    
                    <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                        <div className=" max-w-7xl mx-auto bg-white p-10 ">
                            {/* filtre */}
                            <div class="p-4 mb-2 border-b border-gray-200 sticky top-0 z-50 pink ">
                                <div class="flex items-center justify-between">
                                    <h2 class="text-xl font-semibold text-gray-800">Profille
                                        <p className="text-xs text-gray-400">...</p>
                                    </h2>
                                    <div class="flex items-center space-x-3">
                                        <div class="relative">
                                            <input type="text" placeholder="Search" class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500  " onChange={(event)=>setSearchWord(event.target.value)}/>
                                            <svg class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                            <button onClick={()=>sendsearch()} >
                                                <span class="absolute right-3 top-2.5 text-xs text-gray-400 border border-gray-300 px-1.5 py-0.5 rounded">⌘K</span>
                                            </button>
                                        </div>
                                    
                                        <div className="flex space-x-2">
                                            <Link  to="/access-set" class="px-4 py-2 bg-softbleutini-12 text-white rounded-lg text-sm flex items-center hover:bg-softbleu" onClick={()=>{showAddPopup(true)}}>
                                                <i class="fa-solid fa-plus"></i>
                                            </Link>
                                            <button className="btn-neutre-gray"  title="Précédent">
                                            <i className="fas fa-arrow-left"></i>
                                            </button>
                                            <button className="btn-neutre-gray"  title="Suivant">
                                                <i className="fas fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* filtre */}

                            <div class="overflow-x-auto  mt-2">
                            <div className="grid grid-cols-3 gap-4  my-auto overflow-y-auto mx-auto bg-white p-2 ">
                                {listProfile.map((value, index) => (
                                    <Link to="/access-set">
                                    <div
                                        key={index}
                                        className="bg-gray-50 border border-gray-200 hover:bg-gray-100 p-4 grid grid-cols-4 justify-center items-center gap-2 "
                                    >
                                    {/* Colonne # (icone + nombre) */}
                                    <div className="flex items-center">
                                        <div className="bg-softbleutini-12 rounded-lg p-2 mr-3">
                                        <i className={`${value.icone} text-sm text-white`} />
                                        </div>
                                        <div className="text-sm font-bold text-gray-700">{value.nbr}</div>
                                    </div>

                                    {/* Colonne Nom */}
                                    <div className="text-sm font-medium text-gray-800">
                                        {value.name}
                                    </div>

                                    {/* Colonne Pourcentage */}
                                    <div className="col-span-2 bg-gray-200 rounded-full h-2 relative w-full">
                                        <div
                                        className={`h-2 rounded-full bg-softbleutini-12 ${widthClasses(value.percentage)}`}
                                        ></div>
                                        <span className="absolute inset-0 flex justify-center items-center text-[10px] font-semibold text-gray-600">
                                        {value.percentage}%
                                        </span>
                                    </div>
                                    </div>
                                    </Link>
                                ))}
                                </div>
                            </div>  
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
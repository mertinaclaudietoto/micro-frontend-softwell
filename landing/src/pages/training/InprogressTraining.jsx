
import {  listsmallformationinprogress} from "../../data/data"
import {Filter,Sidebar,CardTrainingInprogress} from "../../components"
import { Link } from "react-router-dom"
export default function InprogressTraining(){
   // seule les formation en cours en en attente de participant s'affiche ici
    return(
             <>
            <div class="flex h-screen ">
                <Sidebar/>
                <main class="flex-1 ">    
                    <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                        <div className=" max-w-7xl mx-auto bg-white p-10 ">
                            {/* <Filter tablename={"Formations"} textPagination={" Showing result 1-10 of 20 Entries"} /> */}
                             
                            {/* filter */}
                                <div class="p-4 mb-2 border-b border-gray-200 sticky top-0 z-50 pink ">
                                    <div class="flex items-center justify-between">
                                        <h2 class="text-xl font-semibold text-gray-800">Participer a une formation
                                            <p className="text-xs text-gray-400">Showing result 1-10 of 20 Entries</p>
                                        </h2>
                                        <div class="flex items-center space-x-3">
                                            <div class="relative">
                                                <input type="text" placeholder="Rechercher…" class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 "/>
                                                <svg class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                                </svg>
                                                <span class="absolute right-3 top-2.5 text-xs text-gray-400 border border-gray-300 px-1.5 py-0.5 rounded">⌘K</span>
                                            </div>
                                            <button class="px-4 py-2 border border-gray-300 rounded-lg text-sm flex items-center hover:bg-gray-50">
                                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                                                </svg>
                                                Filter
                                            </button>
                                            <button class="px-4 py-2 border border-gray-300 rounded-lg text-sm flex items-center hover:bg-gray-50">
                                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path>
                                                </svg>
                                                Sort by
                                            </button>
                                        
                                            <div className="flex space-x-2">
                                                <Link to="/training-demande" class="px-4 py-2 bg-softbleutini-12 text-white rounded-lg text-sm flex items-center hover:bg-softbleu">
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
                            {/* fin filter */}
                            <div class="overflow-x-auto  mt-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  my-auto overflow-y-auto mx-auto bg-white p-2 ">
                                {listsmallformationinprogress.map((value) => (
                                    // <button onClick={()=>setDemande(value)} class="bg-gray-50  rounded-xl p-4 mb-4 hover:shadow-md shadow-sm transition-shadow cursor-pointer">
                                    //     <CardSmallTraining value={value} onclick={setDemande} info={value} />
                                    // </button>
                                    <CardTrainingInprogress value={value}/>
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
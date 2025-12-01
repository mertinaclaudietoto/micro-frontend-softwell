
import {  listsmallformation } from "../../data/data"
import {Pagination,Filter,Sidebar,CardSmallFormation, CardDemandeFormation} from "../../components"
import { Link } from "react-router-dom"
import { useState } from "react"
export default function DemandeFormation(){
    const [close ,setClose]=useState(true);
    return(
             <>
            <div class="flex h-screen ">
                <Sidebar/>
                <main class="flex-1 ">    
                    <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                        <div className=" max-w-7xl mx-auto bg-white p-10 ">
                            <Filter tablename={"Formations"} textPagination={" Showing result 1-10 of 20 Entries"}/>
                            <div class="overflow-x-auto  mt-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  my-auto overflow-y-auto mx-auto bg-white p-2 ">
                                {listsmallformation.map((value) => (
                                    <Link to="/access-set">
                                        <CardSmallFormation value={value}/>
                                    </Link>
                                ))}
                                </div>
                            </div>  
                        </div>
                    </div>
                </main>
                {/* {close ? <CardDemandeFormation/> :<></>} */}
                
            </div>
        </>

    )
}

import {  listsmallformation, newformation } from "../../data/data"
import {Filter,Sidebar,CardSmallTraining, CardDemandeTraining,CardWish } from "../../components"
import { useState } from "react"

export default function Wish(){
    const [close ,setClose]=useState(false);
    const [closetraining ,setCloseTraining]=useState(false);
    const [infoValue ,setinfoValue]=useState(newformation);
    const setDemande=(infotraining)=>{
            setinfoValue(infotraining);
            setCloseTraining(true);
            console.log("deijdeideje")
    }
    return(
    <>
    <div class="flex h-screen ">
        <Sidebar/>
        <main class="flex-1 ">    
            <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                <div className=" max-w-7xl mx-auto bg-white p-10 ">
                    <Filter tablename={"Formations"} textPagination={" Showing result 1-10 of 20 Entries"} showAddPopup={setClose}/>
                    <div class="overflow-x-auto  mt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4  my-auto overflow-y-auto mx-auto bg-white p-2 ">
                        {listsmallformation.map((value) => (
                            <button onClick={()=>setDemande(value)} class="bg-gray-50  rounded-xl p-4 mb-4 hover:shadow-md shadow-sm transition-shadow cursor-pointer">
                                <CardSmallTraining value={value} onclick={setDemande} info={value} />
                            </button>
                            
                        ))}
                        </div>
                    </div>  
                </div>
            </div>
        </main>
        {close ? <CardWish close={setClose}/> :<></>}
        {closetraining ?  <CardDemandeTraining close={setCloseTraining} infosmallformation={infoValue} />:<></> }
    </div>
    </>
    )
}
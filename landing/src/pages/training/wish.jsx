
import {  listsmallformation, newformation, participantTraining, trainingListToBeValidated } from "../../data/data"
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
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4  my-auto overflow-y-auto mx-auto bg-white p-2 ">
                        {listsmallformation.map((value) => (
                            <button onClick={()=>setDemande(value)} class="bg-gray-50  rounded-xl p-4 mb-4 hover:shadow-md shadow-sm transition-shadow cursor-pointer">
                                <CardSmallTraining value={value} onclick={setDemande} info={value} />
                            </button>
                            
                        ))}
                        </div> */}
                        
                        <table class="w-full">
                            <thead class="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th class="tr-thead ">#</th>
                                    <th class="tr-thead">Login</th>
                                    <th class="tr-thead">Departement</th>
                                    <th class="tr-thead">Status</th>
                                    <th class="tr-thead">Presence</th>
                                    <th class="tr-thead">Note</th>
                                    <th class="tr-thead">Feed back</th>
                                    <th class="tr-thead"> ⋮</th>
                                    {/* <th class="tr-thead"></th> */}
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                {participantTraining.map((value,index)=>(
                                    <tr index={index} className="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-500">
                                            <img
                                                    src={value.photo}
                                                    className="w-10 h-10 rounded-lg"
                                                    alt={value.login}
                                                />
                                        </td>
                                        <td class="px-6 py-4">
                                            <div class="text-sm font-medium text-gray-900">{value.name}</div>
                                        </td>
                                        <td class="px-6 py-4">
                                            <div class="text-sm font-medium text-gray-900">{value.departement}</div>
                                        </td>
                                        <td class="px-6 py-4">
                                            <div class="text-sm font-medium text-gray-900">{value.status}</div>
                                        </td>
                                        <td class="px-6 py-4">
                                            <div class="text-sm font-medium text-gray-900">{value.presence}</div>
                                        </td>
                                        <td class="px-6 py-4">
                                            <div class="text-sm font-medium text-gray-900">{value.note}</div>
                                        </td>
                                        <td class="px-6 py-4">
                                            <span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${value.evaluationformateur ? "bg-blue-100 text-blue-800" : "bg-red-100 text-red-800"}`}>formateur</span>
                                        </td>
                                        {/* <td class="px-6 py-4">
                                            <div class="text-sm font-medium text-gray-900">{value.daterequest}</div>
                                        </td> */}
                                        {/* <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${getcolorstate(value.state)}`}>{value.state}</span></td>
                                        <td class="px-6 py-4 text-sm text-gray-500">
                                            ⋮
                                        </td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
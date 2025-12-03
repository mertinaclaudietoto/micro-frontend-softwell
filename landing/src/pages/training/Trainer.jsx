
import { Link } from "react-router-dom";
import { CardAddTraining, Filter,Sidebar } from "../../components";
import { listeformateur, textbackground } from "../../data/data";
import { useState } from "react";
export default function Trainer(){
    const [manageTraining,setManageTraining]=useState(null);
    const [seeTrainingListe,setSeeTrainingListe]=useState(false);
    const showTraining=(value)=>{
        setSeeTrainingListe(true);
        setManageTraining(value)
    }
      return(
        <>
        <div class="flex h-screen ">
            <Sidebar/>
            <main class="flex-1 ">    
                <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                    <div className=" max-w-7xl mx-auto bg-white p-10 ">
                        {/* <Filter tablename={"Formations"} textPagination={" Showing result 1-10 of 20 Entries"} /> */}
                        <Filter tablename={"Formateurs"}  showAddPopup={setSeeTrainingListe}/>
                        <div class="overflow-x-auto  mt-2">
                        <table class="w-full">
                            <thead class="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th class="tr-thead w-8">#</th>
                                    <th class="tr-thead">Nom</th>
                                    <th class="tr-thead">Email</th>
                                    <th class="tr-thead">Tel</th>
                                    <th class="tr-thead">En activiter</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                {listeformateur.map((value,index)=>(
                                    <tr index={index} className="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-500">{value.fieldofstudy.length}</td>
                                        <td class="px-6 py-4">
                                            <div class="text-sm font-medium text-gray-900">{value.name}</div>
                                            <div class="text-xs text-gray-500">nif: {value.nif} stat: {value.stat}</div>
                                        </td>
                                        
                                        <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[index]}`}>{value.email}</span></td>
                                        <td class="px-6 py-4 text-sm text-gray-500">{value.tel}</td>
                                        
                                        <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Active</span></td>
                                        <td class="px-6 py-4 text-sm text-gray-500">
                                            <button onClick={()=>{showTraining(value)}}>
                                                    ⋮
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>  
                    </div>
                </div>
            </main>
        </div>
        {seeTrainingListe  ? <CardAddTraining close={setSeeTrainingListe} infoTraining={manageTraining} />:<></>}
        </>
    )
}
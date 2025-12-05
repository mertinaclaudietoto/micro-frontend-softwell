
import { Link } from "react-router-dom";
import { CardAddTraining, Filter,Sidebar } from "../../components";
import { getcolorstate, textbackground, trainingListToBeValidated } from "../../data/data";
import { useState } from "react";
import { diffDate1 } from "../../function/Date";
export default function Validation(){
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
                        <Filter tablename={"Validation souhait"}  showAddPopup={setSeeTrainingListe}/>
                        <div class="overflow-x-auto  mt-2">
                        <table class="w-full">
                            <thead class="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th class="tr-thead ">#</th>
                                    <th class="tr-thead">Theme</th>
                                    <th class="tr-thead">Demandeur</th>
                                    <th class="tr-thead">Participant</th>
                                    <th class="tr-thead">Date de souhaiter</th>
                                    <th class="tr-thead">Etat</th>
                                    <th class="tr-thead"></th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                {trainingListToBeValidated.map((value,index)=>(
                                    <tr index={index} className="hover:bg-gray-50">
                                        <td class="px-6 py-4 text-sm text-gray-500">{diffDate1(value.daterequest)}</td>
                                        <td class="px-6 py-4">
                                            <div class="text-sm font-medium text-gray-900">{value.theme}</div>
                                        </td>
                                        <td class="px-6 py-4">
                                            <div class="text-sm font-medium text-gray-900">{value.applicant}</div>
                                        </td>
                                        <td class="px-6 py-4">
                                            <div class="text-sm font-medium text-gray-900">{value.nbrparticipant}</div>
                                        </td>
                                        <td class="px-6 py-4">
                                            <div class="text-sm font-medium text-gray-900">{value.daterequest}</div>
                                        </td>
                                        <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${getcolorstate(value.state)}`}>{value.state}</span></td>
                                        <td class="px-6 py-4 text-sm text-gray-500">
                                           <Link to="/training-state">
                                            ⋮
                                           </Link>
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
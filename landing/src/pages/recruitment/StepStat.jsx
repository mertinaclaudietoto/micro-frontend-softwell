
import { useEffect,useCallback } from "react";
import { getData } from "../../function/Axios";
import { Link } from "react-router-dom";
import { url_recrutement, textbackground } from "../../data/data";
import { useState } from "react";
import { Sidebar } from "../../components";
import NoteCandidate from "./NoteCandidate";

export default function StepStat({value,close}){
    const [showNote,setShowNote]=useState(false);
    const acces = sessionStorage.getItem("access");
    // const accesObj = JSON.parse(acces);
    const [data,setData]=useState([]); 
    const loadData = useCallback(async () => {
        const data = await getData(
            url_recrutement + `vstatstep/${value.id}/${sessionStorage.getItem("userRole")}`
        );
        setData( data.data);
    }, []); 
    useEffect(() => {
            loadData();
        }, [loadData]);
    const [valueNotecandidat,setValueNoteCandidat]=useState(false);
      return(
        <>
        {showNote ?
            <NoteCandidate close={setShowNote}  idrequest={valueNotecandidat?.requestId} idpost={value?.postId} idstep={valueNotecandidat?.stepId} rang={valueNotecandidat?.rang}  email={valueNotecandidat?.email}  />
         : 
        <>
        <div class="flex h-screen ">
            <Sidebar/>
            <main class="flex-1 ">    
                <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                    <div className=" max-w-7xl mx-auto bg-white p-10 ">
                        {/* filtre */}
                        <div class="p-4 mb-2 border-b border-gray-200 sticky top-0 z-50 pink ">
                            <div class="flex items-center justify-between">
                                <h2 class="text-xl font-semibold text-gray-800">Étapes de recrutement
                                    {/* <p className="text-xs text-gray-400">{`page ${numpage}/${Math.ceil(nbrligne / nbrSize)}`}</p> */}
                                </h2>
                                <div class="flex items-center space-x-3">
                                    <div className="flex space-x-2">
                                        <button className="btn-neutre-gray"  onClick={()=>{close(false)}} title="Précédent">
                                            retour
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* filtre */}
                        <div class="overflow-x-auto  mt-2">
                        <table class="w-full">
                            <thead class="bg-gray-50 border-b border-gray-200">
                                 <tr>
                                    <th class="tr-thead">Post</th>
                                    <th class="tr-thead">Date demande</th>
                                    <th class="tr-thead">Date de clôture</th>
                                    <th class="tr-thead">Status</th>
                                    <th class="tr-thead">Volue</th>
                                    <th class="tr-thead">Postulants</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr index={1} className={value.StatusId==4 ?"bg-gray-50  hover:bg-gray-100":" hover:bg-gray-50"}>
                                        <td class="px-6 py-4 text-sm text-gray-500">{value.nomPost}</td>
                                        <td class="px-6 py-4 text-sm text-gray-500">{value.requestDate.split('T')[0]}</td>
                                        <td class="px-6 py-4 text-sm text-gray-500">{value.requestDate.split('T')[0]}</td>
                                        {value.statusId ==null ?
                                            <>
                                            </> :
                                            value.statusId==1 ? (
                                                <>
                                                    <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[6]}`}>validée</span></td> 
                                                </>
                                            ):
                                            value.statusId== 2 ? 
                                            <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[1]}`}>refusée</span></td>: 
                                            <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium `}></span></td>
                                        }
                                        <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium  ${textbackground[6]}`}>{value.numberOfCandidates}</span></td>
                                        <td className="px-6 py-4 justify-center items-center"><span class={`inline-flex  items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[6]}`}>{value.nbrpostulant}</span></td>
                                    </tr>
                            </tbody>
                        </table>
                            <div className="max-w-7xl mx-auto">
                                {/* Header */}
                                <div className="flex justify-between items-center mb-6">
                                </div>
                                {/* Stats Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {data.map((stat, index) => (
                                <button onClick={()=>{
                                    setValueNoteCandidat(stat);
                                    setShowNote(true);
                                        }} >
                                    <div
                                    key={index}
                                    className={`${textbackground[index]} rounded-lg p-6 relative overflow-hidden`}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className={`${textbackground[index]} text-sm mb-2`} >{stat.name}</p>
                                                <h2 className={` ${textbackground[index]} text-3xl font-bold  mb-2`}>
                                                    {stat.nbr}
                                                </h2>
                                            </div>
                                            {/* {stat.icon && (
                                            <div className={`${stat.iconBg} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl`}>
                                                {stat.icon}
                                            </div>
                                            )} */}
                                        </div>
                                    </div>
                                </button> 
                                ))}
                            </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </main>
        </div>
        
        </>
        }
      
    </>
    )
}
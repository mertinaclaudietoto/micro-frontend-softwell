import { useEffect, useState } from "react";
import { textbackground, url, url_front, url_recrutement_image} from "../../data/data";
import {  dateToLetters, diffDate } from "../../function/Date";
import {  CardAddSession, Sidebar } from "../../components";
import { getData } from "../../function/Axios";
import CardUpdateSession from "../../components/card/popup/CardUpdateSession";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardForwardLink from "../../components/card/popup/CardForwardLink";

export default function ListParticipantInFormation({value,close}){
   
    const acces = sessionStorage.getItem("access");
    const accesObj = JSON.parse(acces);

    const [participant,setParticipant]=useState([]); 
    const getParticipant = async ()=>{
            console.log("dejijdejdie");
            console.log(value);
            console.log(url + `v_participant_validate/participants-formation/${value.id}`);
            const data = await getData(url + `v_participant_validate/participants-formation/${value.id}`);
            if(data.data!=null){
                setParticipant(data.data);
            }   
        }
    const [showLink,setShowLink]=useState();
    const [endpoint,setEndpoint]=useState(null);
    const [parametres,setParametres]=useState(null);

    const [daysession,setDaysession]=useState(null);
    useEffect(()=>{
     
        getParticipant()
    },[])

    return(
        <>
        { showLink ? <CardForwardLink _url={url_front} endpoint={endpoint} closePopup={setShowLink}  parametres={parametres}  title={`Partagez le lien afin de permettre à ce participant de répondre aux questions de post-formation.`}/> :<></>}
        <>
         <div class="flex">
            <Sidebar/>
            <main class="flex-1 ">  
                <div class=" md:p-8 bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                    <div className=" max-w-7xl mx-auto p-10 flex bg-white">
                        <div className="flex-1  border-rigth ">
                            {/* filtre */}
                            <div class="p-4 mb-2 border-b border-gray-200 sticky top-0 z-50 pink ">
                                <div class="flex items-center justify-between">
                                    <h2 class="text-xl font-semibold text-gray-800">Liste des sessions pour cette formation
                                        {/* <p className="text-xs text-gray-400">{`page ${numpage}/${Math.ceil(nbrligne / nbrSize)}`}</p> */}
                                    </h2>
                                    
                                    <div class="flex items-center space-x-3">
                                        <div className="flex space-x-2">
                                            <button class="px-4 py-2 bg-softbleutini-12 text-white rounded-lg text-sm flex items-center hover:bg-softbleu" onClick={()=>{setShowAddsession(true)}}>
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* filtre */}
                            <table class="w-full pt-2 ">
                                <thead class="bg-gray-100 border-b border-gray-200">
                                    <tr>
                                        <th class="tr-thead text-xl font-bold">{value?.id}</th>
                                        <th class="tr-thead text-xl">{value?.themeName}</th>
                                        <th class="tr-thead text-xl">{value?.adminName} {value?.adminFirstname}</th>
                                        <th  className="text-softbleu" onClick={()=>close(false)}>Retour</th>
                                    </tr>
                                </thead>
                            </table>
                            <div className="grid grid-cols-1 p-8 justify-center items-center ">
                                <div class="overflow-x-auto  mt-2 ">
                                    {/* <h3 class="font-semibold text-gray-800 mb-1">Listes session</h3> */}
                                        <div  className="w-full py-4">
                                            <table className="w-full">
                                            <thead className="bg-gray-50 border-b border-gray-200">
                                                <tr>
                                                    <th className="tr-thead">Matricule</th>
                                                    <th className="tr-thead">Photo</th>
                                                    <th className="tr-thead">Nom</th>
                                                    <th className="tr-thead">Prenoms</th>
                                                    <th className="tr-thead">presence <i class="fa-solid fa-sun"></i></th>
                                                    <th className="tr-thead">presence <i class="fa-solid fa-cloud-sun"></i></th>
                                                    <th className="tr-thead">Note</th>
                                                    <th className="tr-thead">Q Formateur</th>
                                                    <th className="tr-thead">Q Entreprise</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                              {participant.map((v, index) => (
                                                <tr key={index} className="hover:bg-gray-50">
                                                    <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[index]}`}>{v.matricule}</span></td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">
                                                         <img
                                                            src={`${url_recrutement_image}${v.photo}`}
                                                            alt="photo candidat"
                                                            className="h-10 w-10 rounded-full object-cover"
                                                        />
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">{v.name} {console.log(v)}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">{v.firstname}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">{v.pmorning} / {v.cmorning}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">{v.pevening} / {v.cevening}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">{v.note} / {v.total}</td>

                                                    {/* Lien permettant aux participants de répondre aux questions de post-formation. */}
                                                    <td className="px-6 py-4 text-sm text-gray-500">
                                                        <button className="" onClick={()=>{ 
                                                            setShowLink(true),
                                                            setParametres(value.id+"|"+value.themeName+"|"+value.trainerName+"|"+v.idparticipant),
                                                            setEndpoint("test-postformation-f")
                                                            }}>
                                                            <i class="fa-solid fa-clipboard-question"></i>
                                                        </button>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">
                                                        <button className="" onClick={()=>{ 
                                                            setShowLink(true),
                                                            setParametres(value.id+"|"+value.themeName+"|"+value.trainerName+"|"+v.idparticipant),
                                                            setEndpoint("test-postformation-e")
                                                            }}>
                                                            <i class="fa-solid fa-clipboard-question"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                 ))}
                                            </tbody>
                                            </table>
                                        </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </>
        </>
        
    );
}
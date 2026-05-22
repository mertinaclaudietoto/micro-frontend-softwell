import { useEffect, useState } from "react";
import { listsmallformation ,url, url_front} from "../../data/data";
import {  dateToLetters, diffDate } from "../../function/Date";
import {  CardAddSession, Sidebar } from "../../components";
import { deleteId,getData } from "../../function/Axios";
import CardUpdateSession from "../../components/card/popup/CardUpdateSession";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardForwardLink from "../../components/card/popup/CardForwardLink";
import ListParticipantInFormation from "./ListParticipantInFormation";
import { Invoice } from ".";

export default function TrainingState({value,close}){
    const acces = sessionStorage.getItem("access");
    const accesObj = JSON.parse(acces);
    const [showAddsession,setShowAddsession]=useState(false);
    const [showUpdatesession,setShowUpdatesession]=useState(false);
    const [showInvoice,setShowInvoice]=useState(false);

    const [participant,setParticipant]=useState([]); 
    const [themes,setThemes]=useState(null); 
    const [listSession,setSession]=useState([]); 
    const getParticipant = async ()=>{
            const data = await getData(url + `v_participant_validate/getparticipant?id=${value.id}`);
            if(data.data!=null){
                setParticipant(data.data);
            }   
        }
     const getListSession = async ()=>{
            const data = await getData(url + `session/list/${value.id}`);
            if(data.data!=null){
               
                setSession(data.data);
            }   
        }
    const getTheme = async ()=>{
        const data = await getData(url + `training-themes/getById?id=${value.id}`);
        if(data.data!=null){
            setThemes(data.data);
        }   
    }

    const deleteSession = async (idSessionDelete)=>{
        
        const value = await deleteId(url + `session/${idSessionDelete}`);
        if (value == true) {
            toast.success("Données supprimées avec succès !");
            getListSession();
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    }

    const [showLink,setShowLink]=useState();
    const [showParticipants,setShowParticipants]=useState(false);

    const [parametres,setParametres]=useState(null);
    const [daysession,setDaysession]=useState(null);
    const [updateValue,setUpdateValue]=useState(null);
    const UpValue=(value) =>{
        setUpdateValue(value);
        setShowUpdatesession(true);
    }
    useEffect(()=>{
        getListSession();
        getTheme()
        getParticipant()
    },[showUpdatesession,showAddsession])

    return(
        <>
        { showLink ? <CardForwardLink _url={url_front} endpoint={"presence"} closePopup={setShowLink}  parametres={parametres} daysession={daysession} title={`Partagez le lien afin de valider la présence du ${dateToLetters(daysession)}`}/> :<></>}
        { accesObj && (accesObj?.validation?.ajout_session != null || accesObj?.validation?.ajout_session != undefined) && showAddsession ? 
        <CardAddSession  close={setShowAddsession} idvalidation={value.id} ></CardAddSession>   : 
        accesObj && (accesObj?.validation?.modification_session != null || accesObj?.validation?.modification_session != undefined) &&
        showUpdatesession ? <CardUpdateSession  upValue={updateValue} close={setShowUpdatesession} />  :
        showParticipants ? <ListParticipantInFormation value={value} close={setShowParticipants} /> :
        accesObj && (accesObj?.validation?.ajout_facture_session != null || accesObj?.validation?.ajout_facture_session != undefined) && showInvoice ? <Invoice value={value} close={setShowInvoice}/> :
        <>
         <div class="flex">
            <Sidebar/>
            <main class="flex-1 ">  
                <div class=" md:p-8 bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-1 md:p-6">
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
                                            {/* <button className="btn-neutre-gray" >
                                            <i className="fas fa-arrow-left"></i>
                                            </button>
                                            <button className="btn-neutre-gray" >
                                                <i className="fas fa-arrow-right"></i>
                                            </button> */}
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
                                        {accesObj && (accesObj?.validation?.ajout_facture_session == null || accesObj?.validation?.ajout_facture_session=== undefined) ? null : (
                                            <th class="text-softbleu" onClick={()=>{setShowInvoice(true)}}>Facture</th>
                                        )}
                                        <th className="text-softbleu" onClick={()=>{setShowParticipants(true)}}>Participant</th>
                                        <th  className="text-softbleu" onClick={()=>close(false)}>Retour</th>
                                    </tr>
                                </thead>
                            </table>
                            <div className="grid grid-cols-1 p-8 justify-center items-center ">
                                <div class="overflow-x-auto  mt-2 ">
                                    {/* <h3 class="font-semibold text-gray-800 mb-1">Listes session</h3> */}
                                    {listSession.map((valueL, index) => (
                                        <div key={index} className="w-full py-4">
                                            <div className="grid grid-cols-5 mb-2 px-4 justify-end items-end bg-blue-50 ">
                                                <div className="text-md font-bold text-blue-800">{valueL.Datestart?.split("T")[0]}</div>
                                                <div className="text-md font-bold text-blue-800">{valueL.Dateend?.split("T")[0]}</div>
                                                <div className="text-blue-800">
                                                    {diffDate(valueL.Datestart?.split("T")[0],valueL.Dateend?.split("T")[0])}
                                                </div>
                                                <div className="text-blue-800">
                                                    voir participants
                                                </div>
                                                <div className="flex justify-between items-end text-blue-800 gap-2">
                                                    
                                                    {accesObj && (accesObj?.validation?.modification_session == null || accesObj?.validation?.modification_session=== undefined) ? null : (
                                                        <button onClick={()=>{UpValue(valueL)}}>
                                                            <i className="fa-solid fa-pen text-blue-800"></i>
                                                        </button>
                                                    )}
                                                    {accesObj && (accesObj?.validation?.suppression_session == null || accesObj?.validation?.suppression_session=== undefined) ? null : (
                                                        <button onClick={()=>{deleteSession(valueL.Id)}}>
                                                                <i className="fa-solid fa-trash text-blue-800"></i>
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            <table className="w-full">
                                            <thead className="bg-gray-50 border-b border-gray-200">
                                                <tr>
                                                <th className="tr-thead">Jours</th>
                                                <th className="tr-thead">Debut matin</th>
                                                <th className="tr-thead">Fin matin</th>
                                                <th className="tr-thead">Debut soir</th>
                                                <th className="tr-thead">Fin soir</th>
                                                <th className="tr-thead"></th>
                                                </tr>
                                            </thead>

                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {valueL.sessionday.map((v, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 text-sm text-gray-900">{v.Date?.split("T")[0]}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">{v.Heurstartmoring}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">{v.Heurendmoring}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">{v.Heurstartaftern}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">{v.Heurendaftern}</td>
                                                    {/* lien pour faire la presence */}
                                                    <td className="px-6 py-4 text-sm text-gray-500">
                                                        <button className="" onClick={()=>{ 
                                                            setShowLink(true),
                                                            setParametres(v.Id+"|"+value.themeName+"|"+v.Date),
                                                            setDaysession(v.Date?.split("T")[0])}}>
                                                            <i className="fas fa-file-alt"/>
                                                        </button>
                                                    </td>
                                                </tr>
                                                ))}
                                            </tbody>
                                            </table>
                                        </div>
                                    ))}
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </>}
        </>
        
    );
}

import { useEffect, useState } from "react";
import { infocandidate, listeformateur, listsmallformation, textbackground, trainingListToBeValidated, usersprofile ,getcolorstate, participantTraining, url} from "../../data/data";
import { getAge,dateToLetters,  diffDate1 } from "../../function/Date";
import {  CardAddSession, Sidebar, TextState,CardSmallTraining } from "../../components";
import CardSession from "../../components/card/training/CardSession";
import { useParams } from "react-router-dom";
import { getData } from "../../function/Axios";
import { formatDate } from "../../function/utils";
export default function TrainingState({value}){
    console.log("trainer state ",value)
    const acces = sessionStorage.getItem("access");
    const accesObj = JSON.parse(acces);
    const [showTrainer,setShowTrainer]=useState(false);
    const [showAddsession,setShowAddsession]=useState(false);
    const [info,setInfo]=useState( listsmallformation[0])
    const [detailleTheme,setDetailleTheme]=useState()
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
            const data = await getData(url + `session/list?id=${value.id}`);
            if(data.data!=null){
                console.log("liste ,,,",data.data);
                setSession(data.data);
            }   
        }
    const getTheme = async ()=>{
        const data = await getData(url + `training-themes/getById?id=${value.id}`);
        if(data.data!=null){
            setThemes(data.data);
        }   
    }
    useEffect(()=>{
        getListSession();
        getTheme()
        getParticipant()
    },[])
    return(
        <>
        { accesObj && (accesObj?.session?.ajout == null || accesObj?.session?.ajout == undefined) && showAddsession ? <CardAddSession  close={setShowAddsession} idvalidation={value.id} ></CardAddSession>
        :<>
         <div class="flex">
            <Sidebar/>
            <main class="flex-1 ">  
                <div class=" md:p-8 bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                    <div className="flex bg-white">
                        <div className="flex-1 w-2/3 border-rigth ">
                            {/* <div class="flex items-start gap-3 p-8">
                                    <div class={`w-12 h-12 bg-softbleutini-12 rounded-lg flex items-center justify-center text-white font-bold`}>
                                            {value.id}
                                    </div>
                                    <div class="flex-1 min-w-0 w-100 justify-center items-center">
                                        <div className="grid grid-cols-2  ">
                                            <div>
                                                    <h4 className="font-bold text-gray-900 mb-2 text-lg">{value?.themeName}</h4>
                                                    <p className="text-sm text-gray-600 mb-3">
                                                            {value?.description || "Description non disponible"} <br />
                                                            Formé par&nbsp;
                                                            <button
                                                                className="text-blue-600 text-sm font-semibold underline hover:text-blue-800"
                                                                onClick={() => setShowTrainer(true)}
                                                            >
                                                                {value?.trainerName}
                                                            </button>
                                                    </p>
                                            </div>
                                            <div>
                                                <div className="flex flex-col justify-between mt-4 md:mt-0 md:ml-4 w-full md:w-1/4 text-right">
                                                    <p className="text-xs text-gray-500">Admin: {value?.adminName} {value?.adminFirstname}</p>
                                                    <p className="text-xs text-gray-500">Date: {new Date(value?.date).toLocaleDateString()}</p>
                                                    <p className={`text-xs font-semibold ${value?.statu === 1 ? "text-green-600" : "text-red-600"}`}>
                                                    {value?.statu === 1 ? "Actif" : "Inactif"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div> 
                                    

                                        <TextState text={""} cssCard={"card-text-s-blue"} icone={info.type} />
                            </div> */}
                            <table class="w-full  ">
                                <thead class="bg-gray-100 border-b border-gray-200">
                                    <tr>
                                        <th class="tr-thead text-xl font-bold">{value?.id}</th>
                                        <th class="tr-thead text-xl">{value?.themeName}</th>
                                        <th class="tr-thead text-xl">{value?.adminName} {value?.adminFirstname}</th>
                                    </tr>
                                </thead>
                            </table>
                            <div className="grid grid-cols-1 p-8 justify-center items-center ">
                                <div class="overflow-x-auto  mt-2 ">
                                    <h3 class="font-semibold text-gray-800 mb-1">Listes session</h3>
                                    <table class="w-full">
                                        <thead class="bg-gray-50 border-b border-gray-200">
                                            <tr>
                                                <th class="tr-thead ">#</th>
                                                <th class="tr-thead ">Utilisateur</th>
                                                <th class="tr-thead">Date</th>
                                                <th class="tr-thead">Nombre session</th>
                                                <th class="tr-thead">Nombre Participant</th>
                                                <th class="tr-thead"></th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            {listSession.map((value,index)=>(
                                                <tr index={index} className="hover:bg-gray-50">
                                                    <td class="px-6 py-4 text-sm text-gray-500">
                                                        {/* <img
                                                                src={value.photo}
                                                                className="w-10 h-10 rounded-lg"
                                                                alt={value.login}
                                                            /> */}
                                                        <div class="text-sm font-medium text-gray-900">{value.id}</div>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <div class="text-sm font-medium text-gray-900">{value.name} {value.firstName}</div>
                                                        <div><span  className="label-formulaire" >matricule: {value.matricule} </span> </div>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <div class="text-sm font-medium text-gray-900">
                                                            <span class={`inline-flex items-center px-2.5 py-0.5 rounded text-md font-medium ${textbackground[index]} mb-1`}>{formatDate(value.dateStart) }  {formatDate(value.dateEnd) }</span>
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <div class="text-sm font-medium text-gray-900">{value.nbrDay}</div>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <div class="text-sm font-medium text-gray-900">{value.nbrParticipant}</div>
                                                    </td>
                                                    <td class="px-6 py-4 text-sm text-gray-500">
                                                        ⋮
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>  
                            </div>
                        </div>
                        <div className="w-1/3" >
                            <div class=" mx-2 px-6">
                                <div class="space-y-3 relative">
                                    <div class="absolute top-5 right-5 ">
                                        {accesObj && (accesObj?.validation?.ajout == null || accesObj?.validation?.ajout == undefined)  ? null : (
                                            <button class={"card-text-s-blue"} onClick={()=>{setShowAddsession(true)}}>
                                                <span>{"ajouter session"}</span>
                                                <i className={`fa-solid fa-plus icone-size-s`}></i>
                                            </button>
                                        )}
                                    </div>
                                   <div class=" min-h-screen">
                                        <div class=" max-w-md mx-auto min-h-screen">
                                            <div class="px-6 py-8">
                                                <CardSession title={"Convocation"} image={"convocation.svg"} state={true} description={"La convocation est envoyée."} datedebut={"01-12-2025 8:30"} datefin={"01-12-2025 12:30"}/>
                                                {/*  */}
                                                <CardSession title={"Session"} image={"trainingsession.svg"} state={true} description={"premiere formation lieu ankadidramami salle 1"} datedebut={"01-12-2025 8:30"} datefin={"01-12-2025 12:30"}/>
                                                {/* <CardSession title={"Session"} index={3} image={"trainingsession.svg"} state={false} description={"premiere formation lieu ankadidramami salle 1"} datedebut={"01-12-2025 8:30 12:30"} datefin={"01-12-2025 8:30 12:30"}/> */}
                                                <CardSession title={"Test formateur"} index={4} image={"testQcm.svg"} state={false} description={"premiere formation lieu ankadidramami salle 1"} datedebut={"01-12-2025 8:30 12:30"} datefin={"01-12-2025 8:30 12:30"}/>
                                                <CardSession title={"Test participant"} index={5} image={"testQcm.svg"} state={false} description={"premiere formation lieu ankadidramami salle 1"} datedebut={"01-12-2025 8:30 12:30"} datefin={"01-12-2025 8:30 12:30"}/> 
                                            </div>
                                        </div>
                                    </div>
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
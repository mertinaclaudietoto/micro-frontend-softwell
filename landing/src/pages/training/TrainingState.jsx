import { useState } from "react";
import { infocandidate, listeformateur, listsmallformation, textbackground, trainingListToBeValidated, usersprofile ,getcolorstate, participantTraining} from "../../data/data";
import { getAge,dateToLetters,  diffDate1 } from "../../function/Date";
import {  CardAddSession, Sidebar, TextState,CardSmallTraining } from "../../components";
import CardSession from "../../components/card/training/CardSession";
export default function TrainingState(){
    const [showTrainer,setShowTrainer]=useState(false);
    const [showAddsession,setShowAddsession]=useState(false);
    const [info,setInfo]=useState( listsmallformation[0])

    return(
        <>
        <div class="flex">
            <Sidebar/>
            <main class="flex-1 max-h-screen">  
                <div class=" md:p-8 bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                    <div className="flex bg-white">
                        <div className="flex-1 w-2/3 border-rigth ">
                            <div class="flex items-start gap-3 p-8">
                                    <div class={`w-12 h-12 bg-softbleutini-12 rounded-lg flex items-center justify-center text-white font-bold`}>
                                            {info.id}
                                    </div>
                                        
                                    <div class="flex-1 min-w-0 w-100">
                                        <h4 class="font-bold text-gray-900 mb-1 text-start">{info.name}</h4>
                                        {/* <p class="text-sm text-gray-500 mb-3">Slack Technologies, LLC</p> */}
                                        <p class="text-xs text-gray-600 mb-3 text-start">{info.description} 
                                            former par &nbsp;<button className="text-blue-800 text-sm font-bold underline" onClick={()=>setShowTrainer(true)}>Softwell</button> &nbsp; cout  &nbsp;
                                            <b className="text-blue-800 text-sm font-bold underline ">2 000 000 ar</b>
                                        </p>
                                        <div class="flex flex-wrap gap-2 w-100">
                                            {info.skill.map((value)=>(
                                                <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">{value}</span>
                                            ))}
                                        </div>
                                    </div>
                                        <TextState text={""} cssCard={"card-text-s-blue"} icone={info.type} />
                                       
                            </div>
                            <div className="grid grid-cols-1 p-8 justify-center items-center ">
                                <div class="overflow-x-auto  mt-2 ">
                                    <h3 class="font-semibold text-gray-800 mb-1">Listes participant</h3>
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
                        <div className="w-1/3" >
                            <div class=" mx-2 px-6">
                                <div class="space-y-3 relative">
                                    <div class="absolute top-5 right-5 ">
                                        <button class={"card-text-s-blue"} onClick={()=>{setShowAddsession(true)}}>
                                            <span>{"ajouter session"}</span>
                                            <i className={`fa-solid fa-plus icone-size-s`}></i>
                                        </button>
                                    </div>
                                   <div class=" min-h-screen">
                                        <div class=" max-w-md mx-auto min-h-screen">
                                            <div class="px-6 py-8">
                                                <CardSession title={"Convocation"} image={"convocation.svg"} state={true} description={"La convocation est envoyée."} datedebut={"01-12-2025 8:30"} datefin={"01-12-2025 12:30"}/>
                                                {/*  */}
                                                <CardSession title={"Session"} image={"trainingsession.svg"} state={true} description={"premiere formation lieu ankadidramami salle 1"} datedebut={"01-12-2025 8:30"} datefin={"01-12-2025 12:30"}/>
                                                <CardSession title={"Session"} index={3} image={"trainingsession.svg"} state={false} description={"premiere formation lieu ankadidramami salle 1"} datedebut={"01-12-2025 8:30 12:30"} datefin={"01-12-2025 8:30 12:30"}/>
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
        {showTrainer ?
            <div class="background_transparent_popup"> 
                <div class="bg-white rounded-xl mt-2 p-8 relative">
                    <div class="absolute top-6 right-6 ">
                        <span class="text-gray-800 text-lg font-semibold">
                        <button class="" onClick={()=>(setShowTrainer(false))}>
                            <i class="fa-solid fa-xmark "></i>
                        </button></span>
                    </div>
                    <table class="w-full">
                        <thead class="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th class="tr-thead w-8">#</th>
                                <th class="tr-thead">Nom</th>
                                <th class="tr-thead">Email</th>
                                <th class="tr-thead">Tel</th>
                                <th class="tr-thead">Prix</th>
                                <th class="tr-thead"></th>
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
                                    
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">2 000 000 ar</span></td>
                                    {/* <td class="px-6 py-4 text-sm text-gray-500">
                                        <button>
                                                ⋮
                                        </button>
                                    </td> */}
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        
                                        <input 
                                            type="radio" 
                                            name="choice" 
                                            className="peer" 
                                            // className="hidden peer" 
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div> :<></>}
        {showAddsession ? <CardAddSession  close={setShowAddsession} ></CardAddSession>
        :<></>}
        </>
        
    );
}
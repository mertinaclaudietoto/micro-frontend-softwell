import { useState } from "react";
import { infocandidate, listeformateur, listsmallformation, textbackground, usersprofile } from "../../data/data";
import { getAge,dateToLetters, diffDate } from "../../function/Date";
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
                            <div className="grid grid-cols-1 p-8 ">
                                
                                <div class="flex items-start gap-3">
                                    <div class={`w-12 h-12 bg-softbleutini-12 rounded-lg flex items-center justify-center text-white font-bold`}>
                                            {info.id}
                                    </div>
                                        
                                    <div class="flex-1 min-w-0 w-100">
                                        <h4 class="font-bold text-gray-900 mb-1 text-start">{info.name}</h4>
                                        {/* <p class="text-sm text-gray-500 mb-3">Slack Technologies, LLC</p> */}
                                        <p class="text-xs text-gray-600 mb-3 text-start">{info.description} </p>
                                        <div class="flex flex-wrap gap-2 w-100">
                                            {info.skill.map((value)=>(
                                                <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">{value}</span>
                                            ))}
                                        </div>
                                    </div>
                                        <TextState text={""} cssCard={"card-text-s-blue"} icone={info.type} />
                                </div>
                                <div class="p-2">
                                    <div class="flex items-center justify-center">
                                        <div className="flex items-center gap-2 overflow-x-auto flex-nowrap w-300">
                                            {usersprofile.map((value, idx) => (
                                                <div
                                                key={idx}
                                                className="bg-white  p-4 flex flex-col justify-center items-center gap-2 w-[100px] shrink-0"
                                                >
                                                <img
                                                    src={value.photo}
                                                    className="w-10 h-10 rounded-lg"
                                                    alt={value.login}
                                                />
                                                <div className="text-gray-500 text-xs text-center">
                                                    <p className="break-all">{value.login}</p>
                                                </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="bg-white  p-4 flex flex-col justify-center items-center gap-2 w-[100px] shrink-0">
                                                <button className="btn-neutre-gray">
                                                    <i class="fa-solid fa-plus"></i>
                                                </button>
                                                <div className="text-gray-500 text-xs text-center">
                                                    <p className="break-all">ajouter</p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <div class="mb-8">
                                        <table class="w-full">
                                            <thead>
                                                
                                                <tr class="bg-gray-50 border-b border-gray-200 border-gray-300">
                                                    <th class="tr-thead">Description</th>
                                                    <th class="tr-thead w-24">Durée</th>
                                                    <th class="tr-thead w-40">Prix unitaire</th>
                                                    <th class="tr-thead w-32">Total HT</th>
                                                    <th class="tr-thead w-10"> ⋮</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="border-b border-gray-200">
                                                    <td class="py-4 px-2">
                                                        <div class="font-semibold text-gray-800 mb-1">Formation Développement Web Full Stack</div>
                                                        <div class="text-sm text-gray-600">
                                                            Formation complète incluant HTML, CSS, JavaScript, React, Node.js et bases de données. 
                                                            Support pédagogique et certificat inclus.
                                                        </div>
                                                        <div class="text-xs text-gray-500 mt-2">
                                                            Dates: 10-14 janvier 2025 | Lieu: Paris ou en ligne
                                                        </div>
                                                    </td>
                                                    <td class="text-center py-4 px-2 text-gray-800">5 jours</td>
                                                    <td class="text-right py-4 px-2 text-gray-800">450,00 €</td>
                                                    <td class="text-right py-4 px-2 font-semibold text-gray-800">2 250,00 €</td>
                                                </tr>
                                                <tr class="border-b border-gray-200">
                                                    <td class="py-4 px-2">
                                                        <div class="font-semibold text-gray-800 mb-1">Coaching individuel post-formation</div>
                                                        <div class="text-sm text-gray-600">
                                                            3 séances de coaching individuel d'une heure avec un formateur expert pour accompagnement personnalisé.
                                                        </div>
                                                    </td>
                                                    <td class="text-center py-4 px-2 text-gray-800">3 heures</td>
                                                    <td class="text-right py-4 px-2 text-gray-800">100,00 €</td>
                                                    <td class="text-right py-4 px-2 font-semibold text-gray-800">300,00 €</td>
                                                </tr>
                                                <tr class="border-b border-gray-200">
                                                    <td class="py-4 px-2">
                                                        <div class="font-semibold text-gray-800 mb-1">Accès plateforme e-learning (12 mois)</div>
                                                        <div class="text-sm text-gray-600">
                                                            Accès illimité à notre plateforme avec plus de 200 heures de contenu vidéo et exercices pratiques.
                                                        </div>
                                                    </td>
                                                    <td class="text-center py-4 px-2 text-gray-800">12 mois</td>
                                                    <td class="text-right py-4 px-2 text-gray-800">300,00 €</td>
                                                    <td class="text-right py-4 px-2 font-semibold text-gray-800">300,00 €</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="flex justify-end mb-8">
                                        <div class="w-80">
                                            <div class="flex justify-between text-lg font-bold text-gray-900">
                                                <span>Total TTC</span>
                                                <span>2 850,00 €</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="w-1/3" >
                            <div class="bg-white mx-2 px-6">
                                <div class="space-y-3 relative">
                                    <div class="absolute top-5 right-5 ">
                                        <button class={"card-text-s-blue"} onClick={()=>{setShowAddsession(true)}}>
                                            <span>{"ajouter session"}</span>
                                            <i className={`fa-solid fa-plus icone-size-s`}></i>
                                        </button>
                                    </div>
                                   <div class=" min-h-screen">
                                        <div class="bg-white max-w-md mx-auto min-h-screen">
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
                        <button class="" onClick={()=>(close(false))}>
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
                                <th class="tr-thead">En activiter</th>
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
                                    
                                    <td class="px-6 py-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Active</span></td>
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        <button className="btn-neutre-gray">
                                                ⋮
                                        </button>
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
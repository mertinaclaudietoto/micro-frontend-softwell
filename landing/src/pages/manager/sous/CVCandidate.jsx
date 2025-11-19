import { useState } from "react";
import { infocandidate } from "../../../data/candidate";
import { getAge,dateToLetters, diffDate } from "../../../function/Date";
export default function CVCandidate(){
    const [experience ,setExperience]=useState('1');
    const headeTable =[
        {name:"Professionnelle",index:'1'},
        {name:"Personnelle",index:'2'},
        {name:"Academique",index:'3'}];
    return(
        <div class="p-4 md:p-8">
                {/* <div class="flex justify-end gap-3 mb-6">
                    <button class="px-6 py-2 bg-white text-cyan-500 border-2 border-cyan-500 rounded-full font-semibold hover:bg-cyan-50 transition">
                        retour
                    </button>
                    <button class="px-6 py-2 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition">
                        Cadidate suivante
                    </button>
                </div> */}
                <div className="flex">
                    <div className="flex-1 w-2/3 border-rigth ">
                        <div className="grid grid-cols-1 lg:grid-cols-2 ">
                            {/* info candidate */}
                            <div class="bg-white  p-8 border-rigth ">
                                <div class="flex flex-col items-center">
                                    <img src={infocandidate.photo} 
                                        alt="Kate Prokopchuk" 
                                        class="w-32 h-32 rounded-full object-cover mb-4"/>
                                    <h2 class="text-2xl font-bold text-gray-800 text-center">{infocandidate.name}</h2>
                                    <h3 class="text-2xl font-bold text-gray-800 mb-4">{infocandidate.firstnamename}</h3>
                                    <p class="text-softbleu font-semibold">{infocandidate.tel}</p>
                                    <p class="text-softbleu font-semibold">{infocandidate.email}</p>
                                </div>
                            </div>
                            {/* info plus  */}
                            <div class="bg-white p-6 ">
                                <div class="flex items-center justify-between mb-6">
                                    <h3 class="text-xl font-bold text-gray-800">information generale</h3>
                                    {/* modifier */}
                                    {/* <button class="text-gray-400 hover:text-gray-600">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                                        </svg>
                                    </button> */}
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <p class="text-sm-gray">Ages:</p>
                                        <p class="text-base font-semibold text-gray-800">{getAge(infocandidate.birthday)}</p>
                                    </div>
                                    <div>
                                        <p class="text-sm-gray">Addresse:</p>
                                        <p class="text-base font-semibold text-gray-800">{infocandidate.localisation}</p>
                                    </div>
                                    <div>
                                        <p class="text-sm-gray">Poste:</p>
                                        <p class="text-base font-semibold text-gray-800">{infocandidate.namepost}</p>
                                    </div>
                                    <div>
                                        <p class="text-sm-gray">Date de postulation:</p>
                                        <p class="text-base font-semibold text-gray-800">{dateToLetters(infocandidate.daterequest)}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-sm-gray">
                                            {infocandidate.vision}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            
                            {/* tableau  */}
                            <div class="md:col-span-2 border-top">
                                <h3 class="text-xl font-bold text-gray-800 text-end pr-3">Experience</h3>
                                <div class="mt-6 bg-white  overflow-hidden">
                                    <div class="flex border-bottom">
                                        {headeTable.map((value,index)=>(
                                            <button index={index} class={`flex-1 px-4 py-4 text-sm font-semibold ${value.index==experience ? "text-softbleu border-b-2 border-softbleu" : "text-gray-500 hover:text-gray-700"}`}
                                                onClick={()=>{setExperience(value.index)}}>
                                                {value.name}
                                            </button>
                                        ))}
                                    </div>

                                    
                                    <div class="p-6 space-y-4 ">
                                        {infocandidate.experience
                                        .filter(item => item.type === experience)
                                        .map((exp, index) => (
                                            <div key={index} className="border-l-4 border-softbleu pl-4 py-2">
                                                <div className="grid grid-cols-4">
                                                    <div>
                                                        <div className="text-xs text-gray-500 mb-1">{dateToLetters(exp.datedebut)} -- {dateToLetters(exp.datefin)} </div>
                                                        <div className="text-lg font-bold text-gray-800 mb-2">{diffDate(exp.datedebut,exp.datefin)}</div>
                                                    </div>
                                                    <div>
                                                        <div className="mb-2">
                                                            <span className="text-xs text-gray-500">{exp.entreprise}</span>
                                                            <p className="text-sm font-medium text-gray-800">
                                                                {exp.poste}
                                                            </p>
                                                        </div>
                                                        {/* <div className="mb-2">
                                                            <span className="text-xs text-gray-500">Doctor :</span>
                                                            <p className="text-sm font-medium text-cyan-500">Oksana Ma...</p>
                                                        </div> */}
                                                    </div>

                                                    <div className="col-span-2">
                                                        <div>
                                                            {/* <span className="text-xs text-gray-500">Status :</span>
                                                            <span className="inline-block px-3 py-1 bg-cyan-500 text-white text-xs rounded-full ml-2">
                                                                Scheduled
                                                            </span> */}
                                                            <p className="text-gray-700">
                                                                {exp.description}
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3" >
                        <div class="bg-white m-2 p-6 border-bottom">
                            <div class="flex items-center justify-between mb-6">
                                <h3 class="text-xl font-bold text-gray-800">Skill</h3>
                                {/* <button class="text-gray-400 hover:text-gray-600">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                                    </svg>
                                </button> */}
                            </div>
                            {/* md:grid-cols-2 */}
                            <div class="grid grid-cols-1  gap-6">
                                <p class="text-sm-gray">Hard</p>
                                <div className="flex flex-wrap">
                                    {infocandidate.hardskill.map((value,index)=>(
                                        <div index={index} className="card-text-rounded-gray">{value.name}</div>
                                    ))}
                                </div>
                                <p class="text-sm-gray">Soft</p>
                                <div className="flex flex-wrap">
                                    {infocandidate.softskill.map((value,index)=>(
                                        <div index={index} className="card-text-rounded-gray">{value.name}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div class="bg-white m-2 p-6 ">
                            <div class="flex items-center justify-between mb-6">
                                <h3 class="text-xl font-bold text-gray-800">Diplomes</h3>
                                {/* <button class="px-4 py-2 border-2 border-cyan-500 text-cyan-500 rounded-full text-sm font-semibold hover:bg-cyan-50 transition">
                                    DOWNLOAD
                                </button> */}
                            </div>
                            <div class="space-y-3">
                                {infocandidate.education.map((value,index)=>(
                                    <div index={index} class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                        <div class="flex items-center gap-3">
                                            <i className="fa-solid fa-award w-8 h-8 text-4xl text-softbleu"></i>
                                            <div>
                                                    <div class="text-sm font-medium text-gray-800">{value.diplome}</div>
                                                    <div class="text-sm-gray">{value.school}</div>
                                            </div>
                                        </div>
                                        <span class="text-sm text-gray-500">{value.graduationyear}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                       
                    </div>
                </div>
        </div>
    );
}
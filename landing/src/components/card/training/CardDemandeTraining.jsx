import { useState } from "react";
import {  newformation, usersprofile } from "../../../data/data";
import { TextState } from "../../state";
export default function CardDemandeTraining({close,infosmallformation}){
    const [infodemande,setInfodemande]=useState(newformation); 
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    return(
        <>
            <div className="background_transparent_popup">
            <div class="grid grid-cols-1 bg-white  p-10 rounded-card w-120 relative">
                <div class="absolute top-6 right-6">
                    <span class="text-gray-800 text-lg font-semibold">
                    <button class="" onClick={()=>(close(false))}>
                        <i class="fa-solid fa-xmark"></i>
                    </button></span>
                </div>
                <div class="flex flex-col items-center">
                    <div class="w-32 h-32   rounded-full flex items-center justify-center mb-4 cursor-pointer  transition-colors">
                       <img src="demandeformation.svg"/>
                    </div>
                </div>
                {/* nom formation */}
               
                  <div  class=" rounded-xl p-4 mb-4  transition-shadow cursor-pointer">
                        <div class="flex items-start gap-3">
                            <div class={`w-12 h-12 bg-softbleutini-12 rounded-lg flex items-center justify-center text-white font-bold`}>
                                    {infosmallformation.id}
                            </div>
                                
                            <div class="flex-1 min-w-0 w-100">
                                <h4 class="font-bold text-gray-900 mb-1 text-start">{infosmallformation.title}</h4>
                                {/* <p class="text-sm text-gray-500 mb-3">Slack Technologies, LLC</p> */}
                                <p class="text-xs text-gray-600 mb-3 text-start">{infosmallformation.description} </p>
                                <div class="flex flex-wrap gap-2 w-100">
                                    {infosmallformation.skill.map((value)=>(
                                        <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">{value}</span>
                                    ))}
                                </div>
                            </div>
                                <TextState text={""} cssCard={"card-text-s-blue"} icone={infosmallformation.type} />
                        </div>      
                </div>
                <div className="my-2">
                    <label class="label-formulaire">Quand souhaitez-vous suivre cette formation ?</label>
                    <div class="relative">
                        <input 
                            type="date" 
                            class="input_singup w-[100px]"
                            onChange={(event) => handlerVariable("datestarttraining", event.target.value,setInfodemande)}
                        />
                    </div>
                </div>  
             

                <div className='my-2'>
                    <label class="label-formulaire">La liste des participeront</label>
                    <div class="relative flex flex-row gap-4">
                        <input 
                            type="email" 
                            placeholder={infodemande.title} 
                             class="input_singup w-32 min-w-[120px]"
                        />
                       <button class="btn-neutre-gray" >
                         <i class="fa-solid fa-check"></i>
                        </button>
                    </div>
                </div>
                <div className="my-2"> 
                    <div class="flex items-center justify-center">
                        <div className="flex items-center gap-2 overflow-x-auto flex-nowrap w-150">
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
                    </div>
                </div>
                <div class="flex items-center justify-end gap-3 mt-2">
                    
                    <button class="btn-action" >
                        Enregistrer
                    </button>
                </div>
            </div>
        </div>
    </> 
        
    );
}
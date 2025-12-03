import { useState } from "react";
import {  listsmallformation, usersprofile } from "../../../data/data";
import { TextState } from "../../state";
import SearchableSelect from "../../../function/select";
import Select from "../../../function/selectSimple";
export default function CardWish({close}){
    const [listetraining,setListetraining]=useState(listsmallformation); 
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const handler=()=>{

    }
    return(

        <>
        <div className="background_transparent_popup">
            <div class="grid grid-cols-1 bg-white  p-10 rounded-card w-120 relative">
                <h3 className="font-semibold text-gray-700">Souhait formation</h3>
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
                <label class="label-formulaire">Choisisez votre formation</label>
                <Select options={listetraining} onChange={handler}/>
                <div className="my-2">
                    <label class="label-formulaire">Quand souhaitez-vous suivre cette formation ?</label>
                    <div class="relative">
                        <input 
                            type="date" 
                            class="input_singup w-[100px]"
                            onChange={(event) => handlerVariable("datestarttraining", event.target.value,setListetraining)}
                        />
                    </div>
                </div>  
                <label class="label-formulaire">Choisisez les participant</label>
                <SearchableSelect options={listetraining} onChange={handler}/>
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
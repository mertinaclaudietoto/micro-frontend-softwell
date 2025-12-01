import { useState } from "react";
import { listsmallformation } from "../../../data/data";

export default function CardDemandeFormation({close}){
    const [infodemande,setInfodemande]=useState(listsmallformation[0]);
    return(
        <div className="background_transparent_popup">
            <div class="grid grid-cols-1 bg-white  p-10 rounded-card w-100">
                <div class="flex flex-col items-center">
                    <div class="w-32 h-32 bg-softbleutini-12  rounded-full flex items-center justify-center mb-4 cursor-pointer  transition-colors">
                       {infodemande.id}
                    </div>
                </div>
                <div className='my-2'>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nom formation</label>
                    <div class="relative">
                        <input 
                            type="email" 
                            placeholder={infodemande.title} 
                            class="input_singup"
                        />
                        {/* <HiOutlineMap className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" /> */}
                    </div>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Description du poste</label>
                    <textarea 
                        placeholder={infodemande.description} 
                        rows="4"
                        class="input_singup"
                    ></textarea>
                </div>
                <div className="py-1">
                    <div class="flex justify-between pb-2 ">
                            <span class="text-gray-600">Comptetence acquise</span>
                    </div>
                    {infodemande.competence.map((value)=>(
                        <span class="card-text-rounded-gray">{value}</span>
                    ))}
                </div>
               
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Pourquoi vous-voulew cette formation?</label>
                    <textarea 
                        placeholder="Type here..." 
                        rows="4"
                        class="input_singup"
                    ></textarea>
                </div>

              
                <div class="flex items-center justify-end gap-3 mt-2">
                    <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>{close()}}>
                        Cancel
                    </button>
                    <button class="btn-action" onClick={()=>{close(false)}}>
                        Save
                    </button>
                </div>
            </div>
    </div>
    );
}
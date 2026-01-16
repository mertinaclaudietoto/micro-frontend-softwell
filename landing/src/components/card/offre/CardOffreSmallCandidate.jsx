import { useState } from "react";
import { CardShowOffre } from "../popup";

export default function CardOffreSmallCandidate({value,k}){
    const [showDetaille,setShowDetaille]=useState(false);
    return(
        <>
        {/* border border-gray-300 */}
            <button onClick={()=>{setShowDetaille(true)}} key={k} class="border border-gray-300 rounded-xl p-4 mb-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div class="flex items-start gap-3">
                    <div class=" hidden sm:block w-10 h-10 bg-softbleu rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {/* <i class="fas fa-slack text-white text-xl"></i> */}
                        {value.requestId}
                    </div>
                    <div class="flex-1 min-w-0">
                        <h4 class="font-bold text-gray-900 mb-1">{value.nom}</h4>
                        <p class="text-sm text-gray-500 mb-3">{value.goals}</p>
                        <p class="text-xs text-gray-600 mb-3">{value.mission}</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">{value.nameLocalisation}</span>
                            <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">{value.nameContrat}</span>
                        </div>
                    </div>
                </div>
               
            </button>
            {showDetaille  ?<CardShowOffre idpost={value.idPost} id={value.requestId} close={setShowDetaille}/> : null}
        </>
    )
}
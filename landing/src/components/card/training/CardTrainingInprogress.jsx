

import { TextState } from "../../state";

export default function CardSmallTraining({value }){
    return(
        <> 
        <div className="bg-gray-50 shadow-sm ">
            <div class="flex items-start gap-3 p-4">
                <div class={`w-12 h-12 bg-softbleutini-12 rounded-lg flex items-center justify-center text-white font-bold`}>
                        {value.id}
                </div>
                    
                <div class="flex-1 min-w-0 w-100">
                    <h4 class="font-bold text-gray-900 mb-1 text-start">{value.name}</h4>
                    {/* <p class="text-sm text-gray-500 mb-3">Slack Technologies, LLC</p> */}
                    <p class="text-xs text-gray-600 mb-3 text-start">{value.description} </p>
                    <div class="flex flex-wrap gap-2 w-100">
                        {value.skill.map((value)=>(
                            <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">{value}</span>
                        ))}
                    </div>
                </div>
                
                <button class="card-text-s-blue" >
                    <span>{value.datedebut+"  "+value.datefin}</span>
                    <i className={`${value.type} icone-size-s`}></i>
                </button>
            </div>
            <div class="flex items-center  justify-start  p-4 ">       
                        <div class="flex items-center gap-4">
                            <div class="flex -space-x-2">
                                <img src="https://i.pravatar.cc/40?img=1" alt="User 1" class="w-10 h-10 rounded-full border-2 border-white"/>
                                <img src="https://i.pravatar.cc/40?img=2" alt="User 2" class="w-10 h-10 rounded-full border-2 border-white"/>
                                <img src="https://i.pravatar.cc/40?img=3" alt="User 3" class="w-10 h-10 rounded-full border-2 border-white"/>
                                <div class="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
                                    +2
                                </div>
                            </div>
                        </div>
                        <button class="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                            <span class="text-sm font-medium">participer /annuler</span>
                            <i class="fa-solid fa-plus"></i>
                        </button>
            </div>
        </div>
       
        </>
    )
}
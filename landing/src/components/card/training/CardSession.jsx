import { diffDate } from "../../../function/Date";

export default function CardSession({index,image,state,title,description,datedebut,datefin}){
    return(
        <div class="flex items-start mb-12 ">
            <div class="flex flex-col items-center mr-4">
                {state ? 
                <div class="w-10 h-10 rounded-full bg-softbleu flex items-center justify-center text-white font-semibold">
                    ✓
                </div>: 
                <div class="w-10 h-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center text-gray-400 font-semibold">
                    {index}
                </div>
                }
                <div class="w-0.5 h-24 bg-gray-300 mt-2"></div>
            </div>
            <div class="flex-1 flex items-start">
                <div class="mr-4 mt-2">
                    <img  src={image} class="w-16 h-16"/>
                </div>
                <div class="flex-1">
                    <h3 class="font-semibold text-gray-800 mb-1">{title}</h3>
                    <p class="text-gray-500 text-sm mb-2">{description}</p>
                    <p class="text-gray-600 text-sm">{diffDate(datefin,datedebut)} {}</p>
                </div>
            </div>
        </div>
    )
}
import { dateToLetters, diffDate } from "../../function/Date";

export default function Step({index,namesvg,title,datestart,dateend}){
    return(
        <div class="flex items-start  p-4">
            <div class="flex flex-col items-center mr-4">
                <div class="w-10 h-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center text-gray-400 font-semibold">
                    {index}
                </div>
            </div>
            <div class="flex-1 flex items-start">
                <div class="mr-4 mt-2">
                    <img src={namesvg} className="size-20" />
                </div>
                <div class="flex-1">
                    <h3 class="font-semibold text-gray-800 mb-1">{title}</h3>
                    <p class="text-gray-500 text-sm">{dateToLetters(datestart)} / {dateToLetters(dateend)} : {diffDate(datestart,dateend)}</p>
                </div>
            </div>
        </div>
    )
}
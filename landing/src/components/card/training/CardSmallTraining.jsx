
import { useState } from "react";
import { TextState } from "../../state";
import { listsmallformation } from "../../../data/data";

export default function CardSmallTraining({info }){
    // console.log(value)
    // const [info,setInfo]=useState(value ?? listsmallformation[0])
    return(
        <> 
        <div class="flex items-start gap-3">
            <div class={`w-12 h-12 bg-softbleutini-12 rounded-lg flex items-center justify-center text-white font-bold`}>
                    {info.id}
            </div>
                
            <div class="flex-1 min-w-0 w-100">
                <h4 class="font-bold text-gray-900 mb-1 text-start">{info.name}</h4>
                {/* <p class="text-sm text-gray-500 mb-3">Slack Technologies, LLC</p> */}
                <p class="text-xs text-gray-600 mb-3 text-start">{info.description} </p>
                <div class="flex flex-wrap gap-2 w-100">
                    {info?.skill.split(",")?.map((value)=>(
                        <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">{value}</span>
                    ))}
                </div>
            </div>
                <TextState text={info.nametype} cssCard={"card-text-s-blue"} icone={info.icone} />
        </div>
          
        </>
    )
}
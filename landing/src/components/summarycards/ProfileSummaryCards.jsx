import { useState } from "react";
import { profileSummaryCards } from "../../data/data";
import Summarycards from "../card/summary/SummaryCard";

export default function ProfileSummaryCards({linkBack}){
    ///
    const [data,setData]=useState(profileSummaryCards);
    //TODO:fonction axios appartire de linkBack pour avoir profilesummary
    return(
        <div class="flex gap-4 mb-6 overflow-x-auto whitespace-nowrap py-6">
            {data.map((value)=>(
                <Summarycards value={value}/>
            ))}    
        </div>
    )
}
import { HiOutlineBookmark,HiOutlinePaperAirplane } from "react-icons/hi2";
import { criteriens } from "../../../data/data";
import { TextState } from "../../state";
export default function  CardOffreMiddel  ({lading})  {
    const criterien = criteriens[0];
    console.log(criterien)
    return (
    // border border-gray-300
    <div class="rounded-xl p-4 md:p-6">       
            <div class="flex items-start justify-between mb-6">
                <div class="flex items-start gap-3">
                    <div class={`w-12 h-12 bg-${criterien.color}-700 rounded-lg flex items-center justify-center text-white font-bold`}>
                            {criterien.id}
                    </div>
                    <div>
                        <h2 class="title_seconde">{criterien.title}</h2>
                    </div>
                </div>
                {!lading ?
                (<div class="flex gap-2 flex-shrink-0">
                    <button class="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 text-sm md:text-base"><HiOutlinePaperAirplane/></button>
                    <button class="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 text-sm md:text-base"><HiOutlineBookmark/></button>
                </div>)
                : ""}
            
            </div>
            <div class="flex flex-wrap gap-2 py-2">
                {criterien.selectCriteriens.map((value)=>(
                    <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">{value}</span>
                ))}
            </div>             
            <div class="mb-6">
                <h3 class="font-bold text-gray-900 mb-3">Description</h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                    {criterien.description}
                </p>
            </div>

            <div>
                <h3 class="font-bold text-gray-900 mb-3">Compétence requise</h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                    {criterien.keyskill}
                </p>
            </div>
    </div>
  );
};

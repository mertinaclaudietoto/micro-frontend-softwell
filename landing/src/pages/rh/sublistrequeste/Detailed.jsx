import { useState } from "react";
import { infocandidate, listCandidate } from "../../../data/candidate";
import { getAge,dateToLetters, diffDate } from "../../../function/Date";
import CardCriterien from "../../../components/card/criterien/CardCriterien";
import CardCriterienRh from "../../../components/card/criterien/CardCriterienRh";
import Step from "../../../components/step/Step";
import { step } from "../../../data/rh";
import TextState from "../../../components/state/TextState";
export default function Detailed(){
    const [experience ,setExperience]=useState('1');
    const headeTable =[
        {name:"note",index:'1'},
        {name:"photo",index:'2'},
        {name:"nom",index:'3'},
        {name:"competence",index:'4'},
    ];

    return(
        <div class="p-4 md:p-8">
                {/* <div class="flex justify-end gap-3 mb-6">
                    <button class="px-6 py-2 bg-white text-cyan-500 border-2 border-cyan-500 rounded-full font-semibold hover:bg-cyan-50 transition">
                        retour
                    </button>
                    <button class="px-6 py-2 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition">
                        Cadidate suivante
                    </button>
                </div> */}
                <div className="flex">
                    <div className="flex-1 w-2/3 border-rigth ">
                    <div className="h-120 overflow-y-auto">
                         <table className="w-full h-50">
                            <thead>
                                <tr className="text-gray-500 text-sm border-b">
                                {headeTable.map((value, index) => (
                                    <th key={index} className="pb-3">
                                        {value.name}
                                    </th>
                                ))}
                                <th></th>
                                </tr>
                            </thead>

                        <tbody className="text-sm text-gray-800">
                            {listCandidate.map((value, index) => (
                            <tr key={index} className="border-bottom ">
                                <td className="py-3 text-center ">{value.id}</td>
                                {/* PHOTO + NAME */}
                                <td className="py-3 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        <img
                                        src={value.photo}
                                        alt={value.name}
                                        className="w-full h-full object-cover"
                                        />
                                    </div>
                                </td>
                                <td className="text-center">{value.name}</td>
                                <td >
                                    {value.listskile.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="card-text-rounded-gray mx-2"
                                        >
                                        {skill}
                                        </span>
                                    ))}
                                </td>
                                <td>
                                    <td>
                                        <TextState text={'voir'} cssCard={"card-text-s-blue"} icone="fa-solid fa-book-open-reader" />                                 
                                    </td>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                       
                        
                        <div class=" py-8 grid grid-cols-2 border-top">
                            {step.map((value ,index)=>(
                                <Step  index={index} namesvg={value.svg} title={value.title} datestart={value.datestart} dateend={value.dateend}/>
                            ))  }
                        </div>
                    </div>
                    <div className="w-1/3" >
                        <div class="bg-white m-2 p-6 border-bottom">
                            <CardCriterienRh/>
                        </div>
                    </div>
                </div>
        </div>
    );
}
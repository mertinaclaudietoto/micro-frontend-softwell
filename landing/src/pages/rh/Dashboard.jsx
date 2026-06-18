
import {ProgressCircle,Sidebar,CardCalendar,TextState} from "../../components";
import { dashboardState, request } from "../../data/recrutement";
import { numberToIcons } from "../../function/utils";
export default function Dashboard(){
    const headTable=["Poste","nombres demande","etats"];
    return (
        <div class="flex">
                <Sidebar/>
                <main className="flex-1">
                    <div class="bg-white px-6 mb-6">
                        <div class="flex items-center justify-between mb-2">
                            {/* <h1 class="text-2xl font-bold">Dasboard</h1> */}
                        </div>
                        <div className="flex">
                            <div className="flex-1 border-r-1 border-gray-200 ">
                                {/* states */}
                                <div class="bg-white px-6 m-2 mb-0 ">
                                    {/* <div class="flex items-center justify-between mb-6">
                                        <button class="text-indigo-600 text-sm font-medium">see all</button>
                                    </div> */}
                                    <div class="grid grid-cols-4 gap-4">
                                        {dashboardState.map((value,index)=>(
                                            <div index={index} class="bg-gray-50 rounded-2xl p-4 relative">
                                                <div class="mb-3">
                                                    <div class="text-3xl font-bold text-gray-900">{value.nbr}</div>
                                                    <div class="text-sm text-gray-600 font-medium">{value.nameEtat}</div>
                                                    <div class="text-xs text-gray-400 mt-1">{value.total} total</div>
                                                </div>
                                                <div class="absolute top-4 right-4">
                                                    <ProgressCircle value={value.nbr} percent={value.nbr}/>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* table */}
                               
                                <div class="bg-white p-6 m-2">
                                    {/* <div class="flex items-center justify-between mb-4">
                                        <h2 class="text-xl font-medium text-gray-900">Avancement du recrutement</h2>
                                        <div class="flex gap-2">
                                            <button class="iconerond10">
                                                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                                                </svg>
                                            </button>
                                            <button class="iconerond10indigo">
                                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div> */}
                                    <table class="w-full text-left">
                                        <thead>
                                            <tr class="text-gray-500 text-sm border-b">
                                                { headTable.map((value,index)=>(
                                                     <th index={index} class="pb-3">{value}</th>
                                                ))}
                                            </tr>
                                        </thead>

                                        <tbody class="text-sm text-gray-800">
                                            {request.map((value,index)=>(
                                                <tr class="border-b" index={index}>
                                                    <td class="py-3 flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-cyan-700 rounded-lg flex items-center justify-center text-white font-bold">
                                                            {value.id}
                                                        </div>
                                                        {/* Nom + Label en dessous */}
                                                        <div className="flex flex-col">
                                                            <span className="text-gray-900 text-sm font-semibold">{value.namepost}</span>
                                                            <label className="text-gray-400 text-xs">{value.departement} / {value.datebesoin}</label>
                                                        </div>
                                                    </td>
                                                    <td class="py-3 text-gray-500 text-center ">
                                                        <span className="card-text-s-blue flex items-center justify-center w-10 h-10 text-center">
                                                            {numberToIcons(value.nbrpersonnel) }
                                                        </span></td>
                                                    <td>
                                                        <TextState cssCard={"card-text-s-blue"} icone={"fa-regular fa-lightbulb"} text={"Terminer"} />
                                                    </td>
                                                
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <CardCalendar/>
                        </div>
                    </div>
                </main>
        </div>
    )
}
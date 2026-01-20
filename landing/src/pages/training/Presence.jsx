import React,{ useEffect, useState } from "react";
import { accessinfo, listProfile, url, widthClasses } from "../../data/data";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { handlerVariable } from "../../function/utils";
import { IconeAccess, Sidebar } from "../../components";
import { getData,  update } from "../../function/Axios";
export default function Presence({idSessionDay,formation,daysession}){
    const [info ,setAccessinfo]=useState(
        accessinfo
    );
    const [data,setData]=useState([]);
    const getParticipants = async () => {
        const data = await getData(
            url + `presence/${idSessionDay}`
        );
        setData( data.data);;
    };
    const updateAccess = (key1, key2, value) => {
        setData(prev => ({
            ...prev,
            [key1]: {
                ...prev[key1],
                [key2]: value
            }
        }));
    };
    const submit = async ()=>{
      const data = await update(data,
            url + `presence`
        );
    }
    useEffect(() => {
         getParticipants()
     }, []);
    return(<>
    <div class="flex h-screen ">
        <Sidebar/> 
        <main class="flex-1 ">   
            <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto">
                <div class="flex gap-6 max-w-7xl mx-auto border border-gray-200">
                    <div class="flex-1 bg-white ">
                    
                        <div class=" p-6">
                            <div>
                                <div class="flex items-center justify-between mb-2">
                                    <h1 class="text-xl font-semibold text-gray-900">Liste de presence ou formation  <b className="text-softbleu">{formation}</b></h1>
                                    <button class="bg-softbleutini-12 hover:bg-softbleushade-12 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2" onClick={()=>submit()}>
                                       {daysession} 
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="p-6 border-t border-gray-200">
                            <div class="overflow-x-auto relative">
                                <table class="w-full h-screen overflow-y-auto ">
                                    <thead>
                                        <tr class="border-b border-gray-200">
                                            <th class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Participants </th>
                                            <th class="flex flex-col text-center py-3 px-4 text-xs font-semibold text-gray-600 uppercase w-24">
                                                <span>{morningStart}</span>
                                                <span>{morningEnd}</span>
                                            </th>
                                            <th class="flex flex-col text-center py-3 px-4 text-xs font-semibold text-gray-600 uppercase w-24">
                                                <span>{eveningStart}</span>
                                                <span>{eveningEnd}</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-100">
                                    {info.listpage.map((value, index) => (
                                            <React.Fragment key={index}>
                                                {/* Ligne principale de la page */}
                                                <tr className="group bg-gray-50 ">
                                                    <td colSpan={100} className="py-4 px-4 col-span-100">
                                                        <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                                                        <i className={value.icone} />
                                                        {value.name}
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* Lignes des fonctions si elles existent */}
                                                {value.listfunction?.map((func, idx) => (
                                                    <tr key={idx}>
                                                        <td className="py-4 px-4 pl-10 text-sm text-gray-700">{func.name} {func.firstname} </td>
                                                        <td className="py-4 px-4 pl-10 text-sm text-gray-700">{func.email} </td>
                                                        <td  className="py-4 px-4 text-center">
                                                             <input
                                                                type="checkbox"
                                                                className="w-4 h-4 text-blue-600 rounded border-gray-300"
                                                                checked={ data && data[value.access] ? data[value.access][func.name] : false }
                                                                onChange={(event) => updateAccess(value.access, "morning", event.target.checked)}
                                                            />
                                                        </td>
                                                        <td  className="py-4 px-4 text-center">
                                                             <input
                                                                type="checkbox"
                                                                className="w-4 h-4 text-blue-600 rounded border-gray-300"
                                                                checked={ data && data[value.access] ? data[value.access][func.name] : false }
                                                                onChange={(event) => updateAccess(value.access, "evening", event.target.checked)}
                                                            />
                                                        </td>
                                                    </tr>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    </>);

}


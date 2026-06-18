import React,{ useEffect, useState } from "react";
import { accessinfo, listProfile, url, widthClasses } from "../../data/data";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import { handlerVariable } from "../../function/utils";
import { IconeAccess, Sidebar } from "../../components";
import { getData,  update } from "../../function/Axios";
import { dateToLetters } from "../../function/Date";
export default function Presence(){
    const [info ,setAccessinfo]=useState(
        accessinfo
    );
    const { encryptParametres } = useParams();
    const decoded = atob(encryptParametres);
    const dataValue = decoded.split("|");
    const [data,setData]=useState([]);
    const getParticipants = async () => {
        const response = await getData(
            url + `presence/${dataValue[0]}`
        );
        if (response.data != null) {
            const participants = response.data;
            const neverInitialized = participants.every(
                (p) => p.Morning === 0 && p.Evening === 0
            );
            setData(
                participants.map((participant) => ({
                    ...participant,
                    Morning: neverInitialized ? 1 : (participant.Morning ?? 1),
                    Evening: neverInitialized ? 1 : (participant.Evening ?? 1),
                }))
            );
        }
    };
    const updateAccess = (index, key, value) => {
        setData(prev => {
            const newData = [...prev];        
            newData[index] = {                
            ...newData[index],
            [key]: value                      
            };
            return newData;
        });
    };

    const submit = async ()=>{
        if(dataValue[3]=="true"){
            const value = await update(data,
                url + `presence`
            );
            if (value == true) {
            window.location.reload();
            toast.success("Données enregistrées avec succès !");
            
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
        }else{     
            toast.error("Vous n'avez pas le droit de faire une modification !");
        }
    
    }
    useEffect(() => {
         getParticipants()
     }, []);
    return(<>
    <div class="flex h-screen ">
        <main class="flex-1 ">   
            <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto">
                <div class="flex gap-6 max-w-7xl mx-auto border border-gray-200">
                    <div class="flex-1 bg-white ">
                    
                        <div class=" p-6">
                            <div>
                                <div class="flex items-center justify-between mb-2">
                                    <p class=" font-semibold text-gray-900">Liste de présence ou formation  <b className="text-softbleu">{dataValue[1]}</b>  {dateToLetters(dataValue[2])}</p>
                                    <button class="bg-softbleutini-12 hover:bg-softbleushade-12 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2" onClick={()=>submit()}>
                                       Enregistrer
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="p-6 border-t border-gray-200">
                            <div class="overflow-x-auto relative">
                                <table class="w-full  overflow-y-auto ">
                                    <thead className="py-3"> 
                                        <tr class="border-b border-gray-200">
                                            <th class="text-left  text-xs font-semibold text-gray-600 uppercase">Participants </th>
                                            <th class="text-left  text-xs font-semibold text-gray-600 uppercase"></th>
                                            <th class="text-center  px-4 text-xs font-semibold text-gray-600 uppercase w-8">
                                                <span>Matin</span>
                                            </th>
                                            <th class="text-center px-4 text-xs font-semibold text-gray-600 uppercase w-8">
                                                <span>Soir</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-100">
                                    {data.map((value, index) => (
                                        <tr key={index} >
                                            <td className="pl-10  py-5 text-sm text-gray-700">
                                                {value.Name} {value.Firstname}
                                            </td>
                                            <td className="pl-10 py-5 text-sm text-gray-700">
                                                {value.Email}
                                            </td>
                                            <td className="text-center py-5 w-8">
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 text-blue-600 rounded border-gray-300"
                                                    checked={value.Morning === 1}
                                                    onChange={() => updateAccess(index, "Morning", value.Morning ==1 ? 0:1)}
                                                />
                                            </td>
                                            <td className="text-center py-5  w-8">
                                                <input
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 rounded border-gray-300"
                                                checked={value.Evening === 1}
                                                onChange={() => updateAccess(index, "Evening", value.Evening ==1 ?0:1)}
                                                />
                                            </td>
                                        </tr>
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


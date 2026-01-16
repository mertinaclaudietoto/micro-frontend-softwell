import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/header/candidate/Header';
import CardOffreSmallCandidate from '../../components/card/offre/CardOffreSmallCandidate';
import CardOffreMiddel from '../../components/card/offre/CardOffreMiddel';
import { url_recrutement } from '../../data/data';
import { getData } from '../../function/Axios';

export default function Application() {
        const [data,setData]=useState([]); 
        const [numpage,setNumpage]=useState(1);
        const pagination =(value)=>{
            setNumpage(
            value < 1
                ? 1
                : value
            );
        }
        const loadData = useCallback(async () => {
            console.log("validation nn");
            // Construction des paramètres de l'URL de manière sécurisée
            const params = new URLSearchParams();
            params.append("pageNumber", numpage);
            params.append("idcandidat", sessionStorage.getItem("userId"));
            const fullUrl = `${url_recrutement}vrecruitmentcandidate?${params.toString()}`;
            const data = await getData(fullUrl);
            setData(data.data);
            console.log(data.data);
        }, [ numpage]);
        useEffect(() => {
            loadData();
        }, [loadData]);
        useEffect(() => {
            loadData();
        }, []);
        
  return (
    <>
        <div class="bg-white  overflow-hidden h-max px-8">
            <Header></Header>
            {/* Filter */}
           
            <div class="px-4 md:px-8 py-3 ">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {data.map((value,index)=>(
                        <div  class="border border-gray-300 rounded-xl p-4 mb-4 hover:shadow-lg transition-shadow cursor-pointer">
                                <div class="flex items-start gap-3" key={index} k={index} >
                                        <div class="w-10 h-10 bg-softbleu rounded-lg flex items-center justify-center text-white flex-shrink-0">
                                            {/* <i class="fas fa-slack text-white text-xl"></i> */}
                                            {value.requestId}
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <h4 class="font-bold text-gray-900 mb-1">{value.nom}</h4>
                                            <p class="text-sm text-gray-500 mb-3">{value.goals}</p>
                                            <p class="text-xs text-gray-600 mb-3">{value.mission}</p>
                                            <div class="flex flex-wrap gap-2">
                                                <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">{value.nameLocalisation}</span>
                                                <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">{value.nameContrat}</span>
                                            </div>
                                            <div class="flex flex-wrap gap-2 pt-2" >
                                                <span class={`px-3 py-1 ${value.refudes==1 ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"} text-xs rounded-full`}>{value.refudes==1 ? "refusée" : value.nameStepRecruitment } </span>
                                            </div>
                                        </div>
                                </div>
                         </div>
                    ))}
                </div>    
                <div class="px-4 md:px-8 py-4 pb-10 grid "> 
                    <div class="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-4 gap-3 md:w-1/2 ml-auto items-end" >
                    
                        <div className='m-0 p-0'>
                            <button className="btn-neutre-gray" onClick={()=>pagination(numpage-1)} title="Précédent">
                                <i className="fas fa-arrow-left"></i>
                            </button>
                            <button className="btn-neutre-gray" onClick={()=>pagination(numpage+1)} title="Suivant">
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>  
                    </div> 
                    {/* <button class="mt-3 md:hidden w-full bg-softbleu text-white py-3 rounded-lg font-semibold hover:bg-softbleushade-12"><i class="fa-solid fa-filter"></i></button> */}
                    {/* <button class="hidden md:block ml-auto mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Apply Filter</button> */}
                </div> 
            </div>
        </div>
    </> 
  )
}


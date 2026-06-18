
import { useEffect,useCallback } from "react";
import {  url } from "../../data/data"
import {Filter,Sidebar,CardSmallTraining, CardDemandeTraining,CardAddTheme,CardUpdateTheme} from "../../components"
import { useState } from "react"
import { getData } from "../../function/Axios";
export default function Theme(){
    const acces = sessionStorage.getItem("access");
    const accesObj = JSON.parse(acces);
    const [close ,setClose]=useState(false);
    const [closeUpdate ,setCloseUpdate]=useState(false);
    const [valueUpdate ,setValueUpdate]=useState(null);
    const [search ,setSearch]=useState("");
    const [dataList,setData]=useState([]); //listsmallformation
    const nbrSize=10;
    const [nbrligne ,setNbrLigne]=useState(0)
    const [numpage,setNumpage]=useState(1);
    const pagination =(value)=>{
        setNumpage(
        value < 1
            ? 1
            : value > Math.ceil(nbrligne / nbrSize)
            ? Math.ceil(nbrligne / nbrSize)
            : value
        );
    }
    const loadData = useCallback(async () => {
        const data = await getData(
            url + `training-themes/pagination?pageNumber=${numpage}&pageSize=${nbrSize}${search ? '&search=' + encodeURIComponent(search) : ''}`
        );
        if (data.data != null){
            
            setData( data.data);;
          
        } 
    }, [numpage, search]); // dépendances de loadData

    const getNbrLigne = async ()=>{
        const data = await getData(url + `training-themes/count`);
            if(data.data!=null)
                setNbrLigne(data.data);
    }
    const sendsearch = async()=>{
        setNumpage(1);
    }
    const updateValue= (value)=>{
        setValueUpdate(value);
        setCloseUpdate(true);
    }
    useEffect(() => {
        getNbrLigne();
    }, []);
    useEffect(() => {
         loadData();
        }, [loadData]);
    return(
             <>
            <div class="flex h-screen ">
                <Sidebar/>
                <main class="flex-1 ">    
                    <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                        <div className=" max-w-7xl mx-auto bg-white p-10 ">
                            {/* filtre */}
                            <div class="p-4 mb-2 border-b border-gray-200 sticky top-0 z-50 pink ">
                                <div class="flex items-center justify-between">
                                    <h2 class="text-xl font-semibold text-gray-800">Liste des thèmes
                                        <p className="text-xs text-gray-400">{`page ${numpage}/${Math.ceil(nbrligne / nbrSize)}`}</p>
                                    </h2>
                                    <div class="flex items-center space-x-3">
                                        <div class="relative">
                                            <input type="text" placeholder="Rechercher…" class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500  " onChange={(event)=>setSearch(event.target.value)}/>
                                            <svg class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                            <button onClick={()=>sendsearch()} >
                                                <span class="absolute right-3 top-2.5 text-xs text-gray-400 border border-gray-300 px-1.5 py-0.5 rounded">⌘K</span>
                                            </button>
                                        
                                        </div>
                                    
                                        <div className="flex space-x-2">
                                           {accesObj && (accesObj?.theme?.ajout == null || accesObj?.theme?.ajout == undefined) ? null : (
                                                <button
                                                    className="px-4 py-2 bg-softbleutini-12 text-white rounded-lg text-sm flex items-center hover:bg-softbleu"
                                                    onClick={() => setClose(true)}
                                                >
                                                    <i className="fa-solid fa-plus"></i>
                                                </button>
                                            )}
                                            <button className="btn-neutre-gray" onClick={()=>pagination(numpage-1)} title="Précédent">
                                            <i className="fas fa-arrow-left"></i>
                                            </button>
                                            <button className="btn-neutre-gray" onClick={()=>pagination(numpage+1)} title="Suivant">
                                                <i className="fas fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* filtre */}
                            <div class="overflow-x-auto  mt-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  my-auto overflow-y-auto mx-auto bg-white p-2 ">
                               {dataList.map((value, index) => {
                                    const isModifiable = accesObj && (accesObj?.theme?.modification == null || accesObj?.theme?.modification == undefined) 
                                    return (
                                        <button
                                            key={index}
                                            onClick={isModifiable ? undefined : () => updateValue(value)}
                                            className="bg-gray-50 rounded-xl p-4 mb-4 hover:shadow-md shadow-sm transition-shadow cursor-pointer"
                                        >
                                            <CardSmallTraining info={value} />
                                        </button>

                                    );
                                })}
                                </div>
                            </div>  
                        </div>
                    </div>
                </main>
             
                {close ? <CardAddTheme close={setClose}  /> :<></>}
                {closeUpdate ? <CardUpdateTheme close={setCloseUpdate} value={valueUpdate} /> :<></>}
            </div>
        </>

    )
}
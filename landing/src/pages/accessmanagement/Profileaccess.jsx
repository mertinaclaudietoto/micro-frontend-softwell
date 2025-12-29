
import { listProfile, textbackground, url, widthClasses } from "../../data/data"
import {Pagination,Filter,Sidebar} from "../../components"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { getData } from "../../function/Axios";
import Setaccess from "./Setaccess";
export default function ProfileAccess(){
    const acces = sessionStorage.getItem("access");
    const accesObj = JSON.parse(acces);

    const [search ,setSearch]=useState("");
    const [close,setClose]=useState(false);
    const [updateValue,setUpDateValue]=useState(null);
    const[data,setData]=useState([])
    const changeValue =(update)=>{
        setUpDateValue(update);
        setClose(true);
    }
    const getRole = async ()=>{
        const data = await getData(url + `roles`);
        if(data.data!=null)
            setData(data.data);
    }
    useEffect(()=>{
        getRole();
    },[])

    return(
        <>
        {close ? <Setaccess value={updateValue} close={setClose}/>: <>
          <div class="flex h-screen ">
                <Sidebar/>
                <main class="flex-1 ">    
                    <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                        <div className=" max-w-7xl mx-auto bg-white p-10 ">
                            {/* filtre */}
                            <div class="p-4 mb-2 border-b border-gray-200 sticky top-0 z-50 pink ">
                                <div class="flex items-center justify-between">
                                    <h2 class="text-xl font-semibold text-gray-800">Profille
                                    </h2>
                                    <div class="flex items-center space-x-3">
                                        {/* <div class="relative">
                                            <input type="text" placeholder="Search" class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500  " onChange={(event)=>setSearchWord(event.target.value)}/>
                                            <svg class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                            <button onClick={()=>sendsearch()} >
                                                <span class="absolute right-3 top-2.5 text-xs text-gray-400 border border-gray-300 px-1.5 py-0.5 rounded">⌘K</span>
                                            </button>
                                        </div> */}
                                    
                                        <div className="flex space-x-2">
                                            {accesObj && (accesObj?.profile?.ajout == null || accesObj?.profile?.ajout == undefined)  ? null : (
                                               <Link  to="/access-set" class="px-4 py-2 bg-softbleutini-12 text-white rounded-lg text-sm flex items-center hover:bg-softbleu" onClick={()=>{showAddPopup(true)}}>
                                                    <i class="fa-solid fa-plus"></i>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* filtre */}

                            <div class="overflow-x-auto  mt-2">
                               
                                <table class="w-full">
                                    <thead class="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            <th class="tr-thead w-8">#</th>
                                            <th class="tr-thead">Name</th>
                                            <th class="tr-thead w-8"></th>
                                            {/* <th class="tr-thead">Access</th> */}
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        {data.map((value,index)=>(
                                            <>
                                            <tr index={index} className={value.active==4 ?"bg-gray-50  hover:bg-gray-100":" hover:bg-gray-50"}>
                                                <td class="px-6 py-4 text-sm text-gray-500">{value.id}</td>
                                                <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[index]}`}>{value.name}</span></td>
                                                {/* <td class="px-6 py-4 text-sm text-gray-500">{value.access}</td> */}
                                                <td class="px-6 py-4 text-sm text-gray-500">
                                                    {accesObj && (accesObj?.profile?.modification == null || accesObj?.profile?.modification == undefined)  ? null : (
                                                        <button  onClick={()=>{changeValue(value)}}>
                                                                ⋮
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                            </>
                                        ))}
                                    </tbody>
                                </table>
                            </div>  
                        </div>
                    </div>
                </main>
            </div>
        </>
        }
        </>
    )
}
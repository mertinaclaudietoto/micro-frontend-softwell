
import { useEffect,useCallback } from "react";
import { getData } from "../../function/Axios";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components";
import { url_recrutement, textbackground, url } from "../../data/data";
import { useState } from "react";
import Select from "../../function/selectSimple";
import UpdateRecruitment from "../../components/crud/UpdateRecruitment";
import AddStepRecruitement from "../../components/crud/AddStepRecruitement";
export default function StepRecruitment(){
    // TODO:delete and update
    const acces = sessionStorage.getItem("access");
    // const accesObj = JSON.parse(acces);
    const [nameE,setNameE]=useState("steprecruitment");
    const [data,setData]=useState([]); 
    const [search ,setSearch]=useState("");
    const [showUpdate ,setShowUpdate]=useState(false);
    const [showAdd ,setShowAdd]=useState(false);
    const [upValue ,setUpValue]=useState(null);
    const nbrSize=10;
    const [nbrligne ,setNbrLigne]=useState(0)
    const [numpage,setNumpage]=useState(1);
    const modification = (value)=>{
            setUpValue(value);
            setShowUpdate(true);
    }
    const pagination =(value)=>{
        setNumpage(
        value < 1
            ? 1
            : value > Math.ceil(nbrligne / nbrSize)
            ? Math.ceil(nbrligne / nbrSize)
            : value
        );
    }
    const [rules,setRules]=useState([]);
    const getRules = async ()=>{
        const data = await getData(url + `roles`);
        if(data.data!=null){
console.log(data.data);
            setRules(data.data); 
        }
            
    }
    
    const loadData = useCallback(async () => {
        console.log(nameE)
        const data = await getData(
            url_recrutement + `${nameE}/pagination?pageNumber=${numpage}&pageSize=${nbrSize}${search!=null ? '&search=' + encodeURIComponent(search) : ''}`
        );
        setData( data.data);
        console.log(data);
    }, [numpage, search,nameE]); // dépendances de loadData

    const getNbrLigne = async ()=>{
        const data = await getData(url_recrutement + `${nameE}/count`);
        if(data.data!=null)
            setNbrLigne(data.data); 
    }
    const sendsearch = async()=>{
        setNumpage(1);
    }
    
    useEffect(() => {
            getNbrLigne();
            getRules();
        }, []);

    useEffect(() => {
            loadData();
        }, [loadData]);
      return(
        <>
        
        {showAdd ? <AddStepRecruitement  close={setShowAdd}   listeRole={rules} entityName={nameE}   />  :<></> }
        {showUpdate  ? <UpdateRecruitment close={setShowUpdate} listeRole={rules} valueUp={upValue}  entityName={nameE} /> : <></>}

        <div class="flex h-screen ">
            <Sidebar/>
            <main class="flex-1 ">    
                <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                    <div className=" max-w-7xl mx-auto bg-white p-10 ">
                        {/* filtre */}
                        <div class="p-4 mb-2 border-b border-gray-200 sticky top-0 z-50 pink ">
                            <div class="flex items-center justify-between">
                                <h2 class="text-xl font-semibold text-gray-800">Liste Recrutement
                                    <p className="text-xs text-gray-400">{`page ${numpage}/${Math.ceil(nbrligne / nbrSize)}`}</p>
                                </h2>
                                
                                <div class="flex items-center space-x-3">
                                    <div class="relative">
                                        <input type="text" placeholder="nom organisme" class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500  " onChange={(event)=>setSearch(event.target.value)}/>
                                        <svg class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                        <button onClick={()=>sendsearch()} >
                                            <span class="absolute right-3 top-2.5 text-xs text-gray-400 border border-gray-300 px-1.5 py-0.5 rounded">⌘K</span>
                                        </button>
                                    
                                    </div>
                                    <div className="flex space-x-2">
                                        {/* {accesObj && (accesObj?.trainer?.suppression == null || accesObj?.trainer?.suppression === undefined) ? null : (
                                            <button class="px-4 py-2 bg-softbleutini-12 text-white rounded-lg text-sm flex items-center hover:bg-softbleu" onClick={()=>{setSeeTrainingListe(true)}}>
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                        )} */}
                                         <button class="px-4 py-2 bg-softbleutini-12 text-white rounded-lg text-sm flex items-center hover:bg-softbleu" onClick={()=>{setShowAdd(true)}}>
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
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
                        <table class="w-full">
                            <thead class="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th class="tr-thead w-8">#</th>
                                    <th class="tr-thead">Nom</th>
                                    <th class="tr-thead">Responsable</th>
                                    <th class="tr-thead"></th>
                                    {/* <th class="tr-thead"></th> */}
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                {data.map((value,index)=>(
                                    <>
                                    <tr index={index} className={value.active==4 ?"bg-gray-50  hover:bg-gray-100":" hover:bg-gray-50"}>
                                        <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[index]}`}>{value.rang}</span></td>
                                        <td class="px-6 py-4 text-sm text-gray-500">{value.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {rules.find(v => v.id === value.idrole)?.name}
                                        </td>
                                        <td className="px-6 py-4 ">
                                            <span
                                                // className="inline-flex items-center justify-center px-2.5 py-1 rounded
                                                //         text-xs font-medium bg-green-100 text-green-800
                                                //         cursor-pointer hover:bg-green-200 transition"
                                                // title="Modifier"
                                                onClick={() =>  modification(value)}   // adapte selon ton code
                                            >
                                                <i className="fas fa-edit text-gray-400"></i>
                                            </span>
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
    )
}
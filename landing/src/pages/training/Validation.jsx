
import { useEffect,useCallback } from "react";
import { getData } from "../../function/Axios";
import { Link } from "react-router-dom";
import { CardAddTrainer, Filter,Sidebar,CardAddTraining } from "../../components";
import { url, textbackground, getcolorstate } from "../../data/data";
import { useState } from "react";
import Select from "../../function/selectSimple";
import TrainingState from "./TrainingState";
export default function Validation(){
    // TODO:delete and update
    const acces = sessionStorage.getItem("access");
    const accesObj = JSON.parse(acces);

    const [data,setData]=useState([]); 
    const [valueState ,setValueState]=useState("");
    const [search ,setSearch]=useState("");
    const [listTheme ,setListTheme]=useState([]);
    const [idtheme ,setIdteme]=useState(null);
    const [manageTraining,setManageTraining]=useState(null);
    const [seeTrainingListe,setSeeTrainingListe]=useState(false);
    const showTraining=(value)=>{
        setSeeTrainingListe(true);
        setValueState(value)
    }
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
        // console.log(idtheme)
        const data = await getData(
            url + `v_training_validate/pagination?pageNumber=${numpage}&pageSize=${nbrSize}${search!=null ? '&search=' + encodeURIComponent(search) : ''}${idtheme ? '&idtheme=' + encodeURIComponent(idtheme.id) : ''}`
        );
        console.log(data.data)
        setData( data.data);;
    }, [numpage, search,idtheme]); // dépendances de loadData

    const getNbrLigne = async ()=>{
        const data = await getData(url + `v_training_validate/count`);
        if(data.data!=null)
            setNbrLigne(data.data);
    }
    const getListThemes = async ()=>{
        const datalistThemes =  await getData(
            url + `training-status`
        );
        if(datalistThemes.data!=null){
            console.log(datalistThemes.data)
            setListTheme(datalistThemes.data)
        }
    }
    const [closeAddTraining,setCloseAddTraining]=useState(false); 
    const sendsearch = async()=>{
        setNumpage(1);
    }
    useEffect(() => {
            getListThemes();
            getNbrLigne();
        }, []);
    useEffect(() => {
            loadData();
        }, [loadData]);

      return(
        <>
        {closeAddTraining ? <CardAddTrainer close={setCloseAddTraining}  /> :  seeTrainingListe  ? <TrainingState  close={setSeeTrainingListe} value={valueState} />:<>
            <div class="flex h-screen ">
                <Sidebar/>
                <main class="flex-1 ">    
                    <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                        <div className=" max-w-7xl mx-auto bg-white p-10 ">
                            {/* filtre */}
                            <div class="p-4 mb-2 border-b border-gray-200 sticky top-0 z-50 pink ">
                                <div class="flex items-center justify-between">
                                    <h2 class="text-xl font-semibold text-gray-800">Liste des formations validées
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
                                        <div class="relative ">
                                            <Select options={listTheme} placeholder={"liste formation"}  onChange={setIdteme} css={"pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"}/>
                                            <svg class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                            <button onClick={()=>sendsearch()} >
                                                <span class="absolute right-3 top-2.5 text-xs text-gray-400 border border-gray-300 px-1.5 py-0.5 rounded">⌘K</span>
                                            </button>
                                        </div>
                                        <div className="flex space-x-2">
                                           {accesObj && (accesObj?.validation?.ajout != null || accesObj?.validation?.ajout !== undefined)  ? null : (
                                                <button class="px-4 py-2 bg-softbleutini-12 text-white rounded-lg text-sm flex items-center hover:bg-softbleu" onClick={()=>{setCloseAddTraining(true)}}>
                                                    validation
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
                            <table class="w-full">
                                <thead class="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th class="tr-thead w-8">#</th>
                                        <th class="tr-thead ">Admin</th>
                                        <th class="tr-thead">Theme</th>
                                        <th class="tr-thead">Formateur</th>
                                        <th class="tr-thead">status</th>
                                        <th class="tr-thead"></th>
                                    </tr>
                                    {/* a.id,idtheme,idadmin,idtrainer,date,statu,
            b.name as themename,c.name as adminname ,c.firstname as adminfirstname ,
            d.name as trainername,d.stat,d.nif,e.name as namestatus  */}
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    {data.map((value,index)=>(
                                        <>
                                        <tr index={index} className={value.active==4 ?"bg-gray-50  hover:bg-gray-100":" hover:bg-gray-50"}>
                                            <td class="px-6 py-4 text-sm text-gray-500">{index}</td>
                                            <td class="px-6 py-4">
                                                <div class="text-sm font-medium text-gray-900 lowercase">{value.adminName} {value.adminFirstname}</div>
                                            </td>
                                            <td class="px-6 py-4">
                                                <div class="text-sm font-medium text-gray-900  lowercase"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[index]} mb-1`}>{value.themeName}</span></div>
                                            </td>
                                            <td class="px-6 py-4">
                                                <div class="text-sm font-medium text-gray-900"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[index]} mb-1`}>{value.trainerName}</span></div>
                                                <div class="text-xs text-gray-500">nif: {value.nif} stat: {value.stat}</div>
                                            </td>
                                            <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${getcolorstate(value.statu)}`}>{value.nameStatus }</span></td>
                                            <td class="px-6 py-4 text-sm text-gray-500">
                                                {/* {accesObj && (accesObj?.session?.lecture == null || accesObj?.session?.lecture == undefined)  ? null : (
                                                    <button  onClick={()=>showTraining(value)}>
                                                        ⋮
                                                    </button>
                                                )} */}
                                                <button  onClick={()=>showTraining(value)}>
                                                        <i className="fas fa-file-alt text-gray-400"></i>
                                                </button>
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
        </>}
        </>
    )
}

import { useEffect,useCallback } from "react";
import { getData } from "../../function/Axios";
import { Link } from "react-router-dom";
import { CardAddTraining, Filter,Sidebar,CardWish } from "../../components";
import { url, textbackground } from "../../data/data";
import { useState } from "react";
import Select from "../../function/selectSimple";

export default function Wish(){
    // TODO:delete and update
    const acces = sessionStorage.getItem("access");
    const accesObj = JSON.parse(acces);

    const [data,setData]=useState([]); 
    const [dataGroup,setDataGroup]=useState([]); 
    const [close,setClose]=useState(false); 
    const [closeAddTraining,setCloseAddTraining]=useState(false); 
   
    const [manageTraining,setManageTraining]=useState(null);
    const [seeTrainingListe,setSeeTrainingListe]=useState(false);
    const showTraining=(value)=>{
        setManageTraining(value)
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
        console.log("page",nbrligne,Math.ceil(nbrligne / nbrSize))
    }
    

    const loadData = useCallback(async () => {
        // console.log(idtheme)
        const data = await getData(
            url + `v_wish/pagination?pageNumber=${numpage}&pageSize=${nbrSize}`
        );
        setData( data.data);;
    }, [numpage]); // dépendances de loadData

    const getNbrLigne = async ()=>{
        const data = await getData(url + `v_wish/count`);
        if(data.data!=null)
            setNbrLigne(data.data);
    }
    const getGroupBy= async ()=>{
        const data = await getData(url + `v_wish/pagination-groupbytheme?pageNumber=${numpage}&pageSize=${nbrSize}`);
        if(data.data!=null)
            setDataGroup(data.data);
    }
    useEffect(() => {
            getGroupBy()
            getNbrLigne();
        }, []);
    useEffect(() => {
            loadData();
        }, [loadData]);


      return(
        <>
            {closeAddTraining?  <CardAddTraining close={setCloseAddTraining}  />:
             <>
                <div class="flex h-screen ">
                    <Sidebar/>
                    
                    <main class="flex-1 ">    
                        <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                            <div className=" max-w-7xl mx-auto bg-white p-10 ">
                                {/* filtre */}
                                <div class="p-4 mb-2 border-b border-gray-200 sticky top-0 z-50 pink ">
                                    <div class="flex items-center justify-between">
                                        <h2 class="text-xl font-semibold text-gray-800">Liste Souhait en attente
                                            <p className="text-xs text-gray-400">{`page ${numpage}/${Math.ceil(nbrligne / nbrSize)}`}</p>
                                        </h2>
                                        
                                        <div class="flex items-center space-x-3">
                                            <div className="flex space-x-2">
                                                <button class="btn-neutre-gray" onClick={()=>{setSeeTrainingListe(false)}}>
                                                     ⋮
                                                </button>
                                                <button class="px-4 py-2 bg-softbleutini-12 text-white rounded-lg text-sm flex items-center hover:bg-softbleu" onClick={()=>{setSeeTrainingListe(true)}}>
                                                    total
                                                </button>
                                                {accesObj && (accesObj?.wish?.suppression == null || accesObj?.wish?.suppression == undefined)  ? null : (
                                                    <button class="btn-neutre-gray" onClick={()=>{setClose(true)}}>
                                                        souhait
                                                    </button>
                                                )}
                                                {/* <button class="btn-neutre-gray" onClick={()=>{setCloseAddTraining(true)}}>
                                                    validation
                                                </button> */}
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
                                    {seeTrainingListe ? 
                                    <>
                                    <table class="w-full">
                                        <thead class="bg-gray-50 border-b border-gray-200">
                                            <tr>
                                                <th class="tr-thead">Theme</th>
                                                <th class="tr-thead">Nombre Souhaiter</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            {dataGroup.map((value,index)=>(
                                                <>
                                                <tr index={index} className={value.active==4 ?"bg-gray-50  hover:bg-gray-100":" hover:bg-gray-50"}>
                                                    <td class="px-6 py-4 text-sm text-gray-500">{value.nameTheme}</td>
                                                    <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[index]}`}>{value.nbr} </span>
                                                    </td>
                                                    <td class="px-6 py-4 text-sm text-gray-500">
                                                        <button onClick={()=>{showTraining(value)}}>
                                                                ⋮
                                                        </button>
                                                    </td>
                                                </tr>
                                                </>
                                            ))}
                                        </tbody>
                                    </table>
                                    </>: <>
                                    <table class="w-full">
                                    <thead class="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            <th class="tr-thead">Theme</th>
                                            <th class="tr-thead">Beneficiaire</th>
                                            <th class="tr-thead">Souhaiteur</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        {data.map((value,index)=>(
                                            <>
                                            <tr index={index} className={value.active==4 ?"bg-gray-50  hover:bg-gray-100":" hover:bg-gray-50"}>
                                                <td class="px-6 py-4 text-sm text-gray-500">{value.nametheme}</td>
                                                <td class="px-6 py-4">
                                                    <div class="text-sm font-medium text-gray-900">{value.wisherName}&nbsp;&nbsp;{value.wisherFirstname} </div>
                                                    <div class="text-xs text-gray-500">matricule: {value.wisherMatricule}</div>
                                                </td>
                                                <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[index]}`}>{value.beneficiaryName} {value.beneficiaryFirstname}</span>
                                                    <div class="text-xs text-gray-500">matricule: {value.beneficiaryMatricule}</div>
                                                </td>
                                                
                                                <td class="px-6 py-4 text-sm text-gray-500">
                                                    <button onClick={()=>{showTraining(value)}}>
                                                            ⋮
                                                    </button>
                                                </td>
                                            </tr>
                                            </>
                                        ))}
                                    </tbody>
                                    </table>
                                    </>
                                    }
                                
                                {/*  */}
                                </div>  
                            </div>
                        </div>
                    </main>
                </div>
             </> }
        
        {close ? <CardWish close={setClose}/> :<></>}
        </>

    )
}


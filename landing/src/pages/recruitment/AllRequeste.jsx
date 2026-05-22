
import { useEffect,useCallback } from "react";
import { getData, update } from "../../function/Axios";
import { Link } from "react-router-dom";
import { url_recrutement, textbackground } from "../../data/data";
import { useState } from "react";
import { Sidebar } from "../../components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StepStat from "./StepStat";
import AddTimeRecruitment from "../../components/card/criterien/AddTimeRecruitment";
import CardForwardLinkPostulation from "../../components/card/popup/CardForwardLinkPostulation";
export default function AllRequeste(){
    // TODO:delete and update
    const acces = sessionStorage.getItem("access");
    const accesObj = JSON.parse(acces);
    const [nameE,setNameE]=useState("recruitment_request");
    const [data,setData]=useState([]); 
    const [showStep,setShowStep]=useState(false); 
    const [post,setPost]=useState(null);
    const nbrSize=10;
    const [nbrligne ,setNbrLigne]=useState(0)
    const [numpage,setNumpage]=useState(1);
    const [showDate,setShowDate ]=useState(false);
    const pagination =(value)=>{
        setNumpage(
        value < 1
            ? 1
            : value > Math.ceil(nbrligne / nbrSize)
            ? Math.ceil(nbrligne / nbrSize)
            : value
        );
    }
    const changeState = async (value,id)=>{
        value.statusSetByUserId=sessionStorage.getItem("userId");
        value.statusId=id;
        value.statusSetDate= new Date().toISOString().split('T')[0];
        const data = await update(value,url_recrutement + "recruitment_request")
        // console.log(value)
        if (data == true) {
            toast.success("Données insérées avec succès !");
            close(false);
            window.location.reload();

        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    }
    const loadData = useCallback(async () => {
        const data = await getData(
            url_recrutement + `${nameE}/pagination?pageNumber=${numpage}&pageSize=${nbrSize}`
        );
        setData( data.data);
    }, [numpage, nameE]); // dépendances de loadData
    const sendsearch = async()=>{
        setNumpage(1);
    }
    const [upDateRecruitement,setUpDateRecruitement ] =useState(null);
    const changeDateRecruitement = (value) =>{
        setUpDateRecruitement(value);
        setShowDate(true);
    }
    // lien de recrutement 
    const [getLinkRecrutement,setGetLinkRecrutement] = useState(false);
    const [paramIdRequestAndIdpost ,setParamIdRequestionAndIdpost] = useState(false);
    const showLinkRecrutementPop = (idrequest,idpost)=>{
        setGetLinkRecrutement(true);
        setParamIdRequestionAndIdpost(idrequest+"|"+idpost);
    }   
    useEffect(() => {
            loadData();
    }, [loadData]);
      return(
        <>
        { showDate ? <AddTimeRecruitment valueUp={upDateRecruitement} close={setShowDate} /> : <></>}
        { getLinkRecrutement ?  <CardForwardLinkPostulation closePopup={setGetLinkRecrutement} parametres={paramIdRequestAndIdpost} /> : <></>}
        {   showStep ? <StepStat  value={post} close={setShowStep} />:  
            <div class="flex h-screen ">
                <Sidebar/>
                <main class="flex-1 ">    
                    <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                        <div className=" max-w-7xl mx-auto bg-white p-10 ">
                            {/* filtre */}
                            <div class="p-4 mb-2 border-b border-gray-200 sticky top-0 z-50 pink ">
                                <div class="flex items-center justify-between">
                                    <h2 class="text-xl font-semibold text-gray-800">Liste Des demandes
                                        {/* <p className="text-xs text-gray-400">{`page ${numpage}/${Math.ceil(nbrligne / nbrSize)}`}</p> */}
                                    </h2>
                                    <div class="flex items-center space-x-3">
                                    
                                        <div className="flex space-x-2">
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
                                        <th class="tr-thead">Post</th>
                                        <th class="tr-thead">Date demande</th>
                                        <th class="tr-thead">Date Changement Status</th>
                                        <th class="tr-thead">Date de l'offre</th>
                                        {accesObj && (accesObj?.alldemande?.modification_date_recrutement == null || accesObj?.alldemande?.modification_date_recrutement === undefined) ? null : (
                                                <th class="tr-thead"></th>
                                        )}
                                        <th class="tr-thead">Status</th>
                                        <th class="tr-thead">Value</th>
                                        {accesObj && (accesObj?.alldemande?.voir_liste_postulants == null || accesObj?.alldemande?.voir_liste_postulants === undefined) ? null : (
                                         <th class="tr-thead">Postulants</th>
                                        )}
                                        <th class="tr-thead">Lien</th>

                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    {data.map((value,index)=>(
                                        <>
                                        <tr index={index} className={value.StatusId==4 ?"bg-gray-50  hover:bg-gray-100":" hover:bg-gray-50"}>
                                            <td class="px-6 py-4 text-sm text-gray-500">{value.id}</td>
                                            <td class="px-6 py-4 text-sm text-gray-500">{value.nomPost}</td>
                                            
                                            <td class="px-6 py-4 text-sm text-gray-500">{value.requestDate.split('T')[0]}</td>
                                            <td class="px-6 py-4 text-sm text-gray-500">{value.statusSetDate?.split('T')[0]}</td>
                                            {/* showpop */}
                                            <td class="px-6 py-4 text-sm text-gray-500">{ value.datestart?.split('T')[0] }   {value.dateend?.split('T')[0]}  </td>
                                            {accesObj && (accesObj?.alldemande?.modification_date_recrutement == null || accesObj?.alldemande?.modification_date_recrutement === undefined) ? null : (
                                                <td class="px-6 py-4 text-sm text-gray-500">
                                                    <button className="btn-neutre-gray" onClick={()=>changeDateRecruitement(value)}>
                                                            <i class="fa-solid fa-pen text-gray-400"></i>
                                                    </button>
                                                </td>
                                            )}
                                            {accesObj && (accesObj?.alldemande?.validation_demande_d_offre == null || accesObj?.alldemande?.validation_demande_d_offre === undefined) ? null : (
                                                value.statusId ==null ?
                                                    <>
                                                        <td class="px-6 py-4"><button
                                                        onClick={()=>changeState(value,2)} class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[1]}`}>refusée</button></td>
                                                        <td class="px-6 py-4"><button
                                                            onClick={()=>changeState(value,1)} class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[6]}`}>validée</button></td>
                                                    </> :
                                                    value.statusId==1 ? 
                                                    <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[6]}`}>validée</span></td>: 
                                                    value.statusId== 2 ? 
                                                    <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[1]}`}>refusée</span></td>: 
                                                    <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium `}></span></td>
                                            )}

                                            <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[index]}`}>{value.numberOfCandidates}</span></td>
                                            
                                            {accesObj && (accesObj?.alldemande?.voir_liste_postulants == null || accesObj?.alldemande?.voir_liste_postulants === undefined) ? null : (
                                                <td className="px-6 py-4">
                                                    <button onClick={()=>{setPost(value);  setShowStep(true); }}>
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[index]}`}>
                                                        {value.nbrpostulant}
                                                        </span>
                                                    </button>
                                                </td>
                                            )}
                                             <td className="px-6 py-4" >
                                                <button className="btn-neutre-gray" onClick={()=>{showLinkRecrutementPop(value.requesterId,value.postId) }}>
                                                    <i class="fa-solid fa-link text-gray-400"></i>
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
        }
        </>
    )
}
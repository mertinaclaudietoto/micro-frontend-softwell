import { useEffect, useState } from "react";
import { textbackground, url } from "../../../data/data";
import Select from "../../../function/selectSimple";
import { Sidebar } from "../../sidebar";
import { getData, send } from "../../../function/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatMoney } from "../../../function/utils";

export default function CardAddSession({close,idvalidation}){
    const [matricule,setMatricule]=useState(null);
    const [listTheme ,setListTheme]=useState([]);
    const [listParticipant ,setListParticipant]=useState([]);
    const [listTrainer ,setListTrainer]=useState([]);
    const [daysession,setDaySession]=useState({
        Id: null,
        Date: null,
        Heurstartmoring: null,
        Heurendmoring: null,
        Heurstartaftern: null,
        Heurendaftern: null,
        Idplace: null,
        Idsession: null
    })
    const [value,setValue]=useState({
        Id:null,
        Idtrainingvalidate:idvalidation,
        Datestart:null,
        Dateend:null,
        Date: new Date().toISOString(),
        participant :[], 
        sessionday :[],
    })
    const getUser = async (matricule)=>{
        const data =  await getData(
            url + `employ/getby?matricule=${matricule}`
        );
        console.log(data.data)
        if(data.data!=null){
            setListParticipant((previous)=>{
                return [...previous,{
                    idParticipant:data.data.id,
                    matricule :data.data.matricule,
                    name:data.data.name,
                    firstName:data.data.firstname
                }]
            })
            // addParticipant({
            //     IdBeneficiary:data.data.id
            // });
        }    
    }
    const getListThemes = async ()=>{
        const datalistThemes =  await getData(
            url + `training-place`
        );
        if(datalistThemes.data!=null)
            setListTheme(datalistThemes.data)
    }
    const getListParticipant = async ()=>{
        const datalistThemes =  await getData(
            url + `v_participant_validate/getparticipant?id=`+idvalidation
        );
        if(datalistThemes.data!=null)
            console.log("participant",datalistThemes.data)
            setListParticipant(datalistThemes.data)
    }
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const handlerPlace =(opt) =>{
        if(opt!=null){
            handlerVariable("Idplace",opt.id,setDaySession)   
            handlerVariable("lieu",opt.name,setDaySession)                 
        }
    }
    const addJourTraining =(value,index=null)=>{
        setValue((previous) => {
            const currentArray = Array.isArray(previous["sessionday"]) ? previous["sessionday"] : [];
            if (index !== null) {
                const newArray = currentArray.filter((_, i) => i !== index);
                return {
                    ...previous,
                    ["sessionday"]: newArray,
                };
            }
         return {
                ...previous,
                ["sessionday"]: [...currentArray, value],
            };
        });
    }

    const addParticipant = (value) => {
        console.log(value);
        setValue((previous) => {
            const currentArray = Array.isArray(previous["participant"]) 
                ? previous["participant"] 
                : [];
            const exists = currentArray.some(item => item.idParticipant === value.idParticipant);
            let newArray;
            if (exists) {
                newArray = currentArray.filter(item => item.idParticipant !== value.idParticipant);
            } else {
                newArray = [
                    ...currentArray,
                    {
                        Id: null,
                        Idsession: null,
                        Idparticipant: value.idParticipant
                    }
                ];
            }
            return {
                ...previous,
                participant: newArray
            };
        });
    };
    useEffect(() => {
            getListThemes();
            getListParticipant();
        }, []);
    const submit = async ()=>{
        const cleanData = {
            ...value,
            sessionday: value.sessionday.map(d => {
                const { lieu, ...rest } = d; // enlève lieu
                return rest;                 // renvoie l'objet SANS lieu
            })
        };
        // console.log(cleanData)
        const data = await send(cleanData,url + "session")
        // console.log(value)
        if (data == true) {
            toast.success("Données insérées avec succès !");
            close(false);
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    }
    return (
        <div class="flex h-screen"> 
            <Sidebar></Sidebar>
            <main class="flex-1 bg-white ">    
                <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                    <div className="max-w-7xl mx-auto bg-white p-10">
                        <div className="">
                        <h3 className="font-bold">Ajout Nouvelle session </h3>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="my-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Date Debut </label>
                                <input 
                                    type="date" 
                                    placeholder="Enter matricule  pour ajouter un nouveau participant" 
                                    class="input_singup"
                                    onChange={(event)=>{handlerVariable("Datestart",event.target.value,setValue)}}
                                />
                            </div>
                            <div className="my-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Date Fin </label>
                                <input 
                                    type="date" 
                                    placeholder="Enter matricule  pour ajouter un nouveau participant" 
                                    class="input_singup"
                                    onChange={(event)=>{handlerVariable("Dateend",event.target.value,setValue)}}
                                />
                            </div>
                        </div>
                        <h3 className="font-bold text-sm">Ajout jours session </h3>
                        <div className="grid grid-cols-9 gap-2 ">
                            <div className="my-2 col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Lieu de formation </label>
                                <Select options={listTheme} onChange={handlerPlace}/>
                            </div>
                            <div className="my-2 col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                                <input 
                                    type="date" 
                                    placeholder={daysession.Date}
                                    class="input_singup"
                                    onChange={(event)=>{handlerVariable("Date",event.target.value,setDaySession)}}
                                />
                            </div>
                            <div className="my-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Heur debut matin</label>
                                <input 
                                    type="time" 
                                    placeholder={daysession.Heurstartmoring} 
                                    class="input_singup"
                                    onChange={(event)=>{handlerVariable("Heurstartmoring",event.target.value,setDaySession)}}

                                />
                            </div>
                              <div className="my-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Heur fin matin</label>
                                <input 
                                    type="time" 
                                    placeholder={daysession.Heurendmoring}  
                                    class="input_singup"
                                    onChange={(event)=>{handlerVariable("Heurendmoring",event.target.value,setDaySession)}}

                                />
                            </div>
                              <div className="my-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Heur debut soir</label>
                                <input 
                                    type="time" 
                                   
                                    class="input_singup"
                                    placeholder={daysession.Heurstartaftern}  
                                    onChange={(event)=>{handlerVariable("Heurstartaftern",event.target.value,setDaySession)}}
                                />
                            </div>
                            <div className="my-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Heur debut soir</label>
                                <input 
                                    type="time" 
                                    class="input_singup"
                                    placeholder={daysession.Heurendaftern}  
                                    onChange={(event)=>{handlerVariable("Heurendaftern",event.target.value,setDaySession)}}
                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="btn-neutre-gray" onClick={()=>addJourTraining(daysession)} title="ajout">
                                        <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
                          {/* <div className="grid grid-cols-2 ">
                            <div className="my-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Lieu de formation </label>
                                <Select options={listTheme} onChange={handlerTheme}/>
                            </div>
                            <div className="my-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter matricule  pour ajouter un nouveau participant" 
                                    class="input_singup"
                                    onChange={(event)=>{setMatricule(event.target.value)}}
                                />
                                <button className="btn-neutre-gray" onClick={()=>getUser(matricule)} title="ajout">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>

                        </div>
                       */}

                        </div>
                        <div className="mt-8">
                        <div id="tasksList" class="">
                            <label className="block text-sm font-bold text-gray-700 mb-2">List formateur avec prix </label>
                              <table class="w-full">
                                <thead class="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th class="tr-thead ">Lieu</th>
                                        <th class="tr-thead">Date</th>
                                        <th class="tr-thead">Heur debut  <i class="fa-solid fa-sun"></i></th>
                                        <th class="tr-thead">Heur fin  <i class="fa-solid fa-sun"></i></th>
                                        <th class="tr-thead">Heur debut <i class="fa-solid fa-cloud-sun"></i></th>
                                        <th class="tr-thead">Heur fin   <i class="fa-solid fa-cloud-sun"></i></th>
                                        <th class="tr-thead "></th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    {value.sessionday.map((value,index)=>(
                                        <>
                                            <tr index={index} className={value.active==4 ?"bg-gray-50  hover:bg-gray-100":" hover:bg-gray-50"}>
                                                <td class="px-6 py-4 text-sm text-gray-500">{value.lieu}</td>
                                                <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium mb-1 ${textbackground[index]}`}>{value.Date}</span>
                                                </td>
                                                <td class="px-6 py-4">
                                                    <div class="text-sm font-medium text-gray-900 mb-1">{value.Heurstartmoring}</div>
                                                </td>
                                                <td class="px-6 py-4">
                                                    <div class="text-sm font-medium text-gray-900 mb-1">{value.Heurendmoring}</div>
                                                </td>
                                                <td class="px-6 py-4">
                                                    <div class="text-sm font-medium text-gray-900 mb-1">{value.Heurstartaftern}</div>
                                                </td>
                                                <td class="px-6 py-4">
                                                    <div class="text-sm font-medium text-gray-900 mb-1">{value.Heurendaftern}</div>
                                                </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                    <button className="btn-neutre-gray" onClick={()=>addJourTraining(value,index)} title="ajout">
                                                        <i class="fa-solid fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div id="tasksList" class="">
                                <label className="block text-sm font-bold text-gray-700 my-2">List Participant</label>
                                <table class="w-full">
                                 <thead >
                                    <tr>
                                        <th class="tr-thead  w-8"></th>
                                        <th class="tr-thead"></th>
                                        <th class="tr-thead "></th>
                                        <th class="tr-thead  " colspan="2">
                                            <label className="text-sm  text-gray-700 my-2 lowercase">Ajout nouveau participant</label>
                                            <div className="my-2 flex gap-2 justify-end">
                                                <input 
                                                    type="text" 
                                                    placeholder="Enter matricule  pour ajouter un nouveau participant" 
                                                    class="input_formulaire w-60 "
                                                    onChange={(event)=>{setMatricule(event.target.value)}}
                                                />
                                                <button className="btn-neutre-gray" onClick={()=>getUser(matricule)} title="ajout">
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </button>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr class="bg-gray-50 border-b border-gray-200">
                                        <th class="tr-thead  w-8">Matricule </th>
                                        <th class="tr-thead">Nom</th>
                                        <th class="tr-thead ">Prenom</th>
                                        <th class="tr-thead ">Email</th>
                                        <th class="tr-thead "></th>
                                    </tr>
                                </thead>  
                                {listParticipant.map((v,k)=>(
                                    <tr index={k}>
                                        <td class="px-6 py-4">
                                            <span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium mb-1 lowercase ${textbackground[k]}`}>{v.matricule}</span></td>
                                        <td class="px-6 py-4 lowercase">{v.name}</td>
                                        <td class="px-6 py-4 lowercase">{v.firstName}</td>
                                        <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium mb-1 lowercase ${textbackground[k]}`}>{v.email}</span>
                                            
                                        </td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                className="btn-neutre-gray"
                                                onChange={() => addParticipant(v)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                                </table>
                        </div>

                            <div class="flex items-center justify-end gap-3 mt-10 ">
                                <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>{close(false)}}>
                                    Annuler
                                </button>
                                <button class="px-6 py-2 bg-softbleu hover:bg-softbleushade-12 text-white rounded-lg font-medium"  onClick={()=>submit()}>
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
        </div>
    );
}
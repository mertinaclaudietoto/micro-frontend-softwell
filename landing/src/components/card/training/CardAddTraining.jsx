import { useEffect, useState } from "react";
import { textbackground, url } from "../../../data/data";
import Select from "../../../function/selectSimple";
import { Sidebar } from "../../sidebar";
import { getData, send } from "../../../function/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatMoney } from "../../../function/utils";

export default function CardAddTraining({close}){
    const [matricule,setMatricule]=useState(null);
    const [listTheme ,setListTheme]=useState([]);
    const [listParticipant ,setListParticipant]=useState([]);
    const [listTrainer ,setListTrainer]=useState([]);
    const [value,setValue]=useState({
         Id :null,
         Idtheme: null,
         Idadmin:1 , //donner statique
         Idtrainer:null,//formateur  
         Date:(new Date()).toISOString(),
         Statu:1 
        ,participant:[]
    })
    const getUser = async (matricule)=>{
        const data =  await getData(
            url + `employ/getby?matricule=${matricule}`
        );
        console.log(data.data)
        if(data.data!=null){
            setListParticipant((previous)=>{
                return [...previous,{
                    idBeneficiary:data.data.id,
                    beneficiaryMatricule :data.data.matricule,
                    beneficiaryName:data.data.name,
                    beneficiaryFirstname:data.data.firstname
                }]
            })
        }    
    }
    const getListThemes = async ()=>{
        const datalistThemes =  await getData(
            url + `training-themes`
        );
        if(datalistThemes.data!=null)
            setListTheme(datalistThemes.data)
    }
    const getListTrainer = async (idtheme)=>{
        const datalistThemes =  await getData(
            url + `vtrainertheme/getbyidtheme?idtheme=`+idtheme
        );
        if(datalistThemes.data!=null)
            console.log(datalistThemes.data)
            setListTrainer(datalistThemes.data)
    }
    const getListParticipant = async (idtheme)=>{
        const datalistThemes =  await getData(
            url + `v_wish/participant?idtheme=`+idtheme
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
    const handlerTheme =(opt) =>{
        console.log(opt)
        if(opt!=null){
            getListParticipant(opt.id)
            getListTrainer(opt.id);
            handlerVariable("Idtheme",opt.id,setValue)
        }
    }
    const addParticipant = (value) => {
        setValue((previous) => {
            const currentArray = Array.isArray(previous["participant"]) 
                ? previous["participant"] 
                : [];
            const exists = currentArray.some(item => item.IdParticipant === value.idBeneficiary);
            let newArray;
            if (exists) {
                newArray = currentArray.filter(item => item.IdParticipant !== value.idBeneficiary);
            } else {
                newArray = [
                    ...currentArray,
                    {
                        Id: null,
                        IdTrainingValidate: null,
                        IdParticipant: value.idBeneficiary
                    }
                ];
            }
            return {
                ...previous,
                participant: newArray
            };
        });
    };

    // const handlerListThemeTrainer=  (name, value, index = null) => {
    //     console.log(value)
    //     setValue((previous) => {
    //         const currentArray = Array.isArray(previous[name]) ? previous[name] : [];
    //         if (index !== null) {
    //             const newArray = currentArray.filter((_, i) => i !== index);
    //             return {
    //                 ...previous,
    //                 [name]: newArray,
    //             };
    //         }
    //      return {
    //             ...previous,
    //             [name]: [...currentArray, value],
    //         };
    //     });
    //     setPrice({
    //     id: 0,
    //     idtrainer: 0,
    //     idtheme: 0,
    //     idunit: 0,
    //     unitprice: 0,
    //     maxpersonne: 0,
    //     description: "",
    //     nameTheme: "",
    //     nameTrainer: "",
    //     nif: "",
    //     stat: "",
    //     tel: "",
    //     email: "",
    //     active: 3,
    //     nameActive: "",
    //     nameunit: ""
    // });
    // };
    useEffect(() => {
            getListThemes();
        }, []);
    const submit = async ()=>{
        const data = await send(value,url + "training-validate")
        // console.log(value)
        if (data == true) {
            toast.success("Données insérées avec succès !");
            close(false);
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    }
    return (
        <div class="flex h-screen  "> 
            <Sidebar></Sidebar>
            <main class="flex-1 bg-white ">    
                <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                    <div className="max-w-7xl mx-auto bg-white p-10">
                        <div className="">
                        <h3 className="font-bold">Ajout formation a faire </h3>
                        <div className="grid grid-cols-2 ">
                            <div className="my-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Selectionnee la formation a faire </label>
                                <Select options={listTheme} onChange={handlerTheme}/>
                            </div>
                            <div className="flex gap-2 mt-8">
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
                      

                        </div>
                        <div className="mt-8">
                        <div id="tasksList" class="">
                            <label className="block text-sm font-bold text-gray-700 mb-2">List formateur avec prix </label>
                              <table class="w-full">
                                <thead class="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th class="tr-thead w-8">#</th>
                                        <th class="tr-thead">Organisme</th>
                                        <th class="tr-thead">Email</th>
                                        <th class="tr-thead">Tel</th>
                                        <th class="tr-thead">En activiter</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    {listTrainer.map((value,index)=>(
                                        <>
                                        <tr index={index} className={value.active==4 ?"bg-gray-50  hover:bg-gray-100":" hover:bg-gray-50"}>
                                            <td class="px-6 py-4 text-sm text-gray-500">{index}</td>
                                            <td class="px-6 py-4">
                                                <div class="text-sm font-medium text-gray-900 mb-1">{value.nameTrainer}</div>
                                                <div class="text-xs text-gray-500">nif: {value.nif} stat: {value.stat}</div>
                                            </td>
                                            <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium mb-1 ${textbackground[index]}`}>{value.email}</span>
                                                <div class="text-xs text-gray-500">tel: {value.tel}</div>
                                            </td>
                                            <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 mb-1`}>{formatMoney(value.unitprice) } AR</span>
                                                <div class="text-xs text-gray-500">{value.nameunit} max p : {value.maxpersonne}</div>
                                            </td>
                                           <td className="px-6 py-4 text-sm text-gray-500">
                                            <input
                                                type="radio"
                                                name="training" 
                                                value={value.id}  
                                                onChange={() => handlerVariable("Idtrainer",value.idtrainer,setValue)}
                                            />
                                            </td>
                                        </tr>
                                        </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div id="tasksList" class="">
                                <label className="block text-sm font-bold text-gray-700 mb-2">List Participant</label>

                                <table class="w-full">
                                 <thead class="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th class="tr-thead  w-8">Matricule </th>
                                        <th class="tr-thead">Demandeur</th>
                                        <th class="tr-thead ">Beneficiaire</th>
                                        <th class="tr-thead "></th>
                                    </tr>
                                </thead>  
                                {listParticipant.map((v,k)=>(
                                    <tr index={k}>
                                        <td class="px-6 py-4">{v.wisherMatricule}</td>
                                        <td class="px-6 py-4 lowercase">{v.wisherName} {v.wisherFirstname}</td>
                                        <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium mb-1 lowercase ${textbackground[k]}`}>{v.beneficiaryName} {v.beneficiaryFirstname}</span>
                                            <div class="text-xs text-gray-500">matricule: {v.beneficiaryMatricule}</div>
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
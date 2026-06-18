import { useState,useEffect } from "react";
import {  url} from "../../../data/data";
import { TextState } from "../../state";
import SearchableSelect from "../../../function/select";
import Select from "../../../function/selectSimple";
import { getData, send } from "../../../function/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function CardWish({close}){
    const [idtheme,setIdtheme]=useState(null);
    const [idTypeWish,setIdTypeWish]=useState(null);
    const [matricule,setMatricule]=useState(null);
    const [listWish,setListWish]=useState([])
    const [listTheme ,setListTheme]=useState([]);
    const [listTypeWish ,setListTypeWish]=useState([]);
    const getListTypeWish = async ()=>{
            const data =  await getData(
                url + `wish_type`
            );
            if(data.data!=null)
                setListTypeWish(data.data)
    }
    const addNewWish=(value,index=null)=>{
        if(idtheme!=null){
            setListWish((previous) => {
                        if (index !== null) {
                            const newArray = previous.filter((_, i) => i !== index);
                            return newArray;
                        }
                        return [...previous, {
                            Id: null,
                            Idtheme: idtheme,
                            idwish_type: idTypeWish,
                            IdWisher: 1,
                            Idbeneficiary: value.id,
                            matricule: value.matricule,
                            name: value.name,
                            firstname: value.firstname,
                            active: 5,
                            date: (new Date()).toISOString()
                        }];
                    }
                    )
        }
    }
    const getListThemes = async ()=>{
            const datalistThemes =  await getData(
                url + `training-themes`
            );
            if(datalistThemes.data!=null)
                setListTheme(datalistThemes.data)
    }
    const getUser = async (matricule)=>{
            const data =  await getData(
                url + `employ/getby?matricule=${matricule}`
            );
            if(data.data!=null)
                addNewWish(data.data)
    }
    const submit = async ()=>{
        const allowed = ["Id", "Idtheme", "IdWisher", "Idbeneficiary", "active", "date"];

        const cleaned = listWish.map(w =>
            Object.fromEntries(
                Object.entries(w).filter(([key]) => allowed.includes(key))
            )
        );

        const value = await send(listWish,url + "wish")
        if (value == true) {
            toast.success("Données enregistrées avec succès !");
            close(false);
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
        }
    const handler=(opt)=>{
        setIdtheme(opt.id)
    }
   
    const handlerTypeWish=(opt)=>{
        if(opt!=null){
            setIdTypeWish(opt.id);
        }
    }
    useEffect(() => {
        getListThemes();
        getListTypeWish();
     }, []);
    return(

        <>
        <div className="background_transparent_popup">
            <div class="grid grid-cols-1 bg-white  p-10 rounded-card  relative min-w-md">
                <h3 className="font-semibold text-gray-700">Faire une souhait</h3>
                <div class="absolute top-6 right-6">
                    <span class="text-gray-800 text-lg font-semibold">
                    <button class="" onClick={()=>(close(false))}>
                        <i class="fa-solid fa-xmark"></i>
                    </button></span>
                </div>
                <div class="flex flex-col items-center">
                    <div class="w-32 h-32   rounded-full flex items-center justify-center mb-4 cursor-pointer  transition-colors">
                       <img src="demandeformation.svg"/>
                    </div>
                </div>
                {/* nom formation */}
                <label class="label-formulaire">Choisisez votre formation</label>
                <Select options={listTheme} onChange={handler}/>
                <label class="label-formulaire">type de souhait</label>
                <Select options={listTypeWish} onChange={handlerTypeWish}/>
                <label class="label-formulaire mt-8">Choisisez les participant</label>
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        placeholder="Saisir le matricule du participant" 
                        class="input_singup"
                        onChange={(event)=>{setMatricule(event.target.value)}}
                    />
                    <button className="btn-neutre-gray" onClick={()=>getUser(matricule)} title="ajout">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div className="my-2"> 
                    <div class="">
                        <div id="tasksList" class="space-y-4 max-h-100 overflow-y-auto">
                                 <table class="w-full">
                                 <thead class="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th class="tr-thead ">Matricule</th>
                                        <th class="tr-thead">Nom</th>
                                        <th class="tr-thead ">Prénom</th>
                                        <th class="tr-thead "></th>
                                    </tr>
                                </thead>
                                 
                                {listWish.map((v,k)=>(
                                    <tr index={k}>
                                        <td class="px-6 py-4">{v.matricule}</td>
                                        <td class="px-6 py-4">{v.name}</td>
                                        <td class="px-6 py-4">{v.firstname}</td>
                                        <td>
                                            <button  onClick={() => { addNewWish(matricule,k)}} class="btn-neutre-gray">
                                                <i class="fa-regular fa-trash-can"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </table>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-end gap-3 mt-2">
                    <button class="btn-action"  onClick={()=>{submit()}}>
                        Enregistrer
                    </button>
                </div>
            </div>
        </div>
    </> 
        
    );
}
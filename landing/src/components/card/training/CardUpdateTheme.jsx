import { useEffect, useState } from "react";
import {   themeM, usersprofile ,url,trainingTypes} from "../../../data/data";
import { TextState } from "../../state";
import { deletev, getData, send, update } from "../../../function/Axios";
import { toast } from "react-toastify";
import BudgetTheme from "./BudgetTheme";
import "react-toastify/dist/ReactToastify.css";
import Select from "../../../function/selectSimple";


export default function CardUpdateTheme({close,value}){
    const acces = sessionStorage.getItem("access");
    const accesObj = JSON.parse(acces);
    const [seeHistorique ,setSeeHistorique]=useState(false);
    const [theme,setTheme]=useState(value!=null ? value:themeM);
    const [trainingType,setTrainingType]=useState(trainingTypes);
    const [skill,setSkill]=useState("");
    const handlerChangeTable = (name, value, index = null) => {
        setTheme((previous) => {
            const currentString = previous[name] || "";
            let currentArray = currentString
                .split(",")
                .map(s => s.trim())
                .filter(s => s !== "");
            if (index !== null) {
                const newArray = currentArray.filter((_, i) => i !== index);

                return {
                    ...previous,
                    [name]: newArray.join(","),
                };
            }
            const newArray = [...currentArray, value];
            return {
                ...previous,
                [name]: newArray.join(","),
            };
        });
        setSkill("");
    };
   
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const submit = async ()=>{
        const value = await update(theme,url + "training-themes")
        console.log(value)
        if (value == true) {
            window.location.reload();
            toast.success("Données modifiées avec succès !");
            close(false);
            
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    }
    const del = async ()=>{
        const value = await deletev(theme,url + "training-themes")
        console.log(value)
        if (value == true) {
            window.location.reload();
            toast.success("Données supprimées avec succès !");
            close(false);
        } else {
            toast.error("Problème serveur ou élément ne pouvant pas être supprimé !");
        }
    }
    const handlerSelectTrainingType = (opt) => {
        if (opt !== null) {
            handlerVariable("idtypetraining", opt.id, setTheme);
        }
    };
    useEffect(() => {
    const loadData = async () => {
        const data = await getData(url + "training-types");
        if(data.data!=null)
            setTrainingType(data.data);
    };
        loadData();
    }, []);

    const isCanSeeBudget = accesObj  && (accesObj?.budget?.lecture == null || accesObj?.budget?.lecture == undefined) 
  
    return(
        <>
            {isCanSeeBudget!=true &&  seeHistorique ? <BudgetTheme  value={value} close={setSeeHistorique}/>: 
            <div className="background_transparent_popup">
            <div class="grid grid-cols-1 bg-white  p-10 rounded-card w-120 relative">
                <div className="flex " >
                        <h3>Modifier un thème</h3>
                </div>
                {isCanSeeBudget!=true  ?
                    <div class="absolute top-6 right-15">
                        <span class="text-gray-800 text-lg font-semibold">
                        <button className="btn-neutre" onClick={()=>{setSeeHistorique(true)}}>
                                    <i class="fa-solid fa-piggy-bank"></i>
                        </button></span>
                    </div> : <></>
                }
               

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
                <>
                <div className='my-4'>
                    <label class="label-formulaire">Nom formation</label>
                    <div class="relative">
                        <input 
                            type="text" 
                            placeholder={theme.name} 
                            class="input_singup"
                            onChange={(event)=>{handlerVariable("name",event.target.value,setTheme)}}
                            required
                        />
                    </div>
                </div>
                <label class="label-formulaire mt-4 mb-2">Type formation</label>
                <Select options={trainingType}  placeholder="Type de formation " onChange={handlerSelectTrainingType} value={false} />
                {/* <div className="grid grid-cols-3 gap-3 mb-4">
                    {trainingType.map((v,id)=>(
                            <button index={id} class={"card-text-s-blue hover:bg-black-100"} onClick={()=>handlerVariable("idtypetraining",v.id,setTheme)}>
                            <i className={`${v.icone} icone-size-s`}></i>
                            <span>{v.name}</span>
                        </button>
                    ))}
                </div> */}
                {/* why  */}
                <div className="my-2">
                    <label class="label-formulaire">Qu’attendons-nous de cette formation ?</label>
                    <textarea 
                        required
                        placeholder={theme.description} 
                        rows="4"
                        class="input_singup"
                        onChange={(event)=>{handlerVariable("description",event.target.value,setTheme)}}
                    ></textarea>
                </div>
                {/* skill */}
                <div className="my-2">
                    <div class="">
                            <div class="flex items-center justify-between mb-4">
                                <label class="label-formulaire gap-1">Quelles compétences devriez-vous avoir à l’issue de cette formation ?
                                    <button class="text-or   font-bold text-sm flex items-center gap-2" onClick={()=>handlerChangeTable("skill",skill,null)}>
                                        <i class="fas fa-plus"></i>
                                        Ajouter
                                    </button>
                                </label>
                                
                            </div>
                            <div className='grid grid-cols-1 gap-4 mb-4'>
                                <div>
                                    <input 
                                        type="text" 
                                        placeholder="Saisir les compétences" 
                                        class="input_singup"
                                        onChange={(event)=>{setSkill(event.target.value)}}
                                    />
                                </div>
                                <div>   
                                <div class="flex flex-wrap gap-2">
                                    {theme.skill.split(",").map((value, index) => (
                                        <button
                                            key={index}
                                            className="card-text-rounded-gray"
                                            onClick={() => handlerChangeTable("skill", value, index)}
                                        >
                                            {value}
                                            <span className="ml-2">
                                                <i className="fa-solid fa-xmark text-gray-500"></i>
                                            </span>
                                        </button>
                                    ))}
                                </div>
                                </div>
                            </div>  
                    </div>
                
                </div>
                <div class="flex items-center justify-end gap-3 mt-2">
                    {accesObj && (accesObj?.theme?.suppression == null || accesObj?.theme?.suppression == undefined)  ? null : (
                        <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>{del()}}>
                            Supprimer
                        </button>
                    )}
                    <button class="btn-action" onClick={()=> submit()}>
                        Modifier
                    </button>
                </div>
                </> 
            </div>
                </div>
            }
        </>
      
    );
}
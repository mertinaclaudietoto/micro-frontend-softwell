import { useEffect, useState } from "react";
import {   themeM,url,trainingTypes} from "../../../data/data";
import { TextState } from "../../state";
import { getData, send } from "../../../function/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "../../../function/selectSimple";

export default function CardAddTheme({close}){
    const [theme,setTheme]=useState(themeM);
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
    const handlerSelectTrainingType = (opt) => {
        if (opt !== null) {
            handlerVariable("idtypetraining", opt.id, setTheme);
        }
    };
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const submit = async ()=>{
        const value = await send(theme,url + "training-themes")
        if (value == true) {
            toast.success("Données enregistrées avec succès !");
            close(false);
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    }
    useEffect(() => {
        const loadData = async () => {
            const data = await getData(url + "training-types");
            if(data.data!=null)
                setTrainingType(data.data);
        };
        loadData();
    }, []);
    const [index,setIndex]=useState(1);
    return(
        <div className="background_transparent_popup">
            <div class="grid grid-cols-1 bg-white  p-10 rounded-card w-120 relative">
                <h3>Ajout d'un nouveau thème</h3>
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
               
                {index==1 ?
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
                    <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>{close(false)}}>
                        Annuler
                    </button>
                    <button class="btn-action" onClick={()=> submit()}>
                        Enregistrer
                    </button>
                </div>

                </> :
                <>
                {/* <div className="my-2">
                    <label class="label-formulaire">Quand souhaitez-vous suivre cette formation ?</label>
                    <div class="relative">
                        <input 
                            type="date" 
                            class="input_singup w-[100px]"
                            onChange={(event) => handlerVariable("datestarttraining", event.target.value,setInfodemande)}
                        />
                    </div>
                </div>  
                <div className="my-2">
                    <label class="label-formulaire">La formation sera-t-elle prise en charge par l’entreprise ?</label>
                    <div class="flex gap-4">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="gender" value="male"  class="w-5 h-5 text-softbleu/100 focus:ring-orange-500" 
                                onChange={() => handlerVariable("type", "fa-solid fa-building",setInfodemande)}
                            />
                            <span class="text-sm text-gray-700">Oui</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="gender" value="female" class="w-5 h-5 text-orange-500 focus:ring-orange-500"
                            onChange={() => handlerVariable("genre", "fa-solid fa-user-graduate",setInfodemande)}/>
                            <span class="text-sm text-gray-700">Non</span>
                        </label>
                    </div>
                </div>

                <div className='my-2'>
                    <label class="label-formulaire">La liste des participeront</label>
                    <div class="relative flex flex-row gap-4">
                        <input 
                            type="email" 
                            placeholder={infodemande.title} 
                             class="input_singup w-32 min-w-[120px]"
                        />
                       <button class="btn-neutre-gray" >
                         <i class="fa-solid fa-check"></i>
                        </button>
                    </div>
                </div>
                <div className="my-2"> 
                    <div class="flex items-center justify-center">
                        <div className="flex items-center gap-2 overflow-x-auto flex-nowrap w-150">
                            {usersprofile.map((value, idx) => (
                                <div
                                key={idx}
                                className="bg-white  p-4 flex flex-col justify-center items-center gap-2 w-[100px] shrink-0"
                                >
                                <img
                                    src={value.photo}
                                    className="w-10 h-10 rounded-lg"
                                    alt={value.login}
                                />
                                <div className="text-gray-500 text-xs text-center">
                                    <p className="break-all">{value.login}</p>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
                <div class="flex items-center justify-end gap-3 mt-2">
                    <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>setIndex(1)} >
                        Précédent
                    </button>
                    <button class="btn-action" >
                        Enregistre
                    </button>
                </div>
                </>
                }
                {/* donne ne nous la liste des personne qui veux participer a cette formation avec vous */}
            </div>
    </div>
    );
}
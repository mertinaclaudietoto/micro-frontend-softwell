import { useState } from "react";
import { url_front } from "../../../data/data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "../../../function/selectSimple";
import { dateToLetters } from "../../../function/Date";

export default function CardForwardLink({_url,endpoint,closePopup,parametres,title}){
    const close =()=>{
        closePopup(false);
    }
    const [isModif,setIsModif]=useState(false);
    const list = [{name:'Lecture',id:false},
        {name:'Modification',id:true}
    ];

    const url = `${_url}${endpoint}/${btoa(parametres+"|"+isModif)}`;
    

    const handleCopy = async () => {
        try {
        await navigator.clipboard.writeText(url);
            toast.success("Lien copiées avec succès !");         
            // setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Erreur lors de la copie", err);
        }
    };
    const handleSelect = async (opt ) => {
        setIsModif(opt.id);
    };

    return(
        <div className="background_transparent_popup">
            <div class="grid grid-cols-1 bg-white w-100 p-10 rounded-card">
                <div class="flex flex-col items-center">
                    <div class="w-32 h-32  rounded-full flex items-center justify-center mb-4 cursor-pointer  transition-colors">
                         {/* <DemandeStaff className="w-32 h-32" /> */}
                         <img src="/forward.svg" alt="Logo" className="w-32 h-32" />
                    </div>
                </div>
                <p className="text-gray-600 text-sm flex justify-center items-center ">
                    <label class="text-input">{title} </label>
                </p>
                <div className='my-2'>
                    <input 
                        readOnly={true}
                        type="password" 
                        class="input_formulaire"
                        placeholder={url}
                    />
                </div>
                <div className='my-2'>
                   <Select options={list}  placeholder="Lecture seule" onChange={handleSelect} value={false}/>
                </div>
                <div class="flex items-center justify-between gap-3 mt-2">
                    <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>{close()}}>
                        Annuler
                    </button>
                    <button class="btn-action" onClick={()=>{handleCopy()}}>
                        Copier
                    </button>
                </div>
            </div>
        </div>
    )
}
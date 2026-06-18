import { useState } from "react";
import { update ,deletev } from "../../function/Axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Update({close,valueUp,entityName,urlApplication}){
    const [value, setValue] = useState({
                    id:valueUp.id ,
                    name: valueUp.name,
                });
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const submit = async ()=>{
        // console.log(value)
        const data = await update(value,urlApplication + entityName)
        // console.log(value)
        if (data == true) {
            // toast.success("Données enregistrées avec succès !");
            close(false);
            window.location.reload();
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    }
     const deleteV = async ()=>{
        // console.log(value)
        const data = await deletev(value,urlApplication + entityName)
        // console.log(value)
        if (data == true) {
            // toast.success("Données enregistrées avec succès !");
            close(false);
            window.location.reload();
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    }
    return (
        <div className="background_transparent_popup">
            <div class="relative grid grid-cols-1 bg-white w-100 p-10 rounded-xl">
                {/* Bouton close */}
                <button
                onClick={() => close()}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                aria-label="Fermer"
                >
                     <i className="fas fa-times text-xl"></i>
                </button>

                <div class="flex flex-col items-center">
                    <div class="w-32 h-32  rounded-full flex items-center justify-center mb-4 cursor-pointer  transition-colors">
                         {/* <DemandeStaff className="w-32 h-32" /> */}
                         <img src="/demandeStaff.svg" alt="Logo" className="w-32 h-32" />
                    </div>
                </div>
                <p className="text-gray-600 text-sm flex justify-center items-center ">
                    Modifier
                </p>
                <div className='mt-4 mb-6'>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                    <input 
                        type="text" 
                        placeholder={`name: ${value.name}`}
                        onChange={(event)=>{handlerVariable("name",event.target.value,setValue)}}
                        class="input_formulaire"
                    />
                </div>
                <div class="flex items-center justify-end gap-3">
                    <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>{deleteV()}}>
                        Suppression
                    </button>
                    <button class="px-6 py-2 bg-softbleu hover:softbleushade-12 text-white rounded-lg font-medium" onClick={()=>{submit()}}>
                        Ajouter
                    </button>
                </div>
            </div>
        </div>
    );
}
import {  useState } from "react";
import { send } from "../../function/Axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url_recrutement } from "../../data/data";
import Select from "../../function/selectSimple";
export default function AddStepRecruitement({close,entityName,listeRole,booleanEmail}){
    
    const [value, setValue] = useState({
                    Id: null,
                    name: "",
                });
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const handlerRule = (opt) => {
       handlerVariable("idrole",opt.id,setValue)
    };
    const handlerEmail = (opt) => {
       handlerVariable("email",opt.id,setValue)
    };
    const submit = async ()=>{
        // console.log(value)
        const data = await send(value,url_recrutement + entityName)
        // console.log(value)
        if (data == true) {
            // toast.success("Données insérées avec succès !");
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
                    Ajouter
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
                <div className='mt-4 mb-6'>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Role</label>
                    <Select options={listeRole} onChange={handlerRule} placeholder={listeRole?.find(v => v.id === value.idrole)?.name} value={false} />
                </div>
                <div className='mt-4 mb-6'>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Envois Email</label>
                    <Select options={listeRole} onChange={handlerEmail} placeholder={booleanEmail?.find(v => v.id === value.email)?.name} value={false} />
                </div>
                <div className='mt-4 mb-6'>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Range</label>
                    <input 
                        type="text" 
                        placeholder={`name: ${value.rang}`}
                        onChange={(event)=>{handlerVariable("rang",event.target.value,setValue)}}
                        class="input_formulaire"
                    />
                </div>

                <div class="flex items-center justify-end gap-3">
                    <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>{close()}}>
                        Annuler
                    </button>
                    <button class="px-6 py-2 bg-softbleu hover:softbleushade-12 text-white rounded-lg font-medium" onClick={()=>{submit()}}>
                        Ajouter
                    </button>
                </div>
            </div>
        </div>
    );
}
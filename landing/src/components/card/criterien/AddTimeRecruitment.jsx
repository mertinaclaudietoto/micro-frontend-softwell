//modification
import {  useState } from "react";
import {  url_recrutement } from "../../../data/data";
import {  update } from "../../../function/Axios";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { diffDate, diffDateStartEnd } from "../../../function/Date";
export default function AddTimeRecruitment({close ,valueUp}){
    const [value,setValue]=useState(valueUp);
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const  upDateValue =async  ()=>{
        console.log("diff date "+diffDateStartEnd(value.datestart,value.dateend))
        const diff = diffDateStartEnd(value.datestart, value.dateend);
        if (diff !== null && diff > 0) {
            const data = await update(value, url_recrutement + "recruitment_request");

            if (data === true) {
                toast.success("Données insérées avec succès !");
                close(false);
                // window.location.reload();
            } else {
                toast.error("Problème serveur, réessayez plus tard !");
            }

        } else {
            toast.error("Vérifiez vos dates !");
        }
    }
    return (
        <>
        <div class="fixed z-100 inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
        <div className="h-[900px] overflow-y-auto">
            <div className=" flex justify-center items-center p-8   ">
                <div class=" relative w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
                     <button
                    onClick={() => close()}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                    aria-label="Fermer"
                >
                    <i className="fas fa-times text-xl"></i>
                </button>
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">
                    Définition de la durée de publication de l’offre d’emploi
                </h2>
                <div class="space-y-6">

                    {value.datestart ==null ? 
                        <div className="my-2">
                            <label className=" label-formulaire">Debut {value.datestart.split('T')[0]} </label>
                            <input 
                                type="date" 
                                placeholder="Entrer votre nom" 
                                className="input_singup text-gray-400"
                                value={value.datestart}
                                onChange={(event) => handlerVariable("datestart", event.target.value,setValue)}
                            />
                        </div>
                     : 
                        <div className="my-2">
                            <label className=" label-formulaire">Debut {value.datestart.split('T')[0]}</label>
                            <input 
                                type="date" 
                                placeholder="Entrer votre nom" 
                                className="input_singup text-gray-400"
                                value={value.datestart}
                                readOnly={true}
                                onChange={(event) => handlerVariable("datestart", event.target.value,setValue)}
                            />
                        </div>
                    }
                    
                    <div className="my-2">
                        <label className="label-formulaire">Fin {value.dateend.split('T')[0]}</label>
                        <input
                            type="date" 
                            placeholder="Entrer votre nom" 
                            className="input_singup text-gray-400"
                            value={value.dateend}
                            onChange={(event) => handlerVariable("dateend", event.target.value,setValue)}
                        />
                    </div>
                    <div class="flex justify-end gap-4 pt-4">
                        <button type="reset" class="btn-neutre-gray" onClick={()=>close(false)}>
                            Annuler
                        </button>
                        <button onClick={()=>{upDateValue()}} class="btn-action">
                            Enregistrer 
                        </button>
                    </div>

                </div>
            </div>
            </div>
        </div>
             
    </div>
          
            
        </>
       
    )
}
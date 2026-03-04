import { useState } from "react";
import { send } from "../../../function/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url_recrutement } from "../../../data/data";
export default function RequestCandidat({close,valueUp}){
    const [value, setValue] = useState(
        {
    postId: valueUp.id,                     // number, obligatoire
    numberOfCandidates: 0,         // number, obligatoire
    requesterId: sessionStorage.getItem("userId"),                // number, obligatoire
    requestDate: new Date().toISOString().split('T')[0], // string "YYYY-MM-DD", uniquement la date
    statusSetByUserId: null,       // number | null, facultatif
    statusSetDate: null,           // string | null, facultatif
    statusId: null                 // number | null, facultatif
});
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const submit = async ()=>{
        console.log(value)

        const data = await send(value,url_recrutement + "recruitment_request")
        // console.log(value)
        if (data == true) {
            toast.success("Données insérées avec succès !");
            close(false);
            // window.location.reload();
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
                <p className="text-gray-600 text-sm flex justify-center items-center font-bold ">
                    {valueUp.name}
                </p>
               
                <div className='mt-4 mb-6'>
                    <label class="block text-sm  text-gray-400 mb-2">Nombre de candidats</label>
                    <input 
                        type="text" 
                        placeholder={`0`}
                        onChange={(event)=>{handlerVariable("numberOfCandidates",event.target.value,setValue)}}
                        class="input_formulaire"
                    />
                </div>
                <div className="my-2">
                    <label className="label-formulaire mt-2">Motif</label>
                    <textarea
                        type="text" 
                        placeholder="Entrer votre nom" 
                        className="input_singup text-gray-400"
                        value={value.goals}
                        onChange={(event) => handlerVariable("motifRecrutement", event.target.value,setValue)}
                    />
                </div>
                <div class="flex items-center justify-end gap-3">
                    <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>{close(false)}}>
                        Annuler
                    </button>
                    <button class="px-6 py-2 bg-softbleu hover:softbleushade-12 text-white rounded-lg font-medium" onClick={()=>{submit()}}>
                        Ajouter
                    </button>
                </div>
                 <p className="text-sm text-gray-400 mt-2 justify-center">Les demandes envoyées ne peuvent pas être annulées.</p>
            </div>
        </div>
    );
}
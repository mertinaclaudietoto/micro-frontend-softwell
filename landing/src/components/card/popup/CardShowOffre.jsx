import { url_front, url_recrutement } from "../../../data/data";
import { _login, getData, send } from "../../../function/Axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CardShowOffre({idpost,id,close}){
    const [value,setValue]=useState({});
    const loadData =   async () => {
        const data = await getData(url_recrutement+'post/'+id);
        setValue(data.data);
        console.log(data.data);
    };
    const recruitmentCandidate = {
        id: null,                                
        postId: idpost,     
        RequestId:id,    
        idplateforme:1,
        link:url_front+"infocandidateGeneralelink/"+btoa(sessionStorage.getItem("userId")),                     
        candidatId: sessionStorage.getItem("userId")
            ? parseInt(sessionStorage.getItem("userId"), 10)
            : null,                               // int
        stepRecruitmentId: 1,                     // int?
        applicationDate: new Date().toISOString().split('T')[0] // yyyy-MM-dd
    };
    const submit = async () => {
        // console.log(value)
        const data = await send(recruitmentCandidate,url_recrutement + "recruitmentcandidate")
        // console.log(value)
        if (data == true) {
            toast.success("Données insérées avec succès !");
            close(false);
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    };
    useEffect(() => {
        loadData();
    }, []);
    return(
        <div className="background_transparent_popup">
             <div  class="relative border bg-white border-gray-300 rounded-xl p-6 mb-4 hover:shadow-lg transition-shadow cursor-pointer">
                <button
                    type="button"
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                    onClick={()=>{close(false)}} >
                    <i className="fa-solid fa-xmark text-lg"></i>
                </button>

                <div class="flex items-start gap-3">
                    <div class="w-10 h-10 bg-softbleu rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {/* <i class="fas fa-slack text-white text-xl"></i> */}
                        {value.requestId}
                    </div>
                    <div class="flex-1 min-w-0">
                        <h4 class="font-bold text-gray-900 mb-1">{value.nom}</h4>
                        <p class="text-sm text-gray-500 mb-3">{value.goals}</p>
                        <p class="text-xs text-gray-600 mb-3">{value.mission}</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">{value.nameLocalisation}</span>
                            <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">{value.nameTypeContrat}</span>
                            <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">{value.nameYearLeft}</span>
                            <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">{value.nameYearRight}</span>
                        </div>
                    </div>
                </div>
                    {value?.diplomes?.length > 0 ? (
                    <div className="pt-4 pb-2">
                        <p className="label-formulaire">
                            Diplomes requises
                        </p>
                        <div className="flex flex-wrap gap-2">
                        {value.diplomes.map((cert, index) => (
                            <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-xs rounded-full"
                            >
                            {cert.nameS}
                            </span>
                        ))}
                        </div>
                    </div>
                    ) : null}

                    {value?.certifications?.length > 0 ? (
                    <div className="py-2">
                        <p className="label-formulaire">
                        Certifications 
                        </p>
                        <div className="flex flex-wrap gap-2">
                        {value.certifications.map((cert, index) => (
                            <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-xs rounded-full"
                            >
                            {cert.nameS}
                            </span>
                        ))}
                        </div>
                    </div>
                    ) : null}
                     {value?.languages?.length > 0 ? (
                    <div className="py-2">
                        <p className="label-formulaire">
                            Langue 
                        </p>
                        <div className="flex flex-wrap gap-2">
                        {value.languages.map((cert, index) => (
                            <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-xs rounded-full"
                            >
                            {cert.nameS}
                            </span>
                        ))}
                        </div>
                    </div>
                    ) : null}

                      {value?.softSkills?.length > 0 ? (
                    <div className="py-2">
                        <p className="label-formulaire">
                            sotf 
                        </p>
                        <div className="flex flex-wrap gap-2">
                        {value.softSkills.map((cert, index) => (
                            <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-xs rounded-full"
                            >
                            {cert.nameS}
                            </span>
                        ))}
                        </div>
                    </div>
                    ) : null}

                       {value?.hardSkills?.length > 0 ? (
                    <div className="py-2">
                        <p className="label-formulaire">
                            hard 
                        </p>
                        <div className="flex flex-wrap gap-2">
                        {value.hardSkills.map((cert, index) => (
                            <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-xs rounded-full"
                            >
                            {cert.nameS}
                            </span>
                        ))}
                        </div>
                    </div>
                    ) : null}
                    <div class="flex items-center justify-end gap-3 mt-3">
                        <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>{close(false)}}>
                            Annuler
                        </button>
                        <button class="px-6 py-2 bg-softbleu hover:bg-softbleushade-12 text-white rounded-lg font-medium" onClick={()=>submit()}>
                            Postuler
                        </button>
                    </div>
            </div>
        </div>
    )
}
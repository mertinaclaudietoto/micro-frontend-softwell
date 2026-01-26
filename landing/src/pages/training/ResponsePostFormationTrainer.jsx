import React,{ useEffect, useState } from "react";
import { accessinfo, listProfile, url, widthClasses } from "../../data/data";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import { handlerVariable } from "../../function/utils";
import { IconeAccess, Sidebar } from "../../components";
import { getData,  update } from "../../function/Axios";

export default function ResponsePostFormationTrainer(){
    const { encryptParametres } = useParams();
    const decoded = atob(encryptParametres);
    const dataValue = decoded.split("|");
    console.log(dataValue);

    const [data,setData]=useState([]);

    const getDataifExiste = async ()=>{
        const data = await getData(
            url + `questionnaire/${dataValue[0]}`
        );
        setData(data.data);
        console.log(url + `questionnaire/${dataValue[0]}`)
    }

  
    const submit = async ()=>{
        console.log(data)
        // if(dataValue[3]=="true"){
        //     const value = await update(data,
        //         url + `questionnaire`
        //     );
        //     if (value == true) {
        //     window.location.reload();
        //     toast.success("Données enregistrées avec succès !");
        // } else {
        //     toast.error("Problème serveur, réessayez plus tard !");
        // }
        // }else{     
        //     toast.error("Vous n'avez pas le droit de faire une modification!");
        // }
    }
    const choiceQcm = ( index1, index2, checkedValue) => {
        setData(prev =>
            prev.map((question, i) => {
            if (i !== index1) return question;

            return {
                ...question,
                choicequestion: question.choicequestion.map((choice, j) =>
                j === index2
                    ? { ...choice, checked: checkedValue }
                    : choice
                )
            };
            })
        );
    };

    useEffect(() => {
        getDataifExiste();
     }, []);
    return(<>
    <div class="flex h-screen ">
        <main class="flex-1 ">   
            <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto">
                <div class="flex gap-6 max-w-7xl mx-auto border border-gray-200">
                    <div class="flex-1 bg-white ">
                        <div class=" p-6">
                            <div>
                                <div class="flex items-center justify-between mb-2">
                                    <p class=" font-semibold text-gray-900">Questionnaire d’évaluation post-formation en  <b className="text-softbleu">{dataValue[1]}</b>, animé par l'organisme   <b className="text-softbleu">{dataValue[2]}</b> .</p>
                                    <button class="bg-softbleutini-12 hover:bg-softbleushade-12 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2" onClick={()=>submit()}>
                                       Enregistrer
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-6 border-t border-gray-200">
                            <table class="w-full py-4 overflow-y-auto ">
                            <tbody class="divide-y divide-gray-100">
                            {data.map((value, index) => (
                                <React.Fragment key={index}>
                                    <tr className="group bg-gray-50 ">
                                        <td colSpan={100} className="py-4 px-4 col-span-100">
                                            {value.question}
                                        </td>
                                        <td className="w-8" > 
                                        </td>
                                    </tr>
                                    {/* {value.choicequestion?.map((func, idx) => (
                                        <tr key={idx}>
                                            <td className="py-4 px-4 pl-10 text-sm text-gray-700">{func.choice}</td>
                                            <td>
                                                <input
                                                     type={value.ismultiple === 0 ? "radio" : "checkbox"}
                                                    className="btn-neutre-gray"
                                                    defaultChecked={func["checked"]}
                                                    onChange={(event) =>choiceQcm(index,idx,event.target.value)}
                                                />
                                            </td>
                                        </tr>
                                    ))} */}
                                    {value.choicequestion?.map((func, idx) => (
                                    <tr key={idx}>
                                        <td className="py-4 px-4 pl-10 text-sm text-gray-700">{func.choice}</td>
                                        <td>
                                        <input
                                            type={value.ismultiple === 0 ? "radio" : "checkbox"}
                                            name={value.ismultiple === 0 ? `qcm-${index}` : undefined} // même groupe pour radio
                                            className="btn-neutre-gray"
                                            checked={func.checked} // controlled input
                                            onChange={(event) => choiceQcm(index, idx, event.target.checked)}
                                        />
                                        </td>
                                    </tr>
                                    ))}

                                </React.Fragment>
                            ))}
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</>);

}


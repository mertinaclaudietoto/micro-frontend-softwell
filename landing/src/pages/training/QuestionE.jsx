import React,{ useEffect, useState } from "react";
import { accessinfo, listProfile, url, widthClasses } from "../../data/data";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import { handlerVariable } from "../../function/utils";
import { IconeAccess, Sidebar } from "../../components";
import { getData,  update } from "../../function/Axios";
import { dateToLetters } from "../../function/Date";
import Select from "../../function/selectSimple";
export default function QuestionE(){
    const acces = sessionStorage.getItem("access");
    const accesObj = JSON.parse(acces);
    const [question,setQuestion]=useState({
        question:null,
        ismultiple:0,
        choicequestion:[],
    })
    const [choix,setChoix]=useState({
        choice:null,
        point:null,
    })
    const [id,setId]=useState(null);
    
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const [data,setData]=useState([]);
    const handlerAddData =() =>{
        setData((previous) => [
            ...previous,
            question
        ]);
        setQuestion({
            question:null,
            choicequestion:[],
        });
    }
    const getDataifExiste = async ()=>{
        const data = await getData(
            url + `questionnaire/saveorupdate-question-entreprise`
        );
        if(data.data!=null){
            setId(data.data.id)
            setData(JSON.parse(data.data.questionlist) );
        }
    }
    const handlerAddChoice = () => {
        if(question.ismultiple!="text"){
            setQuestion((previous) => ({
                ...previous,
                choicequestion: [
                    ...(previous.choicequestion || []), // s'assure que c'est un tableau
                    choix
                ]
            }));
        }else{
           toast.error("Les réponses libres ne peuvent pas avoir de choix !");
        }
    };
    // suppression choix
    const deleteChoice = (index) => {
        setQuestion((previous) => ({
            ...previous,
            choicequestion: previous.choicequestion.filter((_, i) => i !== index)
        }));
    };
    const deleteQuestion = (index) => {
        setData((previous) => previous.filter((_, i) => i !== index));
    };
    const handlerSelect = (opt)=>{
        if(opt!=null){
            handlerVariable("ismultiple",opt.id,setQuestion);
        } 
    }
    const listeChoix =[
        {id:"radio",name:"choix unique"},
        {id:"checkbox",name:"choix multiple"},
        {id: "text", name: "réponse libre"},
    ]
    const submit = async () => {
    const valueSend = {
        id: id,
        questionlist: JSON.stringify(data)
    };

    // Vérification des droits d'accès
    if (
        accesObj &&
        (accesObj?.question?.modification === null ||
         accesObj?.question?.modification === undefined)
    ) {
        toast.error("Problème d'accée ,vous n'avez pas le droit de modifiée  !");
        return;
    }

    try {
        const value = await update(
            valueSend,
            url + `questionnaire/saveorupdate-question-entreprise`
        );

        if (value === true) {
            window.location.reload();
            toast.success("Données enregistrées avec succès !");
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    } catch (error) {
        toast.error("Erreur lors de l'envoi !");
    }
};

    useEffect(() => {
        getDataifExiste();
     }, []);
    return(<>
    <div class="flex h-screen ">
        <Sidebar/>
        <main class="flex-1 ">   
            <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto">
                <div class="flex gap-6 max-w-7xl mx-auto border border-gray-200">
                    <div class="flex-1 bg-white ">
                        <div class=" p-6">
                            <div>
                                <div class="flex items-center justify-between mb-2">
                                    <p class=" font-semibold text-gray-900">Questionnaire d’évaluation post-formation pour l'entreprise  .</p>
                                    {accesObj && (accesObj?.question?.modification == null || accesObj?.question?.modification === undefined) ? null : (
                                        <button class="bg-softbleutini-12 hover:bg-softbleushade-12 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2" onClick={()=>submit()}>
                                        Enregistrer
                                        </button>
                                    )}

                                </div>
                            </div>
                        </div>
                        <div class="p-6 border-t border-gray-200">
                                <div className="bg-gray-50 p-2 mb-4 rounded">
                                    <div className="flex  justify-end items-end">
                                        <button 
                                            onClick={() => {
                                            handlerAddData();
                                            
                                            }}  
                                            className="btn-neutre-gray hover:bg-softbleutini-11"
                                        >
                                            <i className="fa-regular fa-plus"></i> 
                                        </button>
                                    </div>

                                    <div className="flex gap-2">
                                        <div className="w-2/3">
                                            <label class="label-formulaire mt-2 mb-2">Question</label>
                                            <textarea 
                                                required
                                                placeholder={""} 
                                                rows="1"
                                                class="input_singup "
                                                onChange={(event)=>{handlerVariable("question",event.target.value,setQuestion)}}
                                            ></textarea>
                                        </div>
                                        <div className="w-1/3 relative">
                                            <div className="pt-9">
                                                 <Select options={listeChoix}  onChange={handlerSelect} placeholder="choix unique" value={false}></Select>
                                            </div>
                                           
                                        </div>
                                    </div>
                                      <div className="flex  justify-between gap-2 ">
                                        <div className="col-span-3 w-1/2">
                                            <label className="label-formulaire mt-2 mb-1">Choix</label>
                                            <textarea 
                                                required
                                                placeholder={choix.Choice} 
                                                rows="1"
                                                class="input_singup "
                                                onChange={(event)=>{handlerVariable("choice",event.target.value,setChoix)}}
                                            ></textarea>
                                        </div>
                                        <div className="col-span-3 w-1/2">
                                            <label className="label-formulaire mt-2 mb-1">Point</label>
                                            <input
                                                required
                                                type="number"
                                                min="0"
                                                step="1"
                                                placeholder={choix.Choice}
                                                class="input_singup"
                                                onChange={(event) => {
                                                    const value = Math.max(0, event.target.value);
                                                    handlerVariable("point", value, setChoix);
                                                }}
                                            />
                                        </div>
                                     
                                        <div className="flex justify-center items-center">
                                            <button onClick={() => {handlerAddChoice()}} class="btn-neutre-gray">
                                                    <i class="fa-regular fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div id="tasksList" class="space-y-4 ">
                                        <table class="w-full">
                                            <thead class="bg-gray-50 border-b border-gray-200">
                                                <tr key="choix">
                                                    <th class="tr-thead ">Choix</th>
                                                    <th class="tr-thead">point</th>
                                                    <th class="tr-thead w-8"></th>
                                                </tr>
                                            </thead>
                                            {question.choicequestion.map((v,k)=>(
                                                <tr index={k} >
                                                    <td class="px-6 py-4">{v.choice}</td>
                                                    <td class="px-6 py-4">{v.point}</td>

                                                    <td>
                                                        <button  onClick={() => {deleteChoice(k)}} class="btn-neutre-gray">
                                                            <i class="fa-regular fa-trash-can"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </table>
                                    </div>
                                </div>  
                                 <table class="w-full py-4 overflow-y-auto ">
                                    <thead class="bg-gray-50 border-b border-gray-200">
                                        <tr key="choix">
                                            <th class="tr-thead ">List des  Respences</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-100">
                                    {data.map((value, index) => (
                                        <React.Fragment key={index}>
                                            <tr key={index} className="group bg-gray-50 ">
                                                <td colSpan={100} className="py-4 px-4 col-span-100">
                                                    {value.question}
                                                </td>
                                                <td className="w-8" > 
                                                    <button onClick={() => {deleteQuestion(index)}} >
                                                           <i class="fa-solid fa-trash text-softbleu"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            {value.choicequestion?.map((func, idx) => (
                                                <tr key={idx}>
                                                    <td className="py-4 px-4 pl-10 text-sm text-gray-700">{func.choice}</td>
                                                    <td className="py-4 px-4 pl-10 text-sm text-gray-700 w-8">{func.point}</td>
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


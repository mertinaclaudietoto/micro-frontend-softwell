import React,{ useEffect, useState } from "react";
import { accessinfo, listProfile, url, widthClasses } from "../../data/data";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { handlerVariable } from "../../function/utils";
import { IconeAccess, Sidebar } from "../../components";
import { getData,  send,  update } from "../../function/Axios";
export default function ResponsePostFormationEntreprise(){
    const { encryptParametres } = useParams();
    const decoded = atob(encryptParametres);
    const dataValue = decoded.split("|");
    const [hasAlreadyAResponce,setHasAlreadyAResponce]=useState(false);

    // console.log(dataValue);

    const [data,setData]=useState([]);

    const getDataifExiste = async ()=>{
        // question a repondre
        const data = await getData(
            url + `questionnaire/saveorupdate-question-entreprise`
        );
        setData(JSON.parse(data.data.questionlist));
        // reponse
        const dataResponce = await getData(
            url + `response-question/getbyid?idtrainingValidate=${dataValue[0]}&idemploy=${dataValue[3]}&idtypequestion=2`
        )
        if(dataResponce.data!=null){
            setHasAlreadyAResponce(true);
            setData(JSON.parse(dataResponce.data.responce));
        }
    }
  
  
    const submit = async ()=>{
        // console.log("responce");
        // console.log(data);
        // console.log(dataValue);
        const valueSave={
            idtrainingValidate:Number(dataValue[0]) ,
            idemploy: Number(dataValue[3]),
            idtypequestion:2,
            note:0,
            date:new Date(),
            responce:JSON.stringify(data),
            total:0,
        }
       
        if(dataValue[4]=="true" && hasAlreadyAResponce==false){
            const value = await send(valueSave,
                url + `response-question`
            );
            if (value == true) {
            window.location.reload();
            toast.success("Données enregistrées avec succès !");
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
        }else{           
            toast.error("Vous n’avez pas le droit d’effectuer une modification ou vous avez déjà répondu!");
        }
    }
    const choiceQcm = ( index1, index2, checkedValue) => {
        setData(prev =>
            prev.map((question, i) => {
            if (i !== index1) return question;
            if(question.ismultiple=="text"){
                return {
                    ...question,
                    response:checkedValue ///ou text responce
                }
            }else{
                return {
                    ...question,
                    choicequestion: question.ismultiple=="checkbox"  ? question.choicequestion.map((choice, j) =>
                    j === index2
                        ? { ...choice, checked: checkedValue }
                        : choice
                    ) : question.choicequestion.map((choice, j) =>
                    j === index2
                        ? { ...choice, checked: true }
                        : { ...choice, checked: false }
                    ) 
                };
            }
            })
        );
        // console.log(data);
    };
    useEffect(()=>{},[data])
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
                                    <button class="bg-softbleu hover:bg-softbleushade-12 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2" onClick={()=>submit()}>
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
                                    {value.ismultiple=="text" ?
                                        <tr key={"t"+index}>     
                                            <td className="col-span-2  p-5">
                                                <textarea
                                                    type={value.ismultiple}
                                                    value={value.response}
                                                    className="btn-neutre-gray w-full "
                                                    // defaultChecked={func["checked"]}
                                                    onChange={(event) =>choiceQcm(index,0,event.target.value)}
                                                />
                                            </td>
                                        </tr>
                                     :
                                    value.choicequestion?.map((func, idx) => (
                                        <tr key={idx}>
                                            <td className="py-4 px-4 pl-10 text-sm text-gray-700">{func.choice} </td>
                                            <td>
                                                <input
                                                    type={value.ismultiple}
                                                    className="btn-neutre-gray"
                                                    // defaultChecked={func["checked"]}
                                                    checked={!!func.checked}
                                                    onChange={(event) =>choiceQcm(index,idx,event.target.value)}
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


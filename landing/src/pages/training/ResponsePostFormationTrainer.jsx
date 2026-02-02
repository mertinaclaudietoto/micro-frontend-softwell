import React,{ useEffect, useState } from "react";
import { accessinfo, listProfile, url, widthClasses } from "../../data/data";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import { handlerVariable } from "../../function/utils";
import { IconeAccess, Sidebar } from "../../components";
import { getData,  send,  update } from "../../function/Axios";

export default function ResponsePostFormationTrainer(){
    const { encryptParametres } = useParams();
    const decoded = atob(encryptParametres);
    const dataValue = decoded.split("|");
    const [hasAlreadyAResponce,setHasAlreadyAResponce]=useState(false);

    // console.log(dataValue);

    const [data,setData]=useState([]);

    const getDataifExiste = async ()=>{
        const data = await getData(
            url + `questionnaire/${dataValue[0]}`
        );
        setData(JSON.parse(data.data.questionlist));
    
        const dataResponce = await getData(
            url + `response-question/getbyid?idtrainingValidate=${dataValue[0]}&idemploy=${dataValue[3]}&idtypequestion=1`
        )
        if(dataResponce.data!=null){
            setHasAlreadyAResponce(true);
            // console.log(dataResponce.data);
            // console.log(JSON.parse(dataResponce.data.responce));
            setData(JSON.parse(dataResponce.data.responce));
        }
    }
    const calculeNote = () => {
        let note = 0;
        data.forEach((question) => {
            question.choicequestion.forEach((choice) => {
            if (choice.checked) {
                note += Number(choice.point);
            }
            });
        });
        return note;
    };

     const calculeTotal= () => {
        let note = 0;
        data.forEach((question) => {
            question.choicequestion.forEach((choice) => {
            note += Number(choice.point);
            });
        });
        return note;
    };
  
    const submit = async ()=>{
        console.log("responce");
        console.log(data);
        console.log(dataValue);
        console.log(calculeTotal());
        const valueSave={
            idtrainingValidate:Number(dataValue[0]) ,
            idemploy: Number(dataValue[3]),
            idtypequestion:1,
            note:calculeNote(),
            date:new Date(),
            responce:JSON.stringify(data),
            total:calculeTotal(),
        }
        // console.log(valueSave);
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
            return {
                ...question,
                choicequestion: question.ismultiple==1  ? question.choicequestion.map((choice, j) =>
                j === index2
                    ? { ...choice, checked: checkedValue }
                    : choice
                ) : question.choicequestion.map((choice, j) =>
                j === index2
                    ? { ...choice, checked: true }
                    : { ...choice, checked: false }
                ) 
            };
            })
        );
        console.log(data);
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
                                    {value.choicequestion?.map((func, idx) => (
                                        <tr key={idx}>
                                            <td className="py-4 px-4 pl-10 text-sm text-gray-700">{func.choice}</td>
                                            <td>
                                                <input
                                                    type={value.ismultiple === 0 ? "radio" : "checkbox"}
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


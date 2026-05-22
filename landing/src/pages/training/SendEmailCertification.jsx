import { useEffect, useState } from "react";
import { textbackground, url,  url_recrutement_image, url_sendemail} from "../../data/data";
import {  Sidebar } from "../../components";
import { getData, send } from "../../function/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SeeModelEmail from "../../components/email/SeeModelEmail";
import {  generateEditorJsForModelingPostFormationEmail } from "../../function/email-format";
import UpdateModelEmailSendConvocation from "../../components/email/training/UpdateModelEmailSendConvocation";
 
export default function SendEmailCertification({value,close,lastParticipant}){
    const acces = sessionStorage.getItem("access");
    const accesObj = JSON.parse(acces);
    const [participant,setParticipant]=useState(lastParticipant); 
    const [participantDayPresence,setParticipantDayPresence]=useState([]);
    const [modelConvocation,setModelConvocation]=useState(null);
    const [showUpdateModelforThisEmail,setShowUpdateModelforThisEmail]=useState(false);
    const [showLink,setShowLink]=useState();
    const [seeValue,setSeeValue]=useState();
    const [listemail,setListEmail]=useState([]);
    const getParticipantDayPresence = async (modelConvocation)=>{
            const data = await getData(url + `v_participant_validate/participants-session-presence/${value.id}`);
            if(data.data!=null){
                setParticipantDayPresence(data.data);
                setEmailTosends(data.data,modelConvocation);
            }   
    }
    //l'id convocation sera toujours 1 
    const getModelEmail = async ()=>{
        const data = await getData(url_sendemail + `model_with_parameteres/getById?id=2`);
        if(data.data!=null){
            setModelConvocation(data.data);
            getParticipantDayPresence(data.data);
        }   
    }
    const changeModelEmailForThisConvocation = async (modelConvocation)=>{
            
            setModelConvocation(modelConvocation);
            setEmailTosends(participantDayPresence,modelConvocation);
    }

    //liste de email a envoyee au candidat 
    const changeValueAfterUpdate = () => {
        setListEmail(prev =>
            prev.map(value =>
            value.idparticipant === seeValue.idparticipant
                ? seeValue
                : value
            )
        );
    };
    const changeCheckedValue = (valueToToggle) =>{
         setListEmail(prev =>
            prev.map(value =>
                value.idparticipant === valueToToggle.idparticipant
                ? { ...value, checked: !value.checked }
                : value
            )
        );
    }
    const setEmailTosends = (participantDayPresenceData,modelConvocation) => {
        if(modelConvocation!=null){
            var table = participant.map((p) => ({
                    id:p.idparticipant,
                    matricule:p.matricule,
                    photo:p.photo,
                    name:p.name,
                    firstname:p.firstname,
                    email:p.email,
                    idparticipant: p.idparticipant,
                    idtraining_validate: value.id,
                    date: new Date(),
                    checked:true,
                    content: generateEditorJsForModelingPostFormationEmail(
                            value.themeName,
                    ///linkQuestionEntreprise
                            "",
                            "",
                            typeof modelConvocation.content =="string"?  JSON.parse(modelConvocation.content) : modelConvocation.content
                    ),
                }));
           
            setListEmail(
                table
            );
        }
    };
    const submit = async ()=>{
        const toastId = toast.loading("Envoi en cours...");
        const sendData = listemail.map((p) => p.checked==true?({
                email:p.email,
                idparticipant: p.idparticipant,
                idtraining_validate: value.id,
                idmodel_with_parameter:3,
                date: new Date(),
                content: JSON.stringify(p.content),
            }) :<></>)
        const formatModel = {
            listemail:sendData,
            name:"Email post formation"
        }
        const data = await send(formatModel,url_sendemail + "sendemail/send-convocation")
        // console.log(value)
        if (data == true) {
            toast.update(toastId, {
                render: "Email envoyées avec succès !",
                type: "success",
                isLoading: false,
                autoClose: 3000,
            });
            close(false);
        } else {
             toast.update(toastId, {
                render: "Problème serveur, réessayez plus tard !",
                type: "error",
                isLoading: false,
                autoClose: 3000,
            });
        }
    }
    useEffect(  ()=>{
        getModelEmail();
    },[])
    return(
        <>
        { showUpdateModelforThisEmail ?<UpdateModelEmailSendConvocation close={setShowUpdateModelforThisEmail} value={modelConvocation}  changeModelEmailForThisConvocation={changeModelEmailForThisConvocation}/>  :<></> }
        { showLink ? <SeeModelEmail close={setShowLink} data={seeValue} setData={setSeeValue}  changeValueAfterUpdate={ changeValueAfterUpdate } nomformation={value.themeName} /> :<></>}
        <>
         <div class="flex">
            <Sidebar/>
            <main class="flex-1 ">  
                <div class=" md:p-8 bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                    <div className=" max-w-7xl mx-auto p-10 flex bg-white">
                        <div className="flex-1  border-rigth ">
                            <h2 class="text-xl font-semibold text-gray-800 py-2">Envois Email
                            </h2>
                            <table class="w-full pt-2 ">
                                <thead class="bg-gray-100 border-b border-gray-200">
                                    <tr>
                                        <th class="tr-thead text-xl font-bold">{value?.id}</th>
                                        <th class="tr-thead text-xl">{value?.themeName}</th>
                                        <th class="tr-thead text-xl">{value?.adminName} {value?.adminFirstname}</th>
                                        <th class="text-softbleu"
                                            onClick={()=>setShowUpdateModelforThisEmail(true)}
                                         >Model email</th>
                                        <th  className="text-softbleu" onClick={()=>close(false)}>Retour</th>
                                    </tr>
                                </thead>
                            </table>
                            
                            <div className="grid grid-cols-1 px-8 justify-center items-center ">
                                <div class="overflow-x-auto  mt-2 ">
                                    {/* <h3 class="font-semibold text-gray-800 mb-1">Listes session</h3> */}
                                        <div  className="w-full py-4">
                                            <table className="w-full">
                                            <thead className="bg-gray-50 border-b border-gray-200">
                                                <tr>
                                                    <th className="tr-thead">Matricule</th>
                                                    <th className="tr-thead">Photo</th>
                                                    <th className="tr-thead">Nom</th>
                                                    <th className="tr-thead">Prenoms</th>
                                                    <th className="tr-thead">Adress e-mail</th>
                                                    <th className="tr-thead">Model</th>
                                                    <th class="text-softbleu"  >
                                                        <button onClick={()=>{submit()}} >Envoyer</button>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                              {listemail.map((v, index) => (
                                                <tr key={index} className="hover:bg-gray-50">
                                                    <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[index]}`}>{v.matricule}</span></td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">
                                                         <img
                                                            src={`${url_recrutement_image}${v.photo}`}
                                                            alt="photo candidat"
                                                            className="h-10 w-10 rounded-full object-cover"
                                                        />
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">{v.name} </td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">{v.firstname}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">{v.email}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">
                                                        <button className="" onClick={()=>{ 
                                                                setShowLink(true),
                                                                setSeeValue(v);
                                                            }}>
                                                            <i class="fa-solid fa-clipboard-question"></i>
                                                        </button>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">       
                                                        <input
                                                            type="checkbox"
                                                            checked={v.checked}
                                                            onClick={()=>{changeCheckedValue(v)}}
                                                            className="btn-neutre-gray"
                                                            // onChange={(event) =>choiceQcm(index,idx,event.target.value)}
                                                        />
                                                    </td>
                                                </tr>
                                                 ))}
                                            </tbody>
                                            </table>
                                        </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </>
    </>
    );
}
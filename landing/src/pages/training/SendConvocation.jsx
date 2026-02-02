import { useEffect, useState } from "react";
import { textbackground, url, url_front, url_recrutement_image, url_sendemail} from "../../data/data";
import {  dateToLetters, diffDate } from "../../function/Date";
import {  CardAddSession, Sidebar } from "../../components";
import { getData, send } from "../../function/Axios";
import CardUpdateSession from "../../components/card/popup/CardUpdateSession";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardForwardLink from "../../components/card/popup/CardForwardLink";
import SeeModelEmail from "../../components/email/SeeModelEmail";
import { generateEditorJsFromSessions } from "../../function/email-format";

export default function SendConvocation({value,close,lastParticipant}){
    console.log("validation",value)
    const acces = sessionStorage.getItem("access");
    const accesObj = JSON.parse(acces);
    const [participant,setParticipant]=useState(lastParticipant); 
    const [participantDayPresence,setParticipantDayPresence]=useState([]); 
    const getParticipantDayPresence = async ()=>{
            const data = await getData(url + `v_participant_validate/participants-session-presence/${value.id}`);
            if(data.data!=null){
                setParticipantDayPresence(data.data);
                setEmailTosends(data.data);
            }   
    }
    const [showLink,setShowLink]=useState();
    const [seeValue,setSeeValue]=useState();
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
    const [listemail,setListEmail]=useState([]);
    
    const changeCheckedValue = (valueToToggle) =>{
         setListEmail(prev =>
            prev.map(value =>
                value.idparticipant === valueToToggle.idparticipant
                ? { ...value, checked: !value.checked }
                : value
            )
            );
    }
    const setEmailTosends = (participantDayPresenceData) => {
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
                content: 
                    generateEditorJsFromSessions(
                        participantDayPresenceData.filter(
                            (session) => session.idparticipant === p.idparticipant
                        ),
                        p.themeName
                    )
                ,
            }))
        setListEmail(
            table
        );
    };

    const submit = async ()=>{
        console.log("validation")
        const sendData = listemail.map((p) => p.checked==true?({
                email:p.email,
                idparticipant: p.idparticipant,
                idtraining_validate: value.id,
                date: new Date(),
                content: JSON.stringify(
                    generateEditorJsFromSessions(
                        participantDayPresence.filter(
                            (session) => session.idparticipant === p.idparticipant
                        ),
                        p.themeName
                    ))
                ,
            }) :<></>)

        const data = await send(sendData,url_sendemail + "sendemail/send-convocation")
        // console.log(value)
        if (data == true) {
            toast.success("Données insérées avec succès !");
            close(false);
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    }
    useEffect(()=>{
     getParticipantDayPresence ();
    },[])
    return(
        <>
        {/* show model email */}
        { showLink ? <SeeModelEmail close={setShowLink} data={seeValue} setData={setSeeValue}  changeValueAfterUpdate={ changeValueAfterUpdate } nomformation={value.themeName} /> :<></>}
        <>
         <div class="flex">
            <Sidebar/>
            <main class="flex-1 ">  
                <div class=" md:p-8 bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                    <div className=" max-w-7xl mx-auto p-10 flex bg-white">
                        <div className="flex-1  border-rigth ">
                            <h2 class="text-xl font-semibold text-gray-800 py-2">Envois Convocation
                            </h2>
                            <table class="w-full pt-2 ">
                                <thead class="bg-gray-100 border-b border-gray-200">
                                    <tr>
                                        <th class="tr-thead text-xl font-bold">{value?.id}</th>
                                        <th class="tr-thead text-xl">{value?.themeName}</th>
                                        <th class="tr-thead text-xl">{value?.adminName} {value?.adminFirstname}</th>
                                        <th class="text-softbleu">Model email</th>
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
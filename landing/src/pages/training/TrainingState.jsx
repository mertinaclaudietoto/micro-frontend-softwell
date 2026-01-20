import { useEffect, useState } from "react";
import { infocandidate, listeformateur, listsmallformation, textbackground, trainingListToBeValidated, usersprofile ,getcolorstate, participantTraining, url} from "../../data/data";
import { getAge,dateToLetters,  diffDate1, diffDate } from "../../function/Date";
import {  CardAddSession, Sidebar, TextState,CardSmallTraining } from "../../components";
import CardSession from "../../components/card/training/CardSession";
import { Link, useParams } from "react-router-dom";
import { getData } from "../../function/Axios";
import { formatDate } from "../../function/utils";

export default function TrainingState({value}){
    console.log("trainer state ",value)
    const acces = sessionStorage.getItem("access");
    const accesObj = JSON.parse(acces);
    const [showTrainer,setShowTrainer]=useState(false);
    const [showAddsession,setShowAddsession]=useState(false);
    const [info,setInfo]=useState( listsmallformation[0])
    const [detailleTheme,setDetailleTheme]=useState()
    const [participant,setParticipant]=useState([]); 
    const [themes,setThemes]=useState(null); 
    const [listSession,setSession]=useState([]); 
    const getParticipant = async ()=>{
            const data = await getData(url + `v_participant_validate/getparticipant?id=${value.id}`);
            if(data.data!=null){
                setParticipant(data.data);
            }   
        }
     const getListSession = async ()=>{
            const data = await getData(url + `session/list/${value.id}`);
            if(data.data!=null){
                console.log("liste ,,,",data.data);
                setSession(data.data);
            }   
        }
    const getTheme = async ()=>{
        const data = await getData(url + `training-themes/getById?id=${value.id}`);
        if(data.data!=null){
            setThemes(data.data);
        }   
    }
    const [showLink,setShowLink]=useState();
    useEffect(()=>{
        getListSession();
        getTheme()
        getParticipant()
    },[])
    return(
        <>
        { accesObj && (accesObj?.session?.ajout == null || accesObj?.session?.ajout == undefined) && showAddsession ? <CardAddSession  close={setShowAddsession} idvalidation={value.id} ></CardAddSession> 
        // showLink ?
        // <div className="background_transparent_popup">
        //     <div class="grid grid-cols-1 bg-white w-100 p-10 rounded-xl">
        //         <div class="flex flex-col items-center">
        //             <div class="w-32 h-32 rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-softbleu transition-colors">
        //                 <img src="login.svg"/>
        //             </div>
        //         </div>
        //         <p className="text-red-500 text-center text-sm  ">{text}</p>
        //         <div className='my-2'>
        //             <label class="block text-sm font-medium text-gray-700 mb-2">Login</label>
        //             <input 
        //                 type="text" 
        //                 placeholder={login.login} 
        //                 class="input_formulaire"
        //                 onChange={(event)=>{handlerVariable("login",event.target.value,setLogin)}}
        //             />
        //         </div>
        //         <div className='my-2'>
        //             <label class="block text-sm font-medium text-gray-700 mb-2">Mots de passe</label>
        //             <input 
        //                 type="password" 
        //                 class="input_formulaire"
        //                 placeholder={login.password}
        //                 onChange={(event)=>{handlerVariable("password",event.target.value,setLogin)}}
        //             />
        //         </div>
        //         <p className="text-softbleu text-sm  flex justify-center items-center ">
        //             vous n'avez pas de compte inscrivez-vous
        //         </p>
        //         <div class="flex items-center justify-end gap-3 mt-3">
        //             <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>{close(false)}}>
        //                 Annuler
        //             </button>
        //             <button class="px-6 py-2 bg-softbleu hover:bg-softbleushade-12 text-white rounded-lg font-medium" onClick={()=>submit()}>
        //                 Connexion
        //             </button>
        //         </div>
        //     </div>
        // </div>
        :<>
         <div class="flex">
            <Sidebar/>
            <main class="flex-1 ">  
                <div class=" md:p-8 bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                    <div className=" max-w-7xl mx-auto p-10 flex bg-white">
                        <div className="flex-1  border-rigth ">
                            {/* filtre */}
                            <div class="p-4 mb-2 border-b border-gray-200 sticky top-0 z-50 pink ">
                                <div class="flex items-center justify-between">
                                    <h2 class="text-xl font-semibold text-gray-800">Liste des sessions pour cette formation
                                        {/* <p className="text-xs text-gray-400">{`page ${numpage}/${Math.ceil(nbrligne / nbrSize)}`}</p> */}
                                    </h2>
                                    
                                    <div class="flex items-center space-x-3">
                                        <div className="flex space-x-2">
                                            <button class="px-4 py-2 bg-softbleutini-12 text-white rounded-lg text-sm flex items-center hover:bg-softbleu" onClick={()=>{setShowAddsession(true)}}>
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <button className="btn-neutre-gray" >
                                            <i className="fas fa-arrow-left"></i>
                                            </button>
                                            <button className="btn-neutre-gray" >
                                                <i className="fas fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* filtre */}
                            <table class="w-full pt-2 ">
                                <thead class="bg-gray-100 border-b border-gray-200">
                                    <tr>
                                        <th class="tr-thead text-xl font-bold">{value?.id}</th>
                                        <th class="tr-thead text-xl">{value?.themeName}</th>
                                        <th class="tr-thead text-xl">{value?.adminName} {value?.adminFirstname}</th>
                                    </tr>
                                </thead>
                            </table>
                            <div className="grid grid-cols-1 p-8 justify-center items-center ">
                                <div class="overflow-x-auto  mt-2 ">
                                    {/* <h3 class="font-semibold text-gray-800 mb-1">Listes session</h3> */}
                                    {listSession.map((valueL, index) => (
                                        <div key={index} className="w-full py-4">
                                            <div className="grid grid-cols-5 mb-2 px-4 justify-end items-end bg-blue-50 ">
                                                <div className="text-md font-bold text-blue-800">{valueL.Datestart?.split("T")[0]}</div>
                                                <div className="text-md font-bold text-blue-800">{valueL.Dateend?.split("T")[0]}</div>
                                                <div className="text-blue-800">
                                                    {diffDate(valueL.Datestart?.split("T")[0],valueL.Dateend?.split("T")[0])}
                                                </div>
                                                <div className="text-blue-800">
                                                    voir participants
                                                </div>
                                             <div className="flex justify-end items-end text-blue-800">
                                                <i className="fa-solid fa-pen"></i>
                                            </div>

                                            </div>

                                            <table className="w-full">
                                            <thead className="bg-gray-50 border-b border-gray-200">
                                                <tr>
                                                <th className="tr-thead">Jours</th>
                                                <th className="tr-thead">Debut matin</th>
                                                <th className="tr-thead">Fin matin</th>
                                                <th className="tr-thead">Debut soir</th>
                                                <th className="tr-thead">Fin soir</th>
                                                <th className="tr-thead"></th>
                                                </tr>
                                            </thead>

                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {valueL.sessionday.map((v, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 text-sm text-gray-900">{v.Date?.split("T")[0]}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">{v.Heurstartmoring}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">{v.Heurendmoring}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">{v.Heurstartaftern}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">{v.Heurendaftern}</td>

                                                    <td className="px-6 py-4 text-sm text-gray-500">
                                                        <Link to={`/presence/${btoa(v.id|value.themeName|v.Date)}`}>
                                                            <i className="fas fa-file-alt"/>
                                                        </Link>
                                                    </td>
                                                </tr>
                                                ))}
                                            </tbody>
                                            </table>
                                        </div>
                                    ))}
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </>}
        </>
        
    );
}
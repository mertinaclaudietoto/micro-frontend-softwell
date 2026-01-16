import { useEffect, useState } from "react";
// import { infocandidate } from "../../../data/candidate";
import { getAge,dateToLetters, diffDate } from "../../../function/Date";
import { ChoixModelEmail, Sidebar } from "../../../components";
import { useParams } from "react-router-dom";
import { textbackground, textmandatory, url_recrutement, url_recrutement_image } from "../../../data/data";
import { getData, update } from "../../../function/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
// modifi
export default function CVCandidate(){
    const [experience ,setExperience]=useState('1');
    const [showSendEmail ,setShowEmail]=useState(false);

    const [note ,setNote]=useState(null);
    const { id ,idrequest,idpost,rang,idstep,email} = useParams();
    const [data, setData] = useState({
    photo:null,
    name: null,
    FirstName: null,
    birthDate: null,
    idGenre: null,
    email: null,
    tel: null,
    idLocalisation: 3,
    description: null,
    login: null,
    password: null,
    localisationName:null,
    candidateLanguages: [],
    candidatehardskill: [],
    candidatesoftskill: [],
    candidatediplomes:[],
    education: [],
    experience: [],
    certificationCandidates: []
    });
    const getNote = async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `notecandidate/getById?idcandidat=${id}&&idrequest=${idrequest}`
        );
        if(datalistThemes.data!=null){
            setNote(datalistThemes.data)
        }
    }
    const getInfoCandidate = async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `candidate/post?id=`+id+`&&idpost=`+idpost
        );
        if(datalistThemes.data!=null){
            setData(datalistThemes.data)
        }
    }
    const refusée =async ()=>{
        const data =  await update(
            url_recrutement + `candidate/refused?id=`+id
        );
        if (data == true) {
            toast.success("Données insérées avec succès !");
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    }
    const validée =async ()=>{
        if(email==1){
            setShowEmail(true);
        }else{
            const data =  await getData(
                url_recrutement + `recruitmentcandidate/nextstep?id=`+id+`&range=`+rang
            );
            if (data == true) {
                toast.success("Données insérées avec succès !");
            } else {
                toast.error("Problème serveur, réessayez plus tard !");
            }
        }
    }
    useEffect(() => {
        getInfoCandidate();
        getNote();
    },[])
    return(
        <>
        {showSendEmail ==true ?
        <>
            <ChoixModelEmail close={setShowEmail} id={id}  rang={rang} email={data.email}/>
        </>: 
        <div class="flex h-screen ">
        <Sidebar/>
        <main class="flex-1 "> 
            <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                <div class="max-w-7xl mx-auto bg-white p-10">
                    <div className="flex">
                        <div className="flex-1 w-2/3 border-rigth ">
                            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                                <div class="bg-white  p-8 border-rigth ">
                                    <div class="flex flex-col items-center">
                                        <img src={url_recrutement_image+data.photo} 
                                            alt="Kate Prokopchuk" 
                                            class="w-32 h-32 rounded-full object-cover mb-4"/>
                                        <table class="w-full">
                                            <thead class="bg-gray-50 border-b border-gray-200">
                                                <tr>
                                                    <th class="tr-thead">Obligatoire</th>
                                                    <th class="tr-thead">Souhaiter</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                {note!=null ?
                                                    <>
                                                    <tr>
                                                        <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[2]}`}>{note.totalCandidatRequired}/{note.totalPostRequired}</span></td>
                                                        <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[6]}`}>{note.totalCandidatWish}/{note.totalPostWish}</span></td>
                                                    </tr>
                                                    </>
                                                    :null
                                                }
                                                <tr className="p-2">
                                                    <td className="pt-2">
                                                        <button className="btn-neutre-gray" onClick={()=>refusée()} title="Précédent">
                                                            refusée
                                                        </button>
                                                    </td>
                                                    <td className="pt-2">
                                                        <button className="btn-neutre-gray" onClick={()=>validée()} title="Suivant">
                                                            étape suivante
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="bg-white p-6 ">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <p class=" text-sm-gray col-span-2">{data.name} {data.firstName}</p>
                                        <p class="text-sm-gray col-span-2">{data.email}</p>
                                        <p class="text-sm-gray">{data.localisationName}</p>
                                        <p class="text-sm-gray">tel:  {data.tel}</p>
                                        <p class="text-sm-gray">age:  {getAge(data.birthDate)}</p>
                                        <p class="text-sm-gray"></p>
                                        <p class="text-sm-gray col-span-2">{data.description}</p>
                                    </div>
                                </div>
                                <div class="md:col-span-2 border-top">
                                    <div class="mt-6 bg-white  overflow-hidden">
                                        <div class="p-6 space-y-4 ">
                                            {data.experience
                                            .map((exp, index) => (
                                                <div key={index} className="border-l-4 border-softbleu pl-4 py-2">
                                                    <div className="grid grid-cols-2">
                                                        <div>
                                                            <div className="text-xs text-gray-500 mb-1">{dateToLetters(exp.DateDebut)} à {dateToLetters(exp.DateFin)} </div>
                                                            <div className="text-lg font-bold text-gray-800 mb-2">{diffDate(exp.DateDebut,exp.DateFin)}</div>
                                                        </div>
                                                        <div>
                                                            <div className="mb-2">
                                                                <div className="text-lg  text-gray-800 mb-2">{exp.Entreprise}  {exp.Poste} </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <div>
                                                            <p className="text-gray-500 text-sm">
                                                                {exp.Description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/3 relative" >
                            <Link to={`/postulants/${idrequest}/${idpost}/${idstep}/${rang}/${email}`} className="btn-neutre-gray absolute top-2 right-2 "  title="Suivant">
                                retour
                            </Link>
                            <div class="bg-white m-2 p-6 border-bottom">
                                <div class="grid grid-cols-1  gap-6">
                                    <p class="text-sm-gray">Diplomes</p>
                                    <div className="flex flex-wrap gap-1">
                                        {data.candidatediplomes.map((value,index)=>(
                                             value.candidatId!=null ? 
                                            <span key={index} class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textmandatory[value.MandatoryId!=null ? value.MandatoryId:0 ]}`}>{value.name}</span>
                                            :null
                                        ))}
                                    </div>

                                    <p class="text-sm-gray">Certifications</p>
                                    <div className="flex flex-wrap gap-1">
                                        {data.certificationCandidates.map((value,index)=>(
                                             value.idCandidat!=null ? 
                                            <span key={index} class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textmandatory[value.mandatory!=null ? value.mandatory:0 ]}`}>{value.name}</span>
                                            :null
                                        ))}
                                    </div>
                                    <p class="text-sm-gray">Langues</p>
                                    <div className="flex flex-wrap gap-1">
                                        {data.candidateLanguages.map((value,index)=>(
                                            value.idCandidat!=null ? 
                                            <span key={index} class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textmandatory[value.mandatory!=null ? value.mandatory:0 ]}`}>{value.name}</span>
                                            :null
                                        ))}
                                    </div>
                                    <p class="text-sm-gray">Hard skills</p>
                                    <div className="flex flex-wrap gap-1">
                                        {data.candidatehardskill.map((value,index)=>(
                                            value.idCandidat!=null ? 
                                            <span key={index} class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textmandatory[value.mandatory!=null ? value.mandatory:0 ]}`}>{value.name}</span>
                                            : null
                                        ))}
                                    </div>
                                    <p class="text-sm-gray">Soft skills</p>
                                    <div className="flex flex-wrap gap-1">
                                        {data.candidatesoftskill.map((value,index)=>(
                                            value.idCandidat!=null ? 
                                            <span key={index} class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textmandatory[value.mandatory!=null ? value.mandatory:0 ]}`}>{value.name}</span>
                                            :null
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white m-2 p-6 ">
                                {/* <div class="flex items-center justify-between mb-6">
                                    <h3 class="text-xl font-bold text-gray-800">Diplomes</h3>
                                
                                </div> */}
                                <div class="space-y-3">
                                    {data.education.map((value,index)=>(
                                        <div index={index} class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                            <div class="flex items-center gap-3">
                                                <i className="fa-solid fa-award w-8 h-8 text-4xl text-softbleu"></i>
                                                <div>
                                                        <div class="text-sm font-medium text-gray-800">{value.nameDiplome}</div>
                                                        <div class="text-sm-gray">{value.nameUniversity}</div>
                                                </div>
                                            </div>
                                            <span class="text-sm text-gray-500">{value.year}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </div>
        }
       </>
       

    );
}
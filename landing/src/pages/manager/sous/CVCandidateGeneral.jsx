import { useEffect, useState } from "react";
// import { infocandidate } from "../../../data/candidate";
import { getAge,dateToLetters, diffDate } from "../../../function/Date";
import { Sidebar } from "../../../components";
import { useParams } from "react-router-dom";
import { textbackground, textmandatory, url_recrutement, url_recrutement_image } from "../../../data/data";
import { getData } from "../../../function/Axios";
// modifi
export default function CVCandidateGeneral(){
    const [experience ,setExperience]=useState('1');
    const [note ,setNote]=useState(null);
    const { id ,idrequest,idpost} = useParams();
    console.log({id,idrequest})
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
    education: [],
    experience: [],
    certificationCandidates: []
    });
    const getInfoCandidate = async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `candidate/`+id
        );
        if(datalistThemes.data!=null){
            console.log(datalistThemes.data);
            setData(datalistThemes.data)
        }
        
    }
    useEffect(() => {
        getInfoCandidate();
    },[])
    return(
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
                                        {/* <h2 class="text-2xl font-bold text-gray-800 text-center">{data.name}</h2>
                                        <h3 class="text-2xl font-bold text-gray-800 mb-4">{data.firstName}</h3> */}
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
                                            .filter(item => item.type === experience)
                                            .map((exp, index) => (
                                                <div key={index} className="border-l-4 border-softbleu pl-4 py-2">
                                                    <div className="grid grid-cols-4">
                                                        <div>
                                                            <div className="text-xs text-gray-500 mb-1">{dateToLetters(exp.dateDebut)} -- {dateToLetters(exp.dateFin)} </div>
                                                            <div className="text-lg font-bold text-gray-800 mb-2">{diffDate(exp.dateDebut,exp.dateFin)}</div>
                                                        </div>
                                                        <div>
                                                            <div className="mb-2">
                                                                <span className="text-xs text-gray-500">{exp.entreprise}</span>
                                                                <p className="text-sm font-medium text-gray-800">
                                                                    {exp.poste}
                                                                </p>
                                                            </div>
                                                        
                                                        </div>

                                                        <div className="col-span-2">
                                                            <div>
                                                            
                                                                <p className="text-gray-700">
                                                                    {exp.description}
                                                                </p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/3" >
                            <div class="bg-white m-2 p-6 border-bottom">
                                <div class="grid grid-cols-1  gap-6">
                                    <p class="text-sm-gray">Certifications</p>
                                    <div className="flex flex-wrap gap-1">
                                        {data.certificationCandidates.map((value,index)=>(
                                            <span key={index} class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textmandatory[0]}`}>{value.name}</span>
                                        ))}
                                    </div>
                                    <p class="text-sm-gray">Langues</p>
                                    <div className="flex flex-wrap gap-1">
                                        {data.candidateLanguages.map((value,index)=>(
                                            <span key={index} class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textmandatory[0]}`}>{value.name}</span>
                                        ))}
                                    </div>
                                    <p class="text-sm-gray">Hard skills</p>
                                    <div className="flex flex-wrap gap-1">
                                        {data.candidatehardskill.map((value,index)=>(
                                            <span key={index} class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textmandatory[0]}`}>{value.name}</span>
                                        ))}
                                    </div>
                                    <p class="text-sm-gray">Soft skills</p>
                                    <div className="flex flex-wrap gap-1">
                                        {data.candidatesoftskill.map((value,index)=>(
                                            <span key={index} class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textmandatory[0]}`}>{value.name}</span>
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

    );
}
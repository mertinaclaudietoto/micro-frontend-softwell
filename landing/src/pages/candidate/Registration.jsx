import { useState,useEffect,useRef } from "react";
import {  HiOutlineMap,HiOutlineXMark,HiOutlineEnvelope, HiOutlinePhone} from "react-icons/hi2";
import RenderMenuHorizontal from "../../components/card/RendermenuHorizontal";
import { diplome, infocandidate, localisation, typeExperience } from "../../data/data";
import { diffDate } from "../../function/Date";
import axios from "axios";

export default function Registration(){
    const [skill,setSkill] =useState('');
    const [degree,setDegree] =useState({ id: "", school: '', graduationyear: '', diplome: '',description:""});
    const [experience,setExperience] =useState({ id: "", entreprise: '', poste: '', datedebut: '',datefin:"",description:"",type:""});
    const [candidate ,setInfoCandidate]=useState(infocandidate);
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const save =()=>{
        console.log(candidate)
    }
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const handlerChangeTableInfocandidate = (name, value, index = null) => {
        setInfoCandidate((previous) => {
            const currentArray = Array.isArray(previous[name]) ? previous[name] : [];
            if (index !== null) {
                const newArray = currentArray.filter((_, i) => i !== index);
                return {
                    ...previous,
                    [name]: newArray,
                };
            }
            console.log("ajout",[...currentArray, value])
         return {
                ...previous,
                [name]: [...currentArray, value],
            };
        });
        setSkill("");
    };
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handlePhotoChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
        // 1. Afficher l'image en preview dans React
        const localUrl = URL.createObjectURL(file);
        handlerVariable("photo",localUrl,setInfoCandidate);
        // 2. Uploader au backend
        const formData = new FormData();
        formData.append("photo", file);
        await axios.post("http://localhost:3000/upload", formData, { //sende vers serveur
            headers: { "Content-Type": "multipart/form-data" },
        });
    };

    useEffect(() => {
        console.log(candidate)
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          const docHeight = document.body.scrollHeight - window.innerHeight;
          const scrolled = (scrollTop / docHeight) * 100;
          setScrollPercentage(scrolled);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
    <> 
    <div class="relative z-10 bg-white  w-full max-w-4xl  mx-auto p-6 md:p-10">
            <div class="flex items-center  justify-center mb-4">
                <h1 class="text-2xl md:text-3xl font-bold text-softbleu">Inscription</h1>
            </div>
            <p class="text-sm text-gray-600 flex items-center justify-center">
                Est-ce que tu as un compte ? 
                <a href="#" class="text-or hover:font-bold  font-semibold">Connecte-toi</a>
            </p>
        {/* etaps formulaire */}
            <div class="flex items-center justify-center mb-5 sticky top-0 z-50 bg-gray-50 p-4">
                <div className="flex items-center justify-center mb-5">
                    <div className="flex items-center gap-4 md:gap-8 w-full max-w-3xl">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center gap-2 relative">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm bg-blue-500 text-white">
                                1
                            </div>
                        {/* Ligne de progression */}
                            <div className="absolute top-1/2 left-full -translate-y-1/2 w-24 h-0.5 bg-gray-300">
                                <div
                                className="h-0.5 bg-blue-500"
                                style={{
                                    width:
                                    scrollPercentage > 33
                                        ? "100%"
                                        : `${(scrollPercentage / 33) * 100}%`,
                                }}
                                ></div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center gap-2 relative">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                                scrollPercentage > 33 ? "bg-blue-500 text-white" : "bg-gray-300"
                                }`}
                            >
                                2
                            </div>
                        {/* Ligne de progression */}
                            <div className="absolute top-1/2 left-full -translate-y-1/2 w-24 h-0.5 bg-gray-300 z-0">
                                <div
                                className="h-0.5 bg-blue-500"
                                style={{
                                    width:
                                    scrollPercentage > 66
                                        ? "100%"
                                        : scrollPercentage < 33
                                        ? "0%"
                                        : `${((scrollPercentage - 33) / 33) * 100}%`,
                                }}
                                ></div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div
                            className={`flex flex-col items-center gap-2 z-1  rounded-full ${
                                scrollPercentage > 66 ? "bg-blue-500 text-white" : ""
                            }`}
                            >
                            <div
                                className={`w-10 h-10 z-1 rounded-full flex items-center justify-center font-semibold text-sm ${
                                scrollPercentage > 66 ? "bg-blue-500 text-white rounded-full" : "bg-gray-300"
                                }`}
                            >
                                3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       {/* {etaps(index)} */}
        <div>
            <div class="grid grid-cols-1">
                <div>
                    {/* <div class="flex flex-col items-center">
                        <div class="w-32 h-32 bg-softbleu rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-orange-600 transition-colors">
                            <img src={candidate.photo}  className="rounded-full"/>
                        </div>
                        <p class="text-sm font-semibold text-gray-700">Entrer votre photo</p>
                    </div> */}
                    <div className="flex flex-col items-center">
                        <div
                            className="w-32 h-32 bg-softbleu rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-orange-600 transition-colors overflow-hidden"
                            onClick={handleClick}
                        >
                            {candidate.photo ? (
                                <img src={candidate.photo} className="rounded-full w-full h-full object-cover" />
                            ) : (
                                <span className="text-white">+</span>
                            )}
                        </div>
                        <p className="text-sm font-semibold text-gray-700">Entrer votre photo</p>
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handlePhotoChange}
                        />
                    </div>
                </div>
                <div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                        <div className="my-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                            <input 
                                type="text" 
                                placeholder="Entrer votre nom" 
                                className="input_singup"
                                onChange={(event) => handlerVariable("name", event.target.value,setInfoCandidate)}
                            />
                        </div>
                        <div className="my-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Prenom</label>
                            <input 
                                type="text" 
                                placeholder="Entrer votre prenom" 
                                className="input_singup"
                                onChange={(event) => handlerVariable("firstname", event.target.value,setInfoCandidate)}
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Date de naissance</label>
                            <div class="relative">
                                <input 
                                    type="date" 
                                    class="input_singup"
                                    onChange={(event) => handlerVariable("birthday", event.target.value,setInfoCandidate)}
                                />
                                {/* <i class="fas fa-calendar-alt absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i> */}
                            </div>
                        </div>     
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                            <div class="flex gap-4">
                                <label class="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="gender" value="male"  class="w-5 h-5 text-softbleu/100 focus:ring-orange-500" 
                                        onChange={() => handlerVariable("genre", 1,setInfoCandidate)}
                                    />
                                    <span class="text-sm text-gray-700">Male</span>
                                </label>
                                <label class="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="gender" value="female" class="w-5 h-5 text-orange-500 focus:ring-orange-500"
                                    onChange={() => handlerVariable("genre", 0,setInfoCandidate)}/>
                                    <span class="text-sm text-gray-700">Female</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <div class="relative">
                                <input 
                                    type="email" 
                                    placeholder="votre email" 
                                    class="input_singup"
                                    onChange={(event) => handlerVariable("email", event.target.value,setInfoCandidate)}
                                />
                                <i className="fa-regular fa-envelope icone_input"></i>
                            </div>
                        </div>
                            
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Tel</label>
                            <div class="relative">
                                <input 
                                    type="text" 
                                    placeholder="votre email" 
                                    class="input_singup"
                                    onChange={(event) => handlerVariable("tel", event.target.value,setInfoCandidate)}
                                />
                                
                                <HiOutlinePhone className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
                            </div>
                        </div>
                    </div>
                    <div className='my-2'>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
                        <div className="relative">
                            <select className="input_singup appearance-none">
                                {localisation.map((value)=>(
                                        <option value={value.id}>{value.name}</option>
                                ))}
                            </select>
                            <i className="fa-solid fa-map-marker-alt w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2"></i>
                        </div>
                    </div>
                            {/* hard skill */}
                    <div class=" border-t border-gray-200">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="block text-sm font-medium text-gray-700 mb-2">Hard skill</h3>
                            <button class="text-or   font-bold text-sm flex items-center gap-1" onClick={()=>handlerChangeTableInfocandidate("hardskill",skill,null)}>
                                <i class="fas fa-plus"></i>
                                Ajouter
                            </button>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Enter Degree" 
                                    class="input_singup"
                                    onChange={(event)=>{setSkill(event.target.value)}}
                                />
                            </div>
                            <div>   
                            <div class="flex flex-wrap gap-2">
                                {candidate.hardskill.map((value,index)=>(
                                    <button className="card-text-rounded-gray" onClick={()=>handlerChangeTableInfocandidate("hardskill",skill,index)}>
                                            {value}
                                             <span className="ml-2">
                                                    <i className="fa-solid fa-xmark text-gray-500"></i>
                                            </span>
                                    </button>
                                    ))
                                }
                                </div>
                            </div>
                        
                        </div>  
                    </div>
                    {/* soft skill */}
                    <div class="border-t border-gray-200">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="block text-sm font-medium text-gray-700 mb-2">Soft skill</h3>
                            <button class="text-or   font-bold text-sm flex items-center gap-1">
                                <i class="fas fa-plus"></i>
                                Ajouter
                            </button>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Enter Degree" 
                                    class="input_singup"
                                    onChange={(event)=>{setSkill(event.target.value)}}
                                />
                            </div>
                            <div>   
                                <div class="flex flex-wrap gap-2">
                                    {candidate.softskill.map((value,index)=>(
                                        <button className="card-text-rounded-gray" onClick={()=>handlerChangeTableInfocandidate("softskill",skill,index)}>
                                            {value} 
                                            <span className="ml-2">
                                                    <i className="fa-solid fa-xmark text-gray-500"></i>
                                            </span>
                                            
                                        </button>
                                    ))
                                    }
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Vision & Mission</label>
                        <textarea 
                            placeholder="Type here..." 
                            rows="4"
                            class="input_singup"
                            onChange={(event)=>{handlerVariable("vision",event.target.name,setInfoCandidate)}}
                        ></textarea>
                    </div>
                </div>
            </div>
        </div> 
        {/* 2 em etatps */}
        <div>
            <div class="grid grid-cols-1">
                <div class="pt-6 border-t border-gray-200 ">
                    <div className="bg-gray-50 rounded-lg p-6 my-4">
                        <div class="flex items-center justify-between mb-4 ">
                            <h3 class="text-lg font-bold text-gray-900">Education</h3>
                            {/* <button class="text-or hover:text-orange-600 font-semibold text-sm flex items-center gap-1">
                                <i class="fas fa-plus"></i>
                                Ajouter
                            </button> */}
                            <div class="flex items-center justify-end gap-3 mt-2">
                                <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>(setDegree({ id: "", school: '', graduationyear: '', diplome: '',description:""}))}>
                                    Annuler
                                </button>
                                <button class="px-6 py-2 bg-softbleu hover:bg-softbleushade-12 text-white rounded-lg font-medium"
                                    onClick={()=>handlerChangeTableInfocandidate("education",degree,null)}>
                                    Ajouter
                                </button>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            {/* diplome */}
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Diplome</label>
                                <select className="input_singup appearance-none" onChange={(event)=>{ handlerVariable("diplome",event.target.name,setDegree)}}>
                                    {diplome.map((value)=>(
                                        <option value={value.id}>{value.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Ecole</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter College / University" 
                                    class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    onChange={(event)=>{ handlerVariable("school",event.target.name,setDegree)}}
                                />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Annee de remise de dimplome</label>
                                <div class="relative">
                                    <input 
                                        type="date" 
                                        // placeholder="MM/DD/YYYY" 
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        onChange={(event)=>{ handlerVariable("graduationyear",event.target.name,setDegree)}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea 
                                placeholder="Type here..." 
                                rows="4"
                                class="input_singup"
                                onChange={(event)=>{handlerVariable("description",event.target.name,setDegree)}}
                            ></textarea>
                        </div>
                    </div>
                     <h5 className="text-or   font-bold text-sm my-2">Liste de vos Diplomes</h5>

                    {candidate.education.map((value,index)=>(
                        <div index={index} class="mt-4 bg-gray-50 rounded-lg p-4 relative">
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <p class="text-xs text-gray-500 mb-1">Diplome</p>
                                    <p class="font-medium text-gray-900">{value.diplome}</p>
                                </div>
                                <div>
                                    <p class="text-xs text-gray-500 mb-1">College / University</p>
                                    <p class="font-medium text-gray-900">{value.school}</p>
                                </div>
                                <div>
                                    <p class="text-xs text-gray-500 mb-1">Graduation Year</p>
                                    <p class="font-medium text-gray-900">{value.graduationyear}</p>
                                </div>
                            </div>
                            <div class="absolute top-4 right-4 flex gap-2">
                                {/* <button class="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-100" >
                                    <i class="fas fa-pen text-gray-600 text-xs"></i>
                                </button> */}
                                <button class="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-100"  onClick={()=>handlerChangeTableInfocandidate("education",degree,index)}>
                                    <i class="fas fa-trash text-gray-600 text-xs"></i>
                                </button>
                            </div>
                            <p className="text-sm text-gray-700 mt-2 font-light ">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div> 
        <div>
            <div class="grid grid-cols-1">
                <div class="">
                    <div className="bg-gray-50 rounded-lg p-6 my-4">
                        <div class="flex items-center justify-between py-4">
                            <h3 class="text-lg font-bold text-gray-900">Experience</h3>
                            <div class="flex items-center justify-end gap-3">
                                <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium">
                                    Annuler
                                </button>
                                <button class="px-6 py-2 bg-softbleu hover:bg-softbleutini-12 text-white rounded-lg font-medium" 
                                    onClick={()=>handlerChangeTableInfocandidate("experience",degree,null)}>
                                    Ajouter
                                </button>
                            </div>
                        </div>
                        {/*input */}
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter Degree" 
                                    class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-or focus:border-transparent"
                                    onChange={(event)=>{ handlerVariable("entreprise",event.target.value,setExperience)}}
                                />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Votre Poste</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter College / University" 
                                    class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-or focus:border-transparent"
                                    onChange={(event)=>{ handlerVariable("poste",event.target.value,setExperience)}}
                                />
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Date debut</label>
                                <div class="relative">
                                    <input 
                                        type="date" 
                                        placeholder="MM/DD/YYYY" 
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-or focus:border-transparent"
                                        onChange={(event)=>{ handlerVariable("datestart",event.target.value,setExperience)}}
                                    />
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Date Fin</label>
                                <div class="relative">
                                    <input 
                                        type="date" 
                                        placeholder="MM/DD/YYYY" 
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-or focus:border-transparent"
                                        onChange={(event)=>{ handlerVariable("dateend",event.target.value,setExperience)}}
                                    />
                                </div>
                            </div>
                        
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Type d'experiences</label>
                                <div class="relative">
                                    <select className="input_singup appearance-none" onChange={(event)=>{ handlerVariable("type",event.target.value,setExperience)}}>
                                        {typeExperience.map((value)=>(
                                            <option value={value.id}>{value.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea 
                                placeholder="Type here..." 
                                rows="4"
                                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-or focus:border-transparent resize-none"
                                onChange={(event)=>{ handlerVariable("description",event.target.value,setExperience)}}
                            ></textarea>
                        </div>
                    </div>

                    <label class="text-or   font-bold text-sm my-2">Liste de vos  experiences</label>
                    {candidate.experience.map((value,index)=>(
                        <div index={index} class="mt-4 bg-gray-50 rounded-lg p-4 relative">
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <p class="text-xs text-gray-500 mb-1">Entreprise</p>
                                    <p class="font-medium text-gray-900">{value.entreprise}</p>
                                </div>
                                <div>
                                    <p class="text-xs text-gray-500 mb-1">Poste</p>
                                    <p class="font-medium text-gray-900">{value.poste}</p>
                                </div>
                                <div>
                                    <p class="text-xs text-gray-500 mb-1">Date debut et Date fin </p>
                                    <p class="font-medium text-gray-900">{value.datedebut} / {value.datefin} {diffDate(value.datefin,value.datedebut)}</p>
                                </div>
                            </div>
                        <p class="text-xs text-gray-500 mb-1 py-2">Description</p>
                        <p className='text-xs text-gray-700'>{value.description}
                        </p>
                        <div class="absolute top-2 right-2 flex gap-2">
                            {/* <button class="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-100">
                                <i class="fas fa-pen text-gray-600 text-xs"></i>
                            </button> */}
                            <button class="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-100"  onClick={()=>handlerChangeTableInfocandidate("experience",experience,index)}>
                                <i class="fas fa-trash text-gray-600 text-xs"></i>
                            </button>
                        </div>
                    </div>
                    ))}
                  
                </div>
            </div>
            <div class="flex justify-end mt-8">
                <button class="px-6 py-2 bg-softbleu hover:bg-softbleushade-12 text-white rounded-lg font-medium p-2"
                    onClick={()=>save()}>
                    Enregistrer
                </button>
            </div>
        </div>
    </div> 
    </>
    
    );
}

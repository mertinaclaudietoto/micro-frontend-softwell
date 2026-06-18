import { useState,useEffect,useRef } from "react";
import { HiOutlinePhone} from "react-icons/hi2";
import { url, url_recrutement, url_recrutement_image } from "../../data/data";
import { uploadCompressedImage } from "../../function/uplaodimage";
import { _login, getData, send } from "../../function/Axios";
import Select from "../../function/selectSimple";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

export default function PlateformeRegistration(){
    const { encryptParametres } = useParams();
    const decoded = atob(encryptParametres);
    // idrequest [0],idpost [1] idplateforme [2]
    const dataValue = decoded.split("|");
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
        candidateLanguages: [],
        candidatehardskill: [],
        candidatesoftskill: [],
        education: [],
        experience: [],
        certificationCandidates: []
    });
    const handleUpload = async (e) => {
        const file = e.target.files[0];

        try {
            const fileName = await uploadCompressedImage(file);
            console.log("Fichier envoyé :", fileName);
            handlerVariable("photo",fileName,setData);
        } catch (err) {
            console.error(err.message);
        }
    };
    const [listGenre,setListGenre]=useState([]);
    const getListGenre = async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `genre`
        );
        if(datalistThemes.data!=null)
            setListGenre(datalistThemes.data)
    }
    const handlerGenre =(opt) =>{
        handlerVariable("idGenre", opt.id,setData);
        // handlerVariable("nameTheme", opt.name,setPrice)
    }
    ///localisation
    const [listLocalisation,setListLocalisation]=useState([]);
    const getListLocalisation= async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `localisation_candidate`
        );
        if(datalistThemes.data!=null)
            setListLocalisation(datalistThemes.data)
    }
    const handlerLocalisation =(opt) =>{
        handlerVariable("idLocalisation", opt.id,setData);
        // handlerVariable("nameTheme", opt.name,setPrice)
    }
    ///hardskill
    const [listHardSkill,setListHardSkill]=useState([]);
    const getListHardSkill= async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `hardskill`
        );
        if(datalistThemes.data!=null)
            setListHardSkill(datalistThemes.data)
    }
    const handlerHardSkill =(opt) =>{
        handlerChangeTableInfocandidate("candidatehardskill",{
            idHardSkill:opt.id,
            name:opt.name
        },null);
    }
    //softskill
    const [listSoftSkill,setListSoftSkill]=useState([]);
    const getListSoftSkill= async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `softskill`
        );
        if(datalistThemes.data!=null)
            setListSoftSkill(datalistThemes.data)
    }
    const handlerSoftSkill =(opt) =>{
        if(opt!=null){
            handlerChangeTableInfocandidate("candidatesoftskill",{
                idSoftSkill:opt.id,
                name:opt.name
            },null);
        }
    }
    ///education 
    const [education,setEducation] =useState({});
    const deleteAddEducation =()=>{
          setEducation(previous => ({
            ...previous,
            idDiplome: null,
            nameDiplome: null, 
            IdUniversity: null,
            nameUniversity: null,
            Description:null,
            Year:null
         }));
    }
        ///diplome 
    const [listDiplome,setListDiplome]=useState([]);
    const getListDiplome= async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `diplome`
        );
        if(datalistThemes.data!=null)
            setListDiplome(datalistThemes.data)
    }
    const handlerDiplome =(opt) =>{
        
        if(opt!=null){
            setEducation(previous => ({
                ...previous,
                idDiplome: opt.id,
                nameDiplome: opt.name
            }));
        }
       
    }
        //university
    const [listUniversity,setListUniversity]=useState([]);
    const getListUniversity= async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `university`
        );
        if(datalistThemes.data!=null)
            setListUniversity(datalistThemes.data)
    }
    const handlerUniversity =(opt) =>{
        
        if(opt!=null){
            setEducation(previous => ({
                ...previous,
                IdUniversity: opt.id,
                nameUniversity: opt.name
            }));
        }
    }
    ///type experience 
    const [experience,setExperiences] =useState({
        Entreprise: null,
        Poste: null,
        DateDebut: null,
        DateFin: null,
        IdTypeExperience: null,
        Description:null,
        name: null
        });
    const [listExperience,setListExperience]=useState([]);
    const getListExperience= async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `typeexperience`
        );
        if(datalistThemes.data!=null)
            setListExperience(datalistThemes.data)
    }
    const initExperience=()=>{
         setExperiences(previous => ({
            ...previous,
                Entreprise: null,
                Poste: null,
                DateDebut: null,
                DateFin: null,
                IdTypeExperience: null,
                Description:null,
                name: null
         }));
    }
    const handlerExperience =(opt) =>{
        
        if(opt!=null){
            setExperiences(previous => ({
                ...previous,
                IdTypeExperience: opt.id,
                name: opt.name
            }));
        }
    }
    //language
    const [listLanguage,setListLanguage]=useState([]);
    const getListLanguage= async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `language`
        );
        if(datalistThemes.data!=null)
           setListLanguage(datalistThemes.data)
    }
    const handlerLanguage =(opt) =>{
        
        if(opt!=null){
            handlerChangeTableInfocandidate("candidateLanguages",{
                idLanguage:opt.id,
                name:opt.name
            },null);
        }
       
    }
     //certification
    const [listCertification,setCertification]=useState([]);
    const getListCertification= async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `certification`
        );
        if(datalistThemes.data!=null)
           setCertification(datalistThemes.data)
    }
    const handlerCertification =(opt) =>{
        
        if(opt!=null){
            handlerChangeTableInfocandidate("certificationCandidates",{
                idCertification:opt.id,
                name:opt.name
            },null);
        }
    }
    const buildInfoCandidat = ( idcandidate)=>{
        const recruitmentCandidate = {
                    id: null,                                
                    postId: dataValue[1],     
                    RequestId:dataValue[0],  
                    idplateforme : dataValue[2]     ,                  
                    candidatId: idcandidate,                               // int
                    stepRecruitmentId: 1,                     // int?
                    applicationDate: new Date().toISOString().split('T')[0] // yyyy-MM-dd
                };
        return recruitmentCandidate;
    }
    const LoginAndPostulation = async (login,password) => {
        try {
            const response = await _login({
                login:login,
                password:password
            }, url_recrutement + "candidate/login");
            // console.log(response.data.data)
            // if(response.data.success==false){
            //     setText("Identifiant ou mot de passe incorrect")
            // }
            if(response.data.data.id !=null){
                const data = await send(buildInfoCandidat(response.data.data.id),url_recrutement + "recruitmentcandidate")
                if (data == true) {
                    toast.success("Votre candidature a été envoyée");
                    close(false);
                } else {
                    toast.error("Problème serveur, réessayez plus tard !");
                }
            }
        } catch (error) {
            // setText("Identifiant ou mot de passe incorrect")
            console.error("Erreur login:", error);
        }
    };
    const save = async ()=>{
        const value = await send(data,url_recrutement + "candidate")
        if (value == true) {
            LoginAndPostulation(data.login,data.password);
            // toast.success("Données enregistrées avec succès !");
            // window.location.replace("/logincandidate");
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    }
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    
    const handlerChangeTableInfocandidate = (name, value, index = null) => {
        setData((previous) => {
            const currentArray = Array.isArray(previous[name]) ? previous[name] : [];
            if (index !== null) {
                const newArray = currentArray.filter((_, i) => i !== index);
                return {
                    ...previous,
                    [name]: newArray,
                };
            }
         return {
                ...previous,
                [name]: [...currentArray, value],
            };
        });
    };
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };
    useEffect(() => {
        getListGenre();
        getListLocalisation();
        getListHardSkill();
        getListSoftSkill();
        getListDiplome();
        getListUniversity();
        getListExperience();
        getListLanguage();
        getListCertification();
      }, []);

    return (
    <> 
        <div class="relative z-10 bg-white  w-full max-w-4xl  mx-auto p-6 md:p-10">
            <div class="flex items-center  justify-center mb-4">
                <h1 class="text-2xl md:text-3xl font-bold text-softbleu">Inscription</h1>
            </div>
            <p class="text-sm text-gray-600 flex items-center justify-center">
                Est-ce que tu as un compte ?  <b className="text-white"> x </b>
                <a href="/candidate" class="text-or hover:font-bold  font-semibold">Connectez-vous</a>

            </p>
        <div>
            <div class="grid grid-cols-1 mt-6">
                <div>
                    <div className="flex flex-col items-center">
                        <div
                            className="w-32 h-32 bg-softbleu rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-orange-600 transition-colors overflow-hidden"
                            onClick={handleClick}
                        >
                            {data.photo ? (
                                <img src={url_recrutement_image+data.photo} className="rounded-full w-full h-full object-cover" />
                            ) : (
                                <span className="text-white">+</span>
                            )}
                        </div>
                        <p className="text-sm font-semibold text-gray-700">Ajoutez votre photo</p>
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleUpload}
                        />
                    </div>
                </div>
                <div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                        <div className="my-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                            <input 
                                type="text" 
                                placeholder="nom" 
                                className="input_singup"
                                onChange={(event) => handlerVariable("name", event.target.value,setData)}
                            />
                        </div>
                        <div className="my-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                            <input 
                                type="text" 
                                placeholder="prénom" 
                                className="input_singup"
                                onChange={(event) => handlerVariable("FirstName", event.target.value,setData)}
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                        <div className="my-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Login</label>
                            <input 
                                type="text" 
                                placeholder="login" 
                                className="input_singup"
                                onChange={(event) => handlerVariable("login", event.target.value,setData)}
                            />
                        </div>
                        <div className="my-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                            <input 
                                type="text" 
                                placeholder="mot de passe" 
                                className="input_singup"
                                onChange={(event) => handlerVariable("password", event.target.value,setData)}
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
                                    onChange={(event) => handlerVariable("birthDate", event.target.value,setData)}
                                />
                                {/* <i class="fas fa-calendar-alt absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i> */}
                            </div>
                        </div>     
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Genre</label>
                            <div class="flex gap-4">
                                <Select onChange={handlerGenre} placeholder="...." options={listGenre}/>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2  sm:mt-8 gap-4 my-2">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                            <div class="relative">
                                <input 
                                    type="email" 
                                    placeholder="e-mail" 
                                    class="input_singup"
                                    onChange={(event) => handlerVariable("email", event.target.value,setData)}
                                />
                                <i className="fa-regular fa-envelope icone_input"></i>
                            </div>
                        </div>
                            
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Tél.</label>
                            <div class="relative">
                                <input 
                                    type="text" 
                                    placeholder="votre numéro de téléphone" 
                                    class="input_singup"
                                    onChange={(event) => handlerVariable("tel", event.target.value,setData)}
                                />
                                
                                <HiOutlinePhone className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
                            </div>
                        </div>
                    </div>
                    <div className='my-2'>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
                        <div className="relative">
                            <Select onChange={handlerLocalisation} placeholder="...." options={listLocalisation}/>
                            <i className="fa-solid fa-map-marker-alt w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2"></i>
                        </div>
                    </div>
                    {/* hard skill */} 
                    <div class=" border-t border-gray-200 mt-8">
                        <div class="flex items-center justify-between mb-4 mt-2">
                            <h3 class="block text-sm font-medium text-gray-700 mb-2">Compétences techniques</h3>
                           
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                            <div>
                                <Select onChange={handlerHardSkill} placeholder="...." options={listHardSkill}/>
                            </div>
                            <div>   
                            <div class="flex flex-wrap gap-2 sm:mt-8">
                                {data.candidatehardskill.map((value,index)=>(
                                    <button className="card-text-rounded-gray" onClick={()=>handlerChangeTableInfocandidate("candidatehardskill",null,index)}>
                                            {value.name}
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
                    <div class="border-t border-gray-200 mt-8">
                        <div class="flex items-center justify-between mb-4 mt-2">
                            <h3 class="block text-sm font-medium text-gray-700 mb-2">Compétences comportementales</h3>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                            <div>
                                <Select onChange={handlerSoftSkill} placeholder="...." options={listSoftSkill}/>
                            </div>
                            <div className="sm:mt-8">   
                                <div class="flex flex-wrap gap-2">
                                    {data.candidatesoftskill.map((value,index)=>(
                                        <button className="card-text-rounded-gray" onClick={()=>handlerChangeTableInfocandidate("candidatesoftskill",null,index)}>
                                            {value.name} 
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
                    {/* language */}
                    <div class="border-t border-gray-200 mt-8">
                        <div class="flex items-center justify-between mb-4 mt-2">
                            <h3 class="block text-sm font-medium text-gray-700 mb-2">Langue</h3>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                            <div>
                                <Select onChange={handlerLanguage} placeholder="...." options={listLanguage}/>
                            </div>
                            <div className="sm:mt-8">   
                                <div class="flex flex-wrap gap-2">
                                    {data.candidateLanguages.map((value,index)=>(
                                        <button className="card-text-rounded-gray" onClick={()=>handlerChangeTableInfocandidate("candidateLanguages",null,index)}>
                                            {value.name} 
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
                    {/* certification */}
                    <div class="border-t border-gray-200 mt-8">
                        <div class="flex items-center justify-between mb-4 mt-2">
                            <h3 class="block text-sm font-medium text-gray-700 mb-2">Certification</h3>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                            <div>
                                <Select onChange={handlerCertification} placeholder="...." options={listCertification}/>
                            </div>
                            <div className="sm:mt-8">   
                                <div class="flex flex-wrap gap-2">
                                    {data.certificationCandidates.map((value,index)=>(
                                        <button className="card-text-rounded-gray" onClick={()=>handlerChangeTableInfocandidate("certificationCandidates",null,index)}>
                                            {value.name} 
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
                    <div className="mt-8">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Descrivez-vous</label>
                        <textarea 
                            placeholder="Décrivez-vous ici…" 
                            rows="4"
                            class="input_singup"
                            onChange={(event)=>{handlerVariable("description",event.target.value,setData)}}
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
                        <div class=" flex items-center justify-between mb-4 ">
                            <h3 class="text-lg font-bold text-gray-900">Formation</h3>
                            <div class="hidden md:block flex items-center justify-end gap-3 mt-2">
                                <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>(deleteAddEducation())}>
                                    Annuler
                                </button>
                                <button class="px-6 py-2 bg-softbleu hover:bg-softbleushade-12 text-white rounded-lg font-medium"
                                    onClick={()=>handlerChangeTableInfocandidate("education",education,null)}>
                                    Ajouter
                                </button>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            {/* diplome */}
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Diplome</label>
                                <Select onChange={handlerDiplome} placeholder={education.nameDiplome} options={listDiplome}/>
                            </div>
                            <div className="sm:mt-8 md:mt-0">
                                <label class="block text-sm font-medium text-gray-700 mb-2">Université</label>
                                <Select onChange={handlerUniversity} placeholder={education.nameUniversity} options={listUniversity}/>
                            </div>
                            <div className="sm:mt-8 md:mt-0">
                                <label class="block text-sm font-medium text-gray-700 mb-2">Année de remise du diplôme</label>
                                <div class="relative">
                                    <input 
                                        type="date" 
                                        // placeholder="MM/DD/YYYY" 
                                        value={education.Year}
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        onChange={(event)=>{ handlerVariable("Year",event.target.value,setEducation)}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea 
                                placeholder={education.Description}
                                rows="4"
                                class="input_singup"
                                onChange={(event)=>{handlerVariable("Description",event.target.value,setEducation)}}
                            ></textarea>
                        </div>
                        <div class="block pt-2 md:hidden flex items-center justify-end gap-3 mt-2">
                            <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>(deleteAddEducation())}>
                                Annuler
                            </button>
                            <button class="px-6 py-2 bg-softbleu hover:bg-softbleushade-12 text-white rounded-lg font-medium"
                                onClick={()=>handlerChangeTableInfocandidate("education",education,null)}>
                                Ajouter
                            </button>
                        </div>
                    </div>
                    <h5 className="text-or   font-bold text-sm my-2">Diplomes</h5>
                    {data.education.map((value,index)=>(
                        <div index={index} class="mt-4 bg-gray-50 rounded-lg p-4 relative">
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <p class="text-xs text-gray-500 mb-1">Diplome</p>
                                    <p class="font-medium text-gray-600">{value.nameDiplome}</p>
                                </div>
                                <div>
                                    <p class="text-xs text-gray-500 mb-1">College / Université</p>
                                    <p class="font-medium text-gray-600">{value.nameUniversity}</p>
                                </div>
                                <div>
                                    <p class="text-xs text-gray-500 mb-1">Année de remise de diplôme</p>
                                    <p class="font-medium text-gray-600">{value.Year}</p>
                                </div>
                            </div>
                            <div class="absolute top-4 right-4 flex gap-2">
                                <button class="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-100"  onClick={()=>handlerChangeTableInfocandidate("education",education,index)}>
                                    <i class="fas fa-trash text-gray-600 text-xs"></i>
                                </button>
                            </div>
                            <p className="text-sm text-gray-700 mt-2 font-light ">{value.Description}</p>
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
                            <h3 class="text-lg font-bold text-gray-900">Expérience</h3>
                            <div class="hidden md:block flex items-center justify-end gap-3">
                                <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>{initExperience}}>
                                    Annuler
                                </button>
                                <button class="px-6 py-2 bg-softbleu hover:bg-softbleutini-12 text-white rounded-lg font-medium" 
                                    onClick={()=>handlerChangeTableInfocandidate("experience",experience,null)}>
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
                                    placeholder="Saisir le diplôme" 
                                    value={experience.Entreprise}
                                    class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-or focus:border-transparent"
                                    onChange={(event)=>{ handlerVariable("Entreprise",event.target.value,setExperiences)}}
                                />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Poste</label>
                                <input 
                                    type="text" 
                                    value={experience.Poste}
                                    placeholder="Saisir l'établissement" 
                                    class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-or focus:border-transparent"
                                    onChange={(event)=>{ handlerVariable("Poste",event.target.value,setExperiences)}}
                                />
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Debut</label>
                                <div class="relative">
                                    <input 
                                        type="date" 
                                        placeholder="MM/DD/YYYY" 
                                        value={experience.DateDebut}
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-or focus:border-transparent"
                                        onChange={(event)=>{ handlerVariable("DateDebut",event.target.value,setExperiences)}}
                                    />
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Fin</label>
                                <div class="relative">
                                    <input 
                                        type="date" 
                                        placeholder="MM/DD/YYYY" 
                                        value={experience.DateFin}
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-or focus:border-transparent"
                                        onChange={(event)=>{ handlerVariable("DateFin",event.target.value,setExperiences)}}
                                    />
                                </div>
                            </div>
                        
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Type d'expérience</label>
                                <div class="relative">
                                    <Select onChange={handlerExperience} placeholder={experience.name} options={listExperience} value={false}/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea 
                                placeholder={experience.Description} 
                                rows="4"
                                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-or focus:border-transparent resize-none"
                                onChange={(event)=>{ handlerVariable("Description",event.target.value,setExperiences)}}
                            ></textarea>
                        </div>
                        <div class="block pt-2 md:hidden flex items-center justify-end gap-3 mt-2">
                            <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>(deleteAddEducation())}>
                                Annuler
                            </button>
                            <button class="px-6 py-2 bg-softbleu hover:bg-softbleushade-12 text-white rounded-lg font-medium"
                                onClick={()=>handlerChangeTableInfocandidate("experience",experience,null)}>
                                Ajouter
                            </button>
                        </div>
                    </div>
                    <label class="text-or   font-bold text-sm my-2">Liste de vos expériences</label>
                    {data.experience.map((value,index)=>(
                        <div index={index} class="mt-4 bg-gray-50 rounded-lg p-4 relative">
                            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div>
                                    <p class="text-xs text-gray-500 mb-1">Entreprise</p>
                                    <p class="font-medium text-gray-700">{value.Entreprise}</p>
                                </div>
                                <div>
                                    <p class="text-xs text-gray-500 mb-1">Poste</p>
                                    <p class="font-medium text-gray-700">{value.Poste}</p>
                                </div>
                                <div>
                                    <p class="text-xs text-gray-500 mb-1">Date de début et date de fin </p>
                                    <p class="font-medium text-gray-700 ">{value.DateDebut} / {value.DateFin} </p>
                                    {/* {diffDate(value.datefin,value.datedebut)} */}
                                </div>
                                <div>
                                    <p class="text-xs text-gray-500 mb-1">Type d'expérience</p>
                                    <p class="font-medium text-gray-700">{value.name}</p>
                                </div>
                            </div>
                          
                        <p class="text-xs text-gray-500 mb-1 py-2 mt-8" >Description</p>
                        <p className='text-xs text-gray-700'>{value.Description}
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

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { url_front,url_recrutement } from "../../data/data";
import { _login,getData, send } from "../../function/Axios";
import { useNavigate } from "react-router-dom";
export default function PlateformeApply(){
    const { encryptParametres } = useParams();
    const decoded = atob(encryptParametres);
    // idrequest [0],idpost [1] idplateforme [2]
    const dataValue = decoded.split("|");
    const [showLogin,setShowLogin]=useState(false);
    const [showInscription,setShowInscription]=useState(false);
    const [value,setValue]=useState({});
    const loadData =   async () => {
        const data = await getData(url_recrutement+'post/'+dataValue[1]);
        setValue(data.data);
    };
    //logique de login 
    const [login,setLogin]= useState({
        login:'',
        password:''
    });
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const[text,setText]=useState("");
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
    const submitPost = async () => {
        try {
            const response = await _login(login, url_recrutement + "candidate/login");
            if(response.data.success==false){
                setText("Identifiant ou mot de passe incorrect")
            }
            if(response.data.data.id !=null){
                const data = await send(buildInfoCandidat(response.data.data.id),url_recrutement + "recruitmentcandidate")
                if (data == true) {
                    toast.success("Votre candidature a été envoyée !");
                    setShowLogin(false);
                } else {
                    toast.error("Problème serveur, réessayez plus tard !");
                }
            }
        } catch (error) {
            setText("Identifiant ou mot de passe incorrect")
            console.error("Erreur login:", error);
        }
    };
    const InscriptionButton = () => {
        const navigate = useNavigate();
        const handleClick = () => {
            navigate(`${url_front}apply-registration/${encryptParametres}`);
        };

        return (
            <button
            className="px-6 py-2 w-100 bg-softbleu hover:bg-softbleushade-12 text-white rounded-lg font-medium"
            onClick={handleClick}
            >
            S'inscrire
            </button>
        );
    };
    useEffect(() => {
        loadData();
    }, []);
    return(
    <>
       { showLogin ? 
       <>
        <div className="background_transparent_popup">
            <div class="grid grid-cols-1 bg-white w-100 p-10 rounded-xl">
                <div class="flex flex-col items-center">
                    <div class="w-32 h-32 rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-orange-600 transition-colors">
                        <img src="login.svg"/>
                    </div>
                </div>
                <p className="text-sm flex justify-center items-center">
                    Si vous avez déjà un compte, votre candidature pour ce poste sera envoyée automatiquement.
                </p>
                <p className="text-red-600 text-sm flex justify-center items-center">
                   {text}
                </p>
                <div className='my-2'>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Login</label>
                    <input 
                        type="text" 
                        placeholder={login.login} 
                        class="input_formulaire"
                        onChange={(event)=>{handlerVariable("login",event.target.value,setLogin)}}
                    />
                </div>
                <div className='my-2'>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                    <input 
                        type="password" 
                        class="input_formulaire"
                        placeholder={login.password}
                        onChange={(event)=>{handlerVariable("password",event.target.value,setLogin)}}
                    />
                </div>
                <div class="flex items-center justify-end gap-3 mt-3">
                    <button class="px-6 py-2 w-100 bg-softbleu hover:bg-softbleushade-12 text-white rounded-lg font-medium"  onClick={()=>submitPost()}>
                        Connexion
                    </button>
                </div>
            </div>
        </div>
       </> :
       showInscription ?
       <>
        <div className="background_transparent_popup">
            <div class="grid grid-cols-1 bg-white w-100 p-10 rounded-xl">
                <div class="flex flex-col items-center">
                    <div class="w-32 h-32 rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-orange-600 transition-colors">
                        <img src="login.svg"/>
                    </div>
                </div>
                <p className="text-sm flex justify-center items-center"> 
                    Si vous n'avez pas de compte, vous devez d'abord vous inscrire, puis votre candidature pour ce poste sera envoyée automatiquement.
                </p>
                <div class="flex items-center justify-end gap-3 mt-3">
                   <InscriptionButton/>
                </div>
            </div>
        </div>
       </> : 
       <>
        <div className="background_transparent_popup">
             <div  class="relative border bg-white border-gray-300 rounded-xl p-6 mb-4 hover:shadow-lg transition-shadow cursor-pointer">
                <button
                    type="button"
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                    onClick={()=>{close(false)}} >
                    <i className="fa-solid fa-xmark text-lg"></i>
                </button>

                <div class="flex items-start gap-3">
                    <div class="w-10 h-10 bg-softbleu rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {/* <i class="fas fa-slack text-white text-xl"></i> */}
                        {value.requestId}
                    </div>
                    <div class="flex-1 min-w-0">
                        <h4 class="font-bold text-gray-900 mb-1">{value.nom}</h4>
                        <p class="text-sm text-gray-500 mb-3">{value.goals}</p>
                        <p class="text-xs text-gray-600 mb-3">{value.mission}</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">{value.nameLocalisation}</span>
                            <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">{value.nameTypeContrat}</span>
                            <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">{value.nameYearLeft}</span>
                            <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">{value.nameYearRight}</span>
                        </div>
                    </div>
                </div>
                    {value?.diplomes?.length > 0 ? (
                    <div className="pt-4 pb-2">
                        <p className="label-formulaire">
                            Diplômes requis
                        </p>
                        <div className="flex flex-wrap gap-2">
                        {value.diplomes.map((cert, index) => (
                            <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-xs rounded-full"
                            >
                            {cert.nameS}
                            </span>
                        ))}
                        </div>
                    </div>
                    ) : null}

                    {value?.certifications?.length > 0 ? (
                    <div className="py-2">
                        <p className="label-formulaire">
                        Certifications 
                        </p>
                        <div className="flex flex-wrap gap-2">
                        {value.certifications.map((cert, index) => (
                            <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-xs rounded-full"
                            >
                            {cert.nameS}
                            </span>
                        ))}
                        </div>
                    </div>
                    ) : null}
                     {value?.languages?.length > 0 ? (
                    <div className="py-2">
                        <p className="label-formulaire">
                            Langue 
                        </p>
                        <div className="flex flex-wrap gap-2">
                        {value.languages.map((cert, index) => (
                            <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-xs rounded-full"
                            >
                            {cert.nameS}
                            </span>
                        ))}
                        </div>
                    </div>
                    ) : null}

                      {value?.softSkills?.length > 0 ? (
                    <div className="py-2">
                        <p className="label-formulaire">
                            sotf 
                        </p>
                        <div className="flex flex-wrap gap-2">
                        {value.softSkills.map((cert, index) => (
                            <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-xs rounded-full"
                            >
                            {cert.nameS}
                            </span>
                        ))}
                        </div>
                    </div>
                    ) : null}

                       {value?.hardSkills?.length > 0 ? (
                    <div className="py-2">
                        <p className="label-formulaire">
                            hard 
                        </p>
                        <div className="flex flex-wrap gap-2">
                        {value.hardSkills.map((cert, index) => (
                            <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-xs rounded-full"
                            >
                            {cert.nameS}
                            </span>
                        ))}
                        </div>
                    </div>
                    ) : null}
                    <div class="flex items-center justify-end gap-3 mt-3"> 
                        <button
                            class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium"
                            onClick={() => setShowInscription(true)}
                        >
                            S'inscrire
                        </button>
                        <button
                            class="px-6 py-2 bg-softbleu hover:bg-softbleushade-12 text-white rounded-lg font-medium"
                            onClick={() => setShowLogin(true)}
                        >
                            J'ai déjà un compte
                        </button>
                    </div>
            </div>
        </div>
        </>
    }
    </>
    )
}
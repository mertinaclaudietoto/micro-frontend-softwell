import React,{ useState } from "react";
import { accessinfo, listProfile, url, widthClasses } from "../../data/data";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { handlerVariable } from "../../function/utils";
import { IconeAccess, Sidebar } from "../../components";
import { send, update } from "../../function/Axios";
export default function Setaccess({value,close}){
    const [info ,setAccessinfo]=useState(
        accessinfo
    );
    const [data,setValue]=useState(  value && value["access"] ?   JSON.parse(value["access"])  :{})
    const [profile,setProfile]=useState(value!=null? value:{
        id:null,
        name:null,
        access:null,
    })
    const updateAccess = (key1, key2, value) => {
        setValue(prev => ({
            ...prev,
            [key1]: {
                ...prev[key1],
                [key2]: value
            }
        }));
    };
    const [openIconeCard,setIsOpenIconeCard]=useState(false);
    const [openComparaison,setOpenComparaison]=useState(false);
    const changeIcone=(iconename)=>{
        handlerVariable("icone",iconename,setAccessinfo);
    }
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

   const submit = async ()=>{
        
        handlerVariable("access",JSON.stringify(data),setProfile);
        var newprofile ={
             id:profile.id,
            name:profile.name,
            access:JSON.stringify(data),
         }
        console.log(newprofile);
        const response = newprofile.id != null ?  await update(newprofile,url + "roles")  :   await send(newprofile,url + "roles")
        if (response == true) {
            toast.success("Données enregistrées avec succès !");
            close(false);
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    }
    return(<>
    <div class="flex h-screen ">
        <Sidebar/> 
        <main class="flex-1 ">   
            <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto">
                <div class="flex gap-6 max-w-7xl mx-auto border border-gray-200">
                    <div class="flex-1 bg-white ">
                    
                        <div class=" p-6">
                            <div>
                                <div class="flex items-center justify-between mb-2">
                                    <h1 class="text-xl font-semibold text-gray-900">Gestion des accès <b className="text-softbleu">{info.name}</b></h1>
                                    
                                    <button class="bg-softbleutini-12 hover:bg-softbleushade-12 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2" onClick={()=>submit()}>
                                        <i class="fa-solid fa-pen text-white"></i>
                                        valider changement
                                    </button>
                                </div>
                                <p class="text-sm text-gray-600">Si vous voulez ajouter un nouveau profil <span className="text-or font-semibold">cliquez ici</span> ou 
                                {close!=null ? <button className="text-softbleu font-semibold" onClick={()=>{close(false)}}>Retour</button>
                                 : <Link to="/access-profile"> <span className="text-softbleu font-semibold" onClick={()=>{close(false)}}>Retour</span></Link>
                                }
                                .</p>
                            </div>
                        </div>
                        
                        <div class="p-6 border-t border-gray-200">
                            <div class="overflow-x-auto relative">
                               {openComparaison ?
                                    <div className="w-80 h-50 absolute top-0 right-0">
                                        {/* Header */}
                                        <div className="grid grid-cols-3 sticky top-0 z-40 bg-gray-50">
                                            <div className="py-4 px-4 text-center">
                                            <button className="btn-neutre-gray" title="Valider">
                                                <i className="fa-solid fa-check"></i>
                                            </button>
                                            </div>
                                            <div className="col-span-2 py-4 px-4 text-left">
                                            <button 
                                                className="btn-neutre-gray" 
                                                onClick={() => setOpenComparaison(false)} 
                                                title="Annuler"
                                            >
                                                <i className="fa-solid fa-xmark"></i>
                                            </button>
                                            </div>
                                        </div>
                                        {/* Liste des profiles */}
                                        <div className="group hover:bg-gray-50 overflow-y-auto flex-1 h-90">
                                            {listProfile.map((value, idx) => (
                                            <div 
                                                key={idx} 
                                                className="grid grid-cols-3 bg-gray-50 border-b border-gray-200 items-center"
                                            >
                                                {/* Texte du profile */}
                                                <div className="col-span-2 py-4 px-4 text-sm text-gray-700 pl-10">
                                                {value.name}
                                                </div>
                                                {/* Radio button */}
                                                <div className="py-4 px-4 text-center">
                                                <input 
                                                    type="radio" 
                                                    className="w-4 h-4 text-blue-600 rounded border-gray-300" 
                                                />
                                                </div>
                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                : <></>}
                                {/* fonctionnaliter */}
                                <div className="my-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                                    <input 
                                        type="text" 
                                        placeholder={profile.name} 
                                        className="input_singup"
                                        onChange={(event) => handlerVariable("name", event.target.value,setProfile)}
                                    />
                                </div>
                                <table class="w-full h-screen overflow-y-auto ">
                                    <thead>
                                        <tr class="border-b border-gray-200">
                                            <th class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Fonctionnalités</th>
                                            <th class="text-center py-3 px-4 text-xs font-semibold text-gray-600 uppercase w-24">Accès</th>
                                            {/* <th class="text-center py-3 px-4 text-xs font-semibold text-gray-600 uppercase w-24">
                                                <div className="flex space-x-2">
                                                    <button class="btn-neutre-gray" onClick={()=>{setOpenComparaison(true)}}>
                                                        <i class="fa-solid fa-plus"></i>
                                                    </button>
                                                </div>
                                            </th> */}
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-100">
                                    {info.listpage.map((value, index) => (
                                            <React.Fragment key={index}>
                                                {/* Ligne principale de la page */}
                                                <tr className="group bg-gray-50 ">
                                                    <td colSpan={100} className="py-4 px-4 col-span-100">
                                                        <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                                                        <i className={value.icone} />
                                                        {value.name}
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* Lignes des fonctions si elles existent */}
                                                {value.listfunction?.map((func, idx) => (
                                                    <tr key={idx}>
                                                        <td className="py-4 px-4 pl-10 text-sm text-gray-700">{func.name}</td>
                                                        {func.boolean.map((b, i) => (
                                                        <td key={i} className="py-4 px-4 text-center">
                                                             <input
                                                                type="checkbox"
                                                                className="w-4 h-4 text-blue-600 rounded border-gray-300"
                                                                checked={ data && data[value.access] ? data[value.access][func.name] : false }
                                                                onChange={(event) => updateAccess(value.access, func.name, event.target.checked)}
                                                            />
                                                        </td>

                                                        ))}
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
            </div>
        </main>
    </div>
    </>);

}


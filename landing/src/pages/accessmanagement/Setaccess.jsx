import React,{ useState } from "react";
import { accessinfo, listProfile, widthClasses } from "../../data/data";
import { Link } from "react-router-dom";
// import { handlerVariable } from "../../function/utils";
import { IconeAccess, Sidebar } from "../../components";
export default function Setaccess(){
    const [info ,setAccessinfo]=useState(accessinfo);
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
                                    <h1 class="text-xl font-semibold text-gray-900">Gestion Accès <b className="text-softbleu">{info.name}</b></h1>
                                    <button class="bg-softbleutini-12 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                                        <i class="fa-solid fa-pen text-white"></i>
                                        modifier
                                    </button>
                                </div>
                                <p class="text-sm text-gray-600">Si vous voulez ajouter un nouveau profile <span className="text-or font-semibold">cliquez ici</span> ou  <Link to="/access-profile"><span className="text-softbleu font-semibold">retour</span></Link> .</p>
                            </div>
                        </div>
                        {/* <div className=" border-t   border-gray-200 hover:bg-gray-100 px-10 py-4 grid grid-cols-5 justify-center items-center gap-2 ">
                            <div className="flex items-center">
                                <div className="bg-softbleutini-12 rounded-lg p-2 mr-3 relative">
                                    <button onClick={()=>{setIsOpenIconeCard(true)}}>
                                        <i className={`${info.icone} text-sm text-white`}/>
                                    </button>
                                        {openIconeCard ?
                                    <div className="absolute top-0 right-0 mt-2 z-50 bg-white shadow-md rounded-lg p-3 w-64">
                                        <IconeAccess nameIcone={info.icone}  changericone={changeIcone} close={setIsOpenIconeCard}/>
                                    </div> :<></>}
                                </div>
                                <div className="text-sm font-bold text-gray-700">{info.nbr}</div>
                            </div>
                            <div className="text-sm font-medium text-gray-800">
                                    <input className="text-sm" placeholder={info.name} onChange={(event)=>handlerVariable("name",event.target.value,setAccessinfo)}/>
                            </div>    
                            <div className="text-sm font-medium text-gray-800">
                                {info.nbruser} utilisateurs
                            </div>              
                            <div className="col-span-2 bg-gray-200 rounded-full h-2 relative w-full">
                                <div
                                className={`h-2 rounded-full bg-softbleutini-12 ${widthClasses(info.percentage)}`}
                                ></div>
                                <span className="absolute inset-0 flex justify-center items-center text-[10px] font-semibold text-gray-600">
                                {info.percentage}%
                                </span>
                            </div>
                        </div> */}
                        
                        {/* list utilisateur */}
                        {/* <div class="border-t border-gray-200 p-2">
                            <div class="flex items-center justify-center">
                                <div className="flex items-center gap-2 overflow-x-auto flex-nowrap w-300">
                                    {info.listuser.map((value, idx) => (
                                        <div
                                        key={idx}
                                        className="bg-white border border-gray-200 p-4 flex flex-col justify-center items-center gap-2 w-[100px] shrink-0"
                                        >
                                        <img
                                            src={value.photo}
                                            className="w-10 h-10 rounded-lg"
                                            alt={value.login}
                                        />
                                        <div className="text-gray-500 text-xs text-center">
                                            <p className="break-all">{value.login}</p>
                                        </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div> */}
                        
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
                                <table class="w-full h-screen overflow-y-auto ">
                                    <thead>
                                        <tr class="border-b border-gray-200">
                                            <th class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Profile</th>
                                            <th class="text-center py-3 px-4 text-xs font-semibold text-gray-600 uppercase w-24">Member</th>
                                            <th class="text-center py-3 px-4 text-xs font-semibold text-gray-600 uppercase w-24">Manager</th>
                                            <th class="text-center py-3 px-4 text-xs font-semibold text-gray-600 uppercase w-24">Admin</th>
                                            <th class="text-center py-3 px-4 text-xs font-semibold text-gray-600 uppercase w-24">
                                                <div className="flex space-x-2">
                                                    <button class="btn-neutre-gray" onClick={()=>{setOpenComparaison(true)}}>
                                                        <i class="fa-solid fa-plus"></i>
                                                    </button>
                                                </div>
                                            </th>

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
                                                            checked={b}
                                                            readOnly
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
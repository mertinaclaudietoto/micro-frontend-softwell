import { useState } from "react"
import { listProfile, usersprofile } from "../../../data/data"
export default function CardAdduserapk({close}){
    const [user,setUser]=useState(usersprofile[0]);
    const [openProfile,setOpenProfile]=useState(false);
    
    return(
        <div className="background_transparent_popup">
         <div class=" min-h-screen flex items-center justify-center p-4">
            <div class="bg-white rounded-2xl shadow-lg max-w-sm w-full p-8 relative">
        <div class="absolute top-6 right-6">
            <span class="text-gray-800 text-lg font-semibold">
            <button class="" onClick={()=>(close(false))}>
                <i class="fa-solid fa-xmark"></i>
            </button></span>
        </div>

      
        <div class="flex justify-center mb-6">
            <img src={user.photo}
                 alt="Maria Petrescu" 
                 class="w-32 h-32 rounded-full object-cover border-4 border-gray-100"/>
        </div>

      
        <h2 class="text-center text-2xl font-bold text-gray-800 mb-2">{user.login}</h2>

  
        <p class="text-center text-gray-500 text-sm mb-4">{user.login}@gmail.com</p>


        <div class="flex justify-center gap-2 mb-6 flex-wrap">
            <span class="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 font-medium">
                {user.departement}
            </span>
            <span class="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 font-medium">
                {user.status}
            </span>
            <span class="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 font-medium">
                {user.role}
            </span>
            <button onClick={()=>setOpenProfile(true)} class="px-4 py-2 bg-softbleutini-12 text-white rounded-full text-sm font-medium">
                <i className="fas fa-user-shield"/>
            </button>
            {openProfile ?
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
                            onClick={() => setOpenProfile(false)} 
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
        </div>

     
        <p class="text-center text-gray-600 text-sm leading-relaxed mb-8">
            Maria is an android and iOS developer who worked at Apple for 6 years.
        </p>

        <div className="flex space-x-2 ">
            <input placeholder="" className="text-input input_formulaire  "/>
           
        </div>
        <div className="flex justify-center items-center "> 
            <button 
                className="bg-softbleutini-12 rounded-full w-12 h-12 flex items-center justify-center" 
                title="Suivant"
                >
                <i className="fa-solid fa-check text-white"></i>
            </button>

        </div>

    </div>

        </div>
        </div>
       
    )
}
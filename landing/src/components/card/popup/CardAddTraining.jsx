import { useState } from "react";
import { listeformateur, listsmallformation } from "../../../data/data";
import SearchableSelect from "../../../function/select";
export default function CardAddTraining({close,infoTraining}){
    const [value, setValue] = useState(infoTraining ?? listeformateur[0]);
    function handleChange(opt) {
        console.log("Sélection :", opt);
    }
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    // const handlerChangeTableInfocandidate = (name, value, index = null) => {
    //     setValue((previous) => {
    //         const currentArray = Array.isArray(previous[name]) ? previous[name] : [];
    //         if (index !== null) {
    //             const newArray = currentArray.filter((_, i) => i !== index);
    //             return {
    //                 ...previous,
    //                 [name]: newArray,
    //             };
    //         }
    //         console.log("ajout",[...currentArray, value])
    //      return {
    //             ...previous,
    //             [name]: [...currentArray, value],
    //         };
    //     });
    //     setSkill("");
    // };
    return (
        <div class="background_transparent_popup"> 
            <div class="min-h-screen flex items-center justify-center p-4 ">
               
                <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative">
                    <div class="absolute top-6 right-6">
                        <span class="text-gray-800 text-lg font-semibold">
                        <button class="" onClick={()=>(close(false))}>
                            <i class="fa-solid fa-xmark"></i>
                        </button></span>
                    </div>

                    <h3 className="font-medium">{value.name}</h3>
                    {/* <div class="flex gap-3 mt-8 mb-4 ">
                        <input 
                            type="text" 
                            id="taskInput"
                            placeholder="Create your task here..." 
                            class="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <button 
                            onclick="addTask()"
                            class="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                        >
                            add
                        </button>
                    </div>  */}

                   
                    <div className="my-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                        <input 
                            type="text" 
                            placeholder={value.name}
                            className="input_singup"
                            onChange={(event) => handlerVariable("name", event.target.value,setValue)}
                        />
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Nif</label>
                            <div class="relative">
                                <input 
                                    type="text" 
                                    class="input_singup"
                                    placeholder={value.nif}
                                    onChange={(event) => handlerVariable("nif", event.target.value,setValue)}
                                />
                                {/* <i class="fas fa-calendar-alt absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i> */}
                            </div>
                        </div>  
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Stat</label>
                            <div class="relative">
                                <input 
                                    type="text" 
                                    class="input_singup"
                                    placeholder={value.stat}
                                    onChange={(event) => handlerVariable("birthday", event.target.value,setValue)}
                                />
                                {/* <i class="fas fa-calendar-alt absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i> */}
                            </div>
                        </div>      
                       
                    </div>
                    <div className="my-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input 
                            type="text"  
                            className="input_singup"
                            placeholder={value.email}
                            onChange={(event) => handlerVariable("name", event.target.value,setValue)}
                        />
                    </div>
                    <div className="my-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tel</label>
                        <input 
                            type="text"  
                            className="input_singup"
                            placeholder={value.tel}
                            onChange={(event) => handlerVariable("name", event.target.value,setValue)}
                        />
                    </div>

                    <label className="label-formulaire mt-2 mb-1">Liste formation</label>
                    <SearchableSelect options={listsmallformation} onChange={handleChange} />
                    <div id="tasksList" class="space-y-4 max-h-30 overflow-y-auto">
                        {value.fieldofstudy.map((v)=>(
                            <div class="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                <div class="checkbox-circle" onclick="toggleTask(this)"></div>
                                <span class="flex-1 text-gray-800">{v.name}</span>
                                <button onclick="" class="btn-neutre-gray">
                                    <i class="fa-regular fa-trash-can"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div class="flex items-center justify-end gap-3 mt-3">
                    <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>{close(false)}}>
                        Annuler
                    </button>
                    <button class="px-6 py-2 bg-softbleu hover:bg-softbleushade-12 text-white rounded-lg font-medium" >
                        Enregistrer
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}
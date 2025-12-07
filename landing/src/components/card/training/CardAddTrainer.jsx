import { useEffect, useState } from "react";
import { listeformateur, listsmallformation, url } from "../../../data/data";
import SearchableSelect from "../../../function/select";
import Select from "../../../function/selectSimple";
import { Sidebar } from "../../sidebar";
import { getData, send } from "../../../function/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function CardAddTrainer({close,infoTraining,listThemes}){
    const [value, setValue] = useState({
                    id: 0,
                    name: "",
                    nif: "",
                    stat: "",
                    tel: "",
                    email: "",
                    active: 3,
                    Trainerthemes: []  
                });
    const [listUnits,setListUnits]=useState([])
    const [price ,setPrice ]=useState({
        id: 0,
        idtrainer: 0,
        idtheme: 0,
        idunit: 0,
        unitprice: 0,
        maxpersonne: 0,
        description: "",
        nameTheme: "",
        nameTrainer: "",
        nif: "",
        stat: "",
        tel: "",
        email: "",
        active: 0,
        nameActive: "",
        nameunit: ""
    })
    const getListUnit = async ()=>{
        const datalistThemes =  await getData(
            url + `units`
        );
        if(datalistThemes.data!=null)
            setListUnits(datalistThemes.data)
    }
    const handlerTheme =(opt) =>{
        console.log(opt)
        handlerVariable("idtheme", opt.id,setPrice)
        handlerVariable("nameTheme", opt.name,setPrice)
    }
    const handlerUnit =(opt) =>{
        handlerVariable("idunit", opt.id,setPrice)
        handlerVariable("nameunit", opt.name,setPrice)
    }
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const handlerListThemeTrainer=  (name, value, index = null) => {
        console.log(value)
        setValue((previous) => {
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

        setPrice({
        id: 0,
        idtrainer: 0,
        idtheme: 0,
        idunit: 0,
        unitprice: 0,
        maxpersonne: 0,
        description: "",
        nameTheme: "",
        nameTrainer: "",
        nif: "",
        stat: "",
        tel: "",
        email: "",
        active: 3,
        nameActive: "",
        nameunit: ""
    });
    };
    useEffect(() => {
            getListUnit();
        }, []);
    const submit = async ()=>{
        const data = await send(value,url + "trainer")
        // console.log(value)
        if (data == true) {
            toast.success("Données insérées avec succès !");
            close(false);
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    }
    return (
        <div class="flex h-screen  "> 
            <Sidebar></Sidebar>
            <main class="flex-1 bg-white ">    
                <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                    <div className="max-w-7xl mx-auto bg-white p-10">
                        <div className="">
                        <h3 className="font-bold">Formateur &nbsp;&nbsp; {value.name}</h3>
                
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
                                        onChange={(event) => handlerVariable("stat", event.target.value,setValue)}
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
                                onChange={(event) => handlerVariable("email", event.target.value,setValue)}
                            />
                        </div>
                        <div className="my-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Tel</label>
                            <input 
                                type="text"  
                                className="input_singup"
                                placeholder={value.tel}
                                onChange={(event) => handlerVariable("tel", event.target.value,setValue)}
                            />
                        </div>
                        </div>
                        <div className="">
                        <div className="bg-gray-50 p-2 rounded">
                            <div className="flex  justify-between gap-2 ">
                                <div>
                                    <label className="label-formulaire mt-2 mb-1">theme</label>
                                    <Select options={listThemes} onChange={handlerTheme} />
                                </div>
                                <div>
                                    <label className="label-formulaire mt-2 mb-1">unite</label>
                                    <Select options={listUnits} onChange={handlerUnit} />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mt-2 mb-2">prix unitaire</label>
                                    <div class="relative">
                                        <input 
                                            type="number" 
                                            class="input_singup"
                                            min="0"                  // force positif
                                            step="0.01"
                                            placeholder={value.nif}
                                            onChange={(event) => handlerVariable("unitprice", event.target.value,setPrice)}
                                        />
                                        {/* <i class="fas fa-calendar-alt absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i> */}
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mt-2 mb-2">nombre  maximum de personne</label>
                                    <div class="relative">
                                        <input 
                                            type="number" 
                                            min="0"                  // force positif
                                            step="0.01"
                                            class="input_singup"
                                            placeholder={value.nif}
                                            onChange={(event) => handlerVariable("maxpersonne", event.target.value,setPrice)}
                                        />
                                        {/* <i class="fas fa-calendar-alt absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i> */}
                                </div>
                                </div>  
                                <button onClick={() => {handlerListThemeTrainer("Trainerthemes",price,null)}} class="btn-neutre-gray">
                                            <i class="fa-regular fa-plus"></i>
                                </button>
                            </div>
                            <div>
                                    <label class="label-formulaire mt-2 mb-2">description</label>
                                    <textarea 
                                        required
                                        placeholder={""} 
                                        rows="1"
                                        class="input_singup "
                                        onChange={(event)=>{handlerVariable("description",event.target.value,setPrice)}}
                                    ></textarea>
                                </div>
                            </div>
                            <div id="tasksList" class="space-y-4 max-h-30 overflow-y-auto">
                                 <table class="w-full">
                                 <thead class="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th class="tr-thead ">Theme</th>
                                        <th class="tr-thead">unite</th>
                                        <th class="tr-thead w-8">prix unitaire</th>
                                        <th class="tr-thead w-8">max personne</th>
                                        <th class="tr-thead w-80">description</th>
                                        <th class="tr-thead "></th>
                                    </tr>
                                </thead>
                                 
                                {value.Trainerthemes.map((v,k)=>(
                                    <tr index={k}>
                                        <td class="px-6 py-4">{v.nameTheme}</td>
                                        <td class="px-6 py-4">{v.nameunit}</td>
                                        <td class="px-6 py-4">{v.unitprice}</td>
                                        <td class="px-6 py-4">{v.maxpersonne}</td>
                                        <td class="px-6 py-4">{v.description}</td>
                                        <td>
                                            <button  onClick={() => {handlerListThemeTrainer("Trainerthemes",price,k)}} class="btn-neutre-gray">
                                                <i class="fa-regular fa-trash-can"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </table>
                            </div>
                            <div class="flex items-center justify-end gap-3 mt-10 ">
                                <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>{close(false)}}>
                                    Annuler
                                </button>
                                <button class="px-6 py-2 bg-softbleu hover:bg-softbleushade-12 text-white rounded-lg font-medium"  onClick={()=>submit()}>
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
        </div>
    );
}
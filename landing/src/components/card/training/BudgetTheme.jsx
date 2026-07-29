import { useEffect, useState } from "react";
import { url, betweenBackground} from "../../../data/data";
import { TextState } from "../../state";
import { deletev, getData, send, update } from "../../../function/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatMoney } from "../../../function/utils";


export default function BudgetTheme({close,value}){
    const acces = sessionStorage.getItem("access");
    const accesObj = JSON.parse(acces);
    console.log(value);
    const [budget,setBudget]=useState({
        idtheme :value.id,
        montant:0,
        year:null,
    })
    const [listBudget,setListBudget]= useState([])
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const submit = async ()=>{
        const value = await send(budget,url + "budget-theme")
        console.log(value)
        if (value == true) {
            toast.success("Données sauvegardées avec succès !");
            loadData();
            
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    }
    const updateMontant = async (valueUp)=>{
        console.log(valueUp);
        const value = await update(valueUp,url + "budget-theme")
        if (value == true) {
            toast.success("Données modifiées avec succès !");
            loadData();
        } else {
            toast.error("Problème serveur ou élément ne pouvant pas être modifié !");
        }
    }
    const deleteBudget = async (budgetItem) => {
        if (
            !window.confirm(
                `Supprimer le budget de l'année ${budgetItem.year} (${formatMoney(budgetItem.montant)} Ar) ?`
            )
        ) {
            return;
        }
        const result = await deletev(budgetItem, url + "budget-theme");
        if (result === true) {
            toast.success("Budget supprimé avec succès !");
            loadData();
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    };
    const loadData = async () => {
            const data = await getData(url + `budget-theme/${value.id}`);
            if(data.data!=null)
                setListBudget(data.data);
    };
    const handleMontantChange = (index, newValue) => {
        listBudget[index].montant = newValue;
        setListBudget(listBudget);
    };  
    const currentYear = new Date().getFullYear();
    useEffect(() => {
        loadData();
    }, []);
    const isCanAddBudget = accesObj  && (accesObj?.budget?.ajout == null || accesObj?.budget?.ajout == undefined) 
    const isCanUpdateBudget = accesObj  && (accesObj?.budget?.modification == null || accesObj?.budget?.modification == undefined) 
    const isCanDeleteBudget = accesObj && (accesObj?.budget?.suppression == null || accesObj?.budget?.suppression == undefined)


    return(
        <div className="background_transparent_popup">
            <div class="grid grid-cols-1 bg-white  p-10 rounded-card w-120 relative">
                <h3>Historique du budget de gestion de projet <b>{value.name}</b> </h3>
                <div class="absolute top-6 right-6">
                    <span class="text-gray-800 text-lg font-semibold">
                    <button class="" onClick={()=>(close(false))}>
                        <i class="fa-solid fa-xmark"></i>
                    </button></span>
                </div>
                <div class="flex flex-col items-center">
                    <div class="w-32 h-32   rounded-full flex items-center justify-center mb-4 cursor-pointer  transition-colors">
                       <img src="demandeformation.svg"/>
                    </div>
                </div>
                <div className='my-4'>
                    <label class="label-formulaire">Ajouter nouveaux budget</label>
                    <div class="relative flex justify-between gap-2">
                         <input 
                            type="number"
                            min="1900"
                            max={currentYear}
                            step="1"
                            class="input_singup"
                            onChange={(event)=>{handlerVariable("year",event.target.value,setBudget)}}
                            required
                        />
                        <input 
                            type="text" 
                            placeholder={formatMoney(budget.montant)} 
                            class="input_singup"
                            onChange={(event)=>{handlerVariable("montant",event.target.value,setBudget)}}
                            required
                        />
                        {isCanAddBudget!=true ?
                            <button class="btn-neutre" onClick={()=> submit()}>
                                <i class="fa-solid fa-plus"></i>
                            </button>
                         : <></>
                        }
                    </div>
                </div>
                <div class="overflow-x-auto  mt-2">
                    <table class="w-full">
                        <thead class="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th class="tr-thead w-8">Année</th>
                                <th class="tr-thead">Montant (Ar)</th>
                                <th class="tr-thead text-center">Actions</th>

                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            {listBudget.map((value,index)=>(
                                <>
                                <tr index={index} className={value.active==4 ?"bg-gray-50  hover:bg-gray-100":" hover:bg-gray-50"}>
                                    <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${betweenBackground(index)}`}>{value.year}</span></td>
                                    {/* <td class="px-6 py-4 text-sm text-gray-500">{formatMoney(value.montant)}</td> */}
                                    <td class="px-6 py-4">
                                            <input 
                                                type="text" 
                                                placeholder={formatMoney(value.montant)}
                                                class="input_singup"
                                                onChange={(event)=>{ handleMontantChange(index,event.target.value)}}
                                            />
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        <div class="flex items-center justify-center gap-2">
                                        {isCanUpdateBudget!=true ?
                                            <button type="button" onClick={()=>{updateMontant(value)}} title="Modifier">
                                                <i class="fa-solid fa-pen text-gray-500 hover:text-softbleu"></i>
                                            </button> : <></>
                                        }
                                        {isCanDeleteBudget!=true ?
                                            <button type="button" onClick={()=>{deleteBudget(value)}} title="Supprimer">
                                                <i class="fa-regular fa-trash-can text-red-500 hover:text-red-700"></i>
                                            </button> : <></>
                                        }
                                        </div>
                                    </td>
                                </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>  
                
            </div>
    </div>
    );
}
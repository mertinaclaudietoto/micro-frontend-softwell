import { useEffect, useState } from "react";
import Select from "../../function/selectSimple";
import { Sidebar } from "../../components";
import { send,getData } from "../../function/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatDate, formatMoney } from "../../function/utils";
import { textbackground ,url} from "../../data/data";

export default function AddInvoice({close,value}){
    const [invoice,setInvoice]=useState({
        idtraining_validate :value.id,
        date:new Date(),
        date_invoice:null,
        iduser:sessionStorage.getItem("userId"),
    });
    const [listeDetaille,setListeDetaille]=useState([]);
    const [detailleInvoice,setDetailleInvoice]=useState({
            denormalisation_idtraining_validate:value.id,
            designation :null,
            pu:null,
            qt:null,
            ptotal:null,
    });

    const [listSession,setListSession]=useState([]);
    const [listOfSessionHowHasNotInvoice,setListOfSessionHowHasNotInvoice]=useState([]);
    const addDetaille = (value)=>{
        value.ptotal=value.qt*value.pu;
        setListeDetaille((prev) => [
            ...prev,
            value
        ]);
    }
    const handlerSession = (opt) => {
        if(opt!=null){
            if (!listSession.some(value => value.idsession === opt.id)) {
                setListSession((prev) => ([
                    ...prev,{
                        denormalisation_idtraining_validate: value.id,
                        idsession: opt.id,
                        datedebut: opt.datestart,
                        datefin: opt.dateend,
                        name:opt.name
                    }
                ]));
            }
           
        }
    };
    const deleteSession = (id) => {
        setListSession((prev) =>
            prev.filter((v,index) => index !== id)
        );
    };
    const deleteDetailleInvoice = (key)=>{
        setListeDetaille((prev) =>
            prev.filter((value,index)=>index !==key)
        );
    }
    const getListOfSessionHowHasNotInvoice = async ()=>{
        const response =  await getData(
            url + `session/get_list_of_session_how_has_not_invoice/`+value.id
        );
        if(response.data!=null){
            setListOfSessionHowHasNotInvoice(response.data.map((value)=>(
                {
                    id:value.id,
                    datestart:value.datestart,
                    dateend:value.dateend,
                    name : formatDate(value.datestart)+" a  "+formatDate(value.dateend)
                }
            ))) 
        }
            
    }
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    useEffect(() => {
            getListOfSessionHowHasNotInvoice();
        }, []);
    const submit = async ()=>{
        const dataRequette ={
            listedetailleinvoice:listeDetaille,
            invoice:invoice,
            invoicesession:listSession.map((v)=>({
                    denormalisation_idtraining_validate:v.denormalisation_idtraining_validate,
                    idsession:v.idsession
                }
            ))
        }
        const response = await send(dataRequette,url + "invoice")
        // console.log(value)
        if (response == true) {
            toast.success("Données insérées avec succès !");
            close(false);
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    }
    return (
        <div class="flex h-screen"> 
            <Sidebar></Sidebar>
            <main class="flex-1 bg-white ">    
                <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                    <div className="max-w-7xl mx-auto bg-white p-10">
                        <div className="">
                            <h3 className="font-bold">Ajout facture</h3>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="my-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Liste session qui n'as pas encore de facture </label>
                                    <Select options={listOfSessionHowHasNotInvoice} onChange={handlerSession}/>
                                </div>
                                <div className="my-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Date du facture</label>
                                    <input 
                                        type="date" 
                                        class="input_singup"
                                        onChange={(event)=>{handlerVariable("date_invoice",event.target.value,setInvoice)}}
                                    />
                                </div>
                            </div>
                            <h3 className="font-bold text-sm">Détail facture</h3>
                            <div className="grid grid-cols-5 gap-2 ">
                                <div className="my-2 col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Designation</label>
                                    <input 
                                        type="text" 
                                        placeholder={detailleInvoice.designation}
                                        class="input_singup"
                                        onChange={(event)=>{handlerVariable("designation",event.target.value,setDetailleInvoice)}}
                                    />
                                </div>
                                <div className="my-2 ">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">prix unitaire</label>
                                    <input 
                                        type="text" 
                                        placeholder={detailleInvoice.pu}
                                        class="input_singup"
                                        onChange={(event)=>{handlerVariable("pu",event.target.value,setDetailleInvoice)}}
                                    />
                                </div>
                                <div className="my-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">quantité</label>
                                    <input 
                                        type="number" 
                                        placeholder={detailleInvoice.qt}
                                        class="input_singup"
                                        onChange={(event)=>{handlerVariable("qt",event.target.value,setDetailleInvoice)}}
                                    />
                                </div>
                                <div className="my-2  flex justify-center items-end">
                                    <button className="btn-neutre-gray" onClick={()=>addDetaille(detailleInvoice)} title="ajout">
                                            <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                        <div id="tasksList" class="">
                            <label className="block text-sm font-bold text-gray-700 mb-2"> </label>
                            <div className="flex gap-2 bg-blue-50 py-2 ">
                                {listSession.map((value,index)=>(
                                        <div className="flex gap-1">
                                            <p>{value.name}</p>
                                            <button onClick={()=>deleteSession(index)}>
                                                <i class="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                ))}
                            </div>
                            <table class="w-full">
                                <thead class="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th class="tr-thead ">Désignation</th>
                                        <th class="tr-thead">Prix Unitaire</th>
                                        <th class="tr-thead">Quantitée</th>
                                        <th class="tr-thead">Total</th>
                                        <th class="tr-thead w-8"></th>

                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    {listeDetaille.map((value,index)=>(
                                        <>
                                        <tr index={index} className={value.active==4 ?"bg-gray-50  hover:bg-gray-100":" hover:bg-gray-50"}>
                                            <td class="px-6 py-4  text-gray-500">{value.designation}</td>
                                            <td class="px-6 py-4">
                                                <span class={`inline-flex items-center px-2.5 py-0.5 rounded  font-medium mb-1 ${textbackground[index]}`}>
                                                    {formatMoney(value.pu)}
                                                    </span>
                                            </td>
                                            <td class="px-6 py-4">
                                                <div class=" font-medium text-gray-900 mb-1">{formatMoney(value.qt)}</div>
                                            </td>
                                            <td class="px-6 py-4">
                                                <div class="font-medium text-gray-900 mb-1">{formatMoney(value.ptotal)}</div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                    <button className="btn-neutre-gray" onClick={()=>deleteDetailleInvoice(index)} title="delete">
                                                        <i class="fa-solid fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </>
                                    ))}
                                </tbody>
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
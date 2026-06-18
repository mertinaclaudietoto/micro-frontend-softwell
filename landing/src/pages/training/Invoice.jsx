import { useEffect, useState } from "react";
import {  url, url_front} from "../../data/data";
import {  dateToLetters, diffDate } from "../../function/Date";
import {   Sidebar } from "../../components";
import { deleteId,getData } from "../../function/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddInvoice from "./AddInvoice";
import { formatDate } from "../../function/utils";

export default function Invoice({value,close}){
    const acces = sessionStorage.getItem("access");
    const accesObj = JSON.parse(acces);
    const [showAddInvoice,setShowAddInvoice]=useState(false);
    const [showUpdatesession,setShowUpdatesession]=useState(false);
    const [data,setData]=useState([]);
    const [listSession,setSession]=useState([]); 
    const getListInvoice = async ()=>{
            const data = await getData(url + `invoice/${value.id}`);
            if(data.data!=null){
                setData(data.data);
            }   
        }
    const getListSession = async ()=>{
            const data = await getData(url + `session/list/${value.id}`);
            if(data.data!=null){
                setSession(data.data);
            }   
    }
    useEffect(()=>{
        getListSession();
        getListInvoice()
    },[showUpdatesession])

    return(
        <>
        {showAddInvoice? <AddInvoice  close={setShowAddInvoice} value={value}/> :
        <>
        <div class="flex">
            <Sidebar/>
            <main class="flex-1 ">  
                <div class=" md:p-8 bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                    <div className=" max-w-7xl mx-auto p-10 flex bg-white">
                        <div className="flex-1  border-rigth ">
                            {/* filtre */}
                            <div class="p-4 mb-2 border-b border-gray-200 sticky top-0 z-50 pink ">
                                <div class="flex items-center justify-between">
                                    <h2 class="text-xl font-semibold text-gray-800">Facture de la formation
                                        {/* <p className="text-xs text-gray-400">{`page ${numpage}/${Math.ceil(nbrligne / nbrSize)}`}</p> */}
                                    </h2>
                                    
                                    <div class="flex items-center space-x-3">
                                        <div className="flex space-x-2">
                                            <button class="px-4 py-2 bg-softbleutini-12 text-white rounded-lg text-sm flex items-center hover:bg-softbleu" onClick={()=>{setShowAddInvoice(true)}}>
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* filtre */}
                            <table class="w-full pt-2 ">
                                <thead class="bg-gray-100 border-b border-gray-200">
                                    <tr>
                                        <th class="tr-thead text-xl font-bold">{value?.id}</th>
                                        <th class="tr-thead text-xl">{value?.themeName}</th>
                                        <th class="tr-thead text-xl">{value?.adminName} {value?.adminFirstname}</th>
                                        <th  className="text-softbleu" onClick={()=>close(false)}>Retour</th>
                                    </tr>
                                </thead>
                            </table>
                            {/* liste de session */}
                           
                            <div className="grid grid-cols-1 p-8 justify-center items-center ">
                                <div class="overflow-x-auto  mt-2 ">
                                    <table className="w-full">
                                        <thead className="bg-gray-50 border-b border-gray-200">
                                            <tr>
                                                <th className="tr-thead">Designation</th>
                                                <th className="tr-thead">Prix unitaire</th>
                                                <th className="tr-thead">quantitee</th>
                                                <th className="tr-thead">prix total</th>
                                            </tr>
                                        </thead>
                                    </table>
                                    {/* <h3 class="font-semibold text-gray-800 mb-1">Listes session</h3> */}
                                    {data.map((valueL, index) => (
                                        <div key={index} className="w-full py-4">
                                            
                                            <div className="flex  gap-2 bg-blue-50">
                                            {valueL?.invoicesession?.map((v, index) => {
                                                return (
                                                    <table className="border-r-4 border-gray-100" key={index}>
                                                        <tbody>
                                                            <tr>
                                                                <td className="text-sm text-blue-800">
                                                                    {formatDate(v.datestart)}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-sm text-blue-800">
                                                                    {formatDate(v.dateend)}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                );
                                            })}

                                            </div>
                                            <table className="w-full">
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {valueL?.listedetailleinvoice.map((v, idx) => (
                                                    <tr key={idx} className="hover:bg-gray-50">
                                                        <td className="px-6 py-4 text-sm text-gray-900">{v.designation}</td>
                                                        <td className="px-6 py-4 text-sm text-gray-900">{v.pu}</td>
                                                        <td className="px-6 py-4 text-sm text-gray-900">{v.qt}</td>
                                                        <td className="px-6 py-4 text-sm text-gray-900">{v.ptotal}</td>
                                                    </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ))}
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div></>
            }
        </>
        
    );
}
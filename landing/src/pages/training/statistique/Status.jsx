


import { useEffect, useState ,useCallback} from "react";
import { Sidebar } from "../../../components";
// import { Line, LineChart } from 'recharts';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LineChart,Line, XAxis,YAxis,Tooltip,CartesianGrid,Legend,} from "recharts";
import {  betweenBackground, COLORS, url } from "../../../data/data";
import { getData } from "../../../function/Axios";
import Select from "../../../function/selectSimple";

export default function Status(){
    const [statusTraining ,setStatusTraining]=useState([]);
    const [dataGroup,setDataGroup]=useState([]); 
    const getStatusTraining = async () =>{
        const data = await getData(
            url + `statistique/status-training`
        );
        setStatusTraining( data.data);
        console.log(data.data);
    }
    const getGroupBy= async ()=>{
        const data = await getData(url + `v_wish/pagination-groupbytheme?pageNumber=1&pageSize=100`);
        if(data.data!=null)
            setDataGroup(data.data);
    }
    useEffect(() => {
        getStatusTraining();
        getGroupBy();
         }, []);
      return(
        <>
        <div class="flex h-screen ">
            <Sidebar/>
            <main class="flex-1 ">    
                <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                    <div className=" max-w-7xl mx-auto bg-white p-10 ">
                       {/* comparaison des cout de formation de l'entreprise chaque annee */}
                       <div className="flex items-center justify-between py-2 ">
                            <h2 class="text-xl font-semibold text-gray-800">État général des formations</h2>
                        </div>
                        <div>
                            <div className="">
                               {/* validation */}
                                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    {statusTraining.map((value,index)=>(
                                        <div class={`bg-gray-50 rounded-xl p-6  ${betweenBackground(index)}`}  key={index}>
                                            <div class="flex items-center justify-between mb-2">
                                                <span class= {`text-2xl font-bold text-gray-900 ${betweenBackground(index)}`} >{value.count}</span>
                                                {/* <i class="w-5 h-5 text-blue-600 fas fa-check-circle"></i> */}
                                            </div>
                                            <p class={`text-sm text-gray-500 `}>
                                                <span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${betweenBackground(index)}`}> {value.statusName}</span>
                                            </p>
                                        </div>
                                    ))}
                               </div>
                            </div>
                            {/* table total souhait */}
                            <label className="label_input m-2"> Total des souhaits par thème</label>
                            <table class="w-full">
                                <thead class="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th class="tr-thead">Thème</th>
                                        <th class="tr-thead flex justify-center items-center">Nombre souhaits</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    {dataGroup.map((value,index)=>(
                                        <>
                                        <tr index={index} className={value.active==4 ?"bg-gray-50  hover:bg-gray-100":" hover:bg-gray-50"}>
                                            <td class="px-6 py-4 text-sm text-gray-500">{value.nameTheme}</td>
                                            <td class="px-6 py-4 flex justify-center items-center">
                                                <span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${betweenBackground(index)}`}>
                                                    {value.nbr} 
                                                </span>
                                            </td>
                                        </tr>
                                        </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                         {/* filtre */}
                     
                       
                      
                    </div>
                </div>
            </main>
        </div>
        
        </>
    )
}
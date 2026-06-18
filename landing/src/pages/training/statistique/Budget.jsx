


import { useEffect, useState ,useCallback} from "react";
import { Sidebar } from "../../../components";
// import { Line, LineChart } from 'recharts';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { betweenBackground, COLORS, textbackground, url } from "../../../data/data";
import { getData } from "../../../function/Axios";
import Select from "../../../function/selectSimple";
import { formatMoney } from "../../../function/utils";

export default function Budget(){
    
    const [listBudgetBetweenYear,setListBudgetBetweenYear]=useState();
    const [yearCostBudget,setYearCostBudget]=useState(new Date().getFullYear()  );
    const [filtreYear, setFiltreYear] = useState({
        startYear: new Date().getFullYear() - 10, 
        endYear: new Date().getFullYear()         
    });
    const [budgetCostThemeInYear,setBudgetCostThemeInYear]=useState([]);
    const [budgetCostThemeInYearReload,setBudgetCostThemeInYearReload]=useState([]);
    const [keyStatParticipant,setKeyStatParticipant]=useState([]);
    const listChoixClassement=[
        {id:"service",name:"par service"},
        {id:"departement",name:"par departement"},
        {id:"categorie",name:"par categorie"},
    ];
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const getCostParticipants = async () =>{
        const data = await getData(
            url + `statistique/budget-cost-theme-in-year/${yearCostBudget}`
        );
        setBudgetCostThemeInYear(data.data);
        setBudgetCostThemeInYearReload(data.data);
    }

    const getListBudgetBetweenYear = async () =>{
        const data = await getData(
            url + `statistique/budget-cost-between-years/${filtreYear.startYear}/${filtreYear.endYear}`
        );
        setListBudgetBetweenYear(
            data.data.map(value => ({
                name: value.annee,
                total_cost: value.totalCost,
                budget: value.budget
            }))
        );
        // console.log(  data.data.map(value => ({
        //         name: value.annee,
        //         total_cost: value.totalCost,
        //         budget: value.budget
        //     })))
    }
    const reloadDataCostParticipants =() =>{
        setBudgetCostThemeInYear(budgetCostThemeInYearReload);
    }
   
    const deleteKey = (mot) => {
        setKeyStatParticipant(prev =>
            prev.filter(value => value !== mot)
        );
    };
    const currentYear = new Date().getFullYear();
    useEffect(() => {
           getCostParticipants();
           getListBudgetBetweenYear();
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
                                <h2 class="text-xl font-semibold text-gray-800">Variation du budget et du coût de formation</h2>
                                <div class="flex gap-2 ">
                                    <input type="text" placeholder={filtreYear.startYear} class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500  " onChange={(event)=>handlerVariable("startYear",event.target.value,setFiltreYear)}/>
                                    <input type="text" placeholder={filtreYear.endYear} class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500  " onChange={(event)=>handlerVariable("endYear",event.target.value,setFiltreYear)}/>
                                    <button onClick={()=>getCost()} >
                                        <svg class="w-5 h-5 text-gray-400 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                    </button>
                                </div>
                            </div>
                        <div>
                        <div className="">
                            <BarChart
                                style={{ width: '100%', maxHeight: '40vh', aspectRatio: 1.618 }}
                                responsive
                                data={listBudgetBetweenYear}
                                margin={{
                                    top: 5,
                                    right: 0,
                                    left: 0,
                                    bottom: 5,
                                }}
                                >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis width="auto" />
                                <Tooltip />
                                <Legend />
                                    <Bar dataKey={"total_cost"} fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
                                    <Bar dataKey={"budget"} fill="#82ca9d" activeBar={{ fill: 'gold', stroke: 'purple' }} radius={[10, 10, 0, 0]} />
                            </BarChart>
                        </div>
                        </div>
                         {/* filtre */}
                        <div class="p-4 mb-2 border-b border-gray-200 sticky top-0 z-50 pink ">
                            <div class="flex items-center justify-between">
                                <h2 class="text-xl font-semibold text-gray-800">Liste des coûts et budgets pour une année par thème </h2>
                                <div class="flex items-center space-x-3">
                                    <div class="relative flex gap-2">
                                        <input type="text" placeholder="Rechercher…" class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500  " onChange={(event)=>filtreByWord(event.target.value)}/>
                                        <input 
                                            type="number"
                                            min="1900"
                                            max={currentYear}
                                            placeholder={yearCostBudget} class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500  " onChange={(event)=>filtreByWord(event.target.value)}/>
                                       
                                        <button onClick={()=>reloadDataCostParticipants() } >
                                            <span class="absolute right-3 top-2.5 text-xs text-gray-400 border border-gray-300 px-1.5 py-0.5 rounded">⌘K</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="overflow-x-auto  scroll-auto max-h-90 mt-2">
                        <table class="w-full">
                            <thead class="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th class="tr-thead ">Thème</th> 
                                    <th class="tr-thead">Description</th>
                                    <th class="tr-thead">Budget (Ar)</th>
                                    <th class="tr-thead">Coût (Ar)</th>
                                    <th class="tr-thead">Reste (Ar)</th>
                                    {/* <th class="tr-thead"></th> */}
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                {budgetCostThemeInYear.map((value,index)=>(
                                    <>
                                        <tr index={index} className={value.active==4 ?"bg-gray-50  hover:bg-gray-100":" hover:bg-gray-50"}>
                                            <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${betweenBackground(index)}`}>{value.name}</span></td>
                                            <td class="px-6 py-4 text-sm text-gray-500">{value.description}</td>
                                            <td class="px-6 py-4 text-sm text-gray-500">{formatMoney(value.budget) }</td>
                                            <td class="px-6 py-4 text-sm text-gray-500">{formatMoney(value.totalCost)}</td>
                                            <td class="px-6 py-4 text-sm text-gray-500">{formatMoney(value.budget-value.totalCost)}</td>
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </table>
                        </div>  
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}



import { useEffect, useState ,useCallback} from "react";
import { Sidebar } from "../../../components";
// import { Line, LineChart } from 'recharts';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import { betweenBackground, COLORS, textbackground, url } from "../../../data/data";
import { getData } from "../../../function/Axios";
import Select from "../../../function/selectSimple";
import { formatMoney } from "../../../function/utils";

export default function Cost(){
    
    const [costTrainingBetwen2Year ,setCostTrainingBetwen2Year]=useState();
    const [listCostByTheme,setListCostByTheme]=useState([]);
    const [multipleChart,setMultipleChart]=useState([]);
    const [listTheme,setListTheme]=useState([]);
    const [costParticipants,setCostParticipants]=useState([]);
    const [costParticipantsReload,setCostParticipantsReload]=useState([]);
    const [keyStatParticipant,setKeyStatParticipant]=useState([]);
    const listChoixClassement=[
        {id:"service",name:"par service"},
        {id:"departement",name:"par departement"},
        {id:"categorie",name:"par categorie"},
    ];
    const [statClassement,setStatClassement]=useState([]);
    const getStatByClassement = async (opt)=>{
        if(opt!=null){
            const data = await getData(
                url + `statistique/cost-${opt.id}/${filtreYear.startYear}/${filtreYear.endYear}`
            );
            setStatClassement(transformForChart(data.data))
            setKeyStatParticipant(data.data?.length > 0 && ( Object.keys(transformForChart(data.data)[0])));
        }
    }
    const [filtreYear, setFiltreYear] = useState({
        startYear: new Date().getFullYear() - 16, // année de début
        endYear: new Date().getFullYear()         // année actuelle
    });
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const getCostParticipants = async () =>{
        const data = await getData(
            url + `statistique/cost-and-hour-by-year-employs/${filtreYear.startYear}/${filtreYear.endYear}`
        );
        setCostParticipants( data.data);
        setCostParticipantsReload(data.data);

    }
    const getTheme = async () =>{
        const data = await getData(
            url + `training-themes`
        );
        setListTheme( data.data);
    }
    const getCost = async () => {
        const data = await getData(
            url + `statistique/cost-general-training/${filtreYear.startYear}/${filtreYear.endYear}`
        );
        setCostTrainingBetwen2Year( data.data);
    }; 
    const getCostByTheme = async (idtheme,name) => {
        if(listCostByTheme.length >=10){
           toast.error("Le maximum autorisé est de 10 thèmes pour la comparaison des coûts de formation.");
        }else{
            const data = await getData(
                url + `statistique/cost-general-training-by-theme/${filtreYear.startYear}/${filtreYear.endYear}/${idtheme}`
            );
            setListCostByTheme(previous =>[
                ...previous,{
                    name:name,
                    [name]:data.data
                }
            ]);
        }
    }; 
    const handlerSelect = (opt)=>{
        if(opt!=null &&  !listCostByTheme.some(value => value.name === opt.name)){

            getCostByTheme(opt.id,opt.name)
        }
        setMultipleChart(transformThemesToMultiLineChartData(listCostByTheme))

        console.log("affichage");
        console.log(transformThemesToMultiLineChartData(listCostByTheme));
    };
    function transformThemesToMultiLineChartData(input) {
    // Vérification correcte d’un tableau non vide
    if (!Array.isArray(input) || input.length === 0) {
        return [];
    }

    const firstTheme = input[0];
    const firstThemeName = firstTheme.name;

    // Sécurité si la structure n’est pas conforme
    if (!Array.isArray(firstTheme[firstThemeName])) {
        return [];
    }
    const years = firstTheme[firstThemeName].map(item => item.year);
    return years.map(year => {
        const row = { name: year };
        input.forEach(theme => {
        const themeName = theme.name;
        const themeData = theme[themeName];

        const value = themeData?.find(x => x.year === year);
        row[themeName] = value ? value.montant : 0;
        });

        return row;
    });
    }
    const deleteCostTheme = (name) => {
        setListCostByTheme(prevList => {
            const newList = prevList.filter(item => item.name != name);
            // Mettre à jour le graphique avec la nouvelle liste
            setMultipleChart(transformThemesToMultiLineChartData(newList));
            return newList;
        });
    };
    const filtreByWord = (word) => {
        const search = word.toLowerCase();
        setCostParticipants(
            costParticipants.filter((value) =>
                value.name?.toLowerCase().includes(search) ||
                value.firstname?.toLowerCase().includes(search)
            )
        );
    };
    const reloadDataCostParticipants =() =>{
        setCostParticipants(costParticipantsReload);
    }
    function transformForChart(data) {
        const chartDataMap = {};
        data.forEach(item => {
            const year = item.annee.toString();
            const theme = item.name.trim(); // enlever espaces inutiles
            const cost = item.cost || 0; // mettre 0 si pas de coût
            if (!chartDataMap[year]) {
            chartDataMap[year] = { name: year };
            }
            chartDataMap[year][theme] = cost;
        });
        return Object.values(chartDataMap);
    }
    const deleteKey = (mot) => {
        setKeyStatParticipant(prev =>
            prev.filter(value => value !== mot)
        );
    };

   
    useEffect(() => {
           getCost();
           getTheme();
           getCostParticipants();
           getStatByClassement({id:"service",name:"par service"});
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
                                <h2 class="text-xl font-semibold text-gray-800">Statistiques sur le coût des formations</h2>
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
                            <div className="flex items-center justify-between py-2 ">
                                <p>Évolution du coût total des formations de l’entreprise sur une période donnée</p>
                            </div>
                            <div className="">
                                <LineChart
                                    style={{ width: '100%', maxHeight: '30vh', aspectRatio: 1.618 }}
                                    responsive
                                    data={costTrainingBetwen2Year}
                                    >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="year" padding={{ left: 30, right: 30 }} />
                                    <YAxis width="auto" />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="montant" stroke="#8884d8" activeDot={{ r: 8 }} />
                                </LineChart>
                            </div>
                            <div className="flex items-center justify-between py-2 ">
                                <p>Comparaison d'evolution de cout de formation par theme</p>
                                <div class="flex gap-2 ">
                                    <Select options={listTheme} onChange={handlerSelect} placeholder="theme" value={false}/>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {listCostByTheme.map((value,index) => {
                                    return (
                                        <div key={value.name} className={`flex gap-2 items-center p-1 rounded-xl ${textbackground[index]}`}>
                                            <p>{value.name}</p>
                                            <button type="button" onClick={()=>{deleteCostTheme(value.name)}}>
                                                <i className="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="">
                                <LineChart
                                    style={{ width: '100%', maxHeight: '35vh', aspectRatio: 1.618 }}
                                    responsive
                                    data={multipleChart}
                                    >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                                    <YAxis width="auto" />
                                    <Tooltip />
                                    <Legend />
                                    {listCostByTheme.map((value, index) => {
                                        return (
                                        <Line
                                            key={value.name}
                                            type="monotone"
                                            dataKey={value.name}
                                            stroke={COLORS[index]}
                                            activeDot={{ r: 8 }}
                                        />
                                        );
                                    })}
                                </LineChart>
                            </div>
                            <div className="flex items-center justify-between py-2 ">
                                <p>Comparaison de l’évolution des coûts de formation par service, département ou catégorie au sein de l’entreprise</p>
                                <div class="flex gap-2 ">
                                    <Select options={listChoixClassement} onChange={getStatByClassement} placeholder="service" value={false}/>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {keyStatParticipant.map((value,index) => {
                                    return (
                                        <div key={value} className={`flex gap-2 items-center p-1 rounded-xl ${betweenBackground(index)}`}>
                                            <p>{value}</p>
                                            <button type="button" onClick={()=>{deleteKey(value)}}>
                                                <i className="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="">
                                <LineChart
                                    style={{ width: '100%', maxHeight: '50vh', aspectRatio: 1.618 }}
                                    responsive
                                     data={statClassement}
                                    >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                                    <YAxis width="auto" />
                                    <Tooltip />
                                    <Legend />
                                        {keyStatParticipant.map((value, index) => (
                                            index > 1 ? (
                                                <Line
                                                    key={value}
                                                    type="monotone"
                                                    dataKey={value}
                                                    stroke={COLORS[index]}
                                                    activeDot={{ r: 8 }}
                                                />
                                            ) : null
                                        ))}
                                </LineChart>
                            </div>
                        </div>
                         {/* filtre */}
                        <div class="p-4 mb-2 border-b border-gray-200 sticky top-0 z-50 pink ">
                            <div class="flex items-center justify-between">
                                <h2 class="text-xl font-semibold text-gray-800">Liste des coûts par employés </h2>
                                <div class="flex items-center space-x-3">
                                    <div class="relative">
                                        <input type="text" placeholder="nom organisme" class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500  " onChange={(event)=>filtreByWord(event.target.value)}/>
                                        <svg class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                        <button onClick={()=>reloadDataCostParticipants() } >
                                            <span class="absolute right-3 top-2.5 text-xs text-gray-400 border border-gray-300 px-1.5 py-0.5 rounded">⌘K</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="overflow-x-auto  scroll-auto max-h-60 mt-2">
                        <table class="w-full">
                            <thead class="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th class="tr-thead w-8">Matricule</th>
                                    <th class="tr-thead">Nom</th>
                                    <th class="tr-thead">Prenom</th>
                                    <th class="tr-thead">Cost</th>
                                    <th class="tr-thead">Heure</th>
                                    {/* <th class="tr-thead"></th> */}
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                {costParticipants.map((value,index)=>(
                                    <>
                                        <tr index={index} className={value.active==4 ?"bg-gray-50  hover:bg-gray-100":" hover:bg-gray-50"}>
                                            <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${betweenBackground(index)}`}>{value.matricule}</span></td>
                                            <td class="px-6 py-4 text-sm text-gray-500">{value.name}</td>
                                            <td class="px-6 py-4 text-sm text-gray-500">{value.firstname}</td>
                                            <td class="px-6 py-4 text-sm text-gray-500">{formatMoney(value.totalCost)}</td>
                                            <td class="px-6 py-4 text-sm text-gray-500">{value.totalHours}</td>
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
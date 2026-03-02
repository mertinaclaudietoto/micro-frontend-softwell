


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
import { Pie, PieChart,  Sector } from 'recharts';
import { betweenBackground, COLORS, url_recrutement, } from "../../../data/data";
import { exportPdfExcel, getData, getDataWithObjectParametre } from "../../../function/Axios";
import Select from "../../../function/selectSimple";

export default function PostStat(){
    const [yearStatStart , setYearStatStart] =useState(new Date().getFullYear());
    const [yearStatEnd , setYearStatEnd] =useState(new Date().getFullYear());

    const [listStatRegister , setListStatRegister] =useState([]);
    const [listPourcentageGenre , setListPourcentageGenre] =useState([]);
    const [listAgePourcentage , setListAgePourcentage] =useState([]);
    const [listDiplome , setListDiplome] =useState([]);
    const [listSelectDiplome, setListSelectDiplome] =useState([]);
    const [listStatParDiplome , setListStatParDiplome] =useState([]);
    const getListStatParDiplome = async ()=>{
        const data = await getDataWithObjectParametre(
           listDiplome.map((value)=>value.id ), url_recrutement + `statistique/stat_diplome/${yearStatStart}`
        );
        // console.log(data.data,listDiplome.map((value)=>value.id ));
        setListStatParDiplome(data.data);
    }

   
    const [ageBetween , setAgeBetween] =useState({
        start:"",
        end:""
    });
    const [listAgeBetween,setListAgeBetween] =useState([]);
    const RADIAN = Math.PI / 180;
    // Fonction pour afficher le label personnalisé
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        if (!cx || !cy || !innerRadius || !outerRadius) return null;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
            >
            {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    // Composant pour colorer les secteurs
    const MyCustomPie = (props) => <Sector {...props} fill={COLORS[props.index % COLORS.length]} />;
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const addAgeDate = () => {
        const exist = listAgeBetween.some(
            (value) => value.start === ageBetween.start && value.end === ageBetween.end
        );

        // On ajoute seulement si ça n'existe PAS
        if (!exist) {
            setListAgeBetween(prev => [...prev, ageBetween]);
        }
    };
    const getStatCandidatRegisterDto = async ()=>{
        const data = await getData(
            url_recrutement + `statistique/stat_register/${yearStatStart}`
        );
        setListStatRegister(data.data);
    }
    const getListeDiplomeCndidateInYear = async ()=>{
        const data = await getData(
            url_recrutement + `statistique/get_liste_diplome/${yearStatStart}`
        );
        setListSelectDiplome(data.data);
    }

    const getDataPieChartDtoByPlateforme = async ()=>{
        const data = await getData(
         url_recrutement + `statistique/get_data_piechart_by_plateforme/${yearStatStart}/${yearStatEnd}`
        );
        setListAgePourcentage(data.data);
    }

    const deleteAgeBetween = (id) => {
        setListAgeBetween(prev =>
            prev.filter((item, index) => index !== id)
        );
    };

    const getStatGenre = async ()=>{
        const data = await getData(
            url_recrutement + `statistique/stat_genre/${yearStatStart}`
        );
        setListPourcentageGenre(data.data);
    }
    const getXlsx = async ()=>{
        const data = await exportPdfExcel(url_recrutement + `exportxlsx/pivot/${dateExport.start}/${dateExport.end}`)
        if (data == true) {
            toast.success("Données actualisées avec succès !");
            close(false);
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    }
    const [listeOffreByStatus ,setListeOffreByStatus]=useState([]);
    const flisteOffreByStatus = async  ()=>{
        const data = await getData(
            url_recrutement + `v_nbr_group_by_status_recruitment`
        );
        console.log(data);
        setListeOffreByStatus(data.data);
    }
    
    useEffect(() => {
           getStatCandidatRegisterDto();
           getStatGenre();
           getListeDiplomeCndidateInYear();
           getDataPieChartDtoByPlateforme()
           flisteOffreByStatus()
         }, []);
    const [dateExport, setDateExport] = useState({
        start: new Date().toISOString().split("T")[0],
        end: new Date().toISOString().split("T")[0],
    });
   
    return(
        <>
      
        <div class="flex h-screen ">
            <Sidebar/>
            <main class="flex-1 ">    
                <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                    <div className=" max-w-7xl mx-auto bg-white p-10 ">
                       {/* comparaison des cout de formation de l'entreprise chaque annee */}
                            <div className="flex items-center justify-between py-2 ">
                                <h2 class="text-xl font-semibold text-gray-800">Statistiques sur les offres d'emplois</h2>
                            </div>
                        <div>
                            <div class="flex justify-between gap-2 p-4 ">
                                    <p>Export XLSX des informations de recrutement entre deux dates</p>
                                    <div className=" flex gap-2">
                                        <input type="date" placeholder={dateExport.start} class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500  " onChange={(event)=>handlerVariable("start",event.target.value, setDateExport)}/>
                                        <input type="date" placeholder={dateExport.end} class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500  " onChange={(event)=>handlerVariable("end",event.target.value, setDateExport)}/>
                                        <button onClick={()=>getXlsx()} className="btn-neutre-gray" >
                                            <svg class="w-5 h-5 text-gray-400 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                                </svg>
                                        </button>
                                    </div>
                            </div>
                            <div className="flex gap-2 bg-blue-50 py-2 my-2 ">
                            </div>
                            
                            <div className="max-w-7xl mx-auto">
                                {/* Header */}
                                <div className="flex justify-between items-center mb-6">
                                </div>
                                {/* Stats Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {listeOffreByStatus.map((stat, index) => (
                                    <div >
                                        <div
                                        key={index}
                                        className={`${betweenBackground(index)} rounded-lg p-6 relative overflow-hidden`}
                                        >
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className={`${betweenBackground(index)} text-sm mb-2`} >{stat.name}</p>
                                                    <h2 className={` ${betweenBackground(index)} text-3xl font-bold  mb-2`}>
                                                        {stat.statusId !=null ?   stat.nbr :0 }
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            
                            {/* ajout anne */}
                            <div className="flex gap-2 ">
                                <div className="w-2/2">
                                         <label className="label_input">Section par plateforme de recrutement</label>
                                </div>
                                <input type="text" placeholder={ageBetween.start} class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500  " onChange={(event)=>handlerVariable("start",event.target.value, setAgeBetween)}/>
                                <input type="text" placeholder={ageBetween.end} class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500  " onChange={(event)=>handlerVariable("end",event.target.value, setAgeBetween)}/>
                                <button className="btn-neutre-gray" onClick={()=>addAgeDate()} >
                                   <i class="fa-solid fa-plus"></i>
                                </button>
                                <button className="btn-neutre-gray" onClick={()=>getDataPieChartDtoByPlateforme()} >
                                   <i class="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                            <div className="flex gap-2 bg-blue-50 py-2 my-2 ">
                                {listAgeBetween.map((value,index)=>(
                                        <div className="flex gap-1">
                                            <p>{value.start} --- {value.end}</p>
                                            <button onClick={()=>deleteAgeBetween(index)}>
                                                <i class="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                ))}
                            </div>
                            {/* <label className="label_input">Pourcentage des inscrits par sexe</label> */}
                            <div className="flex gap-2">
                                <div className="w-1/2">
                                    <table className="w-full">
                                    <thead className="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                        <th className="tr-thead">Name</th>
                                        <th className="tr-thead">Nombre</th>
                                        <th className="tr-thead">Pourcentage (%)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {listAgePourcentage.map((value, index) => (
                                        <tr
                                            key={index}
                                            className={
                                            value.active === 4
                                                ? "bg-gray-50 hover:bg-gray-100"
                                                : "hover:bg-gray-50"
                                            }
                                        >
                                            <td className="px-6 py-4 text-sm text-gray-500">{value.name}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{value.nbr}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{value.pourcentage}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                    </table>
                                </div> 

                                <div className="w-1/2">
                                <PieChart
                                        style={{ width: '100%', maxHeight: '30vh', aspectRatio: 1.618 }}
                                        responsive
                                    >
                                    <Pie
                                        data={listAgePourcentage}
                                        dataKey="pourcentage"
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                        shape={MyCustomPie}
                                        isAnimationActive={true}
                                    />
                                        <Legend verticalAlign="bottom" height={36} />

                                </PieChart>
                                </div>
                                
                            
                            </div>
                           
                        </div>
                        {/* diplome  */}
                    </div>
                </div>
            </main>
        </div>
        
        </>
    )
}
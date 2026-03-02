


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
import { COLORS, url_recrutement, } from "../../../data/data";
import { getData, getDataWithObjectParametre } from "../../../function/Axios";
import Select from "../../../function/selectSimple";

export default function CandidateStat(){
    const [yearStatRegister , setYearStatRegister] =useState(new Date().getFullYear());
    const [listStatRegister , setListStatRegister] =useState([]);
    const [listPourcentageGenre , setListPourcentageGenre] =useState([]);
    const [listAgePourcentage , setListAgePourcentage] =useState([]);
    const [listDiplome , setListDiplome] =useState([]);
    const [listSelectDiplome, setListSelectDiplome] =useState([]);
    const [listStatParDiplome , setListStatParDiplome] =useState([]);

   
    const getListStatParDiplome = async ()=>{
        const data = await getDataWithObjectParametre(
           listDiplome.map((value)=>value.id ), url_recrutement + `statistique/stat_diplome/${yearStatRegister}`
        );
        console.log(data.data,listDiplome.map((value)=>value.id ));
        setListStatParDiplome(data.data);
    }


    const addListeDimplome = (opt)=>{
        console.log(opt)
        if(opt!=null){
            const exist = listDiplome.some(
                (value) => value.id == opt.id
            );
            // On ajoute seulement si ça n'existe PAS
            if (!exist) {
                setListDiplome(prev => [...prev, opt]);
            }
        }
    }
     const deleteListeDimplome = (id) => {
        setListDiplome(prev =>
            prev.filter((item, index) => index !== id)
        );
    };
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
            url_recrutement + `statistique/stat_register/${yearStatRegister}`
        );
        setListStatRegister(data.data);
    }
    const getListeDiplomeCndidateInYear = async ()=>{
        const data = await getData(
            url_recrutement + `statistique/get_liste_diplome/${yearStatRegister}`
        );
        setListSelectDiplome(data.data);
    }

    const getListAgePourcentageDto = async ()=>{
        const data = await getDataWithObjectParametre(
           listAgeBetween, url_recrutement + `statistique/stat_age/${yearStatRegister}`
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
            url_recrutement + `statistique/stat_genre/${yearStatRegister}`
        );
        console.log(data.data)
        setListPourcentageGenre(data.data);
    }
    useEffect(() => {
           getStatCandidatRegisterDto();
           getStatGenre();
           getListeDiplomeCndidateInYear();
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
                                <h2 class="text-xl font-semibold text-gray-800">Statistiques sur les candidates</h2>
                                
                            </div>
                        <div>
                            <div class="flex gap-2 ">
                                    <p>Statistiques mensuelles des inscriptions de candidats</p>
                                    <input type="text" placeholder={yearStatRegister} class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500  " onChange={(event)=>handlerVariable("yearStatRegister",event.target.value, setYearStatRegister)}/>
                                    <button onClick={()=>getStatCandidatRegisterDto()} >
                                        <svg class="w-5 h-5 text-gray-400 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                    </button>
                            </div>
                            <div className="">
                                <LineChart
                                    style={{ width: '100%', maxHeight: '30vh', aspectRatio: 1.618 }}
                                    responsive
                                    data={listStatRegister}
                                    >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" padding={{ left: 30, right: 30 }} />
                                    <YAxis width="auto" />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="nbr" stroke="#8884d8" activeDot={{ r: 8 }} />
                                </LineChart>
                            </div> 
                        </div>
                        <div>
                        </div>
                        <div className="flex gap-2 bg-blue-50 py-4 my-2 ">
                            
                        </div>
                        <label className="label_input">Pourcentage des inscrits par sexe</label>
                        <div className="flex gap-2">
                             <div className="w-1/2">
                               <PieChart
                                style={{ width: '100%', maxHeight: '30vh', aspectRatio: 1.618 }}
                                responsive
                            >
                                <Pie
                                    data={listPourcentageGenre}
                                    dataKey="pourcentage"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    shape={MyCustomPie}
                                    isAnimationActive={true}
                                />
                                    <Legend verticalAlign="bottom" height={36} />

                            </PieChart>
                            </div>
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
                                    {listPourcentageGenre.map((value, index) => (
                                    <tr
                                        key={index}
                                        className={
                                        value.active === 4
                                            ? "bg-gray-50 hover:bg-gray-100"
                                            : "hover:bg-gray-50"
                                        }
                                    >
                                        <td className="px-6 py-4 text-sm text-gray-500">{value.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{value.NbrGenre}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{value.Pourcentage}</td>
                                    </tr>
                                    ))}
                                </tbody>
                                </table>
                            </div> 
                           
                        </div>
                        <div >
                            {/* ajout anne */}
                            <div className="flex gap-2 ">
                                <div className="w-2/2">
                                         <label className="label_input">Section par age</label>
                                </div>
                                <input type="text" placeholder={ageBetween.start} class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500  " onChange={(event)=>handlerVariable("start",event.target.value, setAgeBetween)}/>
                                <input type="text" placeholder={ageBetween.end} class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500  " onChange={(event)=>handlerVariable("end",event.target.value, setAgeBetween)}/>
                                <button className="btn-neutre-gray" onClick={()=>addAgeDate()} >
                                   <i class="fa-solid fa-plus"></i>
                                </button>
                                <button className="btn-neutre-gray" onClick={()=>getListAgePourcentageDto()} >
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
                        <div>
                            {/* diplome */}
                            <div className="flex gap-2 ">
                                <div className="w-2/2">
                                         <label className="label_input">Section par diplome des candidates</label>
                                </div>
                                <Select options={listSelectDiplome} value={false}  placeholder="diplome"  onChange={addListeDimplome}/>
                                <button className="btn-neutre-gray" onClick={()=>getListStatParDiplome()} >
                                   <i class="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                            <div className="flex gap-2 bg-blue-50 py-2 my-2 ">
                                {listDiplome.map((value,index)=>(
                                        <div className="flex gap-1">
                                            <p>{value.name}</p>
                                            <button onClick={()=>deleteListeDimplome(index)}>
                                                <i class="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                ))}
                            </div>
                            <label className="label_input">Pourcentage des inscrits par diplome</label>
                            <div className="flex gap-2">
                                <div className="w-1/2">
                                    <table className="w-full">
                                    <thead className="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                        <th className="tr-thead">Name</th>
                                        <th className="tr-thead">Pourcentage (%)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {listStatParDiplome.map((value, index) => (
                                        <tr
                                            key={index}
                                            className={
                                            value.active === 4
                                                ? "bg-gray-50 hover:bg-gray-100"
                                                : "hover:bg-gray-50"
                                            }
                                        >
                                            <td className="px-6 py-4 text-sm text-gray-500">{value.name}</td>
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
                                        data={listStatParDiplome}
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
                    </div>
                </div>
            </main>
        </div>
        
        </>
    )
}
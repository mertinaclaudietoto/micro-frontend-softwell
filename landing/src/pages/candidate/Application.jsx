import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/header/candidate/Header';
import CardOffreSmallCandidate from '../../components/card/offre/CardOffreSmallCandidate';
import CardOffreMiddel from '../../components/card/offre/CardOffreMiddel';
import { url_recrutement } from '../../data/data';
import { getData } from '../../function/Axios';

export default function Application() {
        const [filter, setFilter] = useState({
            idlocalisation:null,
            idcontrat:null,
            mot:null
        })
        const [data,setData]=useState([]); 
        const [numpage,setNumpage]=useState(1);
        const pagination =(value)=>{
            setNumpage(
            value < 1
                ? 1
                : value
            );
        }
        const loadData = useCallback(async () => {
            console.log("validation nn");
            // Construction des paramètres de l'URL de manière sécurisée
            const params = new URLSearchParams();
            params.append("pageNumber", numpage);
    
            if (filter.mot) params.append("name", filter.mot);
            if (filter.idlocalisation && filter.idlocalisation > 0) params.append("idlocalisation", filter.idlocalisation);
            if (filter.idcontrat && filter.idcontrat > 0) params.append("idcontrat", filter.idcontrat);
            const fullUrl = `${url_recrutement}vpostrecruitementrequest?${params.toString()}`;
            const data = await getData(fullUrl);
            setData(data.data);
            console.log(data.data);
    
        }, [filter.mot, filter.idlocalisation, filter.idcontrat, numpage]);
    
    
        const [listLocalisation,setListLocalisation]=useState([]);
        const getListLocalisation= async ()=>{
            const datalistThemes =  await getData(
                url_recrutement + `localisation_candidate`
            );
            if(datalistThemes.data!=null)
                setListLocalisation(datalistThemes.data)
        }
        const handlerLocalisation =(opt) =>{
            console.log(opt)
            handlerVariable("idlocalisation", opt!=null ? opt.id : null,setFilter);
            // handlerVariable("nameTheme", opt.name,setPrice)
        }
        const [listTypeContrat,setTypeContrat]=useState([]);
        const getTypeContrat= async ()=>{
            const datalistThemes =  await getData(
                url_recrutement + `typecontrat`
            );
            if(datalistThemes.data!=null)
                setTypeContrat(datalistThemes.data)
        }
        const handlerTypeContrat =(opt) =>{
            console.log(opt)
            handlerVariable("idcontrat", opt!=null ? opt.id : null,setFilter);
        }
        useEffect(() => {
            loadData();
        }, [loadData]);
    
        const handlerVariable = (name, value,setFunction) => {
            setFunction((previous) => ({
                ...previous,
                [name]: value,
            }));
            console.log(filter);
        };
        useEffect(() => {
            getListLocalisation();
            getTypeContrat();
            loadData();
        }, []);
  return (
    <>
        <div class="bg-white  overflow-hidden h-max px-8">
        
            <Header></Header>
            {/* Filter */}
                <div class="px-4 md:px-8 py-4 border-b border-gray-200 pb-10 grid "> 
                <div class="grid grid-cols-1 md:grid-cols-4 gap-3 md:w-1/2 ml-auto items-end" >
                    <div class="relative ">
                        <input type="text" placeholder="ui/ux Designer" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={(event)=>{ handlerVariable("mot",event.target.value,setFilter)}}
                        />
                        <i class="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    </div>
                    <div className='mt-0 '>
                        <Select  onChange={handlerLocalisation} placeholder="localisation" options={listLocalisation}  value={false} />
                    </div>
                    <div className='mt-0 '>
                        <Select  onChange={handlerTypeContrat} placeholder="contrat" options={listTypeContrat}  value={false} />
                    </div>
                    <div className='m-0 p-0'>
                        {/* <button class="hidden md:block  w-20   bg-softbleu text-white px-6 py-3 rounded-lg font-semibold hover:bg-softbleushade-12  ml-auto"><i class="fa-solid fa-filter"></i></button>  */}
                            

                        <button className="btn-neutre-gray" onClick={()=>pagination(numpage-1)} title="Précédent">
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <button className="btn-neutre-gray" onClick={()=>pagination(numpage+1)} title="Suivant">
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                        
                </div> 
                {/* <button class="mt-3 md:hidden w-full bg-softbleu text-white py-3 rounded-lg font-semibold hover:bg-softbleushade-12"><i class="fa-solid fa-filter"></i></button> */}
                {/* <button class="hidden md:block ml-auto mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Apply Filter</button> */}
            </div> 
            <div class="px-4 md:px-8 py-3 ">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {data.map((value,index)=>(
                        <CardOffreSmallCandidate key={index} k={index} value={value}/>
                    ))}
                </div>
                    
                {/* <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    <div class="lg:col-span-1">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-bold">Related Jobs</h3>
                            <button class="text-sm border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">More Filters</button>
                        </div>
                        
                        
                    </div>
                    <div class="lg:col-span-2">
                        <CardOffreMiddel></CardOffreMiddel>
                    </div>
                </div> */}
            </div>
        </div>
    </> 
  )
}


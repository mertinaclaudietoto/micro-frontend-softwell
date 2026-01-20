import React,{useEffect, useState,useCallback} from "react";
import { textbackground, url, usersprofile } from "../../data/data";
import { Sidebar } from "../../components";
import CardAdduserapk from "../../components/card/popup/CardAdduserapk";
import { getData } from "../../function/Axios";
import Select from "../../function/selectSimple";
export default function UserProfile(){
    const acces = sessionStorage.getItem("access");
    const accesObj = JSON.parse(acces);

    const[data,setData]=useState([]);
    const [visible, setVisible] = useState(false);
    const [addCompte, setAddCompte] = useState(false);
    const [listRole,setListRole]=useState([]); 
    const nbrSize=10;
    const [nbrligne ,setNbrLigne]=useState(0)
    const [numpage,setNumpage]=useState(1);
    const [search ,setSearch]=useState(null);
    const [idrole ,setIdRole]=useState(null);
    
     const getNbrLigne = async ()=>{
        const data = await getData(url + `employ/profile-count`);
        if(data.data!=null)
            setNbrLigne(data.data);
    }
    const loadData = useCallback(async () => {
        const data = await getData(
            url + `employ/profile?pageNumber=${numpage}&pageSize=${nbrSize}${search!=null ? '&search=' + encodeURIComponent(search) : ''}${idrole ? '&idrole=' + encodeURIComponent(idrole.id) : ''}`
        );
        setData( data.data);;
        console.log(data.data)
    }, [numpage, search,idrole]); // dépendances de loadData

    const pagination =(value)=>{
        setNumpage(
        value < 1
            ? 1
            : value > Math.ceil(nbrligne / nbrSize)
            ? Math.ceil(nbrligne / nbrSize)
            : value
        );
    }
    const getListRole = async ()=>{
        const datalistThemes =  await getData(
            url + `roles`
        );
        if(datalistThemes.data!=null)
            setListRole(datalistThemes.data)
    }
    const sendsearch = async()=>{
        setNumpage(1);
    }
    useEffect(()=>{
        getNbrLigne()
        getListRole();
    },[])
    useEffect(()=>{
        loadData()
    },[loadData])
        return(
<>
    <div class="flex h-screen ">
        <Sidebar/>
        <main class="flex-1 ">    
            <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                <div className=" max-w-7xl mx-auto bg-white p-10 ">
                    {/* filtre */}
                    <div class="p-4 mb-2 border-b border-gray-200 sticky top-0 z-50 pink ">
                        <div class="flex items-center justify-between">
                            <h2 class="text-xl font-semibold text-gray-800">Liste Organisme
                                <p className="text-xs text-gray-400">{`page ${numpage}/${Math.ceil(nbrligne / nbrSize)}`}</p>
                            </h2>
                            
                            <div class="flex items-center space-x-3">
                                <div class="relative">
                                    <input type="text" placeholder="nom organisme" class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500  " onChange={(event)=>setSearch(event.target.value)}/>
                                    <svg class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                    <button onClick={()=>sendsearch()} >
                                        <span class="absolute right-3 top-2.5 text-xs text-gray-400 border border-gray-300 px-1.5 py-0.5 rounded">⌘K</span>
                                    </button>
                                
                                </div>
                                <div class="relative ">
                                    <Select options={listRole} placeholder={"liste formation"}  onChange={setIdRole} css={"pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"}/>
                                    <svg class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                    <button onClick={()=>sendsearch()} >
                                        <span class="absolute right-3 top-2.5 text-xs text-gray-400 border border-gray-300 px-1.5 py-0.5 rounded">⌘K</span>
                                    </button>
                                </div>
                                <div className="flex space-x-2">
                                    {accesObj && (accesObj?.profile?.modification == null || accesObj?.profile?.modification == undefined)  ? null : (
                                        <button class="px-4 py-2 bg-softbleutini-12 text-white rounded-lg text-sm flex items-center hover:bg-softbleu" onClick={()=>{setAddCompte(true)}}>
                                            <i class="fa-solid fa-plus"></i>
                                        </button>
                                    )}
                                    <button className="btn-neutre-gray" onClick={()=>pagination(numpage-1)} title="Précédent">
                                    <i className="fas fa-arrow-left"></i>
                                    </button>
                                    <button className="btn-neutre-gray" onClick={()=>pagination(numpage+1)} title="Suivant">
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* filtre */}
                    <div class="overflow-x-auto  mt-2">
                        <table class="w-full  overflow-y-auto ">
                            <thead>
                                <tr class="border-b border-gray-200">
                                    <th class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Image</th>
                                    <th class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Matricule</th>
                                    <th class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase ">Nom et prenom</th>
                                    <th class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Role</th>
                                    <th class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase"></th>
                                    {/* Password  <i className={visible ? "fas fa-eye-slash" : "fas fa-eye"}></i> */}
                                    {/* <th>
                                        <button
                                            type="button"
                                            className="text-blue-500 text-xs underline"
                                            onClick={() => setVisible(!visible)}
                                            >
                                            <i className={visible ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                                        </button>
                                    </th> */}
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                {data.map((value, index) => (
                                    <React.Fragment key={index}>
                                        {/* Lignes des fonctions si elles existent */}
                                        <tr key={index} >
                                             <td className="py-4 px-4 pl-10 text-sm text-gray-700">
                                                <img src={value.photo} className="w-10 h-10 rounded-2xl"/>
                                            </td>
                                            <td class="px-6 py-4">
                                                <span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[index]}`}>{value.matricule}</span>
                                            </td>
                                            <td className=" py-4 px-4 pl-10 text-sm text-gray-700 lowercase">{value.name} {value.firstName}</td>
                                            <td className="py-4 px-4 pl-10 text-sm text-gray-700">{value.namePost}</td>
                                            <td className=" py-4 px-4 pl-10 text-sm text-gray-700">
                                                <span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[index]}`}>{value.nameRole}</span>
                                            </td>
                                            <td className="text-left py-4 px-4 pl-10 text-sm text-gray-700 lowercase">
                                            <button type="button" className="text-blue-500 text-xs underline" onClick={() => setVisible(!visible)}>
                                                 <i class="fa-solid fa-pen"></i>
                                            </button>
                                            </td> 
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>  
                </div>
            </div>
        </main>
        {addCompte ? <CardAdduserapk close={setAddCompte} listRole={listRole}/>:<></>                }
    </div>
</>
       
       
    )
}
    

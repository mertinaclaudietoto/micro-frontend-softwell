
import { useEffect,useCallback } from "react";
import { getData, update } from "../../function/Axios";
import { Link } from "react-router-dom";
import { url_recrutement, textbackground } from "../../data/data";
import { useState } from "react";
import { Sidebar } from "../../components";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { getAge } from "../../function/Date";
import { useNavigate } from "react-router-dom";
export default function NoteCandidate(){
    const navigate = useNavigate();
    const { idrequest,idpost ,idstep,rang,email} = useParams();
    // TODO:delete and update
    const acces = sessionStorage.getItem("access");
    // const accesObj = JSON.parse(acces);
    const nameE="notecandidate";
    const [data,setData]=useState([]); 
    const nbrSize=10;
    const [nbrligne ,setNbrLigne]=useState(0)
    const [numpage,setNumpage]=useState(1);
    const pagination =(value)=>{
        setNumpage(
        value < 1
            ? 1
            : value > Math.ceil(nbrligne / nbrSize)
            ? Math.ceil(nbrligne / nbrSize)
            : value
        );
    }
    const loadData = useCallback(async () => {
        const data = await getData(
            url_recrutement + `${nameE}/pagination?pageNumber=${numpage}&pageSize=${nbrSize}&idrequest=${idrequest}&stepId=${idstep}`
        );
        setData( data.data);
        console.log(data.data);
    }, [numpage, nameE]); // dépendances de loadData
    const sendsearch = async()=>{
        setNumpage(1);
    }
    useEffect(() => {
            loadData();
        }, [loadData]);

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
                                <h2 class="text-xl font-semibold text-gray-800">Liste des postulants avec notes
                                    {/* <p className="text-xs text-gray-400">{`page ${numpage}/${Math.ceil(nbrligne / nbrSize)}`}</p> */}
                                </h2>
                                
                                <div class="flex items-center space-x-3">
                                   
                                    <div className="flex space-x-2">
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
                        <table class="w-full">
                            <thead class="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th class="tr-thead ">#</th>
                                    <th class="tr-thead">Nom</th>
                                    <th class="tr-thead">Prenom</th>
                                    <th class="tr-thead">Age</th>
                                    <th class="tr-thead">Obligatoire</th>
                                    <th class="tr-thead">Souhaiter</th>
                                    {/* <th class="tr-thead">CV</th> */}
                                    <th class="tr-thead">CV</th>
                                </tr>
                            </thead>
  
                            <tbody class="bg-white divide-y divide-gray-200">
                                {data.map((value,index)=>(
                                    <>
                                    <tr index={index}
                                     className={value.StatusId==4 ?"bg-gray-50  hover:bg-gray-100":" hover:bg-gray-50"}>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            <img
                                                src={`http://localhost:5118/uploads/${value.photo}`}
                                                alt="photo candidat"
                                                className="h-10 w-10 rounded-full object-cover"
                                            />
                                        </td>
                                        <td class="px-6 py-4 text-sm text-gray-500">{value.name}</td>
                                        <td class="px-6 py-4 text-sm text-gray-500">{value.firstName}</td>
                                        <td class="px-6 py-4 text-sm text-gray-500">{getAge(value.birthDate)}</td>
                                        <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[index]}`}>{value.totalCandidatRequired}/{value.totalPostRequired}</span></td>
                                        <td class="px-6 py-4"><span class={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${textbackground[6]}`}>{value.totalCandidatWish}/{value.totalPostWish}</span></td>
                                        {/* <td className="px-6 py-4">
                                            <button
                                                onClick={() => navigate(`/infocandidateGenerala/${value.candidateId}`)}
                                                className="text-gray-500 hover:text-gray-700"
                                            >
                                                <i class="fa-regular fa-file"></i>
                                            </button>
                                        </td> */}
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => navigate(`/infocandidate/${value.candidateId}/${idrequest}/${idpost}/${rang}/${idstep}/${email}`)}
                                                className="text-gray-500 hover:text-gray-700"
                                            >
                                                <i class="fa-regular fa-file"></i>
                                            </button>
                                        </td>
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

import { listProfile, widthClasses } from "../../data/data"
import {Pagination,Filter,Sidebar} from "../../components"
import { Link } from "react-router-dom"
export default function ProfileAccess(){
    return(
        <>
            <div class="flex h-screen ">
                <Sidebar/>
                <main class="flex-1 ">    
                    <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                        <div className=" max-w-7xl mx-auto bg-white p-10 ">
                            <Filter tablename={"Profile"} textPagination={" Showing result 1-10 of 20 Entries"}/>
                            <div class="overflow-x-auto  mt-2">
                            <div className="grid grid-cols-3 gap-4  my-auto overflow-y-auto mx-auto bg-white p-2 ">
                                {listProfile.map((value, index) => (
                                    <Link to="/access-set">
                                   
                                    <div
                                        key={index}
                                        className="bg-gray-50 border border-gray-200 hover:bg-gray-100 p-4 grid grid-cols-4 justify-center items-center gap-2 "
                                    >
                                    {/* Colonne # (icone + nombre) */}
                                    <div className="flex items-center">
                                        <div className="bg-softbleutini-12 rounded-lg p-2 mr-3">
                                        <i className={`${value.icone} text-sm text-white`} />
                                        </div>
                                        <div className="text-sm font-bold text-gray-700">{value.nbr}</div>
                                    </div>

                                    {/* Colonne Nom */}
                                    <div className="text-sm font-medium text-gray-800">
                                        {value.name}
                                    </div>

                                    {/* Colonne Pourcentage */}
                                    <div className="col-span-2 bg-gray-200 rounded-full h-2 relative w-full">
                                        <div
                                        className={`h-2 rounded-full bg-softbleutini-12 ${widthClasses(value.percentage)}`}
                                        ></div>
                                        <span className="absolute inset-0 flex justify-center items-center text-[10px] font-semibold text-gray-600">
                                        {value.percentage}%
                                        </span>
                                    </div>
                                    </div>
                                    </Link>
                                ))}
                                </div>
                            </div>  
                        </div>
                    </div>
                </main>
            </div>
        </>
       
       
    )
}
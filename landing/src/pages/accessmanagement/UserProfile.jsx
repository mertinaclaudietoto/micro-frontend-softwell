import React,{useState} from "react";
import { usersprofile } from "../../data/data";
import { Sidebar,Filter } from "../../components";
import CardAdduserapk from "../../components/card/popup/CardAdduserapk";
export default function UserProfile(){
    const [visible, setVisible] = useState(false);
    const [addCompte, setAddCompte] = useState(false);

        return(
        <>
            <div class="flex h-screen ">
                <Sidebar/>
                <main class="flex-1 ">    
                    <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                        <div className=" max-w-7xl mx-auto bg-white p-10 ">
                            <Filter  showAddPopup={setAddCompte} tablename={"Profile"} textPagination={" Showing result 1-10 of 20 Entries"}/>
                            <div class="overflow-x-auto  mt-2">
                              <table class="w-full  overflow-y-auto ">
                                    <thead>
                                        <tr class="border-b border-gray-200">
                                            <th class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Image</th>
                                            <th class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Login</th>
                                            <th class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase ">Profile</th>
                                            <th class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Departement</th>
                                            <th class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Role</th>
                                            <th class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Password</th>
                                            <th>
                                                <button
                                                    type="button"
                                                    className="text-blue-500 text-xs underline"
                                                    onClick={() => setVisible(!visible)}
                                                    >
                                                    <i className={visible ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                                                </button>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-100">
                                        {usersprofile.map((value, index) => (
                                            <React.Fragment key={index}>
                                                {/* Lignes des fonctions si elles existent */}
                                                <tr key={index} >
                                                    <td className="py-4 px-4 pl-10 text-sm text-gray-700">
                                                        <img src={value.photo} className="w-10 h-10 rounded-2xl"/>
                                                    </td>
                                                    <td className="text-left py-4 px-4 pl-10 text-sm text-gray-700">{value.login}</td>
                                                    {/* <td className="text-left py-4 px-4 pl-10 text-sm text-gray-700 card-text-s-blue flex items-center justify-center">
                                                        <span>{value.role}</span>
                                                    </td> */}
                                                    <td className="py-4 px-4  mt-4 text-sm flex items-center justify-center card-text-s-blue">
                                                        <span>{value.role}</span>
                                                    </td>

                                                    <td className="text-left py-4 px-4 pl-10 text-sm text-gray-700 lowercase">{value.departement}</td>
                                                    <td className="text-left py-4 px-4 pl-10 text-sm text-gray-700 lowercase">{value.status}</td>
                                                    <td className="text-left py-4 px-4 pl-10 text-sm text-gray-700 lowercase">
                                                    <div className="flex items-center gap-2">
                                                        <span>{visible ? value.password : "•".repeat(value.password.length)}</span>
                                                       
                                                    </div>
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
                {addCompte ? <CardAdduserapk close={setAddCompte}/>:<></>                }
            </div>
        </>
       
       
    )
}
    

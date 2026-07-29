
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import SidebarLargButton from "./button/SidebarLargButton";
import SidebarShortButton from "./button/SidebarShortButton";
import { datasidebar } from "../../data/data";
import useLogout from "../../function/Logout";
export default function Sidebar(){
    const [isOpen ,setIsOpen]=useState(false);
    const navigate = useNavigate();
    const pages =datasidebar;
    const selectedSpace = sessionStorage.getItem("selectedSpace");
    const activePages = pages[selectedSpace] ?? [];
    const spaceLabel =
        selectedSpace === "formation"
            ? "Formation"
            : selectedSpace === "recrutement"
            ? "Recrutement"
            : "Choisir un espace";
    const logout = useLogout();
    const changeSpace = () => {
        sessionStorage.removeItem("selectedSpace");
        navigate("/accueil");
    };
    return (
        <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll "> 
        <div class="bg-white-200  h-screen ">
            <div class="flex gap-4 max-w-3xl md:w-[250px] ">
                {isOpen ? (
                    // short siderbar version
                <aside class="w-16 bg-white border-r h-full border-gray-200 p-3 flex flex-col items-center gap-3">
                    {/* shrunk  logo*/}
                    <button class="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-gray-50" onClick={()=>{setIsOpen(!isOpen)}}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M16 4L19 13L28 16L19 19L16 28L13 19L4 16L13 13L16 4Z" fill="#4F46E5"/>
                        </svg>
                    </button>
                    {/* notification */}
                    <div class="w-full h-px bg-gray-200 my-1"></div>
                        {activePages.map((value,index)=>(<SidebarShortButton key={`${value.label}-${index}`} link={value.link} icone={value.icone} label={value.label} actif={value.actif} accesValue={value.acces}/>))}
                    <div class="w-full h-px bg-gray-200 my-1"></div>
                    <div class="flex-1"></div>
                    <div class="w-full h-px bg-gray-200 my-1"></div>
                        {pages.infoentreprise.map((value,index)=>(<SidebarShortButton key={`${value.label}-${index}`} link={value.link} icone={value.icone} label={value.label} actif={value.actif} accesValue={value.acces}/>))}
                        {pages.parametre.map((value,index)=>(<SidebarShortButton key={`${value.label}-${index}`} link={value.link} icone={value.icone} label={value.label} actif={value.actif} accesValue={value.acces}/>))}
                    <button class="card-icone-simple text-gray-500 hover:bg-gray-100" onClick={changeSpace} title="Changer d’espace">
                        <i class="fa-solid fa-right-left"></i>
                    </button>
                </aside>
                ) : (
                    <aside class="w-80 bg-white  flex flex-col border-r border-gray-200">
                        <div class="p-4 border-b border-gray-100 flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 4L19 13L28 16L19 19L16 28L13 19L4 16L13 13L16 4Z" fill="#4F46E5"/>
                                </svg>
                                <div>
                                    <span class="text-xl font-semibold text-gray-800">SoftWell</span>
                                    <p class="text-xs text-gray-400">{spaceLabel}</p>
                                </div>
                            </div>
                            <button class="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500" onClick={()=>{setIsOpen(!isOpen)}}>
                                <i class="fas fa-bars"></i>
                            </button>
                        </div>



                        <div class="flex-1 overflow-y-auto">
                            <div class="p-4">
                                <div class="flex items-center justify-between mb-3 px-4">
                                    <h3 class="text-sm font-medium text-gray-500">{spaceLabel}</h3>
                                    <button class="text-xs text-softbleu hover:underline" onClick={changeSpace}>Changer</button>
                                </div>
                                <div class="space-y-1">
                                    {activePages.map((value,index)=>(<SidebarLargButton key={`${value.label}-${index}`} link={value.link} icone={value.icone} label={value.label} actif={value.actif} subItems={value.subItems} accesValue={value.acces}/>))}
                                </div>
                            </div>
                            <div class="p-4">
                                <h3 class="text-sm font-medium text-gray-500 mb-3 px-4">Paramètres généraux</h3>
                                <div class="space-y-1">
                                    {pages.infoentreprise.map((value,index)=>(<SidebarLargButton key={`${value.label}-${index}`} link={value.link} icone={value.icone} label={value.label} actif={value.actif} subItems={value.subItems} accesValue={value.acces}/>))}
                                    {pages.parametre.map((value,index)=>(<SidebarLargButton key={`${value.label}-${index}`} link={value.link} icone={value.icone} label={value.label} actif={value.actif} subItems={value.subItems} accesValue={value.acces}/>))}
                                </div>
                            </div>
                            {/* pub */}
                            {/* <CardPub/> */}
                            <div class="flex-1"></div>
                           
                        </div>
                        {/* compte */}
                        <div class="p-4 border-t border-gray-100">
                            <button className={`card-icone-text  text-gray-600 hover:bg-gray-50`} onClick={logout}>
                                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                <span className="text-base">Déconnexion</span>
                            </button>
                        </div>
                    </aside>
                ) }
            </div>
        </div>
        </div>
    )
}
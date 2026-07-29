import { Link } from "react-router-dom";
export default function SidebarShortButton({icone,label,actif,link,accesValue}){
    let access = {};
    try {
        access = JSON.parse(sessionStorage.getItem("access") || "{}");
    } catch {
        access = {};
    }
    if (access[accesValue]?.lecture !== true) return null;

    return(
        <Link to={link} title={label}>
            <button className={`card-icone-simple ${actif ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`} >
                <i className={icone}></i>
                <span className="sr-only">{label}</span>
            </button>
        </Link>
      
    )
}

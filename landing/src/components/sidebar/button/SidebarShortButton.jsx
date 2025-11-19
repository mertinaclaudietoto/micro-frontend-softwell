import { Link } from "react-router-dom";
export default function SidebarShortButton({icone,item,actif,link}){
    return(
        <Link to={link}>
            <button class={`card-icone-simple ${actif ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`} >
                <i class={icone}></i>
                <span class="font-medium">{item}</span>
            </button>
        </Link>
      
    )
}

import { Link } from "react-router-dom";
export default function SidebarLargButton({icone,item,actif,link}){
    return(
        <Link to={link}>
            <button class={`card-icone-text ${actif ? "bg-gray-50 text-gray-900 hover:bg-gray-100 " : "text-gray-600 hover:bg-gray-50"}`} >
                <i class={icone}></i>
                <span class="font-medium">{item}</span>
            </button>
        </Link>
      
    )
}

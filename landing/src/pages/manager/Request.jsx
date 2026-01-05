import HeaderWithFiltre from "../../components/header/admin/HeaderWithFiltre";
import HeadGray from "../../components/table/thead/HeadGray";
import ListRequest from "./sous/ListRequest";
import ListCandidate from "./sous/ListCandidate";
import CVCandidate from "./sous/CVcandidate";
import Sidebar from "../../components/sidebar/Sidebar";

export default function ListDemande(){
    // const [isOpenCandidat,setIsOpenCandidat]=useState(true); 
    const getMain=(value)=>{
        switch(value){
            case 1: 
            <ListRequest/>
                return  <></>
            case 2: 
            // <ListCandidate/>
                return <></>
            case 3: 
                return <></>
            default : <></>
        }
    }
    
//TODO: ajouter une systeme de cash qui conserve les donnes des candidat
    return(
        <div className="flex ">
          <Sidebar/>
            <main  className="flex-1 m-2">
                {getMain(3)}
            </main>
        </div>
    )
}
import HeaderWithFiltre from "../../components/header/admin/HeaderWithFiltre";
import HeadGray from "../../components/table/thead/HeadGray";
import ListRequest from "./sous/ListRequest";
import ListCandidate from "./sous/ListCandidate";
import CVCandidate from "./sous/CVcandidate";
import Sidebar from "../../components/sidebar/manager/Sidebar";

export default function ListDemande(){
    // const [isOpenCandidat,setIsOpenCandidat]=useState(true); 
    const getMain=(value)=>{
        switch(value){
            case 1: 
                return <ListRequest/>
            case 2: 
                return <ListCandidate/>
            case 3: 
                return <CVCandidate/>
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
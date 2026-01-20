import ListRequest from "./sous/ListRequest";
import Sidebar from "../../components/sidebar/Sidebar";

export default function TrainingRequeste(){  
//TODO: ajouter une systeme de cash qui conserve les donnes des candidat
    return(
        <div className="flex ">
          <Sidebar/>
            <main  className="flex-1 m-2">
                <ListRequest/>
            </main>
        </div>
    )
}
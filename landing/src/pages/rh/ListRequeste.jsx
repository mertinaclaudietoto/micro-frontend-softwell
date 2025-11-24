import Sidebar from "../../components/sidebar/Sidebar"
import Detailed from "./sublistrequeste/Detailed"
import ListRequest from "./sublistrequeste/ListRequest"

export default function ListRequeste(){
     const getMain=(value)=>{
            switch(value){
                case 1: 
                    return <ListRequest/>
                case 2: 
                    return <Detailed/>
                default : <></>
            }
        }
        return(
            <div className="flex ">
                <Sidebar></Sidebar>
                <main  className="flex-1 m-2">
                    {getMain(2)}
                </main>
            </div>
        )
}
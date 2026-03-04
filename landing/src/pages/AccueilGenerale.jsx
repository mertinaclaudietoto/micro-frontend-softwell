

import { Sidebar } from "../components";
export default function AccueilGenerale(){

      return(
        <>
        <div class="flex h-screen ">
            <Sidebar/>
            <main class="flex-1 ">    
                <div class=" bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6 flex justify-center items-center">
                    <img src="hello.svg" />
                </div>
            </main>
        </div>
        
        </>
    )
}
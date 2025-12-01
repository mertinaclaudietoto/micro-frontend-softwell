import { profilesicone } from "../../../data/data";

export default function IconeAccess({nameIcone,changericone,close},){
    return(
        <>
         
                <div class="max-w-6xl mx-auto">
                    <div class="grid grid-cols-6 gap-6">
                        {profilesicone.map((value,index)=>(
                            <button onClick={()=>{changericone(value.icone),close(false)}}>
                                <div index={index} class={`flex flex-col items-center  gap-3 ${value.icone==nameIcone ? "text-softbleutini-12 ":"" }`}>
                                    <i className={`${value.icone} w-12 h-12`}/>
                                    {/* <span class="text-xs text-gray-400">{value.name}</span> */}
                                </div>
                            </button>
                        ))
                        }
                    </div>
                </div>
            
        </>
    )
}
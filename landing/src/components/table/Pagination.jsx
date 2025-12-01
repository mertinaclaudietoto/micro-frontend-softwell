export default function Pagination({linkBack,setData,indexFilter,textPagination}){
    //linkBack vas servire a savoir quelle entiter est conserner 
    //setData pour changer le donne data 
    //indexFilter vas indiquer quelle filtre utiliser
    //textPagination  exemple : Showing result 1-10 of 20 Entries
    //il y aura un fonction dedier specialement pour fair sortire ce texte
    const previous =()=>{
        console.log("previous");
    }
    const next =()=>{
        console.log("previous");
    }
    return(
        <>
        <div class="px-6 py-4 border-t border-gray-200 flex items-center justify-between ">
            <div class="text-sm text-gray-500">
                {textPagination}
            </div>
            <div class="flex space-x-2">
                <button class="btn-neutre-gray" onClick={()=>{previous()}}>Precedent</button>
                <button class="btn-neutre-gray" onClick={()=>{next()}}>Suivant</button>
            </div>
        </div>
        </>
    )
}
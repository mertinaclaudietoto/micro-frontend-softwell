export default function Delete({closePopup}){
     const close =()=>{
        closePopup(false);
    }
    return(
        <div className="background_transparent_popup">
            <div class="grid grid-cols-1 bg-white w-100 p-10 rounded-card">
                <div class="flex flex-col items-center">
                    <div class="w-32 h-32  rounded-full flex items-center justify-center mb-4 cursor-pointer  transition-colors">
                         {/* <DemandeStaff className="w-32 h-32" /> */}
                         <img src="/cleanup.svg" alt="Logo" className="w-32 h-32" />
                    </div>
                </div>
               <p className="text-gray-600 text-sm flex justify-center items-center ">
                    <label class="text-input">Vous voulez-vraiment le supprimer</label>
                </p>
               
                <div class="flex items-center justify-between gap-3 mt-2">
                    <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>{close()}}>
                        Cancel
                    </button>
                    <button class="btn-action" onClick={()=>{close()}}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}
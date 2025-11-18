

export default function CardDemandeStaff({closePopup}){
    const close =()=>{
        closePopup(false);
    }
    return(
        <div className="background_transparent_popup">
            <div class="grid grid-cols-1 bg-white w-100 p-10 rounded-card">
                <div class="flex flex-col items-center">
                    <div class="w-32 h-32  rounded-full flex items-center justify-center mb-4 cursor-pointer  transition-colors">
                         {/* <DemandeStaff className="w-32 h-32" /> */}
                         <img src="/demandeStaff.svg" alt="Logo" className="w-32 h-32" />
                    </div>
                </div>
                <div className='my-2'>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nombre de personnel à demander</label>
                    <input 
                        type="text" 
                        placeholder="Entrer votre nom complte" 
                        class="input_formulaire"
                    />
                </div>
                <div className='my-2'>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Date prévue de prise de poste</label>
                    <input 
                        type="date" 
                        placeholder="Entrer votre nom complte" 
                        class="input_formulaire"
                    />
                </div>
                <div class="flex items-center justify-end gap-3 mt-2">
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
export default function CardChangePassWord({closePopup}){
    const submit = async () => {
        console.log("validation");
    };
    return(
        <div className="background_transparent_popup">
            <div class="grid grid-cols-1 bg-white w-100 p-10 rounded-xl">
                <div class="flex flex-col items-center">
                    <div class="w-32 h-32 rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-softbleu transition-colors">
                        <img src="enter-password.svg"/>
                    </div> 
                </div>
                {/* <p className="text-gray-600 text-sm flex justify-center items-center ">
                    text
                </p> */}
                <div className='my-2'>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Ancien mot de passe</label>
                    <input 
                        type="text" 
                        placeholder="Saisir le mot de passe" 
                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                </div>
                <div className='my-2'>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nouveau mot de passe</label>
                    <input 
                        type="text" 
                        placeholder="Saisir le mot de passe" 
                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                </div>
                <p className="text-softbleu text-sm  flex justify-center items-center p-2">
                   Vous avez oublié votre mot de passe ?
                </p>
                <div class="flex items-center justify-end gap-3 mt-3">
                    <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>{closePopup(false)}}>
                        Annuler
                    </button>
                    <button class="px-6 py-2 bg-softbleu hover:bg-softbleushade-12 text-white rounded-lg font-medium" onClick={()=>submit()}>
                        Connexion
                    </button>
                </div>
            </div>
        </div>
    )
}
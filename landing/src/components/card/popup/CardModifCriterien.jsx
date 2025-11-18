export default function CardModifCriterien({closePopup}){
    const close =()=>{
        closePopup(false);
    }
    return(
        <div className="background_transparent_popup">
            <div class="grid grid-cols-1 bg-white  p-10 rounded-card">
                <div class="flex flex-col items-center">
                    <div class="w-32 h-32  rounded-full flex items-center justify-center mb-4 cursor-pointer  transition-colors">
                        <input
                            type="color"
                            className="w-32 h-32  bg-softbleu rounded-full"
                        />
                    </div>
                </div>
                <p className="text-gray-600 text-sm flex justify-center items-center ">
                    <label class="text-input">Choisir une couleur representatif:</label>
                </p>
                
                <div className='my-2'>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nom poste</label>
                    <div class="relative">
                        <input 
                            type="email" 
                            placeholder="votre email" 
                            class="input_singup"
                        />
                        {/* <HiOutlineMap className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" /> */}
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Anne d experience</label>
                        <div class="relative">
                            <input 
                                type="number" 
                                placeholder="votre email" 
                                class="input_singup"
                            />
                            {/* <HiOutlineEnvelope className="icone_input" /> */}
                        </div>
                    </div>
                    
                    <div >
                        <label class="block text-sm font-medium text-gray-700 mb-2">Age minimum valide</label>
                        <div class="relative">
                            <input 
                                type="email" 
                                placeholder="votre email" 
                                class="input_singup"
                            />
                            {/* <HiOutlinePhone className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" /> */}
                        </div>
                    </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
                        <div class="relative">
                            <input 
                                type="email" 
                                placeholder="votre email" 
                                class="input_singup"
                            />
                            {/* <HiOutlinePhone className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" /> */}
                        </div>
                    </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Diplome</label>
                        <div class="relative">
                            <input 
                                type="email" 
                                placeholder="votre email" 
                                class="input_singup"
                            />
                            {/* <HiOutlinePhone className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" /> */}
                        </div>
                    </div>
                </div>
                <div className="py-1">
                    <div class="flex justify-between pb-2 ">
                            <span class="text-gray-600">Critere principale</span>
                    </div>
                    <div className="flex flex-wrap gap-2 w-200">
                        <span class="card-text-rounded-gray">Licence</span>
                        <span class="card-text-rounded-orange">2 ans d'experience</span>
                        <span class="card-text-rounded-gray">21+</span>
                        <span class="card-text-rounded-gray">Mahamasina</span>
                        <span class="card-text-rounded-gray">Akadidramami</span>
                        <span class="card-text-rounded-gray">Mahamasina</span>
                        <span class="card-text-rounded-gray">Licence</span>
                        <span class="card-text-rounded-orange">2 ans d'experience</span>
                        <span class="card-text-rounded-gray">21+</span>
                        <span class="card-text-rounded-gray">Mahamasina</span>
                        <span class="card-text-rounded-gray">Akadidramami</span>
                        <span class="card-text-rounded-gray">Mahamasina</span>
                    </div>
                </div>
               

              
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Description du poste</label>
                    <textarea 
                        placeholder="Type here..." 
                        rows="4"
                        class="input_singup"
                    ></textarea>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Competence requise</label>
                    <textarea 
                        placeholder="Type here..." 
                        rows="4"
                        class="input_singup"
                    ></textarea>
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
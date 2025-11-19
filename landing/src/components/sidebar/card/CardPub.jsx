export default function CardPub(){
    return(
         <div class="p-4">
            <div class="bg-indigo-50 rounded-xl p-4">
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <div>
                        <div class="text-xs text-gray-600">Plan actuel :</div>
                        <div class="font-semibold text-gray-900">Essai Pro</div>
                    </div>
                </div>

                <p class="text-sm text-gray-600 mb-4">
                    Passez à la version Pro pour obtenir les dernières fonctionnalités exclusives.
                </p>

                <button class="w-full bg-white border border-indigo-200 text-indigo-600 font-medium py-3 px-4 rounded-lg hover:bg-indigo-50 flex items-center justify-center gap-2">
                    <i class="fas fa-bolt"></i>
                    <span>Passer à la version Pro</span>
                </button>
            </div>
        </div>
    )
}

export default function CardOffreSmall(){
    return(
        <>
        {/* border border-gray-300 */}
         {/* <div class="mb-4 cursor-pointer bg_grain_rounded_2xl"></div> */}
            <div class="bg-gray-50  rounded-xl p-4 mb-4 hover:shadow-md transition-shadow cursor-pointer">
                <div class="flex items-start gap-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-slack text-white text-xl"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                        <h4 class="font-bold text-gray-900 mb-1">Junior UI/UX Designer</h4>
                        <p class="text-sm text-gray-500 mb-3">Slack Technologies, LLC</p>
                        <p class="text-xs text-gray-600 mb-3">We are looking for a young talented designer to help us to create stunning websites and apps.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">Full Time</span>
                            <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">Design</span>
                            <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">Remote</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
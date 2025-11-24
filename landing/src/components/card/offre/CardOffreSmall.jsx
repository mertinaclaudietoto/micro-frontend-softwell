
export default function CardOffreSmall({criterien ,onclick}){
    console.log(criterien.color)
    return(
        <>
            <button onClick={()=>onclick(true)} class="bg-gray-50  rounded-xl p-4 mb-4 hover:shadow-md transition-shadow cursor-pointer">
                <div class="flex items-start gap-3">
                    <div class={`w-12 h-12 bg-${criterien.color}-700 rounded-lg flex items-center justify-center text-white font-bold`}>
                            {criterien.id}
                    </div>
                    <div class="flex-1 min-w-0 w-100">
                        <h4 class="font-bold text-gray-900 mb-1">{criterien.title}</h4>
                        {/* <p class="text-sm text-gray-500 mb-3">Slack Technologies, LLC</p> */}
                        <p class="text-xs text-gray-600 mb-3">{criterien.description} </p>
                        <div class="flex flex-wrap gap-2 w-100">
                            {criterien.selectCriteriens.map((value)=>(
                                <span class="px-3 py-1 bg-gray-100 text-xs rounded-full">{value}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </button>
        </>
    )
}
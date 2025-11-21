export default function CardCriterienRh(){
    return (
         <div class="border border-gray-200 rounded-card padding-card">
            {/* identifiant */}
            <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-cyan-700 rounded-lg flex items-center justify-center text-white font-bold">
                    G3
                </div>
                <div class="flex-1">
                    <div class="font-medium">Fhayla Richard</div>
                    <div class="text-xs text-gray-500"> departement 12-03-2025 / 13-04-2025</div>
                </div>
                <div class="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded text-xs text-blue-700">
                    {/* <i class="fas fa-check-double"></i> */}
                    <i class="fa-solid fa-1 text-lg"></i>
                    <i class="fa-solid fa-0 text-lg"></i>
                    {/* <span>10</span> */}
                </div>
            </div>
            <div class="space-y-2 text-sm mb-4">
                {/* sliper */}
                <div class="flex justify-between pb-2">
                    <span class="text-gray-600">Critere principale</span>
                    {/* <span class="font-medium">10</span> */}
                </div>

                <div className="flex flex-wrap gap-2">
                    <span class="card-text-rounded-gray">Licence</span>
                    <span class="card-text-rounded-orange">2 ans d'experience</span>
                    <span class="card-text-rounded-gray">21+</span>
                    <span class="card-text-rounded-gray">Mahamasina</span>
                    <span class="card-text-rounded-gray">Akadidramami</span>
                    <span class="card-text-rounded-gray">Mahamasina</span>
                </div>
                <div class="flex justify-between pb-2">
                    <span class="text-gray-600 font-semibold">Description du poste</span>
                </div>
                <p className="text-sm text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed euismod, risus non commodo luctus, risus nisl aliquam 
                    lacus, non pretium libero lectus vitae odio. Nulla facilisi.
                     Praesent feugiat mauris at neque</p>
                <div class="flex justify-between py-2">
                    <span class="text-gray-600 font-semibold">Competence requise</span>
                    {/* <span class="font-medium">10</span> */}
                </div> 
                <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed euismod, 
                    risus non commodo luctus, risus nisl aliquam lacus, non pretium libero lectus vitae odio. Nulla facilisi. Praesent feugiat mauris at neque tincidunt, eget fermentum lorem faucibus. 
                    Integer sit amet augue ac lorem facilisis finibus. Suspendisse potenti. Cras vel augue vitae justo tempor tempus. Vivamus sit amet felis vitae ipsum varius pulvinar.
                </p>
            </div>
            <div class="flex gap-2">
                <button class="flex-1 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">Refuser</button>
                <button class="flex-1 py-2 bg-amber-400 rounded-lg text-sm font-medium hover:bg-amber-500">Accepter</button>
            </div>
        </div>
    )
}
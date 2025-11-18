import React from 'react';
import Header from '../../components/header/candidate/Header';
import CardOffreSmallCandidate from '../../components/card/offre/CardOffreSmallCandidate';
import CardOffreMiddel from '../../components/card/offre/CardOffreMiddel';
export default function Application() {
  return (
    <>
        <div class="bg-white  overflow-hidden h-max">

            <Header></Header>
            <div class="px-4 md:px-8 py-6 ">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                    <div class="lg:col-span-1">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-bold">Related Jobs</h3>
                            <button class="text-sm border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">More Filters</button>
                        </div>
                        <CardOffreSmallCandidate/>
                        <CardOffreSmallCandidate/>
                        <CardOffreSmallCandidate/>
                        <CardOffreSmallCandidate/>
                    </div>
                    <div class="lg:col-span-2">
                        <CardOffreMiddel></CardOffreMiddel>
                    </div>
                </div>
            </div>
        </div>
    </> 
  )
}


import React from 'react';
import Header from '../../components/header/candidate/Header';
import CardOffreSmall from '../../components/card/offre/CardOffreSmall';
import CardOffreMiddel from '../../components/card/offre/CardOffreMiddel';
export default function AvailableJob() {
  return (
    <>
        <div class="bg-white  overflow-hidden h-max">

            <Header></Header>
            {/* Filter */}
            <div class="px-4 md:px-8 py-6 border-b border-gray-200 pb-10  ">
                <div class="grid grid-cols-1 md:grid-cols-5 gap-3" >
                    <div class="relative md:col-span-1">
                        <input type="text" placeholder="ui/ux Designer" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        <i class="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    </div>
                    
                    <select class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Location: Bangalore</option>
                    </select>
                    
                    <select class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Job Type: Full Time</option>
                    </select>
                    
                    <select class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Experience: Fresher</option>
                    </select>
                    <button class="hidden md:block   bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 w-50 ml-auto">Apply Filter</button>
                </div>
                <button class="mt-3 md:hidden w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">Apply Filter</button>
                {/* <button class="hidden md:block ml-auto mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Apply Filter</button> */}
            </div>
            <div class="px-4 md:px-8 py-6 ">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                    <div class="lg:col-span-1">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-bold">Related Jobs</h3>
                            <button class="text-sm border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">More Filters</button>
                        </div>
                        <CardOffreSmall></CardOffreSmall>
                        <CardOffreSmall></CardOffreSmall>
                        <CardOffreSmall></CardOffreSmall>
                        <CardOffreSmall></CardOffreSmall>
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


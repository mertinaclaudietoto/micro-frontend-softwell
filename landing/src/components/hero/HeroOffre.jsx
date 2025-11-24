import React from 'react';
import { HiBars3} from "react-icons/hi2";
import CardOffreMiddel from '../card/offre/CardOffreMiddel';

const HeroOffre = () => {
  return (
    <section id="home" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">
            {/* <CardOffremiddel></CardOffremiddel> */}
            {/* border border-gray-300  */}
           <CardOffreMiddel lading={true}></CardOffreMiddel> 
            <div class="grid grid-cols-2 gap-4">
                <div class=" rounded-lg aspect-square flex items-center justify-center">
                    <img src="reseaux.svg" />
                </div>
                <div class=" rounded-lg aspect-video flex items-center justify-center">
                    <img src="coworking.svg" />

                </div>
                <div class=" rounded-lg aspect-video flex items-center justify-center col-span-2">
                    <img src="interview.svg" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroOffre;

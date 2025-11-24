import React from 'react';
import { HiBars3} from "react-icons/hi2";

const HeroDefault = () => {
  return (
    <section  id="home" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                    Discover the World's Hidden Wonders
                </h1>
                <p class="text-gray-600 text-lg mb-8">
                    Embark on unforgettable journeys to breathtaking destinations. 
                    From pristine beaches to majestic mountains, your next adventure 
                    awaits. Explore curated travel experiences tailored just for you.
                </p>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="rounded-lg aspect-square flex items-center justify-center">
                        <img src="reseaux.svg" />
                </div>
                <div class="rounded-lg aspect-video flex items-center justify-center">
                    <img src="coworking.svg" />
                </div>
                <div class="rounded-lg aspect-video flex items-center justify-center col-span-2">
                    <img src="interview.svg" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroDefault;

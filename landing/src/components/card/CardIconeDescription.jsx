import React from 'react';
import { HiBars3} from "react-icons/hi2";

const CardIconeDescription = () => {
  //  hover:shadow-lg
  return (
    <div class="bg_grain_rounded_2xl">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">🌐</span>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">Web App Design</h3>
        <p class="text-gray-600 text-sm leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
    </div>
  );
};

export default CardIconeDescription;
import React from 'react';
import { HiBars3} from "react-icons/hi2";

const CardIconeMinDescription = () => {
  //  hover:shadow-lg
  return (
    <div class="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl p-4 text-center hover:shadow-lg transition-all cursor-pointer transform hover:scale-105">
        <div class="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <span class="text-2xl">🩺</span>
        </div>
        <h3 class="text-sm font-semibold text-white mb-1">Get premium laboratory</h3>
        <p class="text-xs text-indigo-200">services</p>
    </div>
  );
};

export default CardIconeMinDescription;
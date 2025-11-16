import React from 'react';
import { HiBars3} from "react-icons/hi2";

const CardIconeDescriptionLink = () => {
  return (
    <div class="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
        <div class="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">🌐</span>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">Web App Design</h3>
        <p class="text-gray-600 text-sm leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
        <a href="#" class="text-gray-900 font-medium text-sm inline-flex items-center hover:text-yellow-500 transition-colors">
            Learn more 
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
        </a>
    </div>
  );
};

export default CardIconeDescriptionLink;
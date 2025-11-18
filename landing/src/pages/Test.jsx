import React from 'react';
import {  HiOutlineMap,HiOutlineXMark} from "react-icons/hi2";

export default function Test() {
  
  return (
    <>

<div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
  

  <div class="bg-white rounded-2xl p-6 shadow-xl w-full max-w-sm text-center animate-scale-in">

   
    <img 
      src="https://via.placeholder.com/80" 
      alt="icon" 
      class="mx-auto mb-4"
    />

   
    <h2 class="text-lg font-semibold mb-2">Code de validation</h2>

   
    <p class="text-gray-600 text-sm mb-5">
      Entrez le code à 4 chiffres envoyé sur votre téléphone.
    </p>

  
    <div class="flex justify-between gap-3 mb-6">
      <input maxlength="1" class="w-12 h-12 border rounded-lg text-center text-xl focus:border-blue-500 outline-none" />
      <input maxlength="1" class="w-12 h-12 border rounded-lg text-center text-xl focus:border-blue-500 outline-none" />
      <input maxlength="1" class="w-12 h-12 border rounded-lg text-center text-xl focus:border-blue-500 outline-none" />
      <input maxlength="1" class="w-12 h-12 border rounded-lg text-center text-xl focus:border-blue-500 outline-none" />
    </div>

 
    <div class="flex justify-between gap-3">
      
    
      <button class="flex-1 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300">
        Annuler
      </button>

     
      <button class="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Valider
      </button>

    </div>
  </div>
</div>


   

    </> 
  )
}



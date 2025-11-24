// import React from 'react';
// import {  HiOutlineMap,HiOutlineXMark} from "react-icons/hi2";

// export default function Test() {
  
//   return (
//     <>

// <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
  

//   <div class="bg-white rounded-2xl p-6 shadow-xl w-full max-w-sm text-center animate-scale-in">

   
//     <img 
//       src="https://via.placeholder.com/80" 
//       alt="icon" 
//       class="mx-auto mb-4"
//     />

   
//     <h2 class="text-lg font-semibold mb-2">Code de validation</h2>

   
//     <p class="text-gray-600 text-sm mb-5">
//       Entrez le code à 4 chiffres envoyé sur votre téléphone.
//     </p>

  
//     <div class="flex justify-between gap-3 mb-6">
//       <input maxlength="1" class="w-12 h-12 border rounded-lg text-center text-xl focus:border-blue-500 outline-none" />
//       <input maxlength="1" class="w-12 h-12 border rounded-lg text-center text-xl focus:border-blue-500 outline-none" />
//       <input maxlength="1" class="w-12 h-12 border rounded-lg text-center text-xl focus:border-blue-500 outline-none" />
//       <input maxlength="1" class="w-12 h-12 border rounded-lg text-center text-xl focus:border-blue-500 outline-none" />
//     </div>

 
//     <div class="flex justify-between gap-3">
      
    
//       <button class="flex-1 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300">
//         Annuler
//       </button>

     
//       <button class="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//         Valider
//       </button>

//     </div>
//   </div>
// </div>


   

//     </> 
//   )
// }


import React, { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex items-center justify-center mb-5">
      <div className="flex items-center gap-4 md:gap-8 w-full max-w-3xl">
        {/* Step 1 */}
        <div className="flex flex-col items-center gap-2 relative">
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm bg-blue-500 text-white">
            1
          </div>
          {/* Ligne de progression */}
          <div className="absolute top-1/2 left-full -translate-y-1/2 w-24 h-0.5 bg-gray-300">
            <div
              className="h-0.5 bg-blue-500"
              style={{
                width:
                  scrollPercentage > 33
                    ? "100%"
                    : `${(scrollPercentage / 33) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center gap-2 relative">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
              scrollPercentage > 33 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            2
          </div>
          {/* Ligne de progression */}
          <div className="absolute top-1/2 left-full -translate-y-1/2 w-24 h-0.5 bg-gray-300">
            <div
              className="h-0.5 bg-blue-500"
              style={{
                width:
                  scrollPercentage > 66
                    ? "100%"
                    : scrollPercentage < 33
                    ? "0%"
                    : `${((scrollPercentage - 33) / 33) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Step 3 */}
        <div
          className={`flex flex-col items-center gap-2 ${
            scrollPercentage > 66 ? "bg-blue-500 text-white" : ""
          }`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
              scrollPercentage > 66 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            3
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollProgressBar;

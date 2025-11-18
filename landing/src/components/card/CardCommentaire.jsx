import React from 'react';
const CardCommentaire = () => {
  return (
    <div class="bg_grain_rounded_2xl my-4">
        <div class="text-indigo-600 text-3xl mb-4">"</div>
        <p class="text-gray-600 text-sm mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
        <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gray-300"></div>
            <div>
                <h4 class="text-sm font-semibold text-gray-900">John Anderson</h4>
                <p class="text-xs text-gray-500">CEO, Company</p>
            </div>
        </div>
        <div class="flex gap-1 mt-3">
            <span class="text-yellow-400">⭐</span>
            <span class="text-yellow-400">⭐</span>
            <span class="text-yellow-400">⭐</span>
            <span class="text-yellow-400">⭐</span>
            <span class="text-yellow-400">⭐</span>
        </div>
    </div>
  );
};

export default CardCommentaire;
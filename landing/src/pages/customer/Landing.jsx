import React from 'react';
import HeroChoice from '../../components/hero/HeroChoice';
import Header from '../../components/header/landing/Header';
import CardIconeDescription from '../../components/card/CardIconeDescription';
import CardIconeMinDescription from '../../components/card/CardIconeMinDescription';
import CardCommentaire from '../../components/card/CardCommentaire';
import FooterChoice from '../../components/footer/FooterChoice';
function Landing() {
  
  return (
    <> 
        <Header></Header>
        <HeroChoice nbrChoice={2}></HeroChoice>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20'>
                 <div class="text-center mb-12 ">
                    <h1 class="text-3xl md:text-4xl font-bold">
                        <span class="text-yellow-500">Services</span> 
                        <span class="text-gray-900">I Provide</span>
                    </h1>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  py-4 px-4 gap-6 ">
                    <CardIconeDescription></CardIconeDescription>
                    <CardIconeDescription></CardIconeDescription>
                    <CardIconeDescription></CardIconeDescription>
                    <CardIconeDescription></CardIconeDescription>
                    <CardIconeDescription></CardIconeDescription>
                    <CardIconeDescription></CardIconeDescription>
                </div>
        </div>
        {/*  */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20'>
                <div class="flex items-center justify-between mb-8">
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-900">
                        Explore by our <span class="text-indigo-600">category</span>
                    </h2>
                    <div class="flex gap-2">
                        <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>
                        <button class="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center hover:bg-indigo-700 transition-colors">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    <CardIconeMinDescription></CardIconeMinDescription>
                    <CardIconeMinDescription></CardIconeMinDescription>
                    <CardIconeMinDescription></CardIconeMinDescription>
                    <CardIconeMinDescription></CardIconeMinDescription>
                </div>
                <div class="flex justify-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-gray-800"></div>
                    <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>  
        </div>
        {/* commentaire  */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20'>
            {/* composant */}
            <div class="flex items-center justify-between mb-8">
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            What our beloved <span class="text-indigo-600">users</span>
                        </h2>
                        <p class="text-gray-600">say about us</p>
                    </div>
                    <div class="flex gap-2">
                        <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>
                        <button class="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center hover:bg-indigo-700 transition-colors">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <CardCommentaire></CardCommentaire>
                <CardCommentaire></CardCommentaire>
                <CardCommentaire></CardCommentaire>
                <CardCommentaire></CardCommentaire>
            </div>
        </div>
        {/* offre emplois */}
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex justify-between items-center mb-8">
            <h2 class="text-3xl font-bold">Latest Stories</h2>
            <button class="hidden lg:block text-gray-700 hover:text-gray-900">
                Subscribe →
            </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="bg-gray-300 rounded-lg aspect-video lg:aspect-[4/3] flex items-center justify-center">
                <svg class="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
            </div>
            
            <div class="space-y-6">
                <div class="flex gap-4">
                    <div class="bg-gray-300 rounded-lg w-24 h-24 flex-shrink-0 flex items-center justify-center">
                        <svg class="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <div class="flex-1">
                        <h3 class="font-semibold mb-2">
                            15 Colorful Colonial Morocco Sights from Fes to Marrakech
                        </h3>
                        <p class="text-gray-600 text-sm">TRIP • JAN 17, 2025 • 3 min</p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="bg-gray-300 rounded-lg w-24 h-24 flex-shrink-0 flex items-center justify-center">
                        <svg class="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <div class="flex-1">
                        <h3 class="font-semibold mb-2">
                            10 Best Local Travel guide you should meet in Asia
                        </h3>
                        <p class="text-gray-600 text-sm">GUIDE • JAN 15, 2025 • 5 min</p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="bg-gray-300 rounded-lg w-24 h-24 flex-shrink-0 flex items-center justify-center">
                        <svg class="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <div class="flex-1">
                        <h3 class="font-semibold mb-2">
                            Complete tour and Adventure through Latin America
                        </h3>
                        <p class="text-gray-600 text-sm">ADVENTURE • JAN 12, 2025 • 7 min</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-8">
            <h3 class="text-xl font-bold mb-4">Los Angeles food & drink guide: 10 things to try in Los Angeles, California</h3>
            <p class="text-gray-600 mb-4">
                LA superb food & Cocktail cultures are on blast from 90 countries' cuisines, but the top of the list of 15 things we're obsessed with.
            </p>
        </div>

        <button class="lg:hidden w-full mt-6 px-6 py-3 text-gray-700 hover:text-gray-900">
            Read more stories →
        </button>
        </section>
        <FooterChoice></FooterChoice>

    </>
   
  )
}

export default Landing;


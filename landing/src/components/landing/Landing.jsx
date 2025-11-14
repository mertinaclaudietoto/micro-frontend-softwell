import React from 'react';

import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  MapPinIcon,
  CalendarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export default function Lading() {
//   const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <>
    <nav class="bg-white shadow-sm sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <span class="text-2xl font-bold">Logo</span>
                </div>
                
                {/* <!-- Desktop Navigation --> */}
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#" class="text-gray-700 hover:text-gray-900">Discover</a>
                    <a href="#" class="text-gray-700 hover:text-gray-900">Hot Deals</a>
                    <a href="#" class="text-gray-700 hover:text-gray-900">Trending</a>
                    <a href="#" class="text-gray-700 hover:text-gray-900">Blog</a>
                </div>

                <div class="hidden md:flex items-center space-x-4">
                    <button class="text-gray-700 hover:text-gray-900">Fr-mode</button>
                    <button class="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
                        Sign in
                    </button>
                </div>

                {/* <!-- Mobile menu button --> */}
                <button class="md:hidden" onclick="toggleMenu()">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>
        </div>

        <div id="mobileMenu" class="menu-hidden md:hidden bg-white border-t">
            <div class="px-4 pt-2 pb-3 space-y-1">
                <a href="#" class="block px-3 py-2 text-gray-700">Discover</a>
                <a href="#" class="block px-3 py-2 text-gray-700">Hot Deals</a>
                <a href="#" class="block px-3 py-2 text-gray-700">Trending</a>
                <a href="#" class="block px-3 py-2 text-gray-700">Blog</a>
                <button class="w-full text-left px-3 py-2 text-gray-700">Fr-mode</button>
                <button class="w-full bg-black text-white px-6 py-2 rounded-full mt-2">
                    Sign in
                </button>
            </div>
        </div>
    </nav>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
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
                <div class="bg-gray-300 rounded-lg aspect-square flex items-center justify-center">
                    <svg class="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                </div>
                <div class="bg-gray-300 rounded-lg aspect-video flex items-center justify-center">
                    <svg class="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                </div>
                <div class="bg-gray-300 rounded-lg aspect-video flex items-center justify-center col-span-2">
                    <svg class="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex justify-between items-center mb-8">
            <h2 class="text-3xl font-bold">Top Destinations</h2>
            <button class="hidden lg:block px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100">
                Explore all destinations
            </button>
        </div>
        
        <div class="flex gap-4 mb-6 overflow-x-auto pb-2">
            <button class="px-4 py-2 bg-black text-white rounded-full whitespace-nowrap">Popular</button>
            <button class="px-4 py-2 bg-gray-200 rounded-full whitespace-nowrap hover:bg-gray-300">Hot Deals</button>
            <button class="px-4 py-2 bg-gray-200 rounded-full whitespace-nowrap hover:bg-gray-300">Islands & Beaches</button>
            <button class="px-4 py-2 bg-gray-200 rounded-full whitespace-nowrap hover:bg-gray-300">Europe</button>
            <button class="px-4 py-2 bg-gray-200 rounded-full whitespace-nowrap hover:bg-gray-300">Explore all</button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="group cursor-pointer">
                <div class="bg-gray-300 rounded-lg aspect-[3/4] mb-3 flex items-center justify-center overflow-hidden">
                    <svg class="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                </div>
                <h3 class="font-semibold text-lg mb-1">Machu Picchu, Sacred Valley</h3>
                <p class="text-gray-600 text-sm">Cuzco, Peru</p>
            </div>
            <div class="group cursor-pointer">
                <div class="bg-gray-300 rounded-lg aspect-[3/4] mb-3 flex items-center justify-center overflow-hidden">
                    <svg class="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                </div>
                <h3 class="font-semibold text-lg mb-1">Haleakala National Park</h3>
                <p class="text-gray-600 text-sm">Maui, Hawaii</p>
            </div>
            <div class="group cursor-pointer">
                <div class="bg-gray-300 rounded-lg aspect-[3/4] mb-3 flex items-center justify-center overflow-hidden">
                    <svg class="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                </div>
                <h3 class="font-semibold text-lg mb-1">Santorini Island</h3>
                <p class="text-gray-600 text-sm">Cyclades, Greece</p>
            </div>
            <div class="group cursor-pointer">
                <div class="bg-gray-300 rounded-lg aspect-[3/4] mb-3 flex items-center justify-center overflow-hidden">
                    <svg class="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                </div>
                <h3 class="font-semibold text-lg mb-1">Golden Bridge, Ba Na Hills</h3>
                <p class="text-gray-600 text-sm">Vietnam</p>
            </div>
        </div>

        <button class="lg:hidden w-full mt-8 px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100">
            Explore all destinations
        </button>
    </section>
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
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 class="text-3xl font-bold mb-8">Trekker's Highlights</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-1">
                <div class="flex items-start gap-4 mb-6">
                    <div class="bg-gray-300 rounded-full w-12 h-12 flex-shrink-0"></div>
                    <div>
                        <h3 class="font-semibold mb-1">Maria Angelina</h3>
                        <p class="text-sm text-gray-600">3 weeks ago</p>
                    </div>
                </div>
                <div class="flex mb-2">
                    <span class="text-yellow-400">★</span>
                    <span class="text-yellow-400">★</span>
                    <span class="text-yellow-400">★</span>
                    <span class="text-yellow-400">★</span>
                    <span class="text-yellow-400">★</span>
                </div>
                <h4 class="font-semibold mb-2">Wonderful stay</h4>
                <p class="text-gray-600 text-sm mb-4">
                    We loved our stay in this Wonderful Pension! Turkey hosted us wonderfully well and we felt really welcome here! We had a lot of fun! This mountain-like pool was very appreciated. We were able to go on beautiful hikes near here.
                </p>
                <button class="text-sm underline">Read more</button>
            </div>
            
            <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="bg-gray-300 rounded-lg aspect-video flex items-center justify-center">
                    <svg class="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                </div>
                <div class="bg-gray-300 rounded-lg aspect-video flex items-center justify-center">
                    <svg class="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                </div>
            </div>
        </div>

        <div class="mt-8 flex justify-center">
            <button class="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100">
                See more reviews
            </button>
        </div>
    </section>
    </>
  );
}
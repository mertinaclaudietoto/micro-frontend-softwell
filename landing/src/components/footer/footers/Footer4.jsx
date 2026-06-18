// Footer.jsx
import React from 'react';
import Icon from "@mdi/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
const Footer4 = () => {
  return (
    // class="max-w-6xl mx-auto px-4 py-8"
    <div class="px-4 py-8  mx-auto">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="p-8">
                <div class="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                    <div>
                        <h2 class="text-2xl font-bold mb-2">BRAND NAME</h2>
                        <p class="text-red-500 text-sm">Saisir votre slogan ici</p>
                    </div>
                    <nav class="flex flex-wrap gap-6 text-sm">
                        <a href="#" class="hover:text-red-500">About</a>
                        <a href="#" class="hover:text-red-500">Blog</a>
                        <a href="#" class="hover:text-red-500">Menu</a>
                        <a href="#" class="text-red-500 font-semibold">Services</a>
                        <a href="#" class="hover:text-red-500">FAQ</a>
                        <a href="#" class="hover:text-red-500">Support</a>
                    </nav>
                </div>

            
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div class="flex items-center gap-2 text-sm">
                        <i class="fas fa-map-marker-alt text-red-500"></i>
                        <span>123 Street Name City Name, State, Country 12345</span>
                    </div>

                    <div class="flex flex-col md:flex-row items-start md:items-center gap-4">
                        <p class="font-semibold">Can You Put Your Email Here?</p>
                        <div class="flex items-center gap-2 w-full md:w-auto">
                            <input type="email" placeholder="Write Email Here" class="flex-1 md:w-48 px-4 py-2 border border-gray-300 rounded text-sm"/>
                            <button class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-900 text-white px-8 py-4">
                <div class="flex flex-col md:flex-row justify-between items-center text-sm">
                    <div class="flex gap-6 mb-2 md:mb-0">
                        <a href="#" class="hover:text-gray-300">Privacy Policy</a>
                        <a href="#" class="hover:text-gray-300">Our History</a>
                        <a href="#" class="hover:text-gray-300">What We Do</a>
                    </div>
                    <p class="text-gray-400">© 2025 Example Text. All images are for demo purposes only.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer4;

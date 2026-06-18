// Footer.jsx
import React from 'react';
import Icon from "@mdi/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
const Footer2 = () => {
  return (
    <div class="mx-auto">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="p-8 border-b">
                <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div class="flex-1">
                        <h3 class="text-xl font-bold mb-2">Subscribe</h3>
                        <p class="text-sm text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                    </div>
                    <div class="flex items-center gap-2 w-full md:w-auto">
                        <input type="email" placeholder="Write Email" class="flex-1 md:w-64 px-4 py-2 border border-gray-300 rounded"/>
                        <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div class="p-8 md:p-12">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                    
                    <div class="lg:col-span-1">
                        <h2 class="text-2xl font-bold mb-2">BRAND NAME</h2>
                        <p class="text-red-500 text-sm mb-6">Saisir votre slogan ici</p>
                        <p class="text-sm text-gray-600 mb-6">
                            Consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div class="flex gap-2 mb-6">
                            <a href="#" class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="#" class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                 
                    <div>
                        <h3 class="font-bold mb-4">About</h3>
                        <ul class="space-y-2 text-sm text-gray-600">
                            <li class="flex items-center"><span class="mr-2">▸</span> History</li>
                            <li class="flex items-center"><span class="mr-2">▸</span> Research</li>
                            <li class="flex items-center"><span class="mr-2">▸</span> Consulting</li>
                            <li class="flex items-center"><span class="mr-2">▸</span> Analysis</li>
                        </ul>
                    </div>

                  
                    <div>
                        <h3 class="font-bold mb-4">Menu</h3>
                        <ul class="space-y-2 text-sm text-gray-600">
                            <li class="flex items-center"><span class="mr-2">▸</span> About</li>
                            <li class="flex items-center"><span class="mr-2">▸</span> Blog</li>
                            <li class="flex items-center"><span class="mr-2">▸</span> Service</li>
                            <li class="flex items-center"><span class="mr-2">▸</span> Contact</li>
                        </ul>
                    </div>

                  
                    <div>
                        <h3 class="font-bold mb-4">Services</h3>
                        <ul class="space-y-2 text-sm text-gray-600">
                            <li class="flex items-center"><span class="mr-2">▸</span> Login</li>
                            <li class="flex items-center"><span class="mr-2">▸</span> Web Design</li>
                            <li class="flex items-center"><span class="mr-2">▸</span> Branding</li>
                            <li class="flex items-center"><span class="mr-2">▸</span> Marketing</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold mb-4">Contact</h3>
                        <div class="space-y-3 text-sm mb-4">
                            <div>
                                <p class="font-semibold">Call:</p>
                                <p class="text-gray-600">+0123 456 789 00</p>
                            </div>
                            <div>
                                <p class="font-semibold">Email:</p>
                                <p class="text-gray-600">contact@example.com</p>
                            </div>
                        </div>
                        <div class="w-full h-32 bg-gray-200 rounded overflow-hidden">
                            <img src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-0.1276,51.5074,10,0/300x200?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" alt="Map" class="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
                <div class="border-2 border-gray-900 rounded-lg p-4 text-center">
                    <p class="font-semibold">Thank! You For Your Creative Business Landing Page</p>
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

export default Footer2;

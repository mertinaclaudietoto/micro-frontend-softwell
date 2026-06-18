// Footer.jsx
import React from 'react';
import Icon from "@mdi/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
const Footer1 = () => {
  return (
    <div class="px-4 py-8  mx-auto">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="p-8 md:p-12">
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h2 class="text-2xl font-bold mb-2">BRAND NAME</h2>
                        <p class="text-red-500 text-sm mb-6">Saisir votre slogan ici</p>
                        <h3 class="font-bold mb-3">About Us</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation.
                        </p>
                    </div>
                    <div>
                        <h3 class="font-bold mb-4">Services</h3>
                        <ul class="space-y-2 text-sm text-gray-600">
                            <li class="flex items-center"><span class="mr-2">▸</span> Planning</li>
                            <li class="flex items-center"><span class="mr-2">▸</span> Research</li>
                            <li class="flex items-center"><span class="mr-2">▸</span> Consulting</li>
                            <li class="flex items-center"><span class="mr-2">▸</span> Analysis</li>
                            <li class="flex items-center"><span class="mr-2">▸</span> User Testing</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold mb-4">Company</h3>
                        <ul class="space-y-2 text-sm text-gray-600">
                            <li class="flex items-center"><span class="mr-2">▸</span> Who We Are</li>
                            <li class="flex items-center"><span class="mr-2">▸</span> Our Services</li>
                            <li class="flex items-center"><span class="mr-2">▸</span> Our Clients</li>
                            <li class="flex items-center"><span class="mr-2">▸</span> Pricing</li>
                            <li class="flex items-center"><span class="mr-2">▸</span> Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold mb-4">Contact us</h3>
                        <div class="space-y-3 text-sm mb-6">
                            <div>
                                <p class="font-semibold">Call:</p>
                                <p class="text-gray-600">+0123 456 789 00</p>
                            </div>
                            <div>
                                <p class="font-semibold">Email:</p>
                                <p class="text-gray-600">contact@example.com</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 mb-4">
                            <input type="email" placeholder="Write Email" class="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"/>
                            <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                        <div>
                            <p class="font-bold mb-2">Follow Us</p>
                            <div class="flex gap-2">
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
                                <a href="#" class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
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

export default Footer1;

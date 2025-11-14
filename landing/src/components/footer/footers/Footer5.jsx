// Footer.jsx
import React from 'react';
import Icon from "@mdi/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
const Footer5 = () => {
  return (
    <div class="px-4 py-8  mx-auto">
        <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h2 class="text-2xl font-bold mb-2">BRAND NAME</h2>
                    <p class="text-red-500 text-sm">Enter Your Slogan Here</p>
                </div>

                <nav class="flex flex-wrap gap-6 text-sm">
                    <a href="#" class="hover:text-red-500">About</a>
                    <a href="#" class="hover:text-red-500">Services</a>
                    <a href="#" class="hover:text-red-500">FAQ</a>
                    <a href="#" class="hover:text-red-500">Support</a>
                </nav>

                <div class="flex items-center gap-4">
                    <a href="#" class="flex items-center gap-2 text-sm hover:text-red-500">
                        <span>Click Here</span>
                        <i class="fas fa-arrow-right"></i>
                    </a>
                    <button class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
                        Contact
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer5;

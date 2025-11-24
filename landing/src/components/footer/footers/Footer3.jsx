// Footer.jsx
import React from 'react';
import Icon from "@mdi/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import RenderMenuHorizontal from '../../card/RendermenuHorizontal';
export default function  Footer3 () {
    const menus = [
    {item:"Home",link:"#home"},
    {item:"Pourquoi-nous",link:"#why"},
    {item:"Poste disponible",link:"#post"},
  ];
  return (
    <div class="mx-auto mt-0">
        <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
                <div>
                    <h2 class="text-2xl font-bold mb-2">BRAND NAME</h2>
                    <p class="text-red-500 text-sm mb-6">Enter Your Slogan Here</p>
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
                    {/* <p class="font-bold mt-4">Follow Us</p> */}
                </div>
                {/* <div class="flex justify-start md:flex-row gap-8">
                    <div class="text-sm">
                        <p class="font-semibold mb-1">Call:</p>
                        <p class="text-gray-600 mb-3">+0123 456 789 00</p>
                        <p class="font-semibold mb-1">Email:</p>
                        <p class="text-gray-600">user@example.com</p>
                    </div>
                </div> */}
            </div>

            {/* <div class="border-t pt-6">
                <h3 class="font-bold text-xl mb-3">About Us</h3>
                <p class="text-gray-600 text-sm mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </p>
                <div class="flex items-center gap-2">
                    <input type="email" placeholder="Write Email" class="flex-1 md:w-64 px-4 py-2 border border-gray-300 rounded"/>
                    <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>  */}
        </div>
    </div>
  );
};


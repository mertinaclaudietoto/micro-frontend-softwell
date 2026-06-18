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
                    <p class="text-red-500 text-sm mb-6">Saisir votre slogan ici</p>
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
              
            </div>

      
        </div>
    </div>
  );
};


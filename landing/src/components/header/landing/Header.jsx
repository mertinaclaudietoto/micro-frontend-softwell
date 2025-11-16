// Footer.jsx
import React,{useState} from 'react';
import { HiBars3} from "react-icons/hi2";
import RenderMenuHorizontal from '../../../function/RendermenuHorizontal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // 
  const menus = ["Discover", "Hot Deals", "Trending", "Blog"];

  return (
  <>
    <nav class="shadow-sm sticky top-0 z-50 pink">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <span class="text-2xl font-bold pink:bg-pink-300">Logo</span>
                </div>
                
                {/* <!-- Desktop Navigation --> */}
                <div class="hidden md:flex items-center space-x-8">
                  <RenderMenuHorizontal menus={menus} defaultActiveItem={"Discover"} tailwinddefault={"text-gray-700 hover:text-gray-900"} tailwindActif={"border-b-2 border-gray-700"}/>
                </div>
                <div class="hidden md:flex items-center space-x-4">
                    <button class="text-gray-700 hover:text-gray-900">Fr-mode</button>
                    <button class="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
                        Sign in
                    </button>
                </div>

                {/* <!-- Mobile menu button --> */}
                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={toggleMenu}>
                    <HiBars3 className="w-6 h-6 text-gray-700" />
                </button>
            </div>
        </div>
          {isOpen ? (
            <div id="mobileMenu" class="menu-hidden md:hidden bg-white border-t">
              <div class="px-4 pt-2 pb-3 space-y-1">
                  <RenderMenuHorizontal menus={menus} defaultActiveItem={"Discover"} tailwinddefault={"block px-3 py-2 text-gray-700 hover:text-gray-900"} tailwindActif={"border-b-2 border-gray-700"}/>

                  <button class="w-full bg-black text-white px-6 py-2 rounded-full mt-2">
                      Sign in
                  </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        
    </nav>
  </>
  );
};

export default Header;

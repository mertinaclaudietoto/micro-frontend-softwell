// Footer.jsx
import React from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
  </>
  );
};

export default Header;

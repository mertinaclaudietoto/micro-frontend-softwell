import { CheckCircleIcon } from '@heroicons/react/24/outline'

export default function CriterenPost(){
    return(
<div class="bg-gradient-to-br from-amber-50 via-emerald-50 to-cyan-50 min-h-screen">
    <div class="flex">
     
        <aside class="w-64 bg-white shadow-lg min-h-screen p-6">
            <div class="flex items-center gap-2 mb-8">
                <div class="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
                    <i class="fas fa-utensils text-white text-sm"></i>
                </div>
                <span class="font-bold text-xl">bitepoint</span>
            </div>
            
            <nav class="space-y-2">
                <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                    <i class="fas fa-th-large"></i>
                    <span>Dashboard</span>
                </a>
                <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                    <i class="fas fa-receipt"></i>
                    <span>Menu</span>
                </a>
                <a href="#" class="flex items-center gap-3 px-4 py-3 bg-amber-400 text-gray-900 rounded-lg font-medium">
                    <i class="fas fa-shopping-bag"></i>
                    <span>Orders</span>
                </a>
                <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                    <i class="fas fa-table"></i>
                    <span>Table</span>
                </a>
                <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                    <i class="fas fa-calculator"></i>
                    <span>Accounting</span>
                </a>
                <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </a>
            </nav>

            <div class="mt-auto pt-8">
                <div class="flex items-center gap-3 px-4 py-3">
                    <img src="https://i.pravatar.cc/40?img=1" alt="User" class="w-10 h-10 rounded-full"/>
                    <div class="flex-1">
                        <div class="font-medium text-sm">Gladina Samantha</div>
                        <div class="text-xs text-gray-500">Admin</div>
                    </div>
                </div>
                <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg mt-2">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </a>
            </div>
        </aside>

      
        <main class="flex-1 p-8">
           
            <div class="bg-white rounded-2xl shadow-sm p-6 mb-6">
                <div class="flex items-center justify-between mb-6">
                    <h1 class="text-2xl font-bold">Orders</h1>
                    <div class="text-sm text-gray-500">Wednesday, 12 July 2023</div>
                </div>
                
                <div class="flex items-center gap-4 mb-6">
                    <button class="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium">In Process</button>
                    <button class="px-6 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">Completed</button>
                    <div class="ml-auto flex items-center gap-4">
                        <div class="relative">
                            <input type="text" placeholder="Search number, order or etc..." class="pl-4 pr-10 py-2 border border-gray-200 rounded-lg w-80"/>
                            <i class="fas fa-search absolute right-3 top-3 text-gray-400"></i>
                        </div>
                        <button class="p-2 border border-gray-200 rounded-lg">
                            <i class="fas fa-filter text-gray-600"></i>
                        </button>
                    </div>
                </div>

              
                <div class="grid grid-cols-3 gap-4">
                   
                    <div class="border border-gray-200 rounded-xl p-4">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
                                A1
                            </div>
                            <div class="flex-1">
                                <div class="font-medium">Ariel Mined</div>
                                <div class="text-xs text-gray-500">Wed, July 12, 2023</div>
                            </div>
                            <div class="card-text-s-green">
                                <CheckCircleIcon className="h-6 w-6" aria-hidden="true" />
                                <span>Ready</span>
                            </div>
                        </div>
                        <div class="space-y-2 text-sm mb-4">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Grilled Salmon with Mint</span>
                                <span>1</span>
                                <span class="font-medium">$24.50</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Smoked Belgian Beef</span>
                                <span>1</span>
                                <span class="font-medium">$16.50</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Fresh Guacamole</span>
                                <span>2</span>
                                <span class="font-medium">$12.00</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Classic Lemonade</span>
                                <span>1</span>
                                <span class="font-medium">$12.00</span>
                            </div>
                        </div>
                        <div class="border-t pt-3 mb-4">
                            <div class="flex justify-between font-bold">
                                <span>Total</span>
                                <span>$67.24</span>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <button class="flex-1 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">See Details</button>
                            <button class="flex-1 py-2 bg-amber-400 rounded-lg text-sm font-medium hover:bg-amber-500">Pay Bills</button>
                        </div>
                    </div>

                  
                    <div class="border border-gray-200 rounded-xl p-4">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">
                                D3
                            </div>
                            <div class="flex-1">
                                <div class="font-medium">Dennis Frascanco</div>
                                <div class="text-xs text-gray-500">Wed, July 12, 2023</div>
                            </div>
                            <div class="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded text-xs text-amber-700">
                                <i class="fas fa-clock"></i>
                                <span>In Progress</span>
                            </div>
                        </div>
                        <div class="space-y-2 text-sm mb-4">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Avocado Egg Toast</span>
                                <span>1</span>
                                <span class="font-medium">$8.00</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Fish and Chips</span>
                                <span>1</span>
                                <span class="font-medium">$6.00</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Pad Thai Plate</span>
                                <span>2</span>
                                <span class="font-medium">$13.00</span>
                            </div>
                            <div class="text-gray-400 text-xs">+2 more</div>
                        </div>
                        <div class="border-t pt-3 mb-4">
                            <div class="flex justify-between font-bold">
                                <span>Total</span>
                                <span>$57.87</span>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <button class="flex-1 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">See Details</button>
                            <button class="flex-1 py-2 bg-amber-400 rounded-lg text-sm font-medium hover:bg-amber-500">Pay Bills</button>
                        </div>
                    </div>

                   
                    <div class="border border-gray-200 rounded-xl p-4">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center text-gray-900 font-bold">
                                M1
                            </div>
                            <div class="flex-1">
                                <div class="font-medium">Morgan Cox</div>
                                <div class="text-xs text-gray-500">Wed, July 12, 2023</div>
                            </div>
                            <div class="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded text-xs text-amber-700">
                                <i class="fas fa-clock"></i>
                                <span>In Progress</span>
                            </div>
                        </div>
                        <div class="space-y-2 text-sm mb-4">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Stephanie Beef Toe</span>
                                <span>1</span>
                                <span class="font-medium">$21.50</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Double Chick Burger</span>
                                <span>3</span>
                                <span class="font-medium">$19.00</span>
                            </div>
                            <div class="text-gray-400 text-xs">+2 more</div>
                        </div>
                        <div class="border-t pt-3 mb-4">
                            <div class="flex justify-between font-bold">
                                <span>Total</span>
                                <span>$85.90</span>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <button class="flex-1 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">See Details</button>
                            <button class="flex-1 py-2 bg-amber-400 rounded-lg text-sm font-medium hover:bg-amber-500">Pay Bills</button>
                        </div>
                    </div>

                   
                    <div class="border border-gray-200 rounded-xl p-4">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center text-gray-900 font-bold">
                                T4
                            </div>
                            <div class="flex-1">
                                <div class="font-medium">Red Rey</div>
                                <div class="text-xs text-gray-500">Wed, July 12, 2023</div>
                            </div>
                            <div class="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded text-xs text-amber-700">
                                <i class="fas fa-clock"></i>
                                <span>In Progress</span>
                            </div>
                        </div>
                        <div class="space-y-2 text-sm mb-4">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Margherita Pizza</span>
                                <span>1</span>
                                <span class="font-medium">$16.50</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Caesar Jardins</span>
                                <span>1</span>
                                <span class="font-medium">$19.00</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Virgin Mojito</span>
                                <span>2</span>
                                <span class="font-medium">$18.00</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Classic Lemonade</span>
                                <span>2</span>
                                <span class="font-medium">$24.00</span>
                            </div>
                        </div>
                        <div class="border-t pt-3 mb-4">
                            <div class="flex justify-between font-bold">
                                <span>Total</span>
                                <span>$97.50</span>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <button class="flex-1 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">See Details</button>
                            <button class="flex-1 py-2 bg-amber-400 rounded-lg text-sm font-medium hover:bg-amber-500">Pay Bills</button>
                        </div>
                    </div>

                    
                    <div class="border border-gray-200 rounded-xl p-4">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">
                                C2
                            </div>
                            <div class="flex-1">
                                <div class="font-medium">Muzi Becker</div>
                                <div class="text-xs text-gray-500">Wed, July 12, 2023</div>
                            </div>
                            <div class="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded text-xs text-blue-700">
                                <i class="fas fa-check-double"></i>
                                <span>Completed</span>
                            </div>
                        </div>
                        <div class="space-y-2 text-sm mb-4">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Foxy Sheffiel Macaroons</span>
                                <span>1</span>
                                <span class="font-medium">$21.00</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Lobster Bisque</span>
                                <span>1</span>
                                <span class="font-medium">$13.00</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Thai Oysters Curry</span>
                                <span>1</span>
                                <span class="font-medium">$16.52</span>
                            </div>
                            <div class="text-gray-400 text-xs">+4 more</div>
                        </div>
                        <div class="border-t pt-3 mb-4">
                            <div class="flex justify-between font-bold">
                                <span>Total</span>
                                <span>$98.34</span>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <button class="flex-1 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">See Details</button>
                            <button class="flex-1 py-2 bg-amber-400 rounded-lg text-sm font-medium hover:bg-amber-500">Pay Bills</button>
                        </div>
                    </div>

                    <div class="border border-gray-200 rounded-xl p-4">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 bg-cyan-700 rounded-lg flex items-center justify-center text-white font-bold">
                                G3
                            </div>
                            <div class="flex-1">
                                <div class="font-medium">Fhayla Richard</div>
                                <div class="text-xs text-gray-500">Wed, July 12, 2023</div>
                            </div>
                            <div class="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded text-xs text-blue-700">
                                <i class="fas fa-check-double"></i>
                                <span>Completed</span>
                            </div>
                        </div>
                        <div class="space-y-2 text-sm mb-4">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Classic Greek Chicken</span>
                                <span>1</span>
                                <span class="font-medium">$21.00</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Greek Slow Plate</span>
                                <span>1</span>
                                <span class="font-medium">$12.00</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Burger Verritos</span>
                                <span>1</span>
                                <span class="font-medium">$12.00</span>
                            </div>
                            <div class="text-gray-400 text-xs">+1 more</div>
                        </div>
                        <div class="border-t pt-3 mb-4">
                            <div class="flex justify-between font-bold">
                                <span>Total</span>
                                <span>$54.89</span>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <button class="flex-1 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">See Details</button>
                            <button class="flex-1 py-2 bg-amber-400 rounded-lg text-sm font-medium hover:bg-amber-500">Pay Bills</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
    )
}
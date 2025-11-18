export default function CardCriterien(){
    return (
         <div class="border border-gray-200 rounded-card padding-card">
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
    )
}
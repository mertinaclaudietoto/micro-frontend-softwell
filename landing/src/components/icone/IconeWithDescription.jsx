import { HiBookmark } from "react-icons/hi2";

export default function IconeWithDescription(){
    return(
           <div className="grid place-items-center mx-1 bg-gray-100 p-2 rounded-xl">
                <div className='size-5 flex items-center justify-center'>
                    <HiBookmark className="w-3 h-3"/>
                </div>
                <p className='text-[10px] font-medium'>Description</p>
            </div>
    )
}
import { couleurs700 } from "../../../data/data";

export default function Summarycards({value}){
    return(
        <div class="bg-white rounded-lg shadow p-4 flex items-center w-96">
            <div class= "bg-blue-500 rounded-lg p-3 mr-3">
                <i className={`${value.icone}  text-white`} />
            </div>
            <div >
                <div class="text-gray-500 text-xs  w-[120px]">
                    <p className="break-all"> {value.name}</p>
                </div>
                <div class="text-2xl font-bold">{value.nbr}</div>
            </div>
        </div>
    )
}

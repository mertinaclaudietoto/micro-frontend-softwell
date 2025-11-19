export  default function HeadGray({items}){
    return(
        <thead>
            <tr class="text-gray-500 text-sm border-b">
                {items.map((value,index)=>(
                    <th class="pb-3" id={index}>{value}</th>
                ))}
            </tr>
        </thead>
    )
}
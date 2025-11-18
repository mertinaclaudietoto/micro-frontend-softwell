
import { ClockIcon,CheckCircleIcon  } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

export default function State({onclick,text,cssCard,icone}){
     return (
            <button class={cssCard} onClick={()=>{onclick()}}>
                <i className={`${icone} icone-size-s`}></i>
                <span>{text}</span>
            </button>
        )
}
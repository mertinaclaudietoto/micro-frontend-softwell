import { CheckCircleIcon } from '@heroicons/react/24/outline'
import CardCriterien from '../../components/card/criterien/CardCriterien'
import Sidebar from '../../components/sidebar/Sidebar'
import HeaderWithFiltre from '../../components/header/admin/HeaderWithFiltre'

export default function CriterenStaff(){
    return(
    <div class="flex">
        <Sidebar/>
        <main class="flex-1">  
            <div class="bg-white  p-6 mb-6">
               <HeaderWithFiltre></HeaderWithFiltre>
                {/* filtre  */}
                
                {/* fin */}
                <div class="grid  grid-cols-1  lg:grid-cols-3 gap-4">
                    <CardCriterien></CardCriterien>
                    <CardCriterien></CardCriterien>
                    <CardCriterien></CardCriterien>
                    <CardCriterien></CardCriterien>
                    <CardCriterien></CardCriterien>
                    <CardCriterien></CardCriterien>
                </div>
            </div>
        </main>
    </div>
    )
}
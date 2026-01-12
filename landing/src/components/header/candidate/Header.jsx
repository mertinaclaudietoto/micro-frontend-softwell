// Footer.jsx
import React, { useEffect, useState } from 'react';
import { HiBars3} from "react-icons/hi2";
import RenderMenuHorizontal from '../../card/RendermenuHorizontal';
import { HiChatBubbleBottomCenterText,HiBell,HiMiniUser } from "react-icons/hi2";
import CardChangePassWord from '../../card/popup/CardChangePassWord';
import CardNotification from '../../card/popup/CardNotification';

import LogOut from '../../../function/Deconnexion';
import { url_recrutement } from '../../../data/data';
import { getData } from '../../../function/Axios';
export default function Header () {
  const [infoCompany,setCompany]=useState(null);
  const loadData =async () => {
      const data = await getData(
          url_recrutement + `company/info`
      );
      console.log(data);
      if(data.data!=null){
          setCompany( data.data);
          console.log(data);
      }
  };
  useEffect(() => {
          loadData();
      }, []);
        
  const menus = [
    {item:"Postes disponible",link:"/candidate/availableposte"},
    {item:"Vos candidature",link:"/candidate/application"},
    {item:"Profile",link:"/candidate/profile"},
  ];
  const [changePasseWord,setChangePasseWord]=useState(false);
  const [showNotification,setShowNotification]=useState(false);

  return (
  <>
    <header class="py-4 border-b border-gray-200">
      <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
              <i class="fas fa-briefcase text-2xl text-softbleu"></i>
              <h1 class="text-xl md:text-2xl font-bold pink:bg-pink-300">{infoCompany?.companyName}</h1>
          </div>
          <nav class="hidden md:flex items-center gap-6">
            <RenderMenuHorizontal menus={menus} defaultActiveItem={"Find Jobs"} tailwinddefault={"text-gray-700 hover:text-gray-900"} tailwindActif={"border-b-2 border-gray-700"}/>
          </nav>
          <div class="flex items-center gap-3 md:gap-4 md:pr-8">
              <button class="text-gray-600 hover:text-blue-600" onClick={()=>{setShowNotification(true)}}><HiBell></HiBell></button>
              <button class="text-gray-600 hover:text-blue-600"  onClick={()=>{setChangePasseWord(true)}}
              ><HiMiniUser></HiMiniUser></button>
              <span class="hidden md:inline text-sm text-gray-700" onClick={()=>{LogOut()}}>Déconnexion</span>
          </div>
      </div>
            {/* mobile nav bar */}
      <nav class="md:hidden flex gap-4 mt-4 text-sm">
          <RenderMenuHorizontal menus={menus} defaultActiveItem={"Find Jobs"} tailwinddefault={"block px-3 py-2 text-gray-700 hover:text-gray-900"} tailwindActif={"border-b-2 border-gray-700"}/>
      </nav>
    
    </header>
    {changePasseWord==true ? 
      <CardChangePassWord closePopup={setChangePasseWord}></CardChangePassWord>
      : ""
    }
    {showNotification==true ? 
      <CardNotification closePopup={setShowNotification}></CardNotification>
      : ""
    }
  </>
  );
};


import React,{useState,useEffect} from 'react';
import './assets/style.css'
import { HiMiniXCircle,HiChevronRight,HiChevronLeft } from "react-icons/hi2";
import Header from './components/header/landing/Header'
// import FooterChoice from './components/footer/FooterChoice'
import { ThemeProvider } from "next-themes";
import ThemeSwitcher from "./ThemeSwitcher";
import HeroDefault from './components/hero/HeroDefault';
import CardOffremiddel from './components/card/offre/CardOffreMiddel';
import HeroOffre from './components/hero/HeroOffre';
import Landing from './pages/candidate/Landing';
import Test from './pages/Test';
import Application from './pages/candidate/application';
import LocationSelector from './components/LocationSelector';
import Inscription from './pages/candidate/Inscription';
import Listeposte from './pages/candidate/AvailableJob'
import { Routes, Route, Link } from "react-router-dom";
import AvailableJob from './pages/candidate/AvailableJob';
import Profile from './pages/candidate/Profile';
// import CardNotification from './components/card/CardNotification';
import CardNotification from './components/card/popup/CardNotification';
import Sidebar from './components/sidebar/Sidebar';
import CriterenStaff from './pages/manager/CriterienStaff';
import CardCalendar from './components/card/CardCalendar';
import Calendar from './components/card/CardCalendar';
import DashboardManager from './pages/manager/Dasboard';
function App() {
  const [theme, setTheme] = useState("light"); // "light" ou "dark"
  const [isOpen, setIsOpen] = useState(true); // "light" ou "dark"

  useEffect(() => {
    // Supprime l'ancienne classe
    document.body.classList.remove("light", "dark");
    // Ajoute la nouvelle
    document.body.classList.add(theme);
  }, [theme]);
  const showDivChangeTheme = ()=>{
    setIsOpen(!isOpen);
    console.log(isOpen)
  }
  const changeTheme =(theme)=>{
      setTheme(theme);
      setIsOpen(false);
  }
  return (
    // div qui vas contenir les theme 
    <>
      {/* {isOpen ? (
          <div className='grid grid-cols-3 absolute bottom-50 right-15 gap-1'>
            <button class="icon_carre_line_none" onClick={()=>{changeTheme("theme-blue")}}>
                  <HiMiniXCircle className='h-7 w-7'></HiMiniXCircle>
            </button>
            <button class="icon_carre_line_none" onClick={()=>{changeTheme("theme-green")}}>
                  <HiMiniXCircle className='h-7 w-7'></HiMiniXCircle>
            </button>
            <button class="icon_carre_line_none" onClick={()=>{changeTheme("theme-orange")}}>
                  <HiMiniXCircle className='h-7 w-7'></HiMiniXCircle>
            </button>
            <button class="icon_carre_line_none">
                  <HiMiniXCircle className='h-7 w-7'></HiMiniXCircle>
            </button>
            <button class="icon_carre_line_none">
                  <HiMiniXCircle className='h-7 w-7'></HiMiniXCircle>
            </button>
            <button class="icon_carre_line_none">
                  <HiMiniXCircle className='h-7 w-7'></HiMiniXCircle>
            </button>
          </div>
        ): <></>
      }
      <div className='grid grid-cols-3 absolute bottom-10 right-15 gap-1'>
        <button class="icon_carre_line_none" onClick={()=>{showDivChangeTheme()}}>
              <HiMiniXCircle className='h-7 w-7'></HiMiniXCircle>
        </button>
      </div>
      <Header></Header>
      <HeroDefault></HeroDefault>
      */}
      {/* <Landing></Landing> */}
      {/* <Test></Test> */}
      {/* <Inscription></Inscription> */}
      {/* <Application/> */}
      {/* <LocationSelector></LocationSelector> */}
      <Routes>
        <Route path="/candidate" element={ <Landing/>  } />
        <Route path="/candidate/inscription" element={<Inscription />} />
        <Route path="/candidate/application" element={<Application />} />
        <Route path="/candidate/availableposte" element={<AvailableJob />} />
        <Route path="/candidate/profile" element={<Profile />} />
        <Route path="/notification" element={<CardNotification/>}></Route>
        <Route path="/criterien" element={<CriterenStaff/>}></Route>
        <Route path="/dasboard-manager" element={<DashboardManager/>}></Route>



      </Routes>
    </>
  )
}

export default App


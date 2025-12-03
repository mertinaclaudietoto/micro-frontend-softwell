import {useState,useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import './assets/style.css'
import { 
  Application,
  AvailableJob,
  Landing,
  Profile,
  Registration,
  DashboardRh,
  ListRequeste,
  Statistique,
  StepRecruitment,
  DashboardManager,
  CriterienStaff,
  Request,
  ProfileAccess,
  Setaccess,
  UserProfile,
  DemandeTraining,
  InprogressTraining,
  Trainer,
  TrainingState
  
} from "./pages";
import {Tablesearch} from "./components"
import { ThemeProvider } from "next-themes";
import ThemeSwitcher from "./ThemeSwitcher";
// import CardNotification from './components/card/CardNotification';
import CVCandidate from './pages/manager/sous/CVcandidate';
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
        <Route path="/candidate-registration" element={<Registration />} />
        <Route path="/candidate-application" element={<Application />} />
        <Route path="/candidate-availableposte" element={<AvailableJob />} />
        <Route path="/candidate-profile" element={<Profile />} />
        {/* <Route path="/notification" element={<CardNotification/>}></Route> */}
        <Route path="/manager-criterien" element={<CriterienStaff/>}></Route>
        <Route path="/manager/dasboard" element={<DashboardManager/>}></Route>
        <Route path="/manager/listrequeste" element={<Request/>}></Route>
        <Route path="/test" element={<CVCandidate/>}></Route>
        <Route path="/rh-dasboard" element={<DashboardRh/>}></Route>
        <Route path="/rh-statistique" element={<Statistique/>}></Route>
        <Route path="/rh-listrequeste" element={<ListRequeste/>}></Route>
        <Route path="/rh-steprecruitment" element={<StepRecruitment/>}></Route>
        <Route path="/access-profile" element={<ProfileAccess/>}></Route>
        <Route path="/access-set" element={<Setaccess/>}></Route>
        <Route path="/access-user" element={<UserProfile/>}></Route>
        <Route path="/training-demande" element={<DemandeTraining/>}></Route>
        <Route path="/training-inprogress" element={<InprogressTraining/>}></Route>
        <Route path="/training-trainer" element={<Trainer/>}></Route>
        <Route path="/training-state" element={<TrainingState/>}></Route>
      </Routes>
    </>
  )
}
export default App


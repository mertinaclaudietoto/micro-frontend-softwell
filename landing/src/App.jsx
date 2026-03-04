import {useState,useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './assets/style.css'
import { CRUDIdName } from './components';
import { 
  Application,
  AvailableJob,
  Landing,
  Profile,
  Registration,
  DashboardRh,
  ListRequeste,
  Statistique,
  DashboardManager,
  Request,
  ProfileAccess,
  Setaccess,
  UserProfile,
  Theme,
  InprogressTraining,
  Trainer,
  TrainingState,
  Wish,
  Validation,
  Login,
  ProtectedRoute,
  Presence,
  Question,
  ResponsePostFormationTrainer,
  QuestionE,
  ResponsePostFormationEntreprise,
  ModelEmail
} from "./pages";
import CriterienStaff from './pages/recruitment/CriterienStaff';
import {CardLogin, Tablesearch} from "./components"
import { ThemeProvider } from "next-themes";
import ThemeSwitcher from "./ThemeSwitcher";
import StepRecruitment from './pages/recruitment/StepRecruitment';
// import CardNotification from './components/card/CardNotification';
import CVCandidate from './pages/manager/sous/CVCandidate';
import CardCriterien from './components/card/criterien/AddPost';
import AllRequeste from './pages/recruitment/AllRequeste';
import MyRequeste from './pages/recruitment/MyRequeste';
import MyValidation from './pages/recruitment/Myvalidation';
import ListCandidate from './pages/recruitment/ListCandidate';
import NoteCandidate from './pages/recruitment/NoteCandidate';
import CVCandidateGeneral from './pages/manager/sous/CVCandidateGeneral';
import StatManager from './pages/recruitment/StepStat';
import AddNewModelEmail from './components/email/AddNewModelEmail';
import EmailModel from './pages/email/EmailModel';
import { url, url_recrutement } from './data/data';
import Cost from './pages/training/statistique/Cost';
import Budget from './pages/training/statistique/Budget';
import Status from './pages/training/statistique/Status';
import CandidateStat from './pages/recruitment/statistique/CandidateStat';
import PosteSagePai from './pages/recruitment/Postesagepai';
import PlateformeRegistration from './pages/candidate/PlateformeRegistration';
import PlateformeApply from './pages/candidate/PlateformeApply';
import PostStat from './pages/recruitment/statistique/PostStat';
import CVCandidateGeneralLink from './pages/manager/sous/CVCandidateGeneralLink';
import AccueilGenerale from './pages/AccueilGenerale';
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
    <ToastContainer />
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
        <Route path="/" element={ <Login/>  } />
        {/* partie candidate */}
        <Route path="/candidate" element={ <Landing/>  } />
        <Route path="/candidate-registration" element={<Registration />} />
        <Route path="/candidate-application" element={<Application />} />
        <Route path="/candidate-availableposte" element={<ProtectedRoute><AvailableJob /></ProtectedRoute>} />
        <Route path="/candidate-profile" element={<Profile />} />

        {/* <Route path="/notification" element={<CardNotification/>}></Route> */}
        <Route path="/addpost" element={<CriterienStaff/>}></Route>
        <Route path="/manager-dasboard" element={<DashboardManager/>}></Route>
        <Route path="/manager-listrequeste" element={<Request/>}></Route>
       
        <Route path="/rh-dasboard" element={<DashboardRh/>}></Route>
        <Route path="/rh-statistique" element={<Statistique/>}></Route>
        <Route path="/rh-listrequeste" element={<ListRequeste/>}></Route>

        <Route path="/access-profile" element={<ProtectedRoute> <ProfileAccess/> </ProtectedRoute>}></Route>
        <Route path="/access-set" element={<ProtectedRoute> <Setaccess/> </ProtectedRoute>}></Route>
        <Route path="/access-user" element={<ProtectedRoute> <UserProfile/> </ProtectedRoute>}></Route>
        <Route path="/training-theme" element={<ProtectedRoute> <Theme/> </ProtectedRoute>}></Route>
        {/* <Route path="/training-inprogress" element={<InprogressTraining/>}></Route> */}
        <Route path="/training-trainer" element={<ProtectedRoute><Trainer/></ProtectedRoute>}></Route>
        <Route path="/training-wish" element={<ProtectedRoute><Wish/> </ProtectedRoute>}></Route>
        <Route path="/training-validation" element={ <ProtectedRoute><Validation/></ProtectedRoute>}></Route>
        <Route path="/training-state/:id" element={ <ProtectedRoute><TrainingState /> </ProtectedRoute>} />
        <Route path="/training-modelemail" element={ <ProtectedRoute><ModelEmail /> </ProtectedRoute>} />

        <Route path="/crud-civility" element={ <CRUDIdName key={1} entityName={"civility"} Name={"Civilitee"} urlApplication={url_recrutement}  nameAccess={"infoentreprise"}/> } />
        <Route path="/crud-plateforme" element={ <CRUDIdName key={1} entityName={"plateforme"} Name={"Plateforme"} urlApplication={url_recrutement} nameAccess={"infoselectionrecruitment"} /> } />
        <Route path="/crud-localisation" element={ <CRUDIdName key={2} entityName={"localisation"} Name={"Localisation"} urlApplication={url_recrutement} nameAccess={"infoentreprise"} /> } />
        <Route path="/crud-yearofexperience" element={ <CRUDIdName key={3} entityName={"yearsofexperience"} Name={"Annee d'experience"}  urlApplication={url_recrutement}  nameAccess={"infoselectionrecruitment"}/> } />
        <Route path="/crud-certification" element={ <CRUDIdName key={4} entityName={"certification"} Name={"Certification"} urlApplication={url_recrutement} nameAccess={"infoselectionrecruitment"}/> } />
        <Route path="/crud-diplome" element={ <CRUDIdName key={5} entityName={"diplome"} Name={"Diplome"}  urlApplication={url_recrutement} nameAccess={"infoselectionrecruitment"}/> } />
        <Route path="/crud-hardskill" element={ <CRUDIdName key={6} entityName={"hardSkill"} Name={"Hard Skill"} urlApplication={url_recrutement} nameAccess={"infoselectionrecruitment"}/> } />
        <Route path="/crud-Language" element={ <CRUDIdName key={7} entityName={"language"} Name={"Hard Skill"}  urlApplication={url_recrutement}  nameAccess={"infoselectionrecruitment"}/> } />
        <Route path="/crud-mandatory" element={ <CRUDIdName key={8} entityName={"mandatory"} Name={"Obligatoire Status"} urlApplication={url_recrutement}  nameAccess={"infoselectionrecruitment"}/> } />
        <Route path="/crud-softskill" element={ <CRUDIdName key={9} entityName={"softskill"} Name={"Soft Skill"} urlApplication={url_recrutement}  nameAccess={"infoselectionrecruitment"}/> } />
        <Route path="/crud-contrat" element={ <CRUDIdName key={10} entityName={"typecontrat"} Name={"Type Contrat"} urlApplication={url_recrutement} nameAccess={"infoselectionrecruitment"}/> } />
        <Route path="/crud-genre" element={ <CRUDIdName key={11} entityName={"genre"} Name={"Genre"} urlApplication={url_recrutement} nameAccess={"infoselectionrecruitment"}/> } />
        <Route path="/crud-localisation_candidate" element={ <CRUDIdName key={12} entityName={"localisation_candidate"} Name={"Localisation des candidates"} urlApplication={url_recrutement}  nameAccess={"infoselectionrecruitment"}/> } />

        <Route path="/crud-wishtype" element={ <CRUDIdName key={15} entityName={"wish_type"} Name={"Type de souhait"} urlApplication={url} nameAccess={"infog_formation"}/> } />


        <Route path="/crud-university" element={ <CRUDIdName key={13} entityName={"university"} Name={"Etablisement d'origine"} urlApplication={url_recrutement}  nameAccess={"infoselectionrecruitment"}/> } />
        <Route path="/crud-typeexperience" element={ <CRUDIdName key={14} entityName={"typeexperience"} Name={"Type d'experience "}  urlApplication={url_recrutement} nameAccess={"infoselectionrecruitment"}/> } />
       
        <Route path="/crud-steprecruitment" element={ <StepRecruitment /> } />


        {/* <Route path="/test" element={ <CardCriterien /> } /> */}
        <Route path="/allrequest" element={ <AllRequeste /> } />
        <Route path="/myrequest" element={ <MyRequeste /> } />
        <Route path="/myvalidation" element={ <MyValidation /> } />

        <Route path="/listecandidate" element={ <ListCandidate /> } />
        <Route path="/infocandidate/:id/:idrequest/:idpost/:rang/:idstep/:email" element={<CVCandidate />} />
        <Route path="/infocandidateGenerale/:id" element={<CVCandidateGeneral />} />

        <Route path="/infocandidateGeneralelink/:encryptParametres" element={<CVCandidateGeneralLink />} />
        <Route path="/stat-manager/:idrequest" element={<StatManager />} />
        {/* <Route path="/postulants/:idrequest/:idpost/:idstep/:rang/:email" element={ <ProtectedRoute><NoteCandidate /> </ProtectedRoute>} /> */}
        {/* gestion email */}
        <Route path="/email" element={ <EmailModel/>   } />
        <Route path="/presence/:encryptParametres" element={ <Presence/>   } />
        <Route path="/questionnaire/:encryptParametres" element={ <Question/>   } />
        {/* Test de post-formation : questions élaborées par le formateur */}
        <Route path="/test-postformation-f/:encryptParametres" element={ <ResponsePostFormationTrainer/>   } />
        <Route path="/test-postformation-e/:encryptParametres" element={ <ResponsePostFormationEntreprise/>   } />

        <Route path="/question-post-formation-entreprise" element={ <QuestionE/>   } />
        <Route path="/stat-cost" element={ <Cost/>   } />
        <Route path="/stat-budget" element={ <Budget/>   } />
        <Route path="/stat-status" element={ <Status/>   } />
        {/* statistique  recruitement */}
        <Route path="/stat-candidate" element={ <CandidateStat/>   } />
        <Route path="/stat-post" element={ <PostStat/>   } />


        <Route path="/rh-postsagepai" element={ <PosteSagePai/>   } />

        {/* lien recrutement par plateforme */}
        <Route path="/apply-registration/:encryptParametres" element={ <PlateformeRegistration/>   } />
        <Route path="/apply-by-plateforme/:encryptParametres" element={ <PlateformeApply/>   } />

        <Route path="/accueil" element={ <AccueilGenerale/>   } />

      </Routes>
    </>
  )
}
export default App


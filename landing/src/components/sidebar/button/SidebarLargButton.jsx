
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function SidebarLargButton({ link, icone, label, actif, subItems ,accesValue}) {
  const acces = sessionStorage.getItem("access");
  // console.log(label);
  const accesObj = JSON.parse(acces);
  // console.log(accesObj);
  // const accesObj = {
  //   "infoentreprise": {
  //     "lecture": true,
  //     "ajout": true,
  //     "suppression": true,
  //     "modification": true
  //   },
  //    "infoselectionrecruitment": {
  //     "lecture": true,
  //     "ajout": true,
  //     "suppression": true,
  //     "modification": true
  //   },
  //    "alldemande": {
  //     "lecture": true,
  //     "ajout": true,
  //     "suppression": true,
  //     "modification": true
  //   },
  //    "validepost": {
  //     "lecture": true,
  //     "ajout": true,
  //     "suppression": true,
  //     "modification": true
  //   },
  //    "demandepost": {
  //     "lecture": true,
  //     "ajout": true,
  //     "suppression": true,
  //     "modification": true
  //   },
  //    "post": {
  //     "lecture": true,
  //     "ajout": true,
  //     "suppression": true,
  //     "modification": true
  //   },
  //   //recruitment
  //   "theme": {
  //     "lecture": true,
  //     "ajout": true,
  //     "suppression": true,
  //     "modification": true
  //   },
  //   "trainer": {
  //     "lecture": true,
  //     "ajout": true,
  //     "suppression": true,
  //     "modification": true
  //   },
  //   "wish": {
  //     "lecture": true,
  //     "ajout": true,
  //     "suppression": true,
  //     "modification": true
  //   },
  //   "validation": {
  //     "lecture": true,
  //     "ajout": true,
  //     "suppression": true,
  //     "modification": true
  //   },
  //   "profile": {
  //     "lecture": true,
  //     "ajout": true,
  //     "suppression": true,
  //     "modification": true
  //   },
  //   "compte": {
  //     "lecture": true,
  //     "ajout": true,
  //     "suppression": true,
  //     "modification": true
  //   },
  //    "criterien": {
  //     "lecture": true,
  //     "ajout": true,
  //     "suppression": true,
  //     "modification": true
  //   },
  //    "requete": {
  //     "lecture": true,
  //     "ajout": true,
  //     "suppression": true,
  //     "modification": true
  //   },
  //    "mdasboard": {
  //     "lecture": true,
  //     "ajout": true,
  //     "suppression": true,
  //     "modification": true
  //   }
  // };

  const [isOpen, setIsOpen] = useState(false);
  if (subItems) {
    return (<>{ (accesObj[accesValue]?.lecture ?? false) === true ? (
                <>
                  <div className="mb-2">
                    <button 
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition"
                    >
                      <div className="flex items-center  gap-3">
                        <i className={icone}></i>
                        <span className="text-base">{label}</span>
                      </div>
                      <i className={`fas fa-chevron-down text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}></i>
                    </button>
                    
                    {/* Dropdown */}
                    <div className={`ml-8 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      {subItems.map((subItem, index) => (
                        <Link key={index} to={subItem.link}>
                          <button className={`card-icone-text ${subItem.actif ? "bg-gray-50 text-gray-900 hover:bg-gray-100" : "text-gray-600 hover:bg-gray-50"}`}>
                            <i className={subItem.icone}></i>
                            <span className="font-medium text-sm">{subItem.label}</span>
                          </button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>): null }
            </>
    );
  }
  return (
   <>
      { (accesObj[accesValue]?.lecture ?? false) === true ? (
        <Link to={link}>
          <button className={`card-icone-text ${actif ? "bg-gray-50 text-gray-900 hover:bg-gray-100" : "text-gray-600 hover:bg-gray-50"}`}>
            <i className={`${icone} text-base`}></i>
            <span className="text-base">{label}</span>
          </button>
        </Link>
      ) : null }
    </>

  );
}
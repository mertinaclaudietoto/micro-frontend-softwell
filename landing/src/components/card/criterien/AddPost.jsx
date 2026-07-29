//modification
import { useEffect, useState } from "react";
import TextState from "../../state/TextState";
import CardDemandeStaff from "../popup/CardDemandeStaff";
import CardModifCriterien from "../popup/CardModifCriterien";
import Delete from "../popup/Delete";
import { url_recrutement } from "../../../data/data";
import { getData, send } from "../../../function/Axios";
import Select from "../../../function/selectSimple";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const mapSkillItems = (items, idKey) =>
    items.map((item) => ({
        [idKey]: item[idKey],
        idMandatory: item.idMandatory,
    }));

const buildPostPayload = (form) => ({
    nom: form.nom?.trim() ?? "",
    goals: form.goals?.trim() ?? "",
    mission: form.mission?.trim() ?? "",
    idContrat: form.idContrat ?? null,
    idLocalisation: form.idLocalisation ?? null,
    idYearLeft: form.idYearLeft ?? null,
    idYearRight: form.idYearRight ?? null,
    idpostsage: form.idpostsage ?? null,
    salary: form.salary !== "" && form.salary != null ? Number(form.salary) : null,
    softSkills: mapSkillItems(form.softSkills ?? [], "idSoftSkill"),
    hardSkills: mapSkillItems(form.hardSkills ?? [], "idHardSkill"),
    languages: mapSkillItems(form.languages ?? [], "idLanguage"),
    diplomes: (form.diplomes ?? []).map((d) => ({
        idDiplome: d.idDiplome,
        idMandatory: d.idMandatory,
    })),
    certifications: (form.certifications ?? [])
        .filter((c) => c.idCertification != null && c.idMandatory != null)
        .map((c) => ({
            idCertification: c.idCertification,
            idMandatory: c.idMandatory,
        })),
});

export default function AddPost({ close, onSuccess }) {
    const [value, setValue] = useState({
        nom: "",
        goals: "",
        mission: "",
        idContrat: null,
        salary:0,
        idLocalisation: null,
        idYearLeft: null,
        idYearRight: null,
        idpostsage: null,
        softSkills: [],
        hardSkills: [],
        languages: [],
        diplomes: [],
        certifications: [],
    });
    const handlerChangeTable = (name, value, index = null) => {
        setValue((previous) => {
            const currentArray = Array.isArray(previous[name]) ? previous[name] : [];
            if (index !== null) {
                const newArray = currentArray.filter((_, i) => i !== index);
                return {
                    ...previous,
                    [name]: newArray,
                };
            }
         return {
                ...previous,
                [name]: [...currentArray, value],
            };
        });
    };
    const [listPoste,setListPoste]=useState();
    const getListPoste = async () => {
        const response = await getData(url_recrutement + "tpostes");
        if (response.data != null) {
            setListPoste(
                response.data.map((p) => ({
                    ...p,
                    id: p.idPoste ?? p.id,
                    intitule: p.intitule ?? p.Intitule ?? "",
                }))
            );
        }
    };
    const handlerListPost = (opt) => {
        if (opt != null) {
            handlerVariable("idpostsage", opt.idPoste ?? opt.id, setValue);
        }
    };
    const [listContrat,setListContrat]=useState([])
    const getListContrat = async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `typecontrat`
        );
        if(datalistThemes.data!=null)
            setListContrat(datalistThemes.data)
    }
    const [listYearOfexperience,setListYearOfexperience]=useState([])
    const getYearOfexperience = async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `yearsofexperience`
        );
        if(datalistThemes.data!=null)
            setListYearOfexperience(datalistThemes.data)
    }
     const handlerYearLeft =(opt) =>{
        if (opt != null) handlerVariable("idYearLeft", opt.id, setValue);
    }
    const handlerYearRight =(opt) =>{
        if (opt != null) handlerVariable("idYearRight", opt.id, setValue);
    }

    const [listLocalisation,setListlocalisation]=useState([])
    const getListLocalisation = async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `localisation`
        );
        if(datalistThemes.data!=null)
            setListlocalisation(datalistThemes.data)
    }

    const [listMandatory,setListMandatory]=useState([])
    const getListMandatory = async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `mandatory`
        );
        if(datalistThemes.data!=null)
            setListMandatory(datalistThemes.data)
    }

   

    const[valueDiplome,setValueDiplome]=useState({
      idDiplome: null,
      idMandatory: null,
      nameDiplome:"",
      nameMandatory:"",
    })
    const [listDiplome,setListDiplome]=useState([])
    const getListDiplome= async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `diplome`
        );
        if(datalistThemes.data!=null)
            setListDiplome(datalistThemes.data)
    }

    const handlerDiplome =(opt) =>{
        if(opt!=null){
            handlerVariable("idDiplome", opt.id,setValueDiplome);
            handlerVariable("nameDiplome", opt.name,setValueDiplome);
        }
       
    }
    const handlerMandatoryD =(opt) =>{
        if(opt!=null){
            handlerVariable("idMandatory", opt.id,setValueDiplome);
            handlerVariable("nameMandatory", opt.name,setValueDiplome);
        } 
    }
    //soft skill 
    const [listSoftSkill,setListSoftSkill ]=useState([])
    const getListSoftSkill = async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `softskill`
        );
        if(datalistThemes.data!=null)
            setListSoftSkill(datalistThemes.data)
    }
  
    const[valueSoftSkill,setValueSoftSkill]=useState({
      idSoftSkill: null,
      idMandatory: null,
      nameS:"",
      nameM:"",
    })
     const handlerSoftSkill =(opt) =>{
        if(opt!=null){
            handlerVariable("idSoftSkill", opt.id,setValueSoftSkill);
            handlerVariable("nameS", opt.name,setValueSoftSkill);
        }
    }
    const handlerMandatoryS=(opt) =>{
        if(opt!=null){
            handlerVariable("idMandatory", opt.id,setValueSoftSkill);
            handlerVariable("nameM", opt.name,setValueSoftSkill);
        }
        
    }
    ///hard skill
    const [listHardSkill ,setListHardSkill ]=useState([])
    const getListHardSkill = async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `hardskill`
        );
        if(datalistThemes.data!=null)
            setListHardSkill (datalistThemes.data)
    }
    const[valueHardSkill,setValueHardSkill]=useState({
      idHardSkill: null,
      idMandatory: null,
      nameS:"",
      nameM:"",
    })
    const handlerHardSkill =(opt) =>{
        if (opt != null) {
            handlerVariable("idHardSkill", opt.id, setValueHardSkill);
            handlerVariable("nameS", opt.name, setValueHardSkill);
        }
    }
    const handlerMandatoryH=(opt) =>{
        if (opt != null) {
            handlerVariable("idMandatory", opt.id, setValueHardSkill);
            handlerVariable("nameM", opt.name, setValueHardSkill);
        }
    }
    //language
    const [listLanguage,setListLanguage]=useState([])
    const getListLanguage = async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `language`
        );
        if(datalistThemes.data!=null)
            setListLanguage(datalistThemes.data)
    }
    const[valueLanguage,setValueLanguage]=useState({
      idLanguage: null,
      idMandatory: null,
      nameS:"",
      nameM:"",
    })
    const handlerLanguage =(opt) =>{
        if(opt!=null){
            handlerVariable("idLanguage", opt.id,setValueLanguage);
            handlerVariable("nameS", opt.name,setValueLanguage);
        }
       
    }
    const handlerMandatoryL=(opt) =>{
        if(opt!=null){
            handlerVariable("idMandatory", opt.id,setValueLanguage);
            handlerVariable("nameM", opt.name,setValueLanguage);
        }
    }

    ///certification 
    const [listCertification,setListCertification]=useState([])
    const getListCertification = async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `certification`
        );
        if(datalistThemes.data!=null)
            setListCertification(datalistThemes.data)
    }
    const[valueCertification,setValueCertification]=useState({
      idCertification: null,
      idMandatory: null,
      nameS:"",
      nameM:"",
    })
    const handlerCertification =(opt) =>{
        if (opt != null) {
            handlerVariable("idCertification", opt.id, setValueCertification);
            handlerVariable("nameS", opt.name, setValueCertification);
        }
    }
    const handlerMandatoryC=(opt) =>{
        if (opt != null) {
            handlerVariable("idMandatory", opt.id, setValueCertification);
            handlerVariable("nameM", opt.name, setValueCertification);
        }
    }
    const handlerLocalisation =(opt) =>{
        if (opt != null) handlerVariable("idLocalisation", opt.id, setValue);
    }
     const handlerContrat =(opt) =>{
        if (opt != null) handlerVariable("idContrat", opt.id, setValue);
    }

    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const addCriteriaItem = (field, item, idKey, label) => {
        if (item[idKey] == null || item.idMandatory == null) {
            toast.warning(`Sélectionnez un élément et son caractère obligatoire pour : ${label}.`);
            return;
        }
        handlerChangeTable(field, item, null);
    };

    const validateForm = () => {
        if (!value.nom?.trim()) {
            toast.warning("Le titre de l'offre est obligatoire.");
            return false;
        }
        if (!value.mission?.trim()) {
            toast.warning("La mission est obligatoire.");
            return false;
        }
        if (!value.goals?.trim()) {
            toast.warning("L'objectif est obligatoire.");
            return false;
        }
        if (!value.idContrat) {
            toast.warning("Sélectionnez un type de contrat.");
            return false;
        }
        if (!value.idLocalisation) {
            toast.warning("Sélectionnez une localisation.");
            return false;
        }
        return true;
    };

    const submit = async () => {
        if (!validateForm()) return;
        const payload = buildPostPayload(value);
        const data = await send(payload, url_recrutement + "post");
        if (data === true) {
            toast.success("Données enregistrées avec succès !");
            onSuccess?.();
            close(false);
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    };
    useEffect(() => {
        getListContrat();
        getListLocalisation();
        getListMandatory();
        getListDiplome();
        getListHardSkill();
        getListSoftSkill();
        getListLanguage();
        getListCertification();
        getYearOfexperience();
        getListPoste();
        }, []);
    return (
        <>
        <div class="fixed z-100 inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
               
        <div className="h-[900px] overflow-y-auto">
            <div className=" flex justify-center items-center p-8   ">
                <div class=" relative w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
                     <button
                    type="button"
                    onClick={() => close(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                    aria-label="Fermer"
                >
                <i className="fas fa-times text-xl"></i>
                </button>
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">
                    Ajout post
                </h2>

                <div class="space-y-6">
                <div class="my-2">
                    <div class="w-100">
                        <label className="label-formulaire mt-2 mb-1">Post Sage Paie</label>
                        <Select options={listPoste} placeholder="..." onChange={handlerListPost} nameIteme="intitule"  value={false}/>
                    </div>
                </div>
                <div className="my-2">
                    <label className=" label-formulaire">Titre de l'offre</label>
                    <input 
                        type="text" 
                        placeholder="Saisir le titre" 
                        className="input_singup text-gray-400"
                        value={value.nom}
                        onChange={(event) => handlerVariable("nom", event.target.value,setValue)}
                    />
                </div>
                <div className="my-2">
                    <label className="label-formulaire">Mission</label>
                    <textarea 
                        type="text" 
                        placeholder="Décrire la mission" 
                        className="input_singup text-gray-400"
                        value={value.mission}
                        onChange={(event) => handlerVariable("mission", event.target.value,setValue)}
                    />
                </div>

                <div className="my-2">
                    <label className="label-formulaire mt-2">Objectif</label>
                    <textarea
                        type="text" 
                        placeholder="Décrire l'objectif" 
                        className="input_singup text-gray-400"
                        value={value.goals}
                        onChange={(event) => handlerVariable("goals", event.target.value,setValue)}
                    />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 mb-8">
                    <div>
                        <label className="label-formulaire mt-2 mb-1">Contrat</label>
                        <Select options={listContrat} placeholder="Type de contrat" onChange={handlerContrat} />
                    </div>
                    <div>
                        <label className=" mt-2 mb-1 label-formulaire">Localisation</label>
                        <Select options={listLocalisation} placeholder="Localisation" onChange={handlerLocalisation} />
                    </div>
                </div>
                {/* <div className="my-2">
                    <label className="label-formulaire">Salaire (Ar)</label>
                    <input
                        type="number"
                        min="0"
                        placeholder="Montant du salaire"
                        className="input_singup text-gray-700"
                        value={value.salary}
                        onChange={(event) => handlerVariable("salary", event.target.value, setValue)}
                    />
                </div> */}
                <label className="label-formulaire mt-2 mb-1">Années d'expérience entre </label>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 mb-8">
                    <div>
                        <label className="label-formulaire mt-2 mb-1">A</label>
                        <Select options={listYearOfexperience} onChange={handlerYearLeft} />
                    </div>
                    <div>
                        <label className=" mt-2 mb-1 label-formulaire">B</label>
                        <Select options={listYearOfexperience} onChange={handlerYearRight} />
                    </div>
                </div>

                <label className=" mt-2 mb-1 label-formulaire">Diplôme</label>
                <div className="bg-gray-50 p-2 rounded">
                    <div className="flex  justify-between gap-2 ">
                        <div>
                            <label className="label-formulaire mt-2 mb-1">Diplôme</label>
                            <Select options={listDiplome} onChange={handlerDiplome} />
                        </div>
                        <div>
                            <label className="label-formulaire mt-2 mb-1">Obligatoire</label>
                            <Select options={listMandatory} onChange={handlerMandatoryD} />
                        </div>
                        <div className="mt-10">
                            <button type="button" onClick={(event) => {event.preventDefault(); addCriteriaItem("diplomes", valueDiplome, "idDiplome", "diplôme");}} class="btn-neutre-gray">
                                    <i class="fa-regular fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="tasksList" class="space-y-4 ">
                    <table class="w-full">
                    <thead class="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th class="tr-thead ">Diplôme</th>
                            <th class="tr-thead">Obligatoire ?</th>
                            <th class="tr-thead w-8"></th>
                            <th class="tr-thead "></th>
                        </tr>
                    </thead>
                    
                {value.diplomes.map((v,k)=>(
                    <tr index={k}>
                        <td class="px-6 py-4">{v.nameDiplome}</td>
                        <td class="px-6 py-4">{v.nameMandatory}</td>
                        <td>
                            <button type="button" onClick={() => {handlerChangeTable("diplomes", null, k)}} class="btn-neutre-gray">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </td>
                    </tr>
                ))}
                </table>
            </div>
            {/* certification */}
            <label className=" mt-2 mb-1 label-formulaire">Certification</label>
                <div className="bg-gray-50 p-2 rounded">
                    <div className="flex  justify-between gap-2 ">
                        <div>
                            <label className="label-formulaire mt-2 mb-1">Certification</label>
                            <Select options={listCertification} onChange={handlerCertification} />
                        </div>
                        <div>
                            <label className="label-formulaire mt-2 mb-1">Obligatoire</label>
                            <Select options={listMandatory} onChange={handlerMandatoryC} />
                        </div>
                        <div className="mt-10">
                            <button type="button" onClick={(event) => {event.preventDefault(); addCriteriaItem("certifications", valueCertification, "idCertification", "certification");}} class="btn-neutre-gray">
                                    <i class="fa-regular fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="tasksList" class="space-y-4 ">
                    <table class="w-full">
                    <thead class="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th class="tr-thead ">Certification</th>
                            <th class="tr-thead">Obligatoire ?</th>
                            <th class="tr-thead w-8"></th>
                        </tr>
                    </thead>
                    
                {value.certifications.map((v,k)=>(
                    <tr key={k}>
                        <td class="px-6 py-4">{v.nameS}</td>
                        <td class="px-6 py-4">{v.nameM}</td>
                        <td>
                            <button type="button" onClick={() => {handlerChangeTable("certifications", null, k)}} class="btn-neutre-gray">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </td>
                    </tr>
                ))}
                </table>
            </div>

            {/* soft skill */}
            <label className=" mt-2 mb-1 label-formulaire">Soft Skill</label>
                <div className="bg-gray-50 p-2 rounded">
                    <div className="flex  justify-between gap-2 ">
                        <div>
                            <label className="label-formulaire mt-2 mb-1">skill</label>
                            <Select options={listSoftSkill} onChange={handlerSoftSkill} />
                        </div>
                        <div>
                            <label className="label-formulaire mt-2 mb-1">Obligatoire</label>
                            <Select options={listMandatory} onChange={handlerMandatoryS} />
                        </div>
                        <div className="mt-10">
                            <button type="button" onClick={(event) => {event.preventDefault(); addCriteriaItem("softSkills", valueSoftSkill, "idSoftSkill", "soft skill");}} class="btn-neutre-gray">
                                    <i class="fa-regular fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="tasksList" class="space-y-4 ">
                    <table class="w-full">
                    <thead class="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th class="tr-thead ">Skill</th>
                            <th class="tr-thead">Obligatoire ?</th>
                            <th class="tr-thead w-8"></th>
                            <th class="tr-thead "></th>
                        </tr>
                    </thead>
                    
                {value.softSkills.map((v,k)=>(
                    <tr index={k}>
                        <td class="px-6 py-4">{v.nameS}</td>
                        <td class="px-6 py-4">{v.nameM}</td>
                        <td>
                            <button  onClick={(event) => {event.preventDefault(); handlerChangeTable("softSkills",valueSoftSkill,k)}} class="btn-neutre-gray">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </td>
                    </tr>
                ))}
                </table>
            </div>
            {/* hard skill */}
                <label className=" mt-2 mb-1 label-formulaire">Hard Skill</label>
                <div className="bg-gray-50 p-2 rounded">
                    <div className="flex  justify-between gap-2 ">
                        <div>
                            <label className="label-formulaire mt-2 mb-1">skill</label>
                            <Select options={listHardSkill} onChange={handlerHardSkill} />
                        </div>
                        <div>
                            <label className="label-formulaire mt-2 mb-1">Obligatoire</label>
                            <Select options={listMandatory} onChange={handlerMandatoryH} />
                        </div>
                        <div className="mt-10">
                            <button type="button" onClick={(event) => {event.preventDefault(); addCriteriaItem("hardSkills", valueHardSkill, "idHardSkill", "hard skill");}} class="btn-neutre-gray">
                                    <i class="fa-regular fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="tasksList" class="space-y-4 ">
                    <table class="w-full">
                    <thead class="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th class="tr-thead ">Skill</th>
                            <th class="tr-thead">Obligatoire ?</th>
                            <th class="tr-thead w-8"></th>
                            <th class="tr-thead "></th>
                        </tr>
                    </thead>
                    
                {value.hardSkills.map((v,k)=>(
                    <tr index={k}>
                        <td class="px-6 py-4">{v.nameS}</td>
                        <td class="px-6 py-4">{v.nameM}</td>
                        <td>
                            <button type="button" onClick={(event) => {event.preventDefault(); handlerChangeTable("hardSkills", null, k)}} class="btn-neutre-gray">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </td>
                    </tr>
                ))}
                </table>
            </div>
            {/* language */}
            <label className="mt-2 mb-1 label-formulaire">Langue</label>
                <div className="bg-gray-50 p-2 rounded">
                    <div className="flex  justify-between gap-2 ">
                        <div>
                            <label className="label-formulaire mt-2 mb-1">Langue</label>
                            <Select options={listLanguage} onChange={handlerLanguage} />
                        </div>
                        <div>
                            <label className="label-formulaire mt-2 mb-1">Obligatoire?</label>
                            <Select options={listMandatory} onChange={handlerMandatoryL} />
                        </div>
                        <div className="mt-10">
                            <button type="button" onClick={(event) => {event.preventDefault(); addCriteriaItem("languages", valueLanguage, "idLanguage", "langue");}} class="btn-neutre-gray">
                                    <i class="fa-regular fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="tasksList" class="space-y-4 ">
                    <table class="w-full">
                    <thead class="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th class="tr-thead ">Skill</th>
                            <th class="tr-thead">Obligatoire ?</th>
                            <th class="tr-thead w-8"></th>
                            <th class="tr-thead "></th>
                        </tr>
                    </thead>
                    
                {value.languages.map((v,k)=>(
                    <tr index={k}>
                        <td class="px-6 py-4">{v.nameS}</td>
                        <td class="px-6 py-4">{v.nameM}</td>
                        <td>
                            <button  onClick={(event) => {event.preventDefault(); handlerChangeTable("languages",valueLanguage,k)}} class="btn-neutre-gray">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </td>
                    </tr>
                ))}
                </table>
            </div>

            <div class="flex justify-end gap-4 pt-4">
                <button type="button"
                class="btn-neutre-gray"
                onClick={() => close(false)}>
                Annuler
                </button>
                <button type="button" onClick={()=>{submit()}} class="btn-action">
                Enregistrer 
                </button>
            </div>

                </div>
            </div>
            </div>
        </div>
             
    </div>
          
            
        </>
       
    )
}
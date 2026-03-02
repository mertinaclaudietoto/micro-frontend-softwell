//modification
import { useEffect, useState } from "react";
import TextState from "../../state/TextState";
import CardDemandeStaff from "../popup/CardDemandeStaff";
import CardModifCriterien from "../popup/CardModifCriterien";
import Delete from "../popup/Delete";
import { url_recrutement } from "../../../data/data";
import { deletev, getData,  update } from "../../../function/Axios";
import Select from "../../../function/selectSimple";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function UpdatePost({close,id,valueUp}){
    const [value, setValue] = useState({
        nom: "Développeur Full Stack",
        goals: "Développer et maintenir des applications web performantes",
        mission: "Concevoir, développer et déployer des solutions web modernes",
        idContrat: 1,
        salary: 2500000.0,
        idLocalisation: 2,
        softSkills: [],
        hardSkills: [],
        languages: [],
        diplomes: [],
        certifications: [],
});
const [nameLocalisation,setNameLocalisation] =useState(null);
const [nameContrat,setContrat] =useState(null);
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

     const [listYearOfexperience,setListYearOfexperience]=useState([])
    const getYearOfexperience = async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `yearsofexperience`
        );
        if(datalistThemes.data!=null)
            setListYearOfexperience(datalistThemes.data)
    }
     const handlerYearLeft =(opt) =>{
        console.log(opt)
        handlerVariable("idYearLeft", opt.id,setValue);
        // handlerVariable("nameTheme", opt.name,setPrice)
    }
    const handlerYearRight =(opt) =>{
        console.log(opt)
        handlerVariable("idYearRight", opt.id,setValue);
        // handlerVariable("nameTheme", opt.name,setPrice)
    }
    const [listContrat,setListContrat]=useState([])
    const getListContrat = async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `typecontrat`
        );
        if(datalistThemes.data!=null){
            setListContrat(datalistThemes.data)
            setContrat(datalistThemes.data.find(c => c.id === value.idContrat));
        }
    }
     const getPostById = async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `post/${id}`
        );
        if(datalistThemes.data!=null){
            setValue(datalistThemes.data);

        }
            
    }

    const [listLocalisation,setListlocalisation]=useState([])
    const getListLocalisation = async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `localisation`
        );
        if(datalistThemes.data!=null){
            setListlocalisation(datalistThemes.data);
            setNameLocalisation(datalistThemes.data.find(c => c.id === value.idLocalisation));
        }
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
      idDiplome: 1,
      idMandatory: 2,
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
        console.log(opt)
        handlerVariable("idDiplome", opt.id,setValueDiplome);
        handlerVariable("nameDiplome", opt.name,setValueDiplome);
    }
    const handlerMandatoryD =(opt) =>{
        console.log(opt)
        handlerVariable("idMandatory", opt.id,setValueDiplome);
        handlerVariable("nameMandatory", opt.name,setValueDiplome);
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
      idSoftSkill: 1,
      idMandatory: 2,
      nameS:"",
      nameM:"",
    })
     const handlerSoftSkill =(opt) =>{
        console.log(opt)
        handlerVariable("idSoftSkill", opt.id,setValueSoftSkill);
        handlerVariable("nameS", opt.name,setValueSoftSkill);
    }
    const handlerMandatoryS=(opt) =>{
        console.log(opt)
        handlerVariable("idMandatory", opt.id,setValueSoftSkill);
        handlerVariable("nameM", opt.name,setValueSoftSkill);
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
      idHardSkill: 1,
      idMandatory: 2,
      nameS:"",
      nameM:"",
    })
    const handlerHardSkill =(opt) =>{
        console.log(opt)
        handlerVariable("idHardSkill", opt.id,setValueHardSkill);
        handlerVariable("nameS", opt.name,setValueHardSkill);
    }
    const handlerMandatoryH=(opt) =>{
        console.log(opt)
        handlerVariable("idMandatory", opt.id,setValueHardSkill);
        handlerVariable("nameM", opt.name,setValueHardSkill);
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
      idLanguage: 1,
      idMandatory: 2,
      nameS:"",
      nameM:"",
    })
    const handlerLanguage =(opt) =>{
        console.log(opt)
        handlerVariable("idLanguage", opt.id,setValueLanguage);
        handlerVariable("nameS", opt.name,setValueLanguage);
    }
    const handlerMandatoryL=(opt) =>{
        console.log(opt)
        handlerVariable("idMandatory", opt.id,setValueLanguage);
        handlerVariable("nameM", opt.name,setValueLanguage);
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
        console.log(opt)
        handlerVariable("idCertification", opt.id,setValueCertification);
        handlerVariable("nameS", opt.name,setValueCertification);
    }
    const handlerMandatoryC=(opt) =>{
        console.log(opt)
        handlerVariable("idMandatory", opt.id,setValueCertification);
        handlerVariable("nameM", opt.name,setValueCertification);
    }
    const handlerLocalisation =(opt) =>{
        console.log(opt)
        handlerVariable("idLocalisation", opt.id,setValue);
        // handlerVariable("nameTheme", opt.name,setPrice)
    }
     const handlerContrat =(opt) =>{
        console.log(opt)
        handlerVariable("idContrat", opt.id,setValue);
        // handlerVariable("nameTheme", opt.name,setPrice)
    }

    
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const submit = async ()=>{
        const data = await update(value,url_recrutement + "post")
        // console.log(value)
        if (data == true) {
            toast.success("Données insérées avec succès !");
            close(false);
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    }
    const deletePost = async ()=>{
        const data = await deletev(value,url_recrutement + "post")
        // console.log(value)
        if (data == true) {
            toast.success("Données insérées avec succès !");
            close(false);
            window.onload = function() {
                console.log("Page chargée après insertion !");
            };
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    }
    const [listPoste,setListPoste]=useState();
    const getListPoste = async ()=>{
        const datalistThemes =  await getData(
            url_recrutement + `tpostes`
        );
        if(datalistThemes.data!=null)
            setListPoste(datalistThemes.data)
    }
    const handlerListPost =(opt) =>{
        if(opt !=null){
            handlerVariable("idpostsage", opt.id,setValue);
        }
    }
    useEffect(() => {
        getListContrat();
        getListLocalisation();
        getListMandatory();
        getListDiplome();
        getListHardSkill();
        getListSoftSkill();
        getListLanguage();
        getListCertification();
        getPostById();
        getListPoste();

    }, []);
    return (
        <>
        <div class="fixed z-100 inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
               
        <div className="h-[900px] overflow-y-auto">
            <div className=" flex justify-center items-center p-8   ">
               

                <div class=" relative w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
                     <button
                    onClick={() => close()}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                    aria-label="Fermer"
                >
                <i className="fas fa-times text-xl"></i>
                </button>
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">
                    Modifiee post
                </h2>

                <div class="space-y-6">

                    <div class="my-2">
                        <div class="w-100">
                            <label className="label-formulaire mt-2 mb-1">Post sage</label>
                            <Select options={listPoste} placeholder={
                                                            listPoste?.find(p => p.idPoste === valueUp.idpostsage)?.Intitule || ""
                                                        } 
                                    onChange={handlerListPost} nameIteme="intitule"  value={false}/>
                        </div>
                    </div>
                <div className="my-2">
                    <label className=" label-formulaire">Nom</label>
                    <input 
                        type="text" 
                        placeholder="Entrer votre nom" 
                        className="input_singup text-gray-400"
                        value={value.nom}
                        onChange={(event) => handlerVariable("nom", event.target.value,setValue)}
                    />
                </div>
                <div className="my-2">
                    <label className="label-formulaire">Mission</label>
                    <textarea 
                        type="text" 
                        placeholder="Entrer votre nom" 
                        className="input_singup text-gray-400"
                        value={value.mission}
                        onChange={(event) => handlerVariable("mission", event.target.value,setValue)}
                    />
                </div>

                <div className="my-2">
                    <label className="label-formulaire mt-2">Objectif</label>
                    <textarea
                        type="text" 
                        placeholder="Entrer votre nom" 
                        className="input_singup text-gray-400"
                        value={value.goals}
                        onChange={(event) => handlerVariable("goals", event.target.value,setValue)}
                    />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 mb-8">
                    <div>
                        <label className="label-formulaire mt-2 mb-1">Contrat</label>
                        <Select options={listContrat} onChange={handlerContrat}  placeholder={ nameContrat?.name }/>
                    </div>
                    <div>
                        <label className=" mt-2 mb-1 label-formulaire">Localisation</label>
                        <Select options={listLocalisation} onChange={handlerLocalisation} placeholder={nameLocalisation?.name} />
                    </div>
                </div>
                <label className="label-formulaire mt-2 mb-1">Anne d'experience entre </label>
                
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
                <label className=" mt-2 mb-1 label-formulaire">Diplome</label>
                <div className="bg-gray-50 p-2 rounded">
                    <div className="flex  justify-between gap-2 ">
                        <div>
                            <label className="label-formulaire mt-2 mb-1">diplome</label>
                            <Select options={listDiplome} onChange={handlerDiplome} />
                        </div>
                        <div>
                            <label className="label-formulaire mt-2 mb-1">Obligatoire</label>
                            <Select options={listMandatory} onChange={handlerMandatoryD} />
                        </div>
                        <div className="mt-10">
                            <button  onClick={(event) => {event.preventDefault(); handlerChangeTable("diplomes",valueDiplome,null)}} class="btn-neutre-gray">
                                    <i class="fa-regular fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="tasksList" class="space-y-4 ">
                    <table class="w-full">
                    <thead class="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th class="tr-thead ">diplome</th>
                            <th class="tr-thead">obligatoir?</th>
                            <th class="tr-thead w-8"></th>
                            <th class="tr-thead "></th>
                        </tr>
                    </thead>
                    
                {value.diplomes.map((v,k)=>(
                    <tr index={k}>
                        <td class="px-6 py-4">{v.nameS}</td>
                        <td class="px-6 py-4">{v.nameS}</td>
                        <td>
                            <button  onClick={() => {handlerChangeTable("diplomes",valueDiplome,k)}} class="btn-neutre-gray">
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
                            <button  onClick={(event) => {event.preventDefault(); handlerChangeTable("certifications",valueCertification,null)}} class="btn-neutre-gray">
                                    <i class="fa-regular fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="tasksList" class="space-y-4 ">
                    <table class="w-full">
                    <thead class="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th class="tr-thead ">diplome</th>
                            <th class="tr-thead">obligatoir?</th>
                            <th class="tr-thead w-8"></th>
                            <th class="tr-thead "></th>
                        </tr>
                    </thead>
                    
                {value.certifications.map((v,k)=>(
                    <tr index={k}>
                        <td class="px-6 py-4">{v.nameS}</td>
                        <td class="px-6 py-4">{v.nameM}</td>
                        <td>
                            <button  onClick={() => {handlerChangeTable("certifications",valueCertification,k)}} class="btn-neutre-gray">
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
                            <button  onClick={(event) => {event.preventDefault(); handlerChangeTable("softSkills",valueSoftSkill,null)}} class="btn-neutre-gray">
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
                            <th class="tr-thead">obligatoir?</th>
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
                            <button  onClick={(event) => {event.preventDefault(); handlerChangeTable("hardSkills",valueHardSkill,null)}} class="btn-neutre-gray">
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
                            <th class="tr-thead">obligatoir?</th>
                            <th class="tr-thead w-8"></th>
                            <th class="tr-thead "></th>
                        </tr>
                    </thead>
                    
                {value.hardSkills.map((v,k)=>(
                    <tr index={k}>
                        <td class="px-6 py-4">{v.nameS}</td>
                        <td class="px-6 py-4">{v.nameM}</td>
                        <td>
                            <button  onClick={(event) => {event.preventDefault(); handlerChangeTable("hardSkills",valueSoftSkill,k)}} class="btn-neutre-gray">
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
                            <button  onClick={(event) => {event.preventDefault(); handlerChangeTable("languages",valueLanguage,null)}} class="btn-neutre-gray">
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
                            <th class="tr-thead">obligatoir?</th>
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
                <button type="reset" onClick={()=>{deletePost()}}
                class="btn-neutre-gray">
                    Supprimer 
                </button>
                <button onClick={()=>{submit()}} class="btn-action">
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
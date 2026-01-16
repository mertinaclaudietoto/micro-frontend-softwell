import { useEffect, useState } from "react"
import { listProfile, url, usersprofile } from "../../../data/data"
import { getData, send } from "../../../function/Axios";
import Select from "../../../function/selectSimple";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function CardAdduserapk({close,listRole}){
    const [user,setUser]=useState({
            "id": null,
            "photo": null,
            "login": null,
            "password": null,
            "idrole": null,
            "name": null,
            "firstname": null,
            "matricule": null,
            "email": null
            });
    const [matricule,setMatricule]=useState(null);
    const getUser = async (matricule)=>{
        console.log(matricule)
        const data =  await getData(
            url + `employ/getby?matricule=${matricule}`
        );
        setUser(data.data)
        console.log(data.data)
    }   
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const setIdRole =(opt)=>{
        handlerVariable("idrole",opt.id.toString(),setUser)
    }
    const submit = async ()=>{
        console.log(user)
        const data = await send(user,url + "employ/registration")
        // console.log(value)
        if (data == true) {
            toast.success("Données insérées avec succès !");
            close(false);
        } else {
            toast.error("Problème serveur, réessayez plus tard !");
        }
    }

    return(
        <div className="background_transparent_popup">
         <div class=" min-h-screen  flex items-center justify-center p-4">
            <div class="bg-white w-100 rounded-2xl shadow-lg  p-8 relative">
        {/* <div class="absolute top-6 right-6">
            <span class="text-gray-800 text-lg font-semibold">
            <button class="" onClick={()=>(close(false))}>
                <i class="fa-solid fa-xmark"></i>
            </button></span>
        </div> */}
        <div class="flex justify-center mb-6">
            
            <img src="add-user.svg" alt="Logo" className="w-32 h-32" />
        </div>
      
        <h2 class="text-center text-sm font-bold text-gray-800 mb-2">{user.name} {user.firstname}</h2>
        <p class="text-center text-gray-500 text-sm mb-4">{user.email}</p>


        <label class="label-formulaire mt-8 mb-2">Matricule</label>
        <div className="flex space-x-2 ">
            <input placeholder="" className="text-input input_formulaire  " onChange={(event)=>{setMatricule(event.target.value)}}/>
            <button  className="px-4   rounded-lg text-sm hover:bg-gray-50"onClick={()=>{getUser(matricule)}}  title="Suivant">
                <i className="fa-solid fa-check "></i>
            </button>
        </div>
        <label class="label-formulaire mb-2">Profile</label>
        <div className="flex gap-2">
            <Select options={listRole} onChange={setIdRole}  placeholder={"....."} ></Select>
        </div>
        <label class="label-formulaire mt-8 mb-2">Login</label>
        <div className="flex space-x-2 ">
            <input placeholder={user.login} className="text-input input_formulaire  " onChange={(event)=>{handlerVariable("login",event.target.value,setUser)}}/>
        </div>
        <label class="label-formulaire mb-2">mot de pass</label>
        <div className="flex space-x-2 ">
            <input placeholder="" className="text-input input_formulaire  " onChange={(event)=>{handlerVariable("password",event.target.value,setUser)}}/>
        </div>

        <div class="flex items-center justify-end gap-3 mt-10 ">
            <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>{close(false)}}>
                Annuler
            </button>
            <button class="px-6 py-2 bg-softbleu hover:bg-softbleushade-12 text-white rounded-lg font-medium"  onClick={()=>submit()}>
                Enregistrer
            </button>
        </div>
    </div>

    </div>
        </div>
       
    )
}
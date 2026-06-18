import { useState } from "react";
import { _login } from "../function/Axios";
import { url } from "../data/data";
import { useNavigate } from "react-router-dom";
export default function Login({closePopup}){
    const navigate = useNavigate();
    const [text,setText]=useState("");
    const close =()=>{
        closePopup(false);
    }
    const [login,setLogin]= useState({
        login:'',
        password:''
    });
    const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
    const submit = async () => {
        try {
            const response = await _login(login, url + "employ/login");
            // console.log(response.data.data)
            if(response.data.success==false){
                setText("Identifiant ou mot de passe incorrect")
            }
            if (response.data.data.token) {
                sessionStorage.setItem("token", response.data.data.token);
            }
            if (response.data.data.id) {
                sessionStorage.setItem("userId", response.data.data.id);
                sessionStorage.setItem("userRole", response.data.data.idrole);
            }
             if (response.data.data.access) {
                sessionStorage.setItem("access", response.data.data.access);
                navigate("/accueil");
            }
        } catch (error) {
            setText("Identifiant ou mot de passe incorrect")
            console.error("Erreur login:", error);
        }
    };
    return(
        <div className="background_transparent_popup">
            <div class="grid grid-cols-1 bg-white w-100 p-10 rounded-xl">
                <div class="flex flex-col items-center">
                    <div class="w-32 h-32 rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-orange-600 transition-colors">
                        <img src="login.svg"/>
                    </div>
                </div>
                <p className="text-red-600 text-sm flex justify-center items-center ">
                    {text}
                </p>
                <div className='my-2'>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Login</label>
                    <input 
                        type="text" 
                        placeholder={login.login} 
                        class="input_formulaire"
                        onChange={(event)=>{handlerVariable("login",event.target.value,setLogin)}}
                    />
                </div>
                <div className='my-2'>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                    <input 
                        type="password" 
                        class="input_formulaire"
                        placeholder={login.password}
                        onChange={(event)=>{handlerVariable("password",event.target.value,setLogin)}}
                    />
                </div>
                <div class="flex items-center justify-end gap-3 mt-3">
                    <button class="px-6 py-2 w-100 bg-softbleu hover:bg-softbleushade-12 text-white rounded-lg font-medium"  onClick={()=>submit()}>
                        Connexion
                    </button>
                </div>
            </div>
        </div>
    )
}
import { url_recrutement } from "../../../data/data";
import { useNavigate } from "react-router-dom";
import { _login } from "../../../function/Axios";
import { useState } from "react";

export default function CardLoginUser({closePopup}){
    const errorText="Login ou mot de passe incorrect";
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
            const response = await _login(login, url_recrutement + "candidate/login");
            console.log(response.data.data)
            if(response.data.success==false){
                setText(errorText);
            }
            if (response.data.data.token) {
                sessionStorage.setItem("token", response.data.data.token);
            }
            if (response.data.data.id) {
                sessionStorage.setItem("userId", response.data.data.id);
                navigate("/candidate-availableposte");
            }
        } catch (error) {
              setText(errorText);
              console.error("Erreur login:", error);
        }
    };
   
    return(
        <div className="background_transparent_popup">
            <div class="grid grid-cols-1 bg-white w-100 p-10 rounded-xl">
                <div class="flex flex-col items-center">
                    <div class="w-32 h-32 rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-softbleu transition-colors">
                        <img src="login.svg"/>
                    </div>
                </div>
                <p className="text-red-500 text-center text-sm  ">{text}</p>
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
                    <label class="block text-sm font-medium text-gray-700 mb-2">Mots de passe</label>
                    <input 
                        type="password" 
                        class="input_formulaire"
                        placeholder={login.password}
                        onChange={(event)=>{handlerVariable("password",event.target.value,setLogin)}}
                    />
                </div>
                <p className="text-softbleu text-sm  flex justify-center items-center ">
                    vous n'avez pas de compte inscrivez-vous
                </p>
                <div class="flex items-center justify-end gap-3 mt-3">
                    <button class="px-6 py-2 text-gray-600 hover:text-gray-700 font-medium" onClick={()=>{close(false)}}>
                        Annuler
                    </button>
                    <button class="px-6 py-2 bg-softbleu hover:bg-softbleushade-12 text-white rounded-lg font-medium" onClick={()=>submit()}>
                        Connexion
                    </button>
                </div>
            </div>
        </div>
    )
}
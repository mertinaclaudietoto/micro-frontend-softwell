import  { useEffect, useState } from 'react';
import {HeaderLanding, CardLoginUser} from "../../components"
import { textbackground, url_recrutement } from '../../data/data';
import { getData } from '../../function/Axios';


function Landing() {
    const [isOpen,setIsOpen]=useState(false);
    const [data,setData]=useState([]);
    const loadData =async () => {
        const data = await getData(
            url_recrutement + `recruitment_request/postlibre`
        );
        console.log(data);
        if(data.data!=null){
        setData( data.data);
        console.log(data);
        }
    };
    useEffect(() => {
        loadData();
        }, []);
    return (
        
    <> 
        <HeaderLanding></HeaderLanding>
        {/* home */}
        <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20"> 
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        Construisez votre avenir professionnel avec nous
                    </h1>
                    <p className="text-gray-600 text-lg mb-8">
                        Rejoignez une équipe dynamique et passionnée, où vos compétences sont valorisées
                        et votre potentiel encouragé. Découvrez des opportunités de carrière adaptées
                        à votre profil et donnez un nouvel élan à votre parcours professionnel.
                        Postulez dès aujourd’hui et faites la différence.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg aspect-square flex items-center justify-center">
                        <img src="reseaux.svg" alt="Réseau professionnel" />
                    </div>
                    <div className="rounded-lg aspect-video flex items-center justify-center">
                        <img src="coworking.svg" alt="Environnement de travail collaboratif" />
                    </div>
                    <div className="rounded-lg aspect-video flex items-center justify-center col-span-2">
                        <img src="interview.svg" alt="Processus de recrutement" />
                    </div>
                </div>
            </div>
        </section>
        <div id="post" className=" px-4 sm:px-6 lg:px-8 pt-10">
            <div className="text-center mb-5">
                <h1 className="title_seconde pb-3">
                    Post Disponible
                </h1>
            </div>
            <div className="mx-auto flex flex-wrap gap-6 justify-center my-10">
                {data.map((value,index)=>(
                    <button onClick={()=>setIsOpen(true)} className="bg-white sm:p-2  rounded-xl p-4 mb-4 shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-start gap-3">
                            <div className={` w-12 h-12 ${(textbackground[index] || "bg-gray-700")} rounded-lg flex items-center justify-center  font-bold`}>
                                    {value.id}
                            </div>
                            <div className="flex-1 min-w-0 w-100">
                                <h4 className="font-bold text-gray-900 mb-1">{value.nomPost}</h4>
                                {/* <p classNameNames="text-sm text-gray-500 mb-3">Slack Technologies, LLC</p> */}
                                <p className="text-xs text-gray-600 mb-3">{value.goals} </p>
                                <br/>
                                <p className="text-xs text-gray-600 mb-3">{value.mission} </p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
        {isOpen ? <CardLoginUser closePopup={setIsOpen}/> : <></>}
    </>
  )
}
export default Landing;


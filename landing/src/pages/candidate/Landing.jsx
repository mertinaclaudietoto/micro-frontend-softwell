import React, { useEffect, useState } from 'react';
import {Footer3,HeroDefault,HeroOffre,CardOffreSmall,CardCommentaire,HeaderLanding,CardIconeDescription, CardLoginUser} from "../../components"
import { criteriens, textbackground, url_recrutement } from '../../data/data';
import { getData } from '../../function/Axios';


function Landing() {
    const redirecte = true ;
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
        <section id="home" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20"> 
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        Construisez votre avenir professionnel avec nous
                    </h1>
                    <p class="text-gray-600 text-lg mb-8">
                        Rejoignez une équipe dynamique et passionnée, où vos compétences sont valorisées
                        et votre potentiel encouragé. Découvrez des opportunités de carrière adaptées
                        à votre profil et donnez un nouvel élan à votre parcours professionnel.
                        Postulez dès aujourd’hui et faites la différence.
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="rounded-lg aspect-square flex items-center justify-center">
                        <img src="reseaux.svg" alt="Réseau professionnel" />
                    </div>
                    <div class="rounded-lg aspect-video flex items-center justify-center">
                        <img src="coworking.svg" alt="Environnement de travail collaboratif" />
                    </div>
                    <div class="rounded-lg aspect-video flex items-center justify-center col-span-2">
                        <img src="interview.svg" alt="Processus de recrutement" />
                    </div>
                </div>
            </div>
        </section>

        <div id="post" class=" px-4 sm:px-6 lg:px-8 pt-10">
            <div class="text-center mb-5">
                <h1 class="title_seconde pb-3">
                    Post Disponible
                </h1>
            </div>
            <div class="mx-auto flex flex-wrap gap-6 justify-center my-10">
                {data.map((value,index)=>(
                    <button onClick={()=>onclick(true)} class="bg-white s  rounded-xl p-4 mb-4 shadow-md transition-shadow cursor-pointer">
                        <div class="flex items-start gap-3">
                            <div class={`w-12 h-12 ${(textbackground[index] || "bg-gray-700")} rounded-lg flex items-center justify-center  font-bold`}>
                                    {value.id}
                            </div>
                            <div class="flex-1 min-w-0 w-100">
                                <h4 class="font-bold text-gray-900 mb-1">{value.nomPost}</h4>
                                {/* <p class="text-sm text-gray-500 mb-3">Slack Technologies, LLC</p> */}
                                <p class="text-xs text-gray-600 mb-3">{value.goals} </p>
                                <br/>
                                <p class="text-xs text-gray-600 mb-3">{value.mission} </p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
        {/* <Footer3></Footer3> */}
        {isOpen ? <CardLoginUser closePopup={setIsOpen}/> : <></>}
    </>
  )
}
export default Landing;


import React, { useState } from 'react';
import {Footer3,HeroDefault,HeroOffre,CardOffreSmall,CardCommentaire,HeaderLanding,CardIconeDescription, CardLoginUser} from "../../components"
import { criteriens } from '../../data/data';
function Landing() {
    const redirecte = true ;
    const [isOpen,setIsOpen]=useState(true)
    return (
    <> 
        <HeaderLanding></HeaderLanding>
        {/* home */}
        {redirecte ? <HeroOffre/> : <HeroDefault/> }
        <div id="post" class=" px-4 sm:px-6 lg:px-8 pt-10">
            <div class="text-center mb-5">
                <h1 class="title_seconde pb-3">
                    Post Disponible
                </h1>
            </div>
            <div class="mx-auto flex flex-wrap gap-6 justify-center">
                {criteriens.map((value)=>(
                    <CardOffreSmall criterien={value} onclick={setIsOpen}></CardOffreSmall>
                ))}
            </div>
        </div>
        <Footer3></Footer3>
        {isOpen ? <CardLoginUser closePopup={setIsOpen}/> : <></>}
    </>
  )
}
export default Landing;


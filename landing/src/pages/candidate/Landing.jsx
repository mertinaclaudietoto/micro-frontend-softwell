import React from 'react';
import HeroChoice from '../../components/hero/HeroChoice';
import Header from '../../components/header/landing/Header';
import CardIconeDescription from '../../components/card/CardIconeDescription';
import CardIconeMinDescription from '../../components/card/CardIconeMinDescription';
import CardCommentaire from '../../components/card/CardCommentaire';
import FooterChoice from '../../components/footer/FooterChoice';
import CardOffreSmall from '../../components/card/offre/CardOffreSmall';
import CardOffreMiddel from '../../components/card/offre/CardOffreMiddel';
import HeroOffre from '../../components/hero/HeroOffre';
import HeroDefault from '../../components/hero/HeroDefault';
import Footer3 from '../../components/footer/footers/Footer3';
function Landing() {
    const redirecte = true ;
    return (
    <> 
        <Header></Header>
        {/* home */}
        {redirecte ? <HeroOffre/> : <HeroDefault/> }
        {/*  */}
        <section id="why" className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20'>
                 <div class="text-center mb-5">
                    <h1 class="title_seconde">
                        Pourquoi-nous ?
                    </h1>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  py-4 px-4 gap-6 ">
                    <CardIconeDescription></CardIconeDescription>
                    <CardIconeDescription></CardIconeDescription>
                    <CardIconeDescription></CardIconeDescription>
                    <CardIconeDescription></CardIconeDescription>
                    <CardIconeDescription></CardIconeDescription>
                    <CardIconeDescription></CardIconeDescription>
                </div>
                 <div class="flex items-center justify-center mb-8">    
                    <p class="text-gray-600">Avis de nos employes</p>   
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                    <CardCommentaire/>
                    <CardCommentaire/>
                    <CardCommentaire/>
                </div>
        </section>
        {/* commentaire  */}
        <div id="post" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
            <div class="text-center mb-5">
                <h1 class="title_seconde pb-3">
                    Post Disponible
                </h1>
            </div>
            <div class="flex flex-wrap gap-6">
                    <CardOffreSmall></CardOffreSmall>
                    <CardOffreSmall></CardOffreSmall>
                    <CardOffreSmall></CardOffreSmall>
                    <CardOffreSmall></CardOffreSmall>
                    <CardOffreSmall></CardOffreSmall>
                    <CardOffreSmall></CardOffreSmall>
                    <CardOffreSmall></CardOffreSmall>
                    <CardOffreSmall></CardOffreSmall>
            </div>
        </div>
        <Footer3></Footer3>
    </>
   
  )
}

export default Landing;


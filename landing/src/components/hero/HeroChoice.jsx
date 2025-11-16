// Footer.jsx
import React, { useState ,useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import HeroDefault from './HeroDefault';
import HeroOffre from './HeroOffre';

import { HiMiniXCircle,HiChevronRight,HiChevronLeft } from "react-icons/hi2";

const HeroChoice = ({nbrChoice}) => {
    const getFooter = (choice) => {
        switch (choice) {
        case 1:
            return <HeroDefault/>;
        case 2:
            return <HeroOffre/>;
        default:
            return <HeroDefault/>;
        }
    };
    const [valueHero, setValueHero] = useState(getFooter(nbrChoice));
    const [index, setIndex] = useState(nbrChoice);
    const changeValueFooter = (nbr) => {
        if (nbr < 1) nbr = 1;
        if (nbr > 2) nbr = 2;
        setValueHero(getFooter(nbr));
        console.log(nbr)
        setIndex(nbr);
    };
    useEffect(() => {
        setValueHero(getFooter(nbrChoice));
    }, [nbrChoice]);
    return <>
        <div className='w-full  relative px-10'>
            {/* left */}
            <buttom className="icon_carre_line absolute top-1/2 left-8 -translate-y-1/2 " onClick={() => changeValueFooter(index - 1)}>
                   <HiChevronLeft className='h-7 w-7'></HiChevronLeft>
            </buttom>
            {/* rigth */}
            <button className="icon_carre_line absolute top-1/2 right-8 -translate-y-1/2"  onClick={() => changeValueFooter(index + 1)}>
                   <HiChevronRight className='h-7 w-7'></HiChevronRight>
            </button>
            <button class="icon_carre_line_none absolute top-5 right-5">
                  <HiMiniXCircle className='h-7 w-7'></HiMiniXCircle>
            </button>
            {valueHero}
        </div>
    </>;
};

export default HeroChoice;
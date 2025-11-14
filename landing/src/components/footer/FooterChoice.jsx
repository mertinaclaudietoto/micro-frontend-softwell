// Footer.jsx
import React, { useState ,useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Footer1 from './footers/Footer1';
import Footer2 from './footers/Footer2';
import Footer3 from './footers/Footer3';
import Footer4 from './footers/Footer4';
import Footer5 from './footers/Footer5';

import { HiMiniXCircle } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";
const FooterChoice = ({nbrChoice}) => {
    const getFooter = (choice) => {
        switch (choice) {
        case 1:
            return <Footer1 />;
        case 2:
            return <Footer2 />;
        case 3:
            return <Footer3 />;
        case 4:
            return <Footer4 />;
        case 5:
            console.log("deijdiejdeijdejdej");
            return <Footer5 />;
        default:
            return <Footer1 />;
        }
    };
    const [valueFooter, setValueFooter] = useState(getFooter(nbrChoice));
    const [index, setIndex] = useState(nbrChoice);
    const changeValueFooter = (nbr) => {
        if (nbr < 1) nbr = 1;
        if (nbr > 5) nbr = 5;
        setValueFooter(getFooter(nbr));
        console.log(nbr)
        setIndex(nbr);
    };
    useEffect(() => {
        setValueFooter(getFooter(nbrChoice));
    }, [nbrChoice]);
    return <>
        <div className='w-full  relative h-90'>
            {/* left */}
            <buttom className="icon_carre_line absolute top-1/2 left-8 -translate-y-1/2 " onClick={() => changeValueFooter(index - 1)}>
                   <HiChevronLeft className='h-7 w-7'></HiChevronLeft>
            </buttom>
            {/* rigth */}
            <button className="icon_carre_line absolute top-1/2 right-8 -translate-y-1/2"  onClick={() => changeValueFooter(index + 1)}>
                   <HiChevronRight className='h-7 w-7'></HiChevronRight>
            </button>
            <div class="icon_carre_line_none absolute top-5 right-5">
                  <HiMiniXCircle className='h-7 w-7'></HiMiniXCircle>
            </div>
            {valueFooter}
        </div>
    </>;
};

export default FooterChoice;

import React from 'react';
import Navbar from '../Navbar/Navbar';
import AboutUs from './AboutUs/AboutUs';
import DigitalMarkeing from './DigitalMarkeing/DigitalMarkeing';
import "./Home.css";
import OurClients from './OurClients/OurClients';
import OurServices from './OurServices/OurServices';

const Home = () => {
    // 1st cursore animation

    var cursor = document.getElementById("cursor");
    var cursor2 = document.getElementById("cursor2");

    document.addEventListener("mousemove", function (e) {
        cursor.style.cssText = cursor2.style.cssText =
            "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    })


    return (
        <div>
            <Navbar/>
            {/* 1st cursore animation */}
            <div id="cursor"></div>
            <div id="cursor2" ></div>

            <DigitalMarkeing/>
            <OurClients/>
            <AboutUs/>
            <OurServices/>



        </div>
    );
};

export default Home;
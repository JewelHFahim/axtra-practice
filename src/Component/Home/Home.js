import React from 'react';
import Navbar from '../Navbar/Navbar';
import AboutUs from './AboutUs/AboutUs';
import DigitalMarkeing from './DigitalMarkeing/DigitalMarkeing';
import "./Home.css";
import OurClients from './OurClients/OurClients';
import OurServices from './OurServices/OurServices';
import logo1 from "../../Assets/logo-1.png";
import logo2 from "../../Assets/logo-2.png";
import Test from '../Test/Test';

const Home = () => {
    // 1st cursore animation

    var cursor = document.getElementById("cursor");
    var cursor2 = document.getElementById("cursor2");

    document.addEventListener("mousemove", function (e) {
        cursor.style.cssText = cursor2.style.cssText =
            "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    })


    return (
        <div className='w-[100%]'>
            <Navbar/>
            {/* 1st cursore animation */}

            {/* <div id="cursor"></div>
            <div id="cursor2" ></div> */}


            <div><img src={logo1} id="cursor" alt="" /></div>
            <div><img src={logo2} id="cursor2" alt="" /></div>

            <DigitalMarkeing/>
            <OurClients/>
            <AboutUs/>
            <OurServices/>


        </div>
    );
};

export default Home;
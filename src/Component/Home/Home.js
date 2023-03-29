import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import AboutUs from '../AboutUs/AboutUs';
import DigitalMarkeing from '../DigitalMarkeing/DigitalMarkeing';
import OurClients from '../OurClients/OurClients';
import OurServices from '../OurServices/OurServices';
import logo1 from "../../Assets/logo-1.png";
import logo2 from "../../Assets/logo-2.png";
import FeaturedSlider from '../FeaturedSlider/FeaturedSlider';
import Parallax from '../Parallax/Parallax';
import OurServicesTwo from '../OurServicesTwo/OurServicesTwo';
import PricingTable from '../PricingTable/PricingTable';
import RecentBlog from '../RecentBlog/RecentBlog';
import Footer from '../Footer/Footer';
import AnotherTestSlider from '../AnotherTestSlider/AnotherTestSlider';
import "./Home.css";


const Home = () => {

    useEffect(() => {
        var cursor = document.getElementById("cursor");
        var cursor2 = document.getElementById("cursor2");

        document.addEventListener("mousemove", function (e) {
            cursor.style.cssText = cursor2.style.cssText =
                "left: " + e.clientX + "px; top: " + e.clientY + "px;";
        })
    }, [])


    return (
        <div className='w-[100%]'>
            <Navbar />
            <DigitalMarkeing />
            <OurClients />
            <AboutUs />
            <OurServices />
            <OurServicesTwo />
            <FeaturedSlider />
            <Parallax />
            <AnotherTestSlider />
            <PricingTable />
            <RecentBlog />
            <Footer />


            <div><img src={logo1} id="cursor" alt="" /></div>
            <div><img src={logo2} id="cursor2" alt="" /></div>
        </div>
    );
};

export default Home;
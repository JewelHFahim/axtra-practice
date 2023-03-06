import React from 'react';
import "./OurClients.css";
import { Fade } from 'react-reveal';

import client1 from "../../../Assets/c1.png";
import client2 from "../../../Assets/c2.png";
import client3 from "../../../Assets/c3.png";
import client4 from "../../../Assets/c4.png";
import client5 from "../../../Assets/c5.png";
import client6 from "../../../Assets/c6.png";

const OurClients = () => {

    return (
        <div className='text-center my-32 mx-20'>

            <Fade delay={500}>
            <p className='text-xl mb-10'>WE WORKED WITH GLOBAL LARGEST BRANDS</p>
            </Fade>

       
            <div className='grid grid-cols-6 mx-20'>
            <Fade left  delay={600}><img src={client1} alt="" /></Fade>
            <Fade left  delay={700}><img src={client2} alt="" /></Fade>
            <Fade left  delay={800}><img src={client3} alt="" /></Fade>
            <Fade left  delay={900}><img src={client4} alt="" /></Fade>
            <Fade left  delay={1000}><img src={client5} alt="" /></Fade>
            <Fade left  delay={1100}><img src={client6} alt="" /></Fade>
            </div>
        </div>
    );
};

export default OurClients;
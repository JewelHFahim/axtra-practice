import React from 'react';
import { Fade } from 'react-reveal';
import "./DigitalMarkeing.css";
import video from "../../Assets/hero-3.mp4";
import img from "../../Assets/1.jpg";
import { BsArrowDown } from 'react-icons/bs';


const DigitalMarkeing = () => {


    return (
        <div className='header-container mx-[200px]'>


            <div className='text-xl font-medium flex justify-items-center leading-none'>
                DIGITAL
                <div className='w-24 h-[1px] bg-black mt-2 ml-8'></div>
            </div>


            <div class="text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary-main">MARK</span>
                    <span class="heading-primary-sub">ETING</span>
                </h1>
            </div>


            <div className='w-[400px] mt-5'>

                <Fade right delay={500}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></Fade>
                <Fade right delay={600}>
                    <p >Dolore, amet consequuntur excepturi nesciunt ut nisi</p></Fade>
                <Fade right delay={700}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></Fade>
                <Fade right delay={800}>
                    <p >Dolore, amet consequuntur excepturi nesciunt ut nisi</p></Fade>
            </div>

            {/* Video Section */}
            <div className='vid-cont'>
                <div className='video-section-one' >
                    <video src={video} className='vid' type="video/mp4" autoPlay muted loop ></video>
                </div>
                <p className='mt-8 ml-2 text-lg'>Watch <br /> <span className='font-semibold'>VIDEO INTRO</span> </p>

            </div>

            <div className='flex items-center justify-between  mt-16 w-full '>

                <div className='bounce w-[35%] pl-10'><button className='border border-black px-2 py-8 rounded-3xl'> <BsArrowDown className='text-3xl' /> </button></div>
                <img src={img} alt="" className='w-[65%] h-[100%]' />
            </div>


        </div>
    );
};

export default DigitalMarkeing;
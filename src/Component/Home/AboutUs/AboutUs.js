import React from 'react';
import "./AboutUs.css";
import { BsArrowUpRight } from 'react-icons/bs';
import img from "../../../Assets/2.jpg";
import  Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';




const AboutUs = () => {
    return (
        <div className=' bg-black flex h-[1200px] p-5'>


        
             <div className='w-[55%] h-[100%]  img2-container'>
            </div> 


             <div className='w-[45%] relative'>
                <div className="w-[1px] h-32 bg-white"></div>
                <div className='text-white ml-[-100px] mt-10'>
                    <Fade bottom delay={500}><h3 className='text-[24px]'>WHO WE ARE</h3></Fade>
                    <Fade bottom delay={600}><h1 className='text-[60px] font-semibold leading-[60px] mt-5'>WE ARE LEADING <br /> DIGITAL MARKETING <br /> AGENCY.</h1></Fade>
                </div>

                <div className="w-[1px] h-full bg-white mt-10"></div>

                <Fade bottom delay={700}><p className='text-slate-300 w-[400px] absolute left-4 top-[490px]'>
                    We’re a team of strategic mdigital marketing
                    working globally with largest brands, We believe
                    that progress only happens when you refused to
                    play things safe. We combine ideas and behaviors,
                    and insights with design, technological data to
                    produce brand experiences that customers love
                    our services.
                </p></Fade>

                 <Bounce bottom>
                    <div className='explore absolute top-[650px] left-4 w-[180px] h-[180px] rounded-full my-20  ml-8 border border-slate-600 text-center flex justify-center items-center text-white hover:text-black'>

                        <p className='flex justify-center items-center cursor-pointer scr '>Explore Us <BsArrowUpRight className='ml-2' /></p>
                    </div>
                </Bounce>



            </div> 





        </div>
    );
};

export default AboutUs;
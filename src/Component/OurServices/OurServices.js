import React, { useEffect } from 'react';
import { Fade } from 'react-reveal';
import "./OurServices.css";
import { BsArrowUpRight } from 'react-icons/bs';
import Bounce from 'react-reveal/Bounce';
import search from "../../Assets/Services/1.jpg";
import email from "../../Assets/Services/2.png";
import social from "../../Assets/Services/4.png";



const OurServices = () => {

    useEffect(() => {

        const link = document.querySelectorAll(".link");
        const linkHoverReveal = document.querySelectorAll(".hover-reveal");
        const linkImages = document.querySelectorAll(".hidden-img");

        for (let i = 0; i < link.length; i++) {
            link[i].addEventListener("mousemove", (e) => {
                linkHoverReveal[i].style.opacity = 1;
                linkHoverReveal[i].style.transform = `translate(-100%, -50% )`;
                linkImages[i].style.transform = "scale(1, 1)";
                linkHoverReveal[i].style.left = e.clientX + "px";
            });

            link[i].addEventListener("mouseleave", (e) => {
                linkHoverReveal[i].style.opacity = 0;
                linkHoverReveal[i].style.transform = `translate(-50%, -50%)`;
                linkImages[i].style.transform = "scale(0.8, 0.8)";
            });
        }
    }, [])



    return (
        <div className='relative mx-20'>

            <div className='w-[1px] h-[120px] bg-slate-400 ml-[40%] mb-10' ></div>
            <div className='ml-[30%] text-left'>
                <Fade bottom delay={500}><p className='text-xl font-semibold'>SERVICES</p></Fade>
                <Fade bottom delay={600}><h1 className='text-[60px] font-bold leading-[70px]'>OUR MARKETING <br /> SERVICES</h1></Fade>
            </div>
            <div className='w-[1px] h-[200px] bg-slate-400 ml-[40%] mt-10' ></div>
            <p className='absolute w-[400px] left-[42%] top-[400px]' >
                <Fade bottom delay={700}>Consumers today rely heavily on digital means to</Fade>
                <Fade bottom delay={800}>research products. We research a brand of bldend</Fade>
                <Fade bottom delay={900}>engaging with it, according to the meanwhile, 51%</Fade>
                <Fade bottom delay={1000}>of consumers say they use Google to research
                    products before buying.</Fade>
            </p>




            {/* Serach Engine */}
            <hr className='mx-20 mt-20' />
            <nav className='p-10'>
                <div className="vsb1">
                    <li className=''>
                        <div className="link">
                            <h1 className='text-[32px] font-bold'>SEARCH ENGINE <br /> OPTIMIZATION</h1>
                            <p className=' text-lg'>We help brands stand out through aweful, elegant <br /> visual design. Our design mainly philosophy. <br />
                                <span>+ Logo Design</span> <br />
                                <span>+ Advertisement</span> <br />
                                <span>+ Promotion </span>
                            </p>

                            <Bounce bottom>
                                <div className='details flex justify-center items-cente'>
                                    <p className='flex justify-center items-center cursor-pointer'>Details <BsArrowUpRight className='ml-2' /></p>
                                </div>
                            </Bounce>

                            <div className="hover-reveal">
                                <img src={search} className="hidden-img" alt="" />
                            </div>
                        </div>
                    </li>
                </div>
            </nav>

            {/* Email Marketing */}
            <hr className='mx-20 ' />
            <nav className='p-10'>
                <div className="vsb1">
                    <li className=''>
                        <div className="link">
                            <h1 className='text-[32px] font-bold'>EMAIL <br /> MARKETING</h1>
                            <p className=' text-lg'>We help brands stand out through aweful, elegant <br /> visual design. Our design mainly philosophy. <br />
                                <span>+ Logo Design</span> <br />
                                <span>+ Advertisement</span> <br />
                                <span>+ Promotion </span>
                            </p>

                            <Bounce bottom>
                                <div className='details flex justify-center items-cente'>
                                    <p className='flex justify-center items-center cursor-pointer'>Details <BsArrowUpRight className='ml-2' /></p>
                                </div>
                            </Bounce>

                            <div className="hover-reveal">
                                <img src={email} className="hidden-img" alt="" />
                            </div>
                        </div>
                    </li>
                </div>
            </nav>


            {/* Content Marketing */}
            <hr className='mx-20 ' />
            <nav className='p-10'>
                <div className="vsb1">
                    <li className=''>
                        <div className="link">
                            <h1 className='text-[32px] font-bold'>CONTENT <br /> MARKETING</h1>
                            <p className=' text-lg'>We help brands stand out through aweful, elegant <br /> visual design. Our design mainly philosophy. <br />
                                <span>+ Logo Design</span> <br />
                                <span>+ Advertisement</span> <br />
                                <span>+ Promotion </span>
                            </p>

                            <Bounce bottom>
                                <div className='details flex justify-center items-cente'>
                                    <p className='flex justify-center items-center cursor-pointer'>Details <BsArrowUpRight className='ml-2' /></p>
                                </div>
                            </Bounce>

                            <div className="hover-reveal">
                                <img src={social} className="hidden-img" alt="" />
                            </div>
                        </div>
                    </li>
                </div>
            </nav>

        </div>
    );
};

export default OurServices;
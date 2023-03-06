import React from 'react';
import { Fade } from 'react-reveal';
import "./OurServices.css";
import { BsArrowUpRight } from 'react-icons/bs';
import Bounce from 'react-reveal/Bounce';
import img from "../../../Assets/2.jpg"



const OurServices = () => {

    // Animation Image
    var cursor = document.querySelector(".follow-img");
    document.addEventListener("mousemove", (e) => {
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;

    })



    return (
        <div className='relative'>

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




            {/* <div className='flex justify-between justify-items-center px-10 py-20'>

                    <h1 className='text-[40px] font-bold'>SEARCH ENGINE <br /> OPTIMIZATION</h1>
                    <p className='ml-[-200px] text-lg'>We help brands stand out through aweful, <br /> elegant visual design. Our design mainly philosophy. <br />
                        <span>+ Logo Design</span> <br />
                        <span>+ Advertisement</span> <br />
                        <span>+ Promotion </span>
                    </p>


                    <Bounce bottom>
                        <div className='explore w-[180px] h-[180px] rounded-full border border-slate-600 text-center flex justify-center items-center text-white hover:text-black'>
                            <p className='flex justify-center items-center cursor-pointer scr '>Explore Us <BsArrowUpRight className='ml-2' /></p>
                        </div>
                    </Bounce>
                </div> */}

            <div className='mt-32 h-[400px] border border-red-600 flex justify-center justify-items-center m-5'>
                <a href="#!" className='border border-green-600 w-[100%] h-[100%]'>
                <div className='flex justify-between justify-items-center px-10 py-20'>

<h1 className='text-[40px] font-bold'>SEARCH ENGINE <br /> OPTIMIZATION</h1>
<p className='ml-[-200px] text-lg'>We help brands stand out through aweful, <br /> elegant visual design. Our design mainly philosophy. <br />
    <span>+ Logo Design</span> <br />
    <span>+ Advertisement</span> <br />
    <span>+ Promotion </span>
</p>


<Bounce bottom>
    <div className='explore w-[180px] h-[180px] rounded-full border border-slate-600 text-center flex justify-center items-center text-white hover:text-black'>
        <p className='flex justify-center items-center cursor-pointer scr '>Explore Us <BsArrowUpRight className='ml-2' /></p>
    </div>
</Bounce>
</div>
                    <img src={img} alt="img-cover" class="follow-img" />

                </a>
            </div>


        </div>
    );
};

export default OurServices;
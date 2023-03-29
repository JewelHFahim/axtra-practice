import React from 'react';
import "./RecentBlog.css";
import { Fade } from 'react-reveal';
import img1 from "../../Assets/blog-img1.jpg";
import img2 from "../../Assets/blog-img2.jpg";
import { BsArrowUpRight } from 'react-icons/bs';



const RecentBlog = () => {
    return (
        <div className='h-[120vh] relative mx-20'>

            <div className='w-[1px] h-[120px] bg-slate-400 ml-[40%] mb-10' ></div>
            <div className='ml-[30%] text-left'>
                <Fade bottom delay={500}><p className='text-xl font-semibold'>RECENT BLOG</p></Fade>
                <Fade bottom delay={600}><h1 className='text-[60px] font-bold leading-[70px]'>READ UPDATED<br /> JOURNAL</h1></Fade>
            </div>
            <div className='w-[1px] h-[200px] bg-slate-400 ml-[40%] mt-10' ></div>

            <p className='absolute w-[400px] left-[42%] top-[400px] font-[500]' >
                <Fade bottom delay={700}>Consumers today rely heavily on digital means to</Fade>
                <Fade bottom delay={800}>research products. We research a brand of bldend</Fade>
                <Fade bottom delay={900}>engaging with it, according to the meanwhile, 51%</Fade>
                <Fade bottom delay={1000}>of consumers say they use Google to research
                    products before buying.</Fade>
            </p>


            <div className='mx-[200px] my-[50px] flex justify-center'>

                <div className='w-1/2 relative'>
                <div className='blog-img-cont'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='bg-white w-[350px] h-[300px] absolute bottom-[-40px] right-[100px] p-[30px]'>
                        <p className='text-[#555555] text-[15px] font-[500]'>UI Design . 02 May 2019</p>
                        <h2 className='text-[22px] text-[#121212] font-[600] mt-4 mb-10'>How to bring fold to your startup company with Axtra</h2>
                        <hr />
                        <p className='font-[600] text-[#555] mt-4 flex items-center'>Read More <BsArrowUpRight className='ml-2' /></p>
                    </div>
                </div>

                <div className='w-1/2 relative hover05 column'>
                    <div className='blog-img-cont'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='bg-white w-[350px] h-[300px] absolute bottom-[-40px] right-[100px] p-[30px]'>
                        <p className='text-[#555555] text-[15px] font-[500]'>UI Design . 02 May 2019</p>
                        <h2 className='text-[22px] text-[#121212] font-[600] mt-4 mb-10'>How to bring fold to your startup company with Axtra</h2>
                        <hr />
                        <p className='font-[600] text-[#555] mt-4 flex items-center'>Read More <BsArrowUpRight className='ml-2' /></p>
                    </div>
                </div>


            </div>





        </div>
    );
};

export default RecentBlog;
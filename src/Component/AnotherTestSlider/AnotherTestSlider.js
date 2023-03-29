import React from 'react';
import CountUp from 'react-countup';
import "./AnotherTestSlider.css";
import img1 from "../../Assets/counter-3.png";
import { AiOutlineArrowRight } from 'react-icons/ai';


const AnotherTestSlider = () => {



    return (
        <div className='w-screen h-screen overflow-hidden'>
            <main>
                <article>
                    {/* 1st slide */}
                    <section className=' bg-[#fffaf0] '>
                        <p className='bg-[#fffaf0] grid justify-center content-center h-screen w-screen text-center text-[180px] font-[600]'>WHY <br /> CHOOSE US
                        </p>
                    </section>

                    {/* 2nd slide */}
                    <section>
                        <div className='h-screen w-screen px-[250px] pt-[100px] flex justify-between bg-[#f3ecec]'>

                            <div className='w-1/2'>
                                <p className='text-[18px] font-[500]'>WHY CHOOSE US</p>

                                <h1 className='mt-[100px] text-[60px] font-[600]'>KEWORD,RESEARCH STRATEGY, SURVEY, & ANALYTICS</h1>

                                <p className='w-[350px] ml-[100px] my-[40px] font-[500]'>Attention, we take out our round glasses and our sweater with elbow patches to go back to the origins of the user experience: the first mention of the user and its importance was born in the
                                </p>
                                <div className='ml-[100px] mt-[100px]'>
                                    <button className='border border-black px-4 rounded-2xl font-bold hover:bg-black hover:text-white'>GOOGLE</button>
                                    <button className='border border-black px-4 rounded-2xl font-bold hover:bg-black hover:text-white mx-2'>PINTEREST</button>
                                    <button className='border border-black px-4 rounded-2xl font-bold hover:bg-black hover:text-white'>INSTAGRAM</button>
                                </div>
                            </div>

                            <div className='w-1/2 ml-[50px]'>

                                <div className='flex items-center gap-10'>
                                    <div className='w-[200px] h-[200px] border-2 border-slate-600 rounded-full grid justify-center content-center'>
                                        <p className='text-[40px] font-[500]'>60%</p>
                                    </div>
                                    <div className='w-[300px]'>
                                        <h2 className='text-[30px] font-[500]'>STRATEGY</h2>
                                        <p className='font-[500] mt-[20px]'>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                                    </div>
                                </div>

                                <div className='flex items-center gap-10 ml-[-60px] my-[50px]'>
                                    <div className='w-[200px] h-[200px] border-2 border-slate-600 rounded-full grid justify-center content-center'>
                                        <p className='text-[40px] font-[500]'>95%</p>
                                    </div>
                                    <div className='w-[300px]'>
                                        <h2 className='text-[30px] font-[500]'>AUDIENCE</h2>
                                        <p className='font-[500] mt-[20px]'>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                                    </div>
                                </div>

                                <div className='flex items-center gap-10'>
                                    <div className='w-[200px] h-[200px] border-2 border-slate-600 rounded-full grid justify-center content-center'>
                                        <p className='text-[40px] font-[500]'>70%</p>
                                    </div>
                                    <div className='  w-[300px]'>
                                        <h2 className='text-[30px] font-[500]'>KEYWORD</h2>
                                        <p className='font-[500] mt-[20px]'>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                                    </div>
                                </div>



                            </div>

                        </div>
                    </section>

                    {/* 3rd slide */}
                    <section>
                        <div className=' w-screen h-screen bg-[#FFFAF1]  px-[250px] pt-[150px] flex'>
                            <div className='w-1/2 grid grid-cols-2 gap-[100px]'>
                                <div>
                                    <h1 className='text-[90px] font-[500]'>
                                        <CountUp end={25} duration={5} suffix=" k" />
                                    </h1>
                                    <p className='text-[20px] font-[500] text-slate-500 '>Project <br /> completed</p>
                                </div>

                                <div>
                                    <h1 className='text-[90px] font-[500]'>
                                        <CountUp end={8} duration={5} suffix=" k" />
                                    </h1>

                                    <p className='text-[20px] font-[500] text-slate-500 '>Happy <br /> customers</p>
                                </div>

                                <div>
                                    <h1 className='text-[90px] font-[500]'>
                                        <CountUp end={15} duration={5} />
                                    </h1>
                                    <p className='text-[20px] font-[500] text-slate-500 '>Years <br /> experiences</p>
                                </div>

                                <div>
                                    <h1 className='text-[90px] font-[500]'>
                                        <CountUp end={98} duration={5} />
                                    </h1>
                                    <p className='text-[20px] font-[500] text-slate-500 '>Awards <br /> achievement</p>
                                </div>
                            </div>
                            <div className='w-1/2 border relative'>
                                <img src={img1} className="w-full h-full left-0 top-0" alt="" />
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className='bg-[#E0E3CE] h-screen w-screen flex justify-center  pt-[100px] text-center'>
                            <div>
                                <p className='text-[30px]'>Have you project in mind?</p>
                                <h1 className='text-[100px]'>Let’s make something <br /> great together!</h1>

                                <div className='w-[250px] h-[250px] border-2 border-black rounded-full grid content-center justify-center ml-[350px] mt-[50px] hover:bg-black hover:text-white duration-500'>
                                    <div className='flex items-center text-[20px] font-[500]'>
                                        <p>Contact <br /> With Us</p>
                                        <AiOutlineArrowRight className='ml-2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className='h-screen w-screen bg-[#fffaf0] flex justify-center  items-center' >
                            <h1>Somthing ...</h1>
                        </div>

                    </section>
                </article>
            </main>
        </div>
    );
};

export default AnotherTestSlider;
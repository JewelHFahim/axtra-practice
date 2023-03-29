import React from 'react';
import "./Footer.css";
import logo from "../../Assets/logo-white.png";

const Footer = () => {
    return (
        <div className='mt-[50px]  bg-black h-[550px]  '>

            <div className='flex px-[100px]'>
                <div className='w-[30%] mt-[100px]'>
                    <img src={logo} alt="" />
                    <p className='text-slate-700 text-[17px] font-[500] mt-[40px]'>
                        When do they work well, and when do they <br /> on us and finally, when do we actually need <br /> how can we avoid them.
                    </p>
                </div>

                <div className='w-[12%] border-[1px] border-slate-800 text-[17px] text-white font-[500] text-center'>

                    <div className='border-[1px] border-slate-800  py-8 trans hover:bg-white hover:text-black ease-in-out duration-500'><button>FACEBOOK</button></div>
                    <div className='border-[1px] border-slate-800  py-8 hover:bg-white hover:text-black ease-in-out duration-500'><button>TWITTER</button></div>
                    <div className='border-[1px] border-slate-800  py-8 hover:bg-white hover:text-black ease-in-out duration-500'><button>LINKEDIN</button></div>
                    <div className='border-[1px] border-slate-800  py-8 hover:bg-white hover:text-black ease-in-out duration-500'><button>INSTAGRAM</button></div>

                </div>

                <div className='w-[58%] grid justify-center content-center'>


                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <h3 class="animate-charcter">
                                    LET'S TALK
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-[1px] bg-slate-800'></div>

            <div className='px-[50px] flex justify-between justify-items-center items-center h-[180px] text-[17px] font-[500] text-white'>
                <p>© 2022 - 2025 | Alrights reserved by MicroBuddy</p>
                <div className='flex gap-10'>
                    <p>ABOUT US</p>
                    <p>CONTACT</p>
                    <p>CAREER</p>
                    <p>FAQS</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
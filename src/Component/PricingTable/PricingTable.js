import React from 'react';
import "./PricingTable.css";
import { TiTick } from 'react-icons/ti';
import { Bounce } from 'react-reveal';
import { BsArrowUpRight } from 'react-icons/bs';


const PricingTable = () => {
    return (
        <div className='pricetable-conatiner flex justify-around pt-[150px] px-[300px]'>

            <div className=' pr-20 w-1/2'>
                <p className='text-[18px] text-[#555555] font-[500]'>PRICING TABLE</p>
                <h1 className='text-[55px] font-[700]'>BE KIND TO YOUR MIND</h1>

                <div className='mt-[40px]'>

                    <div className='w-full h-[1px] bg-black' ></div>
                    <div className="collapse collapse-plus">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-transparent text-[18px] font-[700]">
                            Design should enrich our day
                        </div>
                        <div className="collapse-content text-[18px] font-[500]  peer-checked:text-slate-500">
                            <p>
                                Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people
                            </p>
                        </div>
                    </div>

                    <div className='w-full h-[1px] bg-black' ></div>
                    <div className="collapse collapse-plus">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-transparent text-[18px] font-[700]">
                            Bring their individual experience and creative
                        </div>
                        <div className="collapse-content text-[18px] font-[500]  peer-checked:text-slate-500">
                            <p>
                                This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes.
                            </p>
                        </div>
                    </div>

                    <div className='w-full h-[1px] bg-black' ></div>
                    <div className="collapse collapse-plus">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-transparent text-[18px] font-[700]">
                            Human centred design to challenges
                        </div>
                        <div className="collapse-content text-[18px] font-[500]  peer-checked:text-slate-500">
                            <p>
                                Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people
                            </p>
                        </div>
                    </div>

                    <div className='w-full h-[1px] bg-black' ></div>
                    <div className="collapse collapse-plus">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-transparent text-[18px] font-[700]">
                            Design should enrich our day
                        </div>
                        <div className="collapse-content text-[18px] font-[500]  peer-checked:text-slate-500">
                            <p>
                                Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people
                            </p>
                        </div>
                    </div>

                    <div className='w-full h-[1px] bg-black' ></div>
                    <div className="collapse collapse-plus">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-transparent text-[18px] font-[700]">
                            Developing core web applications
                        </div>
                        <div className="collapse-content text-[18px] font-[500]  peer-checked:text-slate-500">
                            <p>
                                Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people
                            </p>
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-black' ></div>





                </div>
            </div>

            <div className=' w-1/2 mt-[50px]'>

                <div className='w-full h-[230px] bg-black rounded-xl flex items-center gap-10 relative'>
                    <div className='w-[40px] h-[40px] bg-[#ff9776] rounded-lg ml-[40px] grid content-center justify-center'>
                        <TiTick className='text-[30px]' />
                    </div>
                    <div>
                        <button className='btn btn-outline btn-sm rounded-3xl text-slate-500'>YEARLY</button>
                        <h1 className='text-[26px] font-[700] text-white mt-5'>14 DAYS FREE</h1>
                        <p className='mt-5 text-[#999999] font-[500]'>Subscription fee is $129.99 USD and automatically <br /> renews each year</p>
                    </div>

                    <div className='absolute right-[50px] top-[-10px] bg-[#ff9776] py-1 px-2 rounded-lg'>
                        <p className='text-[12px] text-white'>BEST VALUE</p>
                    </div>

                    <div className='absolute right-[50px] top-[50px]'>
                        <h2 className='text-[30px] text-white font-[700]'>$129 <span className='text-[12px] ml-[-5px]'>.99</span></h2>
                    </div>
                </div>

                <div className='w-full h-[230px] bg-white rounded-xl flex items-center gap-10 relative mt-[35px] mb-[60px]'>
                    <div className='w-[40px] h-[40px] border border-slate-400 rounded-lg ml-[40px] grid content-center justify-center'>
                        <TiTick className='text-[30px]' />
                    </div>
                    <div>
                        <button className='btn btn-outline btn-sm rounded-3xl text-slate-700'>YEARLY</button>
                        <h1 className='text-[26px] font-[700]  mt-5'>14 DAYS FREE</h1>
                        <p className='mt-5 font-[500]'>Subscription fee is $129.99 USD and automatically <br /> renews each year</p>
                    </div>


                    <div className='absolute right-[50px] top-[50px]'>
                        <h2 className='text-[30px] font-[700]'>$19 <span className='text-[12px] ml-[-5px]'>.99</span></h2>
                    </div>
                </div>

                <Bounce bottom>
                    <div className='details flex justify-center items-cente'>
                        <p className='flex justify-center items-center cursor-pointer'>Details <BsArrowUpRight className='ml-2' /></p>
                    </div>
                </Bounce>


            </div>

        </div>
    );
};

export default PricingTable;
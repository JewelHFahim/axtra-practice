import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../Assets/featured/1.jpg";
import img2 from "../../Assets/featured/2.jpg";
import img3 from "../../Assets/featured/3.jpg";
import img4 from "../../Assets/featured/4.jpg";
import "./FeaturedSlider.css"

const FeaturedSlider = () => {

    const [slider1, setSlider1] = useState(null)
    const [slider2, setSlider2] = useState(null)




    return (
        
        <div className=" h-screen bg-black p-32 overflow-hidden relative">

            <h3 className="text-lg font-bold text-white absolute left-[21%] top-16">FEATURED <br /> WORK</h3>

            <div className="flex relative">
                
            <div className=" w-[50%] absolute z-50 left-[16%]" >

                <Slider
                    asNavFor={slider1}
                    ref={slider => (setSlider2(slider))}
                    slidesToShow={1}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    fade={true}
                    autoplay={true}
                    arrows={false}
                >
                   
                   <div>
                   
                        <h1 className="text-[150px] font-bold text-white">BENJON</h1>
                        <h1 className="text-[150px] font-bold text-white ml-48 "> WEBSITE</h1>
                        <h1 className="text-[150px] font-bold text-white">2012</h1>
                   
                    </div>

                   
                    <div>
                        <h1 className="text-[150px] font-bold text-white">BENJON</h1>
                        <h1 className="text-[150px] font-bold text-white ml-48"> WEBSITE</h1>
                        <h1 className="text-[150px] font-bold text-white">2013</h1>
                    </div>
                    

                    

                    <div>
                        <h1 className="text-[150px] font-bold text-white">BENJON</h1>
                        <h1 className="text-[150px] font-bold text-white ml-48"> WEBSITE</h1>
                        <h1 className="text-[150px] font-bold text-white">2014</h1>
                    </div>
                    

                    
                    <div>
                        <h1 className="text-[150px] font-bold text-white">BENJON</h1>
                        <h1 className="text-[150px] font-bold text-white ml-48"> WEBSITE</h1>
                        <h1 className="text-[150px] font-bold text-white">2015</h1>
                    </div>
                    

                </Slider>
                
            </div>


            <div className=" w-[50%] absolute left-[50%]">
                <Slider
                    asNavFor={slider2}
                    ref={slider => (setSlider1(slider))}
                    fade={true}
                    easing = {true}
                    arrows={false}


                >
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <img src={img2} alt="" />

                    </div>
                    <div>
                        <img src={img3} alt="" />

                    </div>
                    <div>
                        <img src={img4} alt="" />

                    </div>

                </Slider>
            </div>




        </div>
        </div>
    );
}
export default FeaturedSlider;
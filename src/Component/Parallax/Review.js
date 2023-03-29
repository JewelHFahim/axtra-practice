import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Review.css";
import img1 from "../../Assets/19.svg";


const Review = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        arrows: true,
    };
    return (
        <div className=" w-[550px] h-[450px]">

            <Slider {...settings}>
                <div className="text-center">

                    <h3>quate</h3>

                    <p className="text-xl font-semibold italic mt-10">"When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!"</p>
                    <p className="text-xl font-bold mt-10">MARIA D.HALK</p>
                    <p className="text-[12px] font-light">MANAGING DIRECTOR</p>
                </div>

                <div className="text-center">
                    <h4>Quate</h4>
                    <p className="text-xl font-semibold italic mt-10">"When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!"</p>
                    <p className="text-xl font-bold mt-10">MARIA D.HALK</p>
                    <p className="text-[12px] font-light">MANAGING DIRECTOR</p>
                </div>

                <div className="text-center">
                    <h4>Quate</h4>
                    <p className="text-xl font-semibold italic mt-10">"When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!"</p>
                    <p className="text-xl font-bold mt-10">MARIA D.HALK</p>
                    <p className="text-[12px] font-light">MANAGING DIRECTOR</p>
                </div>

                <div className="text-center">
                    <h4>Quate</h4>
                    <p className="text-xl font-semibold italic mt-10">"When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!"</p>
                    <p className="text-xl font-bold mt-10">MARIA D.HALK</p>
                    <p className="text-[12px] font-light">MANAGING DIRECTOR</p>
                </div>

                <div className="text-center">
                    <h4>Quate</h4>
                    <p className="text-xl font-semibold italic mt-10">"When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!"</p>
                    <p className="text-xl font-bold mt-10">MARIA D.HALK</p>
                    <p className="text-[12px] font-light">MANAGING DIRECTOR</p>
                </div>
            </Slider>
        </div>
    );
}

export default Review;
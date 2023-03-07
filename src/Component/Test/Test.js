import React, { useEffect, useRef } from 'react';
import "./Test.css";
import Bounce from 'react-reveal/Bounce';
// import img from "../../Assets/2.jpg";
import { BsArrowUpRight } from 'react-icons/bs';
import {gsap} from 'gsap';




const Test = () => {

    // Animation Image
    function Appp(){
        let cursor = useRef(null);
        let tl = gsap.timeline();
        let posX = 0;
        let posY = 0;
        let mouseX = 0;
        let mouseY = 0;
        useEffect(()=>{
            tl.to({}, 0.016, {
                repeat: -1,
                onRepeat: function(){
                    posX +=(mouseX - posX) / 10;
                    posY +=(mouseY - posY) / 10;
                    tl.set(cursor, {
                        css:{
                            left: posX - 50,
                            top: posY - 50,
                        }
                    })
                }
            })
            document.addEventListener("mousemove", function(e){
                mouseX = e.pageX;
                mouseY = e.pageY;
            })
        })

    }


    return (

        <div className=' border border-red-600 h-32'>

            <div className="content text-black">
                <h1>Savage</h1>
                <h1>Savage</h1>
                <h1>Savage</h1>
            </div>
            <div className="cursor-follow" ref={ (el, cursor) => cursor = el}  ></div>
        </div>

    );
};

export default Test;
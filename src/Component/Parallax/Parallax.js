import React from 'react';
import "./Parallax.css";
import img1 from "./Asstets/1.png";
import img2 from "./Asstets/2.png";
import img3 from "./Asstets/3.png";
import img4 from "./Asstets/4.png";
import img5 from "./Asstets/5.png";
import img6 from "./Asstets/6.png";
import img7 from "./Asstets/7.png";
import img8 from "./Asstets/8.png";
import img9 from "./Asstets/9.png";
import img10 from "./Asstets/10.png";
import img11 from "./Asstets/11.png";
import img12 from "./Asstets/12.png";
import img13 from "./Asstets/PNG/img1.png";
import img14 from "./Asstets/PNG/img2.png";
import img15 from "./Asstets/PNG/img3.png";
import img16 from "./Asstets/PNG/img4.png";
import img17 from "./Asstets/PNG/img5.png";
import img18 from "./Asstets/PNG/img6.png";
import Review from './Review';

const Parallax = () => {

    document.addEventListener("mousemove", parallax);
    function parallax(e) {
        this.querySelectorAll('.layer').forEach(layer => {
            const speed = layer.getAttribute('data-speed');

            const x = (window.innerWidth - e.pageX * speed) / 250
            const y = (window.innerHeight - e.pageY * speed) / 250

            layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
    }


    return (
            <section >
            <img src={img13} className="layer" data-speed="-3" alt="" />
            <img src={img14} className="layer" data-speed="-2" alt="" />
             <img src={img15} className="layer" data-speed="-7" alt="" />
            <img src={img16} className="layer" data-speed="-6" alt="" />
            <img src={img17} className="layer" data-speed="-3" alt="" />
            <img src={img18} className="layer" data-speed="-3" alt="" />
      

            {/* <h1 data-speed="2">MicroBuddy</h1> */}
            
            <div data-speed="2">
                <Review/>
            </div>
        </section>
    );
};

export default Parallax;
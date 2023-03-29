import React from 'react';
import "./Parallax.css";
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
      

            <div data-speed="2">
                <Review/>
            </div>
        </section>
    );
};

export default Parallax;
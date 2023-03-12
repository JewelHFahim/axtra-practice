import React from 'react';
import "./ClientReview.css";
import img from "../../Assets/logo.png";

const ClientReview = () => {

    document.addEventListener("mousemove", parallax);
    function parallax(e) {
        document.querySelectorAll(".object").forEach(function(move){
            var moving_value = move.getAttribute("data-value");
            var x = (e.clientX * moving_value)/250;
            var y = (e.clientY * moving_value)/250;

            move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";

        })


    }

    return (
        <div className='main'>
            <div className='container'>
            <h2 className='object' data-value="3">micro buddy</h2>
            <img src={img} className="object" data-value="-20" alt="" />
            <img src={img} className="object" data-value="60" alt="" />
            <img src={img} className="object" data-value="40" alt="" />
            <img src={img} className="object" data-value="-60" alt="" />
            <img src={img} className="object" data-value="80" alt="" />
            <img src={img} className="object" data-value="-40" alt="" />
            <img src={img} className="object" data-value="50" alt="" />
            <img src={img} className="object" data-value="-90" alt="" />
            <img src={img} className="object" data-value="-50" alt="" />
        </div>
        </div>
    );
};

export default ClientReview;
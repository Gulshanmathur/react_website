import React from "react";
import img1 from './images/boy.png'
export default function Header(){
    return(
        <div id ="navbar">
          <img className="anim_boy" src={img1}  alt="fireSpot" style={{height:130,width: 130}} />
          <div className="quate">"Everything is impossible and harsh in this world until and unless,
          you have to make it possible"</div>
          <div id="navbar-right">
             <a className="active" href="#para">Home</a>
             <div className="remain_anchor">
             <a className="anchor_trans" href="#swiper">Contact</a>
             <a className="anchor_trans" href="#about">About</a>
             {/* <a className="anchor_trans" href="#blog">Blog</a> */}
             </div>
          </div>
        </div>
      
      
    );
}
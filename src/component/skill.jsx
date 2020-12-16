import React from "react";
// import contents from "./component/content";
import img1 from "./images/skills.png";
export default function Skills(props){
        return (
                <div className= "ist_wrap" style={{display:"flex",flexWrap:'wrap'}} >
                <div className="ist_skill_div" data-aos="flip-right">
                    <img src={img1} alt="fireSpot" style={{height: 270, width: 270, borderRadius: 500}}/>
                </div>
                <div className="nd_skill_div" data-aos="fade-left">
                    <p className="ist_para">{props.strings}</p>
                </div>
            </div>
          
        
          
        )
        };
import React, {useState, useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import img from "./images/gulshan_mathur.jpg"
import '../style.css'
// import img1 from "./images/skills.png";
import Skills from "./skill"

export default function About(props) {
    useEffect(() => {
        const para = document.querySelectorAll(".ist_para ");
        para.forEach((text)=>{
            const strText = text.textContent;
                const splitText = strText.split("");
                text.textContent = "";

                splitText.forEach((item, index) => {
                    text.innerHTML += "<span>" + item + "</span>";
                });

                let char = 0
                let timer = setInterval(onTick, 50);

                function onTick() {
                    const span = text.querySelectorAll("span")[char];
                    span.classList.add("fade");
                    char++;
                    if (char === splitText.length) {
                        complete();
                        return;
                    }

                    function complete() {
                        clearInterval(timer);
                        timer = null;
                    }
                };

                Aos.init();
        });
            
            
    

        
    }, []);
    return (
        <section id="about">
            <div  style={{display:"flex",flexWrap:'wrap'}}>
                <div className="nd_about_div" data-aos="fade-right">
                    <p className="ist_para">{props.string}</p>
                </div>
                <div className="ist_about_div" data-aos="fade-left">
                    <img className="" src={img} alt="fireSpot" style={{height: 300, width: 300, borderRadius: 15}}/>
                </div>
            </div>
            <Skills strings= {props.string1} />
        </section>
    );
}

import React from "react";
import '../style.css';
import img from "./images/help_tech.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination} from "swiper";
import 'swiper/swiper-bundle.css';
import { BottomNavigation } from "@material-ui/core";
SwiperCore.use([Navigation, Pagination,Autoplay]);
export default function Swipers(){
     const Slides = [];
     const content= ["If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch"
                    ,"2nd line","3rd line","4rth line","5th line"];

return(
     <section id= "swiper" >
     <Swiper id="main" tag="section" wrapperTag= "ul" navigation
      pagination 
      spaceBetween={5}
      slidesPerView={1}
      autoplay={{
                    delay: 5000,
                    autoplayDisableOnInteraction:false
                }}
      onInit={(swiper)=>console.log("swiper initialized",swiper)}
      onSlideChange={(swiper)=>console.log("slide change",swiper)}
      onReachEnd={()=>console.log("swiper reached at end")}
        >
          <SwiperSlide  tag="li" >
           <div   style={{width:1000, alignSelf:"center" ,backgroundColor:"red 0", height:310, listStyle:"none"}}>
           <h1 style={{color:"#58b4ae", opacity:0.8, fontSize:"3rem", fontFamily:"Lobster , cursive"}}>I can help</h1>
           <div className="helpSection">
           <img className="help-img" src={img} alt="fireSpot" />
           <h3 style={{color:"#00FA9A", opacity:0.9,fontSize:"2rem",fontFamily:"Lobster , cursive",letterSpacing:1.1
            ,textAlign:"left"}}>
             I’m currently available for freelance work</h3>
             <p style={{ width:600,fontSize:"1.7rem",marginTop:10,marginLeft:180,
              fontFamily:"Lobster , cursive", color:"white", opacity:0.65,letterSpacing:1.1,textAlign:"left"}}>
              If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.
              </p>
              <a className="btn" href="mailto:gulshanmathur556@gmail.com">MESSAGE ME</a>
            </div>
           </div>
         </SwiperSlide>
         
         <SwiperSlide>
         <div   style={{width:1000, alignSelf:"center" ,backgroundColor:"red 0", height:310, listStyle:"none"}}>
           <h1 style={{color:"#58b4ae", opacity:0.8, fontSize:"3rem", fontFamily:"Lobster , cursive"}}>Hire Me</h1>
           <div className="helpSection">
           <h2 style={{color:"#00FA9A", opacity:0.9,fontSize:"2rem",fontFamily:"Lobster , cursive",letterSpacing:1.1, wordSpacing:10
            ,textAlign:"center"}}>
             My Projects :- <a  className="project" href="https://gulshanmathur.github.io/the-universe/">javaScript DrumKit,   </a>
             <a  className="project" href="https://github.com/Gulshanmathur/the-list">To-Do-list.</a>
              </h2>
              <h3 style={{color:"white", opacity:0.6,fontSize:"2rem",fontFamily:"Lobster , cursive",letterSpacing:1.1, wordSpacing:"normal"
            ,textAlign:"center"}}>
              If You think to hire me just call me any time.
              </h3>

             <p style={{ width:600,fontSize:"1.7rem",marginTop:10,marginLeft:180,
              fontFamily:"Lobster , cursive", color:"white", opacity:0.65,
              letterSpacing:1.1,textAlign:"left"}}>
                <h3 style={{color:"white", opacity:0.9,fontSize:"2rem",fontFamily:"Lobster , cursive",letterSpacing:1.1, wordSpacing:"normal"
            ,textAlign:"center"}}> Email Id: <e style={{color:"#00FA9A", opacity:1}}>gulshanmathur556@gmail.com</e></h3>
                <h3 style={{color:"white", opacity:0.9,fontSize:"2rem",fontFamily:"Lobster , cursive",letterSpacing:1.1, wordSpacing:"normal"
            ,textAlign:"center"}}>Phone No: <e style={{color:"#00FA9A", opacity:1}}>8585912401, 8700186162</e></h3>
              </p>
              <a  href=""></a>
            </div>
           </div>
         </SwiperSlide>
        </Swiper>
        <footer className="footer">
        <p style={{color:"white"}}>This site is based on fully React.js</p>
        <p style={{color:"white"}}>© 2018 Gulshan Mathur @The People Company</p>
        </footer>
     </section>
     
   
);

}
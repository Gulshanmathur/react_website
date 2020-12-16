import React, { useEffect } from 'react';
import Header from "./component/header";
import Para from "./component/para";
import About from "./component/about";
import Swipers from "./component/swiper";
import Social from "./component/social";
import contents from "./content";
import "./component/App.scss";

export default function App() {
  useEffect(()=>{
    window.onscroll = function() {scrollFunction()};

     function scrollFunction() {
       if (document.body.scrollTop >80 || document.documentElement.scrollTop > 80  )  {
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementsByClassName("anim_boy")[0].style.width = "60px";
        document.getElementsByClassName("anim_boy")[0].style.height = "60px";
        document.getElementsByClassName("quate")[0].style="font-size:2rem";
        }else {
       document.getElementById("navbar").style.padding = "50px 10px";
       document.getElementsByClassName("anim_boy")[0].style.width = "130px";
       document.getElementsByClassName("anim_boy")[0].style.height = "130px";
       document.getElementsByClassName("quate")[0].style="font-size:2.5rem";
       
      }
    }
 },[])
  return (
    <React.Fragment>
    <Header />
    <Para />
    <About 
     string = {contents[0].string} 
     string1 = {contents[1].string} 
    />
    <Social />
    <Swipers />
  
    </React.Fragment>
  );
  
}

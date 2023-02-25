import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Arrow from "./assets/icon-arrow.svg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero from "./components/hero";
import AboutUs from "./components/AboutUs";
import Team from "./components/OurTeam";
import NewsLetter from "./components/newsletter";
import Faq from "./components/FAQ";
import Projects from "./components/Projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AnimatedBG from "./components/AnimatedBG";
import HoverCard from "./components/HoverCard";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Maintainence from "./components/Maintainence";
import Slider from "./components/Carousal/Slider";
import ButtonToTop from "./components/ButtonTop";

function App() {
  const [count, setCount] = useState(0);
  const [maintenance , setMaintenance] = useState(false);
  const [show , setShow] = useState(false);
  const options  = {
    top: 0, 
    left : 0 , 
    smooth: "smooth"
    
  }
  const onClickHandler = ()=>{
    window.scrollTo(options);
  }

  const ShowbuttonTop = ()=>{
    if(window.scrollY > 500){
        setShow(true);
    }
    else setShow(false);
  }
  
  window.addEventListener('scroll',ShowbuttonTop);
  
  useEffect(() => {
    const tabs = document.querySelectorAll(".tab");
    const panels = document.querySelectorAll(".panel");

    // Tabs menu event listener
    const onTabClick = (Selectedtab: any) => {
      // console.log('tab clicked ')
      // console.log(Selectedtab)
      tabs.forEach((tab) => {
        tab.children[0].classList.remove("active");
      });
      Selectedtab.children[0].classList.add("active");
      // Selectedtab.classList.add('active')
      // console.log('tab clicked: '+ idx)
      const classString = Selectedtab.getAttribute("data-target");
      panels.forEach((panel) => {
        if (panel.classList.contains(classString)) {
          panel.classList.remove("hidden");
        } else panel.classList.add("hidden");
      });
    };
    tabs.forEach((tab, idx) => {
      tab.addEventListener("click", () => onTabClick(tab));
    });
  }, []);

  return (
    <>
    {
      !maintenance ? 
    <div>
      <Navbar />

    {/* <Slider/> */}
      <AnimatedBG />

      {/* <Hero /> */}

      <Services />

      <AboutUs />

      <Team />

      <Projects />
      
      <Testimonials />

      <Faq />

      <NewsLetter />

      <div className="w-full bg-mainMenu ">
        <Contact />
      </div>
      <div className={` rocket ${show?"fade-in-image":'fade-out-image'} `}>
    <ButtonToTop onclick={onClickHandler} text="Back To Top" children = {<img src ="rocket.svg" alt="ToTop"/>}/>
    </div>
      <Footer />
    </div>  : <Maintainence/>
    } 
    </>
  );
}

export default App;

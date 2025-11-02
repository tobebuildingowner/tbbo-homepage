import { useState } from 'react'
import Header from './components/Header'
import './styles/styles.scss'
import Title from './components/Title'
import Company from './pages/Company'
import WhatWedo from './pages/WhatWeDo'
import Contact from './pages/Contact'
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {

  const [onCountDown, isOnCountDown] = useState(false)
  
  useGSAP(()=>{
    
    gsap.set(["#subtitle", ".intro", ".history"], { opacity: 0 });

    const tl = gsap.timeline()
    tl.fromTo("video",  {scale: 0.9, ease: true}, {scale: 1, ease: true})
    .fromTo("#overlay",  {scale: 0.9, opacity: 0, ease: true}, {scale: 1, opacity: 1, ease: true}, "<")

    const tl2 = gsap.timeline()
    tl2.to("video", {ease: true},0)
    .to("#subtitle", {opacity: 1, duration: 0.3, ease: true}, "<")
    .to(".intro", {opacity: 1, duration: 0.3, ease: true}, "<", 0.3)
    .to(".intro", {opacity: 0, duration: 0.2, ease: true}, )
    .to(".history", {opacity: 1, duration: 0.3, ease: true}, "<0.1", 0.8)
    .call(()=>isOnCountDown(true))
    .addPause(1.5)

    ScrollTrigger.create({
        animation: tl,
        trigger: 'main',
        start: "top top",
        end: "+=2%",
        scrub: 1,
        toggleActions: 'start none reverse none',
        onComplete: () => tl2.play(),
        // markers: true,
    },);

      ScrollTrigger.create({
        animation: tl2,
        trigger: "#company-wrapper",
        start: "top top",
        end: "+=400%",
        pin: true,
        scrub: 1,
        toggleActions: 'start none reverse none',
          snap: {                
            snapTo: [0.3, 0.8],
            // duration: 0.4,
            ease: "power1.in"
        },
        markers: true,
    },);

    },[])


  return (
    <>
      <Header/>
      <main>
        <Title />
        <Company onCountDown={onCountDown}/>
        <WhatWedo/>
        <Contact/>
      </main>
    </>
  )
}

export default App

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

  
    
    useGSAP(()=>{
        
        const tl = gsap.timeline()
        tl.to("#video-container", {padding: "6.8rem 0 0 0", minWidth: "100vw", ease: true}, "<")

        const tl2 = gsap.timeline()
        tl2.to("video", { ease: true},)

        ScrollTrigger.create({
            animation: tl,
            trigger: 'main',
            start: "top top",
            end: "+=420rem",
            // pin: true,
            scrub: 1,
            toggleActions: 'play reverse restart reverse',
            // onEnter: () => tl.play(),
            onComplete: () => tl2.play(),
            // mark ers: true,
        },);

          ScrollTrigger.create({
            animation: tl2,
            trigger: "#video-container",
            start: "top top",
            end: "+=300%",
            pin: true,
            scrub: 1,
            toggleActions: 'start reverse restart reverse',
            // onEnter: () => tl2.play(),
            markers: true,
        },);

        // const master = gsap.timeline({
        //   ScrollTrigger:{
        //     trigger: "main",
        //     start: "top top",
        //     end: "+=320%",
        //     scrub: 1,
        //     toggleActions: 'start reverse restart reverse',
        //   }
        // })
        // master.add(tl)
        // master.add(tl2, ">")

    },[])


  return (
    <>
      <Header/>
      <main>
        <Title />
        <Company/>
        <WhatWedo/>
        <Contact/>
      </main>
    </>
  )
}

export default App

import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import './styles/styles.scss'
import Title from './components/Title'
import Company from './pages/Company'
import WhatWeDo from './pages/WhatWeDo'
import Proposal from './pages/Proposal'
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from './components/Footer'
import { inputColumns, managementFeature, rentFeature, tradeFeature } from './constants/constants'

gsap.registerPlugin(ScrollTrigger);

function App() {

  const [onCountDown, isOnCountDown] = useState(false)
  const refs = useRef({company:null, whatWeDo: null, proposal: null, contact:null})
  
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
      end: "+=300%",
      pin: true,
      scrub: 1,
      toggleActions: 'start none reverse none',
        snap: {                
          snapTo: [0.3, 0.6],
          ease: "power1.in"
      },
      // markers: true,
    },);
    
    gsap.set("[class^='feature-box'], [id$='-img']", { x: '30%', opacity: 0 }); 
      
    const tl3 = gsap.timeline({scrollTrigger:{
      trigger: '#whatWeDo-description1',
      start: "top center+=20%",
      // end: "+=100%",
      scrub: false,
      // markers: true,
    }})
    tradeFeature.forEach((_, i) => {
      tl3.to(
          `#trade_${i}`,
          { duration: 0.3, opacity: 1, x: 0, ease: "power2.in" },
          i === 0 ? undefined : "<0.1")
    })
    tl3.to("#trade-img", {duration: 0.3, opacity: 1, x:0, ease: "power2.in"}, "<")

    const tl4 = gsap.timeline({scrollTrigger:{
      trigger: '#whatWeDo-description2',
      start: "top center+=20%",
      // end: "+=100%",
      scrub: false,
      // markers: true,
    }})
    rentFeature.forEach((_, i) => {
      tl4.to(
          `#rent_${i}`,
          { duration: 0.3, opacity: 1, x: 0, ease: "power2.in" },
          i === 0 ? undefined : "<0.1")
    })
    tl4.to("#rent-img", {duration: 0.3, opacity: 1, x:0, ease: "power2.in"}, "<")

    const tl5 = gsap.timeline({scrollTrigger:{
      trigger: '#whatWeDo-description3',
      start: "top center+=20%",
      // end: "+=100%",
      scrub: false,
      // markers: true,
    }})
    managementFeature.forEach((_, i) => {
      tl5.to(
          `#management_${i}`,
          { duration: 0.3, opacity: 1, x: 0, ease: "power2.in" },
          i === 0 ? undefined : "<0.1")
    })
    tl5.to("#management-img", {duration: 0.3, opacity: 1, x:0, ease: "power2.in"}, "<")

    gsap.set("[class^='proposal']", { y: '100%', opacity: 0 }); 
      
    const tl6 = gsap.timeline({scrollTrigger:{
      trigger: '#proposal',
      start: "top center",
      // end: "+=100%",
      scrub: false,
      // markers: true,
    }})
    tl6.to(".title", {duration: 0.3, opacity: 1, y:0, ease: "power2.in"})
    tl6.to(".subtitle", {duration: 0.3, opacity: 1, y:0, ease: "power2.in"}, "<0.1")
    tl6.to("#tabs", {duration: 0.3, opacity: 1, y:0, ease: "power2.in"}, "<0.1")
    inputColumns.forEach((_, i) => {
      tl6.to(
          `#proposal_${i}`,
          { duration: 0.3, opacity: 1, y: 0, ease: "power2.in" },
          "<0.1")
    })
    tl6.to("#send-button", {duration: 0.3, opacity: 1, y:0, ease: "power2.in"}, "<0.1")

  },[])
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <>
      <Header refs={refs}/>
      <main>
        <Title ref={(el) => (refs.current.company = el)}/>
        <Company onCountDown={onCountDown}/>
        <WhatWeDo ref={(el) => (refs.current.whatWeDo = el)}/>
        <Proposal ref={(el) => (refs.current.proposal = el)}/>
        <Footer ref={(el) => (refs.current.contact = el)}/>
      </main>
    </>
  )
}

export default App

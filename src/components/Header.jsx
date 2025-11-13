import { menuList } from "../constants/menuList";
import CI from "../assets/images/CI_full.png"
import { YoutubeFilled } from "@ant-design/icons";
import { useState } from "react";

export default function Header({refs}) {

    const [isOpenMenu, setIsOpenMenu] =useState(false)
    
    const handleClick = (key) => {
        const el = refs.current[key]
        if (!el) return
        console.log(key)
        el.scrollIntoView({ behavior: "smooth" })
    }

    return(
        <div id={`header-wrapper`} className={isOpenMenu?"on":"off"}>
            
            <header>
                <img onClick={()=>handleClick('company')} src={CI} alt="CI"/>
                
                <div id={`menu`}>
                    {Object.values(menuList).map((v)=>(
                        <div onClick={()=>handleClick(v.ref)} key={v.ref}>{v.menu}</div>
                    ))}
                </div>
                
                <div onClick={()=>setIsOpenMenu(v=>!v)} id={`menu-folded`} className={isOpenMenu?"on":"off"}>
                    <span/><span/><span/>
                </div>
               
                <div className={`overlay header ${isOpenMenu? "on":"off"}`}/>
            </header>
            
            <div id={`menu-mobile`} className={`${isOpenMenu?"":"off"}`}>
                {Object.values(menuList).map((v)=>(
                    <div onClick={()=>handleClick(v.ref)} key={v.ref}>{v.menu}</div>
                ))}
                <a className={`header`} href="https://www.youtube.com/@building_owner" target="_blank" rel="noopener noreferrer">Youtube <YoutubeFilled/></a>
            </div>

        </div>
    )
} 
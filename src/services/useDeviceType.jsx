import { useEffect, useState } from "react";

export default function useDeviceType () {

    const [device, setDevice] = useState("desktop")
    
    const getDeviceType = () => {
        
        const width = window.innerWidth;
        
        if (width <= 480)
            return "mobile"
        else if (width <= 1200)
            return "tablet"
        else
            return "desktop"
    }

    useEffect(()=>{
        const handleResize = () => {
            setDevice(getDeviceType());
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // 최초 실행

        return ()=>{
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return device
}
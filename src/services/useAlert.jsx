import { useEffect, useState } from "react";

export default function useAlert () {

    const [isAlertOn, setIsAlertOn] = useState(false)
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const [alertType, setAlertType] = useState("")

    useEffect(()=>{
        if (!alertType)
            return;
        if (isButtonClicked) {
            setIsAlertOn(true)
            setTimeout(()=>{setIsButtonClicked(false); setIsAlertOn(false)}, alertType!=='send'|"error"? 1000 : 2000)
        }
    }, [alertType, isButtonClicked]) 

    useEffect(()=>{
        return ()=> {
            setIsAlertOn(false)
            setAlertType("");
            setIsButtonClicked(false)
        }
    }, [])

    return {isAlertOn, setIsButtonClicked, alertType, setAlertType}
}
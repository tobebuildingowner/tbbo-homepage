import { useEffect, useState } from "react";

export default function useAlert () {

    const [isAlertOn, setIsAlertOn] = useState(false)
    const [isClickedButton, setIsClickedButton] = useState(false)
    const [alertType, setAlertType] = useState("")

    useEffect(()=>{
        if (!alertType)
            return;
        if (isClickedButton) {
            setIsAlertOn(true)
            setTimeout(()=>{setIsClickedButton(false); setIsAlertOn(false)}, alertType!=='send'? 1000 : 2000)
        }
    }, [alertType, isClickedButton]) 

    useEffect(()=>{
        return ()=> {
            setIsAlertOn(false)
            setAlertType("");
        }
    }, [])

    return {isAlertOn, setIsClickedButton, alertType, setAlertType}
}
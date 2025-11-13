import { forwardRef, useState } from "react"
import { YoutubeFilled } from "@ant-design/icons"
import CI from "../assets/images/CI_full.png"
import CI_icon from "../assets/images/CI_icon.png"
import useDeviceType from "../services/useDeviceType"
import { Alert } from "./components"
import useAlert from "../services/useAlert"

const Footer = forwardRef(function Footer (_,ref) {
    
    const device = useDeviceType();
    const { isAlertOn, setIsButtonClicked, alertType, setAlertType } = useAlert();
    
    function handleClickContact (id) {
            if (device==='mobile'&& id==='phone') {
                // console.log('mobile!')
                window.location.href = `tel:025578075`;
            } else {
                navigator.clipboard.writeText(id==="phone"? '02-557-8075' : "강남구 논현동 115-7")
                .then(() => {
                    setAlertType(id)
                    setIsButtonClicked(true)
                }).catch((err) => {
                    console.error("복사 실패:", err);
              });
            }
        }
        
    
    
    return (
        <section id="footer-wrapper">
            <footer ref={ref}>
                <img id={`ci`} src={CI} alt="CI"/>
                <img id={`ci-mobile`} src={CI_icon} alt="CI"/>
                <div>
                    <span onClick={()=>handleClickContact('address')}>서울 강남구 논현동 115-7, 미성빌딩 1층</span><br/>
                    <span onClick={()=>handleClickContact('phone')}>02.557.8075</span><br/>
                    <a href="https://www.youtube.com/@building_owner" target="_blank" rel="noopener noreferrer">Youtube <YoutubeFilled/></a>
                    <span>©내일은건물주부동산중개법인 Co., Ltd. all rights reserved.</span>
                </div>
            </footer>

            <Alert isAlertOn={isAlertOn} alertType={alertType}/>
        </section>
        )
    }
)
export default Footer;
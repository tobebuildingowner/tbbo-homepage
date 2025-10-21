import { YoutubeOutlined } from "@ant-design/icons"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { tabs, valueInit } from "../constants/constants"

export default function Contact () {

    const [selectedTab, setSelectedTab] = useState(tabs[0])
    const [inputValues, setInputValues] = useState(valueInit)

    function handleInputValueChange (e) {
        const {id, value} = e.target
       setInputValues((prev)=>({
        ...prev, [id]:value
       }))
    }

    useEffect(()=>{
        
    }, [inputValues])

    return (

        <section id='contact'>

            <div>
                CONTACT
            </div>
            <div>연락처를 남겨주시면 빠르게 회신드리겠습니다.</div>


            <ul id="tabs">
                {tabs.map((item, i) => (
                    <motion.li
                        key={i}
                        initial={false}
                        animate={{
                            backgroundColor:
                                item === selectedTab ? "#690909ff" : "#e3e3e3ff",
                            color:
                                item === selectedTab ? "#FFFFFF" : "#2e2e2e",
                        }}
                        onClick={() => setSelectedTab(item)}
                    >
                        {item}
                        {item === selectedTab ? (
                            <motion.div
                                // style={underline}
                                layoutId="tabs"
                                id="underline"
                            />
                        ) : null}
                    </motion.li>
                ))}
            </ul>

            <label>
                성함
                <input id="name" value={inputValues.name} onChange={(e)=>handleInputValueChange(e)}/>
            </label>

            <label>
                연락처
                <input id="phoneNumber" value={inputValues.phoneNumber} onChange={(e)=>handleInputValueChange(e)}/>
            </label>
            
            <label>
                문의 내용
                <input id="content" value={inputValues.content} onChange={(e)=>handleInputValueChange(e)}/>
            </label>


            <div>
                서울 강남구 논현동 115-7, 미성빌딩 1층
            </div>
            <div>
                02.3452.5877
            </div>
            <div>Youtube <YoutubeOutlined /></div>

        </section>

    )
}
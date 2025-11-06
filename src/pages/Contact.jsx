import { SendOutlined, YoutubeOutlined } from "@ant-design/icons"
import { motion } from "motion/react"
import { forwardRef, useEffect, useState } from "react"
import { inputColumns, tabs, valueInit } from "../constants/constants"
import { addHyphenToPhoneNo } from "../utils/utils"

const Contact = forwardRef(function Contact (_, ref) {

    const [selectedTab, setSelectedTab] = useState(tabs[0])
    const [inputValues, setInputValues] = useState(valueInit)

    function handleInputValueChange (e) {
        const {id, value} = e.target;
       setInputValues((prev)=>({
        ...prev, [id]:id==='phoneNumber'? addHyphenToPhoneNo(value) : value
    }))}

    useEffect(()=>{
        setInputValues((prev)=>({
            ...prev, type: selectedTab
        }))
    }, [selectedTab])

    useEffect(()=>{
        return ()=> {
            setInputValues(valueInit);
            // setModalMessage("");
        }
    }, [])

    return (

        <section id='contact' ref={ref}>
            
            <div>
                <div className="title">CONTACT</div>
                <div className="subtitle">연락처를 남겨주시면 빠르게 회신드리겠습니다.</div>

                <ul id="tabs">
                    {tabs.map((item, i) => (
                        <motion.li
                            key={i}
                            initial={false}
                            animate={{
                                backgroundColor:
                                    item === selectedTab ? "#cc6e6eff" : "#edededff",
                                color:
                                    item === selectedTab ? "#FFFFFF" : "#2e2e2e",
                                fontWeight:
                                    item === selectedTab ? 700 : 400,
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

                {inputColumns.map((v, i)=>(
                    <label key={i}>
                        {v.title}
                        {v.id!=='content'?
                            <input id={v.id} value={inputValues[v.id]} onChange={(e)=>handleInputValueChange(e)}/>
                            :<textarea id={v.id} value={inputValues[v.id]} onChange={(e)=>handleInputValueChange(e)}/>
                        }
                    </label>
                ))}
            </div>

            <button>
                문의하기
                <SendOutlined rotate={-45} />
            </button>


            <article>
                <div>
                    이미지
                </div>
                <div>
                    <div>
                        서울 강남구 논현동 115-7, 미성빌딩 1층
                    </div>
                    <div>
                        02.3452.5877
                    </div>
                    <div>Youtube <YoutubeOutlined /></div>
                </div>
            </article>
        </section>

    )
}
)
export default Contact;
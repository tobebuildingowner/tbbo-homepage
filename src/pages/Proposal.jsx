import { RightOutlined } from "@ant-design/icons"
import { motion } from "motion/react"
import { forwardRef, useEffect, useState } from "react"
import { inputColumns, tabs, valueInit } from "../constants/constants"
import { addHyphenToPhoneNo } from "../utils/utils"
import { Alert } from "../components/components"
import useAlert from "../services/useAlert"

const Proposal = forwardRef(function Proposal (_, ref) {

    const [selectedTab, setSelectedTab] = useState(tabs[0])
    const [inputValues, setInputValues] = useState(valueInit)
    const { isAlertOn, setIsClickedButton, alertType, setAlertType } = useAlert();


    function handleInputValueChange (e) {
        const {id, value} = e.target;
       setInputValues((prev)=>({
        ...prev, [id]:id==='phoneNumber'? addHyphenToPhoneNo(value) : value
    }))}
    function handleClickSend () {
        setAlertType("send")
        setInputValues(valueInit)
        setIsClickedButton(true)
    }

    useEffect(()=>{
        setInputValues((prev)=>({
            ...prev, type: selectedTab
        }))
    }, [selectedTab])

    useEffect(()=>{
        return ()=> {
            setInputValues(valueInit);
        }
    }, [])

    return (

        <section id='contact' ref={ref}>
            
            <div>
                <div className="title">제안하기</div>
                <div className="subtitle">연락처를 남겨주시면 빠르게 회신드리겠습니다.</div>

                <ul id="tabs">
                    {tabs.map((item, i) => (
                        <motion.li
                            key={i}
                            initial={false}
                            animate={{
                                backgroundColor:
                                    item === selectedTab ? "#e93737" : "#edededff",
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

            <div id="send-button">
                <button onClick={handleClickSend}>
                    제안하기 <RightOutlined />
                </button>
            </div>

            <Alert isAlertOn={isAlertOn} alertType={alertType}/>
        </section>

    )
}
)
export default Proposal;
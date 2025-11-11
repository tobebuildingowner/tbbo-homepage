import { RightOutlined } from "@ant-design/icons"
import { motion } from "motion/react"
import { forwardRef, useEffect, useState } from "react"
import { inputColumns, tabs, valueInit } from "../constants/constants"
import { addHyphenToPhoneNo } from "../utils/utils"
import { Alert } from "../components/components"
import useAlert from "../services/useAlert"
import handleSendEmail from "../services/sendEmail"

const Proposal = forwardRef(function Proposal (_, ref) {

    const [inputValues, setInputValues] = useState(valueInit)
    const { isAlertOn, setIsButtonClicked, alertType, setAlertType } = useAlert();


    function handleInputValueChange (e) {
        const {id, value, innerText} = e.target;
       setInputValues((prev)=>({
            ...prev, [id]:id==='phoneNumber'? addHyphenToPhoneNo(value) : id==='type'? innerText : value
        }))
    }

    async function handleClickSend () {

        if (!inputValues.name || !inputValues.phoneNumber || !inputValues.content) {
            setAlertType("empty")
            setIsButtonClicked(true)
            return
        }
        
        const result = await handleSendEmail(inputValues)

        if (result.success) {
        // if (true) {
            setAlertType("send")
            setInputValues(valueInit)
        } else {
            setAlertType("error")
        }
        setIsButtonClicked(true)
    }

    useEffect(()=>{
        return ()=> {
            setInputValues(valueInit);
        }
    }, [])

    return (

        <section id='proposal' ref={ref}>
            
            <div>
                <div className="proposal title">제안하기</div>
                <div className="proposal subtitle">연락처를 남겨주시면 빠르게 회신드리겠습니다.</div>

                <ul id="tabs" className="proposal">
                    {tabs.map((item, i) => (
                        <motion.li
                            key={i}
                            initial={false}
                            id={'type'}
                            animate={{
                                backgroundColor:
                                    item === inputValues.type ? "#e93737" : "#edededff",
                                color:
                                    item === inputValues.type ? "#FFFFFF" : "#2e2e2e",
                                fontWeight:
                                    item === inputValues.type ? 700 : 400,
                            }}
                            onClick={(e) => handleInputValueChange(e)}
                        >
                            {item}
                            {item === inputValues.type ? (
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
                    <label className={`proposal`} id={`proposal_${i}`} key={i}>
                        {v.title}
                        {v.id!=='content'?
                            <input value={inputValues[v.id]} id={v.id} onChange={(e)=>handleInputValueChange(e)}/>
                            :<textarea value={inputValues[v.id]} id={v.id} onChange={(e)=>handleInputValueChange(e)}/>
                        }
                    </label>
                ))}
            </div>

            <div className={`proposal`} id="send-button">
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
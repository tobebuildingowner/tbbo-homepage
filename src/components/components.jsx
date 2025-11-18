import { CheckCircleFilled } from "@ant-design/icons";

export const Alert = ({isAlertOn, alertType}) => {
    return (
        <span className={`alert ${alertType} ${isAlertOn? "on" : "off"}`}>
            <CheckCircleFilled />
            {alertType==='send'? "문의사항이 접수되었습니다.\n최대한 빠른 시일 내에 연락드리겠습니다." :
            alertType==="error"? "오류가 발생했습니다. 유선으로 연락 바랍니다." :
            alertType==="empty"? "모든 항목을 입력해주세요." :
            "복사되었습니다."}
        </span>
    )
}


export const LoadingDots= ({isLoaded}) => {
    return (
        <div id="loading-dots" className={isLoaded? "off":"on"}>
            loading...
            <div>
                <span/>
                <span/>
                <span/>
            </div>
        </div>
    )
}
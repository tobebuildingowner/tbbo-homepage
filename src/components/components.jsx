import { CheckCircleFilled } from "@ant-design/icons";

export const CircularText = ({className}) => (
    <svg className={className}
    width="150"
    height="150"
    viewBox="0 0 180 180"  // x, y, width, height
    xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            {/* 중심(75,95), 반지름 60짜리 원형 경로 정의 */}
            <path
            id="circlePath"
            d="
                M75,95
                m-60,0
                a25,25 0 1,1 150,0
                a25,25 0 1,1 -150,0
            "
            />
        </defs>

        <text
            fill="white"
            fontSize="16"
            fontWeight="700"
            letterSpacing="4.5"
        >
            <textPath
                href="#circlePath"
                startOffset="50%"      /* 텍스트 중앙 정렬 */
                textAnchor="middle"    /* 중앙 기준 정렬 */
            >
            - Trustworthy partner – Eum Property
            </textPath>
        </text>
    </svg>
);

export const Alert = ({isAlertOn, alertType}) => {
    return (
        <span className={`alert ${alertType} ${isAlertOn? "on" : "off"}`}>
            <CheckCircleFilled />
            {alertType!=='send'? "복사되었습니다." : "문의사항이 접수되었습니다.\n최대한 빠른 시일 내에 연락드리겠습니다."}
        </span>
    )
}
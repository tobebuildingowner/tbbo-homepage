import { useNavigate } from "react-router-dom";
import CIBlack from "../assets/image/CI_eum_black.png"
import NewWindow from "../assets/image/icon_new_window.png"
import { featureList } from "../constants/company";
import { whatWeDoList } from "../constants/whatWeDo";
import { CaretRightOutlined, PictureOutlined } from "@ant-design/icons";

// export const Title = ({title}) => {

//     const navigate = useNavigate();
    
//     return (
//         <header className={`title`}>
//             <img src={CIBlack} alt="CI" onClick={()=>{navigate("/");}}/>
//             <span>{title}</span>
//         </header>
//     )
// }

// export const CustomInput = ({label, id, value, onChange}) => (
//     <div className={`custom-input ${id==="contents"? "bigger":""}`}>
//         <label>
//             {label}
//             <span> *</span>
//         </label>
//         {id==="contents"?
//         <textarea id={id} value={value} onChange={onChange}/>
//         :<input id={id} value={value} onChange={onChange} placeholder={id==="phone"?`'-' 제외, 숫자만 입력해주세요`:""}/>
//         }
//     </div>
// )

// export const CustomRadio = ({inputValue, label, id, valueList, onClick}) => (
//     <div className={`custom-radio`}>
//         <div>
//             {label}<span> *</span>
//         </div>
//         <div>
//             {valueList.map((v, _)=>(
//                 <span onClick={onClick} id={id} className={inputValue===v.value?"on":""} key={v.id}>{v.value}</span>
//             ))}
//         </div>
//     </div>
// )

// export const FeatureItem = ({index, subtitle, content}) => (
//     <div id={`item_${index}`} className={`feature-item ${index===featureList.length-1?"":"border"}`}>
//         <span>{subtitle}</span><br/>
//         <span>{content}</span>
//     </div>
// )


// export const HistoryItem = ({year, content, index}) => (
//     <div className={`history-item ${index%2===0?"right":"left"}`}>
//         <div>{year}</div>
//         {content.map((v, i)=>(
//             <span id={`h_${year}_${i}`} key={i}>{v}</span> // id는 숫자로 시작하면 안됨
//         ))}
//     </div>
// )

// export const TaskItem = ({index, part, description, task}) => (
//     <div id={`task_${index}`} className={`task-item ${index===whatWeDoList.length-1?"":"border"}`}>
//         <span>{part}</span>
//         <span>{description}</span>
//         <span>{task}</span>
//     </div>
// )

// export const Divider = ({text}) => (
//     <div className={`divider`}>
//         <span>{text}</span>
//         <span><CaretRightOutlined /> <CaretRightOutlined /> <CaretRightOutlined /></span>
//     </div>
// )

// export const ProjectCard = ({id, src, rent=false, title, description="", onClick}) => (
//     <article id={`card_${id}${rent?"_r":""}`} className={`${rent? "rent":""} project-card`} onClick={rent? ()=>{}:onClick}>
//         <div className={src? "":"none-image"}>
//             {src?<img src={src} loading="lazy" alt="building image"/>
//             :<PictureOutlined />}
//         </div>
//         <div>
//             <span className={`${rent? "rent":""}`}>{title}
//                 {!rent &&<img src={NewWindow} alt="open modal"/>}
//             </span>
//             {rent && <span>{description}</span>}
//         </div>
//     </article>
// )

// export const DetailTask = ({id, title, contents}) => (
//     <div id={`detail_${id}`}>
//         <span>{title}</span>
//         <span>{contents}</span>
//     </div>
// )

// export const WhatWeDoItem = ({title, title_ex, subtitle, tasks, images}) => (
//     <div className={`task-detail`}>
//         <span>{title} <span>{title_ex}</span></span><br/>
//         <span>{subtitle}</span><br/>
//         <div id={`detail_${title}_0`}>
//             {images.map((v, i)=>(
//                 <img src={v} key={i} alt={`${title}_${i}`}/>
//             ))}
//         </div>
//         {tasks.map((v, i)=>(
//             <DetailTask key={i} id={`${title}_${i+1}`} title={v.title} contents={v.contents} />
//         ))}
//     </div>
// )

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

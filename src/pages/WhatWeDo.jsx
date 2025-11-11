import { managementFeature, rentFeature, tradeFeature } from '../constants/constants'
import imgTrading from "../assets/images/img_wwd1.png"
import imgRent from "../assets/images/img_wwd2.png"
import imgManagement from "../assets/images/img_wwd3.png"
import { forwardRef } from 'react'



const WhatWeDo = forwardRef(function WhatWeDo(_, ref) {

    const periodOfWorking = new Date().getFullYear() - 2006
    
    return(

        <section id='whatWeDo-wrapper' ref={ref}>

           {/* trade */}
            <div className='whatWeDo-grid'>
                <div>
                    <p id={`trade-description`}>우리가 하는 일<br/><span>매입매각 컨설팅</span></p>
                    <div id={`trade-sub-description`}>강남 부동산 전문가가 가장 신뢰할 수 있는 시세와 물건 리스트를 제공합니다.<br/>
                    어떤 케이스든 최상의 해답을 드립니다.</div><br/>
                    {tradeFeature.map((v, i)=>(
                        <div className='feature-box' id={`trade_${i}`} key={i}>{v}</div>
                    ))}
                </div>

                <img id={`trade-img`} src={imgTrading} alt="image trading" />
            </div>

            {/* rent */}
            <div className='whatWeDo-grid'>
                <div>
                    <p id={`rent-description`}>우리가 하는 일<br/><span>임대 컨설팅</span></p>
                    <div id={`rent-sub-description`}>{periodOfWorking}년 강남 부동산 중개 노하우로 최대의 임대수익을 실현할 솔루션을 제안합니다.</div><br/>
                    {rentFeature.map((v, i)=>(
                        <div className='feature-box' id={`rent_${i}`} key={i}>{v}</div>
                    ))}
                </div>

                <img id={`rent-img`} src={imgRent} alt="image Rent" />
            </div>

            {/* managemrent */}
            <div className='whatWeDo-grid'>
                <div>
                    <p id={`management-description`}>우리가 하는 일<br/><span>건물 관리</span></p>
                    <div id={`management-sub-description`}>건물과 먼 곳에 거주해도, 건물에 대해 잘 몰라도 문제 없는 원스탑 서비스를 제공합니다.</div><br/>
                    {managementFeature.map((v, i)=>(
                        <div className='feature-box' id={`management_${i}`} key={i}>{v}</div>
                    ))}
                </div>

                <img id={`management-img`} src={imgManagement} alt="image management" />
            </div>
        
        </section>
    )
} 

)
export default WhatWeDo;
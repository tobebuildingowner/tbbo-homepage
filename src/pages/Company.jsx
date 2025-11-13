import CountDown from '../components/CountDown'
import video01 from '../assets/video_01.mp4'

export default function Company({onCountDown}) {


    return(

        <section id='company-wrapper'>
            {/* video */}
            <video autoPlay muted loop playsInline>
                <source
                    src={video01}
                    type="video/mp4"/>
            </video>
            <div className={`overlay`} id={`overlay`}/>
            
            {/* grid */}
            <div className='grid-layout'>
                {/* subtitle */}
                <p id={`subtitle`}>회사 소개</p>

                {/* content */}
                <div>    
                    <div className={`company intro`}>
                        <span>'부동산'이란 산업에 미래를 건 젊은이들이<br/>
                        한자리에 모였습니다.</span><br/>
                        <br/>
                        <span>내일은건물주부동산중개법인</span>은<br/>
                        '빌딩 매매 서비스'를 중심으로<br/>
                        젊은 구성원들이 영향력을 맘껏 발휘할 수 있고,<br/>
                        이와 관련된 Contents를 활용해<br/>
                        여려 형태의 유무형 가치를 만들어가고 있는 회사입니다.<br/>
                    </div>

                    <div className={`company history`}>
                        <span>since</span>
                        <CountDown onCountDown={onCountDown}/>
                        <div><span>2006</span><br/>수부동산 창립</div>
                        <div><span>2017</span><br/>수부동산중개법인(주) 설립</div>
                        <div><span>2025</span><br/>내일은건물주(주)로 사명 변경</div>
                    </div>
                </div>
            </div>
        
        </section>
    )
} 
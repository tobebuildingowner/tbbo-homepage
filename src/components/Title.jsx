import { forwardRef } from "react"

const Title = forwardRef(function Title (_,ref) {
        return (
            <section id="title" ref={ref}>
                <div>
                    바로 내일, 당신이 건물주가 됩니다.
                </div>
            </section>
        )
    }
)
export default Title;
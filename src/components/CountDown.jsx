import { animate, useMotionValue, useTransform, motion, useInView } from "motion/react"
import { useEffect, useRef } from "react"

export default function CountDown ({onCountDown}) {

    const ref = useRef()
    const count = useMotionValue(new Date().getFullYear())
    const rounded = useTransform(() => Math.round(count.get()))

    const isInView = useInView(ref, {once:true})

    useEffect(() => {
        if (onCountDown) {
            const controls = animate(count, 2006, { duration: 2, ease: 'easeOut'})
            return () => controls.stop()
        }
    }, [isInView, onCountDown])

    return (
    <div id="count-down">
        {onCountDown && <motion.pre ref={ref}>{rounded}</motion.pre>}
    </div>
    )
}
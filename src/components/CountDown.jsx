import { animate, useMotionValue, useTransform, motion, useInView } from "motion/react"
import { useEffect, useRef } from "react"

export default function CountDown () {

    const ref = useRef()
    const count = useMotionValue(new Date().getFullYear())
    const rounded = useTransform(() => Math.round(count.get()))

    const isInView = useInView(ref, {once:true})

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, 2006, { duration: 2, ease: 'easeOut'})
            return () => controls.stop()
        }
    }, [isInView])

    return <motion.pre ref={ref} id="count-down">{rounded}</motion.pre>
}
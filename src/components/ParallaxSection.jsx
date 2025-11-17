import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxSection({ children, strength = 120, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength])

  return (
    <section ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </section>
  )
}

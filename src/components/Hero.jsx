import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center">
      <motion.div className="absolute inset-0" style={{ y }}>
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <motion.div className="relative z-10 w-full" style={{ opacity }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 py-24">
          <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-sm border border-white/60 w-fit">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Available for Q1 workshops & advisory
            </motion.div>
            <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
              Practical Generative AI for Real Business Impact
            </motion.h1>
            <motion.p variants={item} className="text-gray-700 text-lg">
              Workshops and hands-on implementation to help your teams ship AI use-cases fast — securely, responsibly, and tied to measurable outcomes.
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-black">Book a discovery call</a>
              <a href="#workshops" className="inline-flex items-center rounded-full bg-white/80 backdrop-blur border border-white/60 px-5 py-3 text-sm font-medium hover:bg-white">Explore workshops</a>
            </motion.div>
            <motion.div variants={item} className="flex items-center gap-6 pt-3">
              <div className="text-sm text-gray-700">
                <div className="font-semibold">70+ organizations</div>
                <div>2,000+ professionals trained</div>
              </div>
              <div className="h-8 w-px bg-gray-300" />
              <div className="text-sm text-gray-700">
                Rated 4.9/5 by participants
              </div>
            </motion.div>
          </motion.div>
          <motion.div className="lg:pl-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}>
            <div className="relative mx-auto w-44 h-44 rounded-full overflow-hidden border-4 border-white/60 shadow-xl">
              <img src="https://media.licdn.com/dms/image/v2/D4D03AQF1FQ4Iazl6Hg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708255358883?e=1764806400&v=beta&t=ZHUqwFqi4yA4eSQMxskc7javuoYvtr6XgbdiduGTCVA" alt="Ben Rotenberg" className="object-cover w-full h-full" />
            </div>
            <div className="mt-6 rounded-2xl bg-white/80 backdrop-blur border border-white/60 p-6 shadow">
              <div className="text-sm text-gray-700">Generative AI Consultant</div>
              <div className="text-lg font-semibold">Practical AI Workshops & Implementation</div>
              <div className="text-sm text-gray-600">Speaker • Tel Aviv District, Israel</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-white/70 via-white/30 to-transparent" />
    </section>
  )
}

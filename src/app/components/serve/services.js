'use client'

import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'
import { useRef } from 'react'

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function Image({ id }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <section className="img-container w-full max-w-screen-lg bg-amber-200">
      <div ref={ref}>
        <img src={`/stock-photo/${id}.jpg`} alt="A London skyscraper" />
      </div>
      <motion.h2
        // Hide until scroll progress is measured
        initial={{ visibility: 'hidden' }}
        animate={{ visibility: 'visible' }}
        style={{ y }}
        className="text-shadow-lg/35"
      >{`services`}</motion.h2>
    </section>
  )
}

export default function Parallax() {
  const { scrollYProgress } = useScroll()
  useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    restSpeed: 0.001,
    opacity: 1,
  })

  return (
    <div id="example" className="sm:coloumns-1 md:columns-2 lg:columns-3">
      {[
        'eco-warrior-princess-TsOeGUwWzWo-unsplash',
        'eco-warrior-princess-TsOeGUwWzWo-unsplash',
        'eco-warrior-princess-TsOeGUwWzWo-unsplash',
        'eco-warrior-princess-TsOeGUwWzWo-unsplash',
        'eco-warrior-princess-TsOeGUwWzWo-unsplash',
      ].map((image, idx) => (
        <Image key={idx} id={image} />
      ))}
      {/* <motion.div className="progress" style={{ scaleX }} /> */}
      <StyleSheet />
    </div>
  )
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
  return (
    <style>{`

        .img-container {
            border-radius: 20px;
            margin-top: 50px;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: 300px;
            height: 400px;
            margin: 20px;
            background: #1e3a8a;
            overflow: hidden;
        }

        .img-container img {
            width: 300px;
            height: 400px;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }

            .img-container img {
                width: 150px;
                height: 200px;
            }
        }

        .img-container h2 {
            color: #1e3a8a;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: #1e3a8a;
            bottom: 50px;
            transform: scaleX(0);
        }
    `}</style>
  )
}

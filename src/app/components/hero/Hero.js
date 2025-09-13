import React from 'react'
import * as motion from 'motion/react-client'
import './Hero.css'

export default function Hero() {
  const heroImageUrl = 'A1-logo.jpg'
  const heroImageUrl2 = './stock-photo/istockphoto-165831199-612x612.jpg' // IGNORE
  const heroImageUrl3 = './stock-photo/tekton-FuS7lYI8dNE-unsplash.jpg' // IGNORE
  const heroImageUrl4 =
    './stock-photo/roger-starnes-sr-8Kk5C2FLCV0-unsplash.jpg' // IGNORE
  const heroImageUrl5 = './stock-photo/ryan-nicoll-Su0SedcyOkQ-unsplash.jpg' // IGNORE
  return (
    <div
      style={{ backgroundImage: `url(${heroImageUrl5})` }}
      className={`flex h-[calc(100vh-200px)] min-h-[400px] flex-col items-center justify-center bg-cover bg-fixed bg-bottom bg-no-repeat`}
    >
      <div className="rounded-xl px-8 py-2 text-center">
        <div className="relative">
          {/* <img src="" width={175} height={175} /> */}
          <motion.h1
            className="archivo-font text-5xl font-extrabold text-zinc-50 text-shadow-lg/35 md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* <h1 className="text-5xl font-extrabold text-zinc-50 text-shadow-lg/35 md:text-6xl lg:text-7xl"> */}
            Fast, Reliable Lawnmower
            <br /> Repair & Maintenance
            {/* </h1> */}
          </motion.h1>
        </div>
      </div>
    </div>
  )
}

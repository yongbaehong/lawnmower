import React from 'react'
import * as motion from 'motion/react-client'
import './Hero.css'

export default function Hero() {
  const heroImageUrl4 = './stock-photo/pexels-public-domain-pictures-41324.jpg' // IGNORE
  const heroImageUrl5 = './stock-photo/pexels-fox-58267-212324.jpg' // IGNORE
  return (
    <div
      style={{ backgroundImage: `url(${heroImageUrl5})` }}
      className={`flex h-[calc(100vh-200px)] min-h-[400px] flex-col items-center justify-center bg-cover bg-fixed bg-bottom bg-no-repeat`}
    >
      <div className="rounded-xl px-8 py-2 text-center">
        <div className="relative">
          <motion.h1
            className="archivo-font text-5xl font-extrabold text-zinc-50 text-shadow-lg/35 md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Fast, Reliable Lawnmower
            <br /> Repair & Maintenance
          </motion.h1>
        </div>
      </div>
    </div>
  )
}

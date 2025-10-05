'use client'

import React from 'react'
import * as motion from 'motion/react-client'
import { useInView } from 'react-intersection-observer'

export const FadeInYAxis = ({
  children,
  delay = 0,
  thresholdPercentage,

  dirAmount,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: thresholdPercentage, // how much of section must be visible
  })
  const variants = {
    hidden: { opacity: 0, y: dirAmount },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay },
    },
  }
  // console.log(variants)
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, visible: 'hidden' }}
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className="mx-auto my-5 w-full max-w-screen-lg rounded-2xl bg-white p-8 shadow-xl"
    >
      {children}
    </motion.section>
  )
}

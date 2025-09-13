'use client'

import { motion } from 'motion/react'
import { useEffect, useState, useRef } from 'react'

export default function Parallax({ layers = [], height = '100vh' }) {
  const containerRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // progress now can go beyond 1 (keeps increasing as you scroll past)
      const p = 1 - rect.top / windowHeight
      setProgress(p)
    }

    handleScroll() // run once
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height }}
    >
      {layers.map((layer, i) => {
        // Background stays fixed
        if (i === 0) {
          return (
            <div key={i} className="absolute inset-0 z-0">
              {layer.content}
            </div>
          )
        }

        // Foreground layers float UP continuously
        const distance = layer.distance || 300 * i // travel distance
        const translateY = (1 - progress) * distance // keeps going past top
        const opacity = Math.min(1, Math.max(0, progress * 2)) // fade in, then stay

        return (
          <motion.div
            key={i}
            animate={{ y: translateY, opacity, x: layer.posX }}
            transition={{ type: 'spring', stiffness: 60, damping: 20 }}
            className="absolute inset-0 flex flex-wrap items-center justify-center"
            style={{ zIndex: i }}
          >
            {layer.content}
          </motion.div>
        )
      })}
    </div>
  )
}

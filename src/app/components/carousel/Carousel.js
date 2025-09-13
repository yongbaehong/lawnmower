'use client'
import React, { useRef } from 'react'
import CarouselItem from './Carousel_Item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as motion from 'motion/react-client'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export default function Carousel() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const carouselRef = useRef(null)

  const prevClick = () => {
    console.log('prev')
    const itemWidth = carouselRef.current.children[0].clientWidth
    carouselRef.current.scrollLeft -= itemWidth
  }
  const nextClick = () => {
    console.log('next')
    const itemWidth = carouselRef.current.children[0].clientWidth
    carouselRef.current.scrollLeft += itemWidth
  }
  return (
    <div className="flex">
      <div
        id="previous"
        className="relative -top-8 flex items-center justify-center sm:p-0 sm:text-4xl md:p-3 md:text-5xl"
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-angle-left"
            ref={prevRef}
            onClick={prevClick}
            className="cursor-pointer hover:text-[var(--highlight)]"
          />
        </motion.div>
      </div>

      <div
        ref={carouselRef}
        id="carousel"
        className="mt-4 flex w-full flex-1 snap-x gap-4 overflow-x-auto scroll-smooth pb-5"
      >
        <CarouselItem
          img="istockphoto-165831199-612x612.jpg"
          title="Garden Needs"
          subtitle="Fertilizers and Hand Tools"
        />
        <CarouselItem
          img="clay-banks-BrPQWVn5Xmo-unsplash.jpg"
          title="Need Equipment?"
          subtitle="We Got What You Need"
        />
        <CarouselItem
          img="michael-kahn-qjN1tw7VXzg-unsplash.jpg"
          title="Maintenance & Repairs"
          subtitle="Fast and Affordable"
        />
        <CarouselItem
          img="anton-savinov-lDwKKjlHL2Y-unsplash.jpg"
          title="Experienced Gardeners and Landscapers"
          subtitle="Power Tools"
        />
      </div>

      <div
        id="next"
        className="relative -top-8 flex items-center justify-center sm:p-0 sm:text-4xl md:p-3 md:text-5xl"
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-angle-right"
            ref={nextRef}
            onClick={nextClick}
            className="cursor-pointer hover:text-[var(--highlight)]"
          />
        </motion.div>
      </div>
    </div>
  )
}

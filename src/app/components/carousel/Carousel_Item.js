import React from 'react'
import './Carousel_Item.css'

export default function CarouselItem({ img, title, subtitle }) {
  return (
    <div className="min-w-[80%] md:min-w-[40%]">
      <div
        style={{
          backgroundImage: `url(./stock-photo/${img})`,
        }}
        className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
      ></div>
      <h5 className="mt-2">{title}</h5>
      <h6 className="font-medium">{subtitle}</h6>
    </div>
  )
}

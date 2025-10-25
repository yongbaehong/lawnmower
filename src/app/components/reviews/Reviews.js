'use client'
import React from 'react'
import Image from 'next/image'

const ReviewCard = ({ name, review, avatar }) => (
  <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
    <div className="mx-auto max-w-2xl lg:max-w-4xl">
      <figure className="mt-10">
        <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
          <p>{review}</p>
        </blockquote>
        <figcaption className="mt-10">
          <Image
            alt=""
            src={avatar}
            className="mx-auto size-10 rounded-full"
            width={150}
            height={250}
          />

          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
            <div className="font-semibold text-gray-900">{name}</div>
            <svg
              width={3}
              height={3}
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="fill-gray-900"
            >
              {/* <circle r={1} cx={1} cy={1} /> */}
            </svg>
            {/* <div className="text-gray-600">CEO of Workcation</div> */}
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
)

const ReviewsSection = () => (
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ReviewCard
          name="Etty Fidele"
          review="Amazing service! The team was professional and delivered beyond expectations."
          avatar="/stock-photo/etty-fidele-UBJsHb3HLv8-unsplash.jpg"
        />
        <ReviewCard
          name="Joseph Gonzalez"
          review="A fantastic experience from start to finish. Highly recommend!"
          avatar="/stock-photo/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
        />
        <ReviewCard
          name="Taylor Smith"
          review="Top-notch quality and great customer support. Will use again!"
          avatar="/stock-photo/taylor-8Vt2haq8NSQ-unsplash.jpg"
        />
      </div>
    </div>
  </section>
)

export default ReviewsSection

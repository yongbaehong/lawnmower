'use client'
import React from 'react'
import * as motion from 'motion/react-client'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import { FadeInYAxis } from './components/fadein-y-axis/FadinInYAxis'

import Carousel from './components/carousel/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import ReviewsSection from './components/reviews/Reviews'
library.add(fas, far, fab)

export default function Home() {
  return (
    <>
      <header id="Home">
        <Nav />
        <Hero />
      </header>

      <section id="" className="mx-auto mt-10 mb-20 max-w-screen-lg">
        <h3 className="chivo-font text-center">Come Check Out The Store</h3>
        <p className="mx-2 mb-6 sm:px-2 md:px-8">
          Your number one source for all things lawnmower repair and
          maintenance. People have been coming to us for over 15 years. We are a
          family owned and operated business. We are here to help you with all
          your lawn care needs. We have a wide variety of parts and accessories.
          We also offer repair services. We are here to help you get your lawn
          equipment running like new again. We look forward to seeing you in the
          store!
        </p>
      </section>

      <section className="mx-auto mt-20 max-w-screen-lg">
        <Carousel />
      </section>

      {/* Services Section */}

      <section id="Services" className="mx-auto mt-10 mb-20 max-w-screen-lg">
        <h3 className="chivo-font pt-20 text-center">Our Services</h3>
        <p className="mx-2 mb-6 sm:px-2 md:px-8">
          We offer a wide range of services to keep your lawn equipment running
          smoothly. From routine maintenance to complex repairs, our skilled
          technician is here to help. We service all major brands and models,
          ensuring that your equipment is in good hands. Contact us today to
          schedule a service appointment or to learn more about our offerings.
        </p>
        {/* <div className="flex"> */}
        <div className="grid grid-cols-8 gap-2 p-5">
          {/* card 1 */}
          <div className="bg-opacity-50 backdrop-blur-20 col-span-8 mt-5 cursor-pointer rounded border border-gray-100 bg-gradient-to-b from-gray-200 to-gray-50 shadow-lg md:col-span-4 lg:col-span-2">
            <div className="py-3">
              <div className="mt-1 mb-2 ml-4 flex flex-col">
                <h6 className="text-center font-bold">Engine Tune-Ups</h6>
              </div>
            </div>

            <div className="mx-3 my-2 flex justify-center px-2 text-5xl">
              <FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" />
            </div>

            <div className="mb-5">
              <div className="mx-5 mt-6 flex flex-wrap justify-start sm:justify-center">
                <div className="mr-4 mb-2 flex text-center text-gray-900">
                  Keep your engine running smoothly with our comprehensive
                  tune-up services.
                </div>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-opacity-50 backdrop-blur-20 col-span-8 mt-5 cursor-pointer rounded border border-gray-100 bg-gradient-to-b from-gray-200 to-gray-50 shadow-lg md:col-span-4 lg:col-span-2">
            <div className="py-3">
              <div className="mt-1 mb-2 ml-4 flex flex-col">
                <h6 className="text-center font-bold">Blade Sharpening</h6>
              </div>
            </div>

            <div className="mx-3 my-2 flex justify-center px-2 text-5xl">
              <FontAwesomeIcon icon="fa-solid fa-fan" />
            </div>

            <div className="mb-5">
              <div className="mx-5 mt-6 flex flex-wrap justify-start sm:justify-center">
                <div className="mr-4 mb-2 flex text-center text-gray-900">
                  A sharp blade means a healthier lawn. We provide professional
                  sharpening and balancing services.
                </div>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="bg-opacity-50 backdrop-blur-20 col-span-8 mt-5 cursor-pointer rounded border border-gray-100 bg-gradient-to-b from-gray-200 to-gray-50 shadow-lg md:col-span-4 lg:col-span-2">
            <div className="py-3">
              <div className="mt-1 mb-2 ml-4 flex flex-col">
                <h6 className="text-center font-bold">General Repairs</h6>
              </div>
            </div>

            <div className="mx-3 my-2 flex justify-center px-2 text-5xl">
              <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
            </div>

            <div className="mb-5">
              <div className="mx-5 mt-6 flex flex-wrap justify-start sm:justify-center">
                <div className="mr-4 mb-2 flex text-center text-gray-900">
                  From broken pull-chords to engine issues, we diagnose and fix
                  all common mower problems.
                </div>
              </div>
            </div>
          </div>

          {/* card 4 */}
          <div className="bg-opacity-50 backdrop-blur-20 col-span-8 mt-5 cursor-pointer rounded border border-gray-100 bg-gradient-to-b from-gray-200 to-gray-50 shadow-lg md:col-span-4 lg:col-span-2">
            <div className="py-3">
              <div className="mt-1 mb-2 ml-4 flex flex-col">
                <h6 className="text-center font-bold">Winterization</h6>
              </div>
            </div>

            <div className="mx-3 my-2 flex justify-center px-2 text-5xl">
              <FontAwesomeIcon icon="fa-solid fa-snowflake" />
            </div>

            <div className="mb-5">
              <div className="mx-5 mt-6 flex flex-wrap justify-start sm:justify-center">
                <div className="mr-4 mb-2 flex text-center text-gray-900">
                  Prepare your mower for the off-season with our winterization
                  services to ensure it's ready to go in spring.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <div>
        <h4 className="chivo-font pt-20 text-center">
          <span className="">Reviews</span>
        </h4>
        <ReviewsSection />
      </div>

      {/* About Section */}
      <section id="About" className="mx-auto mt-20 mb-20 max-w-screen-lg">
        <h3 className="chivo-font pt-20 text-center">
          <span className="">About Us</span>
        </h3>
        <p className="mx-2 mb-6 sm:px-2 md:px-8">
          At A1 Repair, we are passionate about helping you maintain a lush,
          healthy lawn or your dream landscape. With over 15 years of experience
          in the industry, we pride ourselves on providing top-notch service and
          expert advice to our customers. As a family-owned and operated
          business, we understand the importance of community and strive to
          build lasting relationships with those we serve. Whether you're in
          need of parts, accessories, or repair services, our knowledgeable team
          is here to assist you every step of the way. Thank you for choosing A1
          Lawn Repair – we look forward to serving you!
        </p>

        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
              <div className="md:col-span-3">
                <img
                  src="/stock-photo/aby-zachariah-47rYxYGLJyQ-unsplash.jpg"
                  className="rounded"
                  alt=""
                />
              </div>

              <div className="md:col-span-1">
                <div className="max-w-prose md:max-w-none">
                  <h4 className="text-2xl font-semibold text-gray-900">
                    History
                  </h4>

                  <p className="mt-4 text-gray-700">
                    For over 15 years, Springfield Mower Repair has been the
                    go-to shop for reliable and honest lawnmower service. We're
                    a family-owned business dedicated to quality workmanship and
                    fair prices.
                    <br />
                    <br />
                    Our technicians have experience with all major brands and
                    models. We understand how important a well-maintained lawn
                    is, and we're here to help you get the job done right, all
                    season long.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Contact Section */}
      <section id="Contact" className="mx-auto mt-20 mb-20 max-w-screen-lg">
        <h3 className="chivo-font pt-20 text-center">Contact Us</h3>
        <div className="flex flex-row items-center justify-center">
          <div className="mb-4 flex items-center justify-center gap-4 text-2xl">
            <FontAwesomeIcon icon="fa-solid fa-phone" />
          </div>
          <div className="mb-4 flex items-center justify-center gap-4 text-2xl">
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </div>
        </div>
        <p className="mx-2 mb-6 sm:px-2 md:px-8">
          Have questions or need assistance? We're here to help! Reach out to us
          via phone at (310) 951-4692 or email us at heejung1180@outlook.com.
        </p>
      </section>

      <footer className="bg-[var(--background)] p-4 text-center">
        &copy; {new Date().getFullYear()} A1 Lawn Repair. All rights reserved.
      </footer>
    </>
  )
}

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
        <FadeInYAxis delay={0} thresholdPercentage={0} dirAmount={100}>
          <p className="mx-2 mb-6 sm:px-2 md:px-8">
            Your number one source for all things lawn mower repair and
            maintenance. People have been coming to us for over 15 years. We are
            a family owned and operated business. We are here to help you with
            all your lawn care needs. We have a wide variety of parts and
            accessories. We also offer repair services. We are here to help you
            get your lawn equipment running like new again. We look forward to
            seeing you in the store!
          </p>
        </FadeInYAxis>
      </section>

      <section className="mx-auto mt-20 max-w-screen-lg">
        <Carousel />
      </section>

      {/* Services Section */}

      <section id="Services" className="mx-auto mt-10 mb-20 max-w-screen-lg">
        <h3 className="chivo-font pt-20 text-center">Our Services</h3>
        <FadeInYAxis delay={0} thresholdPercentage={0} dirAmount={100}>
          <p className="mx-2 mb-6 sm:px-2 md:px-8">
            We offer a wide range of services to keep your lawn equipment
            running smoothly. From routine maintenance to complex repairs, our
            skilled technician is here to help. We service all major brands and
            models, ensuring that your equipment is in good hands. Contact us
            today to schedule a service appointment or to learn more about our
            offerings.
          </p>
        </FadeInYAxis>
      </section>

      {/* Reviews Section */}
      <div>
        <ReviewsSection />
      </div>

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

      {/* About Section */}
      <section id="About" className="mx-auto mt-20 mb-20 max-w-screen-lg">
        <h3 className="chivo-font pt-20 text-center">About Us</h3>
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
      </section>

      <FadeInYAxis delay={0} thresholdPercentage={0} dirAmount={100}>
        <h2 className="text-2xl font-bold">First Section</h2>
        <p>This section glides into view when scrolled down.</p>
      </FadeInYAxis>

      <FadeInYAxis delay={0.2} thresholdPercentage={0} dirAmount={100}>
        <h2 className="text-2xl font-bold">Second Section</h2>
        <p>Each section animates smoothly as you scroll.</p>
      </FadeInYAxis>

      <FadeInYAxis delay={0.4} thresholdPercentage={0} dirAmount={100}>
        <h2 className="text-2xl font-bold">Third Section</h2>
        <p>Delays create a staggered reveal effect.</p>
      </FadeInYAxis>

      <footer className="bg-[var(--background)] p-4 text-center">
        &copy; {new Date().getFullYear()} A1 Lawn Repair. All rights reserved.
      </footer>
    </>
  )
}

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
import { scale } from 'motion'
// import Parallax from './components/serve/services'
import Parallax from './components/parallax/Parallax'
library.add(fas, far, fab)

export default function Home() {
  return (
    <>
      <header>
        <Nav />
        <Hero />
      </header>

      <FadeInYAxis delay={0} thresholdPercentage={0} dirAmount={100}>
        <h3 className="chivo-font text-center">Come Check Out The Store</h3>
        <p className="mx-2 mb-6 sm:px-2 md:px-8">
          Your number one source for all things lawn mower repair and
          maintenance. People have been coming to us for over 15 years. We are a
          family owned and operated business. We are here to help you with all
          your lawn care needs. We have a wide variety of parts and accessories.
          We also offer repair services. We are here to help you get your lawn
          equipment running like new again. We look forward to seeing you in the
          store!
        </p>
      </FadeInYAxis>

      <section className="mx-auto mt-20 max-w-screen-lg">
        {/* Coraousel */}
        <Carousel />
      </section>

      <FadeInYAxis delay={0} thresholdPercentage={0} dirAmount={100}>
        <h3 className="chivo-font text-center">Our Services</h3>
        <p className="mx-2 mb-6 sm:px-2 md:px-8">
          We offer a wide range of services to keep your lawn equipment running
          smoothly. From routine maintenance to complex repairs, our skilled
          technician is here to help. We service all major brands and models,
          ensuring that your equipment is in good hands. Contact us today to
          schedule a service appointment or to learn more about our offerings.
        </p>
      </FadeInYAxis>

      <div>
        {/* <Parallax /> */}
        <Parallax
          height="100vh"
          layers={[
            {
              content: (
                <img
                  src="/stock-photo/eco-warrior-princess-TsOeGUwWzWo-unsplash.jpg"
                  alt="Layer 1"
                  className="h-full w-full object-cover"
                />
              ),
              speed: -0.1,
              distance: 0,
            },
            {
              content: (
                <div className="w-[30%]">
                  <h3>Card1 Header</h3>
                  <div>Stars here</div>
                  <p>
                    lorem ipsum here to show review text and see if it keeps
                    wrapping to a smaller space
                  </p>
                </div>
              ),
              speed: -0.5,
              distance: 2100,
              posX: '-33%',
            },
            {
              content: (
                <div className="w-[30%]">
                  <h3>Card2 Header</h3>
                  <div>Stars here</div>
                  <p>
                    lorem ipsum here to show review text and see if it keeps
                    wrapping to a smaller space
                  </p>
                </div>
              ),
              speed: -0.3,
              distance: 300,
              posX: 0,
            },
            {
              content: (
                <div className="w-[30%]">
                  <h3>Card3 Header</h3>
                  <div>Stars here</div>
                  <p>
                    lorem ipsum here to show review text and see if it keeps
                    wrapping to a smaller space
                  </p>
                </div>
              ),
              speed: -0.7,
              distance: 600,
              posX: '33%',
            },
          ]}
        />
      </div>
      {/* Contact */}
      <section className="mx-auto mt-20 mb-20 max-w-screen-lg">
        <motion.h3
          // initial={{ opacity: 0, y: 20, scale: 1.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="chivo-font text-center"
        >
          Contact Us
        </motion.h3>
        <div className="flex flex-row items-center justify-center">
          <motion.div
            animate={{ x: [0, -100, 0] }}
            // whileHover={{ x: [0, -100, 0], scale: 1.2, rotate: 25 }}
            className="mb-4 flex items-center justify-center gap-4 text-2xl"
          >
            <FontAwesomeIcon icon="fa-solid fa-phone" />
          </motion.div>
          <motion.div
            animate={{ x: [0, 100, 0] }}
            // whileHover={{ x: [0, 100, 0], scale: 1.2, rotate: 25 }}
            className="mb-4 flex items-center justify-center gap-4 text-2xl"
          >
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </motion.div>
        </div>
        <p className="mx-2 mb-6 sm:px-2 md:px-8">
          Have questions or need assistance? We're here to help! Reach out to us
          via phone at (310) 951-4692 or email us at heejung1180@outlook.com.
        </p>
      </section>

      {/* About Section */}
      <section className="mx-auto mb-20 max-w-screen-lg">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // initial={{ opacity: 0, y: 20, scale: 1.5 }}
          // whileInView={{ opacity: 1, y: 0, scale: 1 }}
          // transition={{ duration: 2 }}
          // viewport={{ once: true }}
          className="chivo-font text-center"
        >
          About Us
        </motion.h3>
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

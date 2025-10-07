'use client'
import React, { useRef, useState } from 'react'
import NavItem from './NavItem'
// import { Link } from 'react-router-dom';
import Link from 'next/link'
import './Nav.css'
import Submenu from './Submenu'
import SubItem from './SubItem'

export default function Nav() {
  const mobileMenuRef = useRef(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const handleMobileMenuToggle = () => {
    console.log('toggle menu', isMobileMenuOpen)
    if (mobileMenuRef.current.classList.contains('open')) {
      setIsMobileMenuOpen(false)
      console.log(mobileMenuRef.current)
      return
    }
    setIsMobileMenuOpen(true)
    console.log(mobileMenuRef.current)
    return
  }
  return (
    <nav className="fixed top-0 z-10 flex w-full bg-[var(--background)] shadow-md">
      <div className="flex items-center gap-2 p-2">
        <div id="logo-text" className="pl-3 text-2xl font-bold">
          <div>
            <span className="text-[var(--accent)]">A1</span>{' '}
            <span>Lawn Mower</span>
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <div className="my-auto ml-auto block cursor-pointer pr-4 md:hidden">
        <button
          ref={mobileMenuRef}
          id="mobile-menu-button"
          className={`group peer cursor-pointer ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={handleMobileMenuToggle}
        >
          {/* burger */}
          <div
            className={`relative top-0 h-1 w-8 cursor-pointer rounded-full bg-[var(--main)] transition-all group-open:top-2 group-open:rotate-45`}
          ></div>

          <div className="mt-1 h-1 w-8 cursor-pointer rounded-full bg-[var(--main)] opacity-100 transition-all group-open:opacity-0"></div>
          <div className="relative top-0 mt-1 h-1 w-8 cursor-pointer rounded-full bg-[var(--main)] transition-all group-open:-top-2 group-open:-rotate-45"></div>
        </button>

        {/* mobile nav items */}
        <div className="absolute top-[calc(47px)] left-0 hidden w-full bg-[var(--background)] font-semibold text-[var(--neutral)] transition-all ease-in-out peer-open:block">
          <div className="relative flex h-full cursor-pointer items-center justify-center pb-4 hover:bg-white/10 hover:text-[var(--neutral)]">
            <Link
              onClick={handleMobileMenuToggle}
              href="#Home"
              className="text-transform: uppercase"
            >
              Home
            </Link>
          </div>
          <div className="relative flex h-full cursor-pointer items-center justify-center pb-4 hover:bg-white/10 hover:text-[var(--neutral)]">
            <Link
              onClick={handleMobileMenuToggle}
              href="#Services"
              className="text-transform: text-center uppercase hover:bg-white/10 hover:text-[var(--neutral)]"
            >
              Services
            </Link>
          </div>
          <div className="relative flex h-full cursor-pointer items-center justify-center pb-4 hover:bg-white/10 hover:text-[var(--neutral)]">
            <Link
              onClick={handleMobileMenuToggle}
              href="#Contact"
              className="text-transform: uppercase"
            >
              Contact
            </Link>
          </div>
          <div className="relative flex h-full cursor-pointer items-center justify-center pb-4 hover:bg-white/10 hover:text-[var(--neutral)]">
            <Link
              onClick={handleMobileMenuToggle}
              href="#About"
              className="text-transform: uppercase"
            >
              About
            </Link>
          </div>
        </div>
      </div>
      {/* desktop/tablet nav items */}
      <ul className="hidden flex-1 items-center justify-end md:flex">
        <NavItem href="#Home" text="Home" />
        <NavItem href="#Services" text="Services" />
        <NavItem href="#Contact" text="Contact" />
        <NavItem href="#About" text="About" />
      </ul>
    </nav>
  )
}

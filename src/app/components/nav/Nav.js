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
    <nav className="sticky top-0 z-10 flex bg-[var(--background)] shadow-md">
      <div className="flex items-center gap-2 p-2">
        {/* <img
          src="./A1-logo.jpg"
          width="75"
          className="rounded-full"
          alt="Logo"
        /> */}
        <div id="logo-text" className="pl-3 text-2xl font-bold">
          <div>
            <span className="text-[var(--accent)]">A1</span>{' '}
            <span>Lawn Mower</span>
          </div>
          {/* <div className="text-sm text-[var(--highlight)]">Shop & Repair</div> */}
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
          <div className="relative flex h-full cursor-pointer items-center justify-center p-4 hover:bg-white/10 hover:text-[var(--neutral)]">
            <span className="text-transform: uppercase">Home</span>
          </div>
          <div className="group relative h-full cursor-pointer">
            <div className="text-transform: p-4 text-center uppercase hover:bg-white/10 hover:text-[var(--neutral)]">
              Services
            </div>
          </div>
          <div className="relative flex h-full cursor-pointer items-center justify-center p-4 hover:bg-white/10 hover:text-[var(--neutral)]">
            <span className="text-transform: uppercase">Contact</span>
          </div>
          <div className="relative flex h-full cursor-pointer items-center justify-center p-4 hover:bg-white/10 hover:text-[var(--neutral)]">
            <span className="text-transform: uppercase">About</span>
          </div>
        </div>
      </div>
      {/* desktop/tablet nav items */}
      <ul className="hidden flex-1 items-center justify-end md:flex">
        <NavItem href="/" text="Home" />
        <NavItem href="/" text="Services">
          {/* <Submenu>
            <SubItem href="/service1" text="Service 1" />
            <SubItem href="/service2" text="Service 2" />
            <SubItem href="/service3" text="Service 3" />
          </Submenu> */}
        </NavItem>
        <NavItem href="/" text="Contact" />
        <NavItem href="/" text="About" />
      </ul>
    </nav>
  )
}

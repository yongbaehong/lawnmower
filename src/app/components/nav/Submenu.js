import React from 'react'
// import SubItem from './SubItem'
export default function Submenu({ children, isMobileMenuOpen }) {
  return (
    <ul
      className={`absolute top-full right-0 rounded-b-md bg-[var(--accent)]/5 text-right whitespace-nowrap`}
      // className={`${isMobileMenuOpen ? 'absolute' : 'relative'} top-full right-0 rounded-b-md bg-[var(--accent)]/5 text-right whitespace-nowrap`}
    >
      {children}
    </ul>
  )
}

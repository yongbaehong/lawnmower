import React from 'react'
import Link from 'next/link'

export default function NavItem({ href, text, children }) {
  return (
    <li className="menu-item group flex cursor-pointer justify-center">
      <Link href={href}>{text}</Link>
      {children}
      {/* <Submenu /> */}
    </li>
  )
}

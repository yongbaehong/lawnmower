import React from 'react'

import Link from 'next/link'

export default function SubItem({ href, text, children }) {
  return (
    <li className="menu-item hidden group-hover:block hover:shadow-md">
      <Link href={href}>{text}</Link>
      {children}
      {/* <Submenu /> */}
    </li>
  )
}

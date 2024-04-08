import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
    <div className="text-center">
  <Link
    href="/"
    className="flex items-center justify-center mb-5 text-md font-semibold text-gray-900 dark:text-white"
  >
   
   Open Government Data of Thailand
  </Link>
  <span className="block text-sm text-center text-gray-500 dark:text-gray-400 mb-5">
    © Design by Ton use Nextjs / Tailwind css
   
  </span>
  
</div>

  )
}

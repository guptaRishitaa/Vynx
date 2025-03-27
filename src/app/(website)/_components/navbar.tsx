// 'use client'
// import { Button } from '@/components/ui/button'
// import { Menu, User, X } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useState } from 'react'



// const LandingPageNavBar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   return (
//     <div className='flex w-full justify-between items-center px-5 sticky top-0 bg-opacity-90 shadow-md backdrop-blur-md z-50'>
//       <div className='text-3xl font-semibold flex items-center gap-x-3'>
//         {/* <Menu className='w-8 h-8' /> */}
//         <button
//           className="lg:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
//         </button>
//         <Image alt='logo'
//         src="/opal-logo.svg"
//         width={40}
//         height={40}/>
//         Vynx
//         </div>
//         <div className='hidden  lg:flex  gap-x-10 items-center lg:flex'>
//           <Link href='/' className="bg-[#7320DD] py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80">Home</Link>
//           <Link href='#features'>Features</Link>
          
//           <Link href='#pricing'>Pricing</Link>
//           <Link href='#contact'>Contact Us</Link>
//         </div>
//         <Link href='/auth/sign-in'>
//         <Button className='text-base flex gap-x-2'>
//           <User/>
//         Login
//         </Button>
//         </Link>
//       </div>
//   )
// }
 
// export default LandingPageNavBar


"use client"
import { Button } from "@/components/ui/button"
import { Menu, User, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

const LandingPageNavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex w-full justify-between items-center px-5 sticky top-0 bg-opacity-90 shadow-md backdrop-blur-md z-50">
      {/* Logo Section */}
      <div className="text-3xl font-semibold flex items-center gap-x-3">
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
        <Image alt="logo" src="/opal-logo.svg" width={40} height={40} />
        Vynx
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-x-10 items-center">
        <Link href="/" className="bg-[#7320DD] py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80">
          Home
        </Link>
        <Link href="#features">Features</Link>
        <Link href="#pricing">Pricing</Link>
        <Link href="#contact">Contact Us</Link>
      </div>

      {/* Login Button */}
      <Link href="/auth/sign-in">
        <Button className="text-base flex gap-x-2">
          <User />
          Login
        </Button>
      </Link>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full shadow-lg flex flex-col gap-y-5 p-5 bg-gray-900 lg:hidden bg-opacity-90 backdrop-blur-md ">
          <Link href="/" className="text-lg font-semibold" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="#features" className="text-lg font-semibold" onClick={() => setIsOpen(false)}>
            Features
          </Link>
          <Link href="#pricing" className="text-lg font-semibold" onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link href="#contact" className="text-lg font-semibold" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </div>
  )
}

export default LandingPageNavBar

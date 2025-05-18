import React from 'react'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center my-3 px-1.5'>
        <div className="logo font-bold text-xl ml-2 p-2">
            <h1>CLERK</h1>
        </div>
        <ul className='flex gap-4 ml-4 justify-center'>
            <li>Home</li>
            <li>Contact</li>
            <li>
                <Link rel="stylesheet" href="/about" >About Us</Link>
            </li>
        </ul>
        <div className='flex justify-center m-1.5 gap-3'>
      <SignedOut >
                  <SignInButton />
                  <SignUpButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
    </div>
    </div>
  )
}

export default Navbar
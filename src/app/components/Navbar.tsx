import Image from 'next/image'
import React from 'react'
import silver from "./SILVERFANGS IMG.png"
import Link from 'next/link'

export default function Navbar() {
  return (
    
      <nav>
        <div>
        {/* <Image 
        src={silver}
        alt='image'
        width={70}
        /> */}
        <h1>SilverBlogs</h1>
        </div>
       <div>
        <a>Home</a>
        <Link href='/viewBlogs'>View Blogs</Link>
        </div>
        <div>
        <Link href='/addBlogs'>Add Blogs</Link>
        </div>
      </nav>
   
  )
}

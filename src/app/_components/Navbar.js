"use client"
import Link from 'next/link'
import React from 'react'
import { useAuth } from '../context/AuthContext'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className=" body-font  bg-background dark:bg-gray-900 dark:shadow-[0px_4px_10px_rgba(255,255,255,0.1)]   text-foreground fixed z-30 w-full top-0 left-0">
      <div className="container mx-auto  flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href='/' className="flex title-font font-medium items-center  mb-4 md:mb-0">
          
            <Image
              src="/image/logo.jpg"
              alt="logo"
              width={60}
              height={60}
            className='rounded-full object-contain'
            />
         

          <span className="ml-3 text-xl flex flex-col ">
            <b>Tech<span className='text-sky-500'>Canva</span></b>
            <p className="text-[10px] tracking-widest">Your Vision, Our Canvas</p>
          </span>
        </Link>
        <nav className="md:ml-auto flex gap-2 flex-wrap items-center text-base justify-center">
          {/* <ModeToggle /> */}
          <Link href='/' className={pathname === '/' ? "border-b-2 border-blue-500 mr-5 hover:text-gray-500" : "mr-5 hover:text-gray-500"}>Home</Link>
          {/* <DropdownMenu >
            <DropdownMenuTrigger >Services</DropdownMenuTrigger>
            <DropdownMenuContent className=' border-none'>
              <DropdownMenuItem>
                <Link href={'/about'}>
                Web Development
                </Link>
                
                </DropdownMenuItem>
              <DropdownMenuItem>
              <Link href={'/about'}>
              Digital Marketing
                </Link>
             

              </DropdownMenuItem>
              <DropdownMenuItem>WordPress Site</DropdownMenuItem>
             
            </DropdownMenuContent>
          </DropdownMenu> */}


          <Link href='/about' className={pathname === '/about' ? "border-b-2 border-blue-500 mr-5 hover:text-gray-500" : "mr-5 hover:text-gray-500"}>Services</Link>
          <Link href='/pricing' className={pathname === '/pricing' ? "border-b-2 border-blue-500 mr-5 hover:text-gray-500" : "mr-5 hover:text-gray-500"}>Pricing</Link>
          <Link href='/contact' className={pathname === '/contact' ? "border-b-2 border-blue-500 mr-5 hover:text-gray-500" : "mr-5 hover:text-gray-500"}>Request a Quote</Link>



          {/* {!authenticate ? <>
            <Link href='/login' className="mr-5 hover:text-gray-500">Log in</Link>
          
          </>
            :
            <>

              <Button className='bg-transparent hover:bg-transparent' onClick={logout}>Log out</Button >
            </>
          } */}
        </nav>

      </div>
    </nav>
  )
}

export default Navbar

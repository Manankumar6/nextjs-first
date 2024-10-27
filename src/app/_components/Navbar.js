"use client"
import Link from 'next/link'
import React from 'react'
// import { useAuth } from '../context/AuthContext'
// import {   Button } from '@chakra-ui/react'
import Image from 'next/image'

const Navbar = () => {
  // const {authenticate,user,logout} = useAuth()
  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href='#' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="logo font-bold text-indigo-100"><Image src='/image/logo3.png' width={60} height={60} alt='logo' /></span>

        <span className="ml-3 text-xl flex flex-col">
          <b>TechCanvas</b>
          <p className="text-[10px] tracking-widest">Your Vision, Our Canvas</p>
          </span>
      </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href='/' className="mr-5 hover:text-gray-900">Home</Link>
        <Link href='/about' className="mr-5 hover:text-gray-900">About</Link>
        <Link href='/service' className="mr-5 hover:text-gray-900">Service</Link>
        <Link href='/contact' className="mr-5 hover:text-gray-900">Contact</Link>
       {/* {!authenticate? <>
       <Link href='/login' className="mr-5 hover:text-gray-900">Log in</Link>
        <Link href='/signup' className="mr-5 hover:text-gray-900">Sign up</Link>
       </>
        :
        <>
        <Link href='/'>{user&& user.name}</Link>
      <Button bg='transparent' _hover={{bg:"transparent"}}   onClick={logout}>Log out</Button >
        </>
      } */}
      </nav>
      
    </div>
  </header>
  )
}

export default Navbar

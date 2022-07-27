import React from 'react'
import LoginForm from '../components/LoginForm'
import Navbar from '../components/Navbar'
import heroImg from '.././public/heroImg.webp'
import Image from 'next/image'
export default function index() {
  return (
    <div className="h-screen w-screen flex flex-col ">
      <Navbar />
      <div className="h-[calc(100vh-80px)]  w-screen flex  ">
        <LoginForm />
        <HeroImage />
      </div>
    </div>
  )
}

function HeroImage() {
  return (
    <div className="hidden md:flex  h-full w-full  items-center justify-center relative">
      <Image src={heroImg} />
    </div>
  )
}

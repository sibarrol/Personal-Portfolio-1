import React from 'react'
import image from '../../public/image.jpg'
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi';

const Home = () => {
  return (
    <div id='home' className='flex min-h-screen w-full items-center justify-center'>
    <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
      
      <img src={image} alt="" className='w-[250px] sm:w-[300px] rounded-full' />

      <div className="space-y-1 sm:space-y-3">
        <h1 className='bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent text-4xl sm:text-6xl font-bold'>
          Girls Who Code
        </h1>
        <h3 className='text-xl font-semibold'>CS Undergrad @ BU</h3>
        <p className='max-w-xl text-sm sm:text-base'>
          Hi! I’m a computer science undergraduate at Boston University interested in software development, tech education, and creative coding. Welcome to my portfolio!
        </p>
      </div>

      <div className="flex gap-3">
        <BiLogoGithub className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12' />
        <BiLogoLinkedin className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12' />
      </div>

    </div>
  </div>
  )
}

export default Home
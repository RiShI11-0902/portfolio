import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import Animation from './Animation'

const Home = () => {

  const [change, setChange] = useState()
  const [randomX, setRandomX] = useState()

  const colours = ['text-red-500', 'text-green-500', 'text-blue-500',
    'text-pink-500', 'text-teal-500', 'text-yellow-500',
    'text-lime-500', 'text-purple-700', 'text-red-700',
    'text-rose-600']

  useEffect(() => {
    const currentColour = () => {
      let col = Math.floor(Math.random() * colours.length);
      setChange(colours[col])
    }
    const interval = setInterval(currentColour, 1000);

    return () => clearInterval(interval)
  }, [])

  useGSAP(() => {
    gsap.from('.mainContainer', {
      scale: 0,
      duration: 2,
      // ease:'elastic'
    })
  })

  return (
    <>

        <Navbar />

      <div className=' text-white h-screen overflow-hidden overflow-y-hidden '>
        <Animation />

        <div className='2xl:mt-20 main Container '>
          <div className='mx-auto 2xl:w-[40rem] xl:w-[40rem] md:w-[40rem]   flex items-center justify-center p-10'>
            <p className='text-center leading-3 2xl:mt-10'> <span className='font-bold text-xl'>Hi,</span> <span className='hurricane-regular text-4xl leading-snug'>I'm  <span className={`${change} transition-colors duration-1000`}>Rushikesh Bagade, </span> <br className='hidden 2xl:block' />
              I'm a MERN Stack Developer <br className='hidden 2xl:block' /> with a Passion for React.js Solutions.</span>
            </p>
          </div>
        </div>

        <div className='flex flex-col 2xl:flex-row items-center 2xl:space-y-0 2xl:space-x-5 w-fit mx-auto space-y-5 '>

          <a href="https://shorturl.at/Y4bKA" target='_blank'>
            <button className=' shadow-gray-200 hover:border-b-white hover:border-b shadow-sm px-10 py-2 rounded-xl hover:shadow-lg '>
              Resume
            </button>
          </a>
        </div>

        {/* <div className='flex flex-row justify-around  w-full'>

        </div> */}
      </div>
      {/* ///absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 */}
    </>
  )
}

export default Home

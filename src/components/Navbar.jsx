import React, { useRef, useState } from 'react'
import '../App.css'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [color, setColor] = useState()
  const gradientColors = [
    'bg-gradient-to-r from-gray-800 to-black',
    'bg-gradient-to-r from-gray-700 to-gray-900',
    'bg-gradient-to-r from-gray-900 to-black',
    'bg-gradient-to-r from-indigo-900 to-gray-900',
    'bg-gradient-to-r from-blue-900 to-gray-800',
    'bg-gradient-to-r from-purple-900 to-gray-800',
    'bg-gradient-to-r from-green-900 to-gray-900',
    'bg-gradient-to-r from-teal-900 to-gray-800',
    'bg-gradient-to-r from-red-900 to-gray-900',
    'bg-gradient-to-r from-yellow-900 to-gray-800',
  ];

  // const bgColor = Math.floor(Math.random() * gradientColors.length)
  // console.log(gradientColors[bgColor]);




  const t1 = useRef()

  useGSAP(() => {
    gsap.from(".navLinks", {
      y: -600,
      duration: 1,
    })
    gsap.from(".links", {
      y: -500,
      opacity: 1,
      stagger: 0.1,
      delay: 0.70
    })
    gsap.from(".container",{
      y: -400,
      ease:'elastic.inOut',
      duration:2
    })
  }, [toggle])

  const toggleM = () => {
    setToggle(true)
    const bgColor = Math.floor(Math.random() * gradientColors.length)
    console.log(gradientColors[bgColor]);
    setColor(bgColor)
    // if (index < gradientColors.length - 1) {
    //   setIndex(index+1)
    // }else{
    //   setIndex(0)
    // }

  }

  return (
    <>
      <div className='container flex justify-around items-center  p-5 font-bold ' >
        <div className='dancing-script-Font text-5xl'>
          Rishi Codes
        </div>
        <div>
          <p className='cursor-pointer text-xl' onClick={toggleM}><GiHamburgerMenu /></p>
        </div>
      </div>
      {/* //${gradientColors[bgColor] */}
      {
        toggle ? <div className={` z-10 navLinks h-screen absolute top-0 left-0 w-full ${gradientColors[color]} }`}>
          <div className='p-10 font-light text-7xl'>
            <p className='absolute right-10 cursor-pointer ' onClick={() => setToggle(false)}><RxCross1 /></p>
            <ul className='space-y-6 flex flex-col'>
              <Link to={'/home'} className='links cursor-pointer caveat-font ' onClick={() => setToggle(false)}>Home</Link>
              <Link to={'/about'} className='links cursor-pointer caveat-font ' onClick={() => setToggle(false)}>About</Link>
              <Link to={'/projects'} className='links cursor-pointer caveat-font ' onClick={() => setToggle(false)}>Projects</Link>
              <Link to={'/certficates'} className='links cursor-pointer caveat-font ' onClick={() => setToggle(false)}>Certificates</Link>
            </ul>
          </div>
        </div> : ""
      }
    </>
  )
}

export default Navbar
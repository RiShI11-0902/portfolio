import React from 'react'
import Navbar from './Navbar'
import { avatar } from '../assets'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Animation from './Animation';


const About = () => {
  return (
    <>
      <div className='bg-gray-900 text-white md:h-screen overflow-hidden  overflow-y-hidden '>
      {/* <Animation /> */}
        <Navbar />

        <div className='relative mt-10'>

          <div className="div flex flex-col 2xl:flex-row justify-around  p-5 2xl:p-10 w-[90%] mx-auto">
            <div className='md:mx-auto'>
              <div className='    '>
                <div className='lg:w-60 w-56 p-32  md:p-40 bg-red-300 absolute md:left-36 md:top-0 lg:left-60 2xl:left-36 rounded-full top-0 left-0 border border-blue-300'></div>
                <div className='lg:w-60 w-56 lg:p-40 md:p-36  bg-blue-300 absolute md:left-72  md:top-40 rounded-full lg:left-96 2xl:left-48 top-36 left-24 border border-blue-300'></div>
              </div>
              <div className=' h-full w-[19rem] md:w-[25rem] lg:w-[19rem] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100   flex flex-col space-y-5 items-center text-white p-6 '>
                <div class="profile "><img class="w-32  "
                  src={avatar} alt="" /></div>
                <div className='name'>
                  <p className='font-bold text-2xl belanosima-bold'>Rushikesh Bagade</p>
                </div>
                <div className='bg-black text-black h-1 w-10 py-[1px]' ></div>
                <div>
                  <p className='font-semibold text-lg italic edu-tas-beginner-font text-neutral-900'>Software Developer</p>
                </div>
                <div className='flex flex-row space-x-5 text-purple-700 cursor-pointer'>
                 <a href="https://www.instagram.com/rishi_codes/"><FaInstagram /></a> 
                 <a href="https://www.linkedin.com/in/rushikesh-bagade11"><FaLinkedin /></a> 
                 <a href="https://github.com/RiShI11-0902"><FaGithub /></a> 
                </div>
              </div>
            </div>
            
            <div className="md:w-[80%] lg:w-2/3 :p-4 p-2 md:ml-8 md:mt-20 lg:mt-28 2xl:mt-0 ">
              <h2 className="text-2xl font-bold text-center md:text-left mt-10 md:mt-0">Here's who I am & what I do</h2>
              <p className="mt-2 text-center md:text-left md:w-full md:text-2xl lg:text-base ">
                I am a MERN stack developer specializing in React.js, based in India. Currently pursuing an MCA at GHRIETN, I have a strong background in full-stack development, creating dynamic and responsive web applications.
              </p>
              <ul className="list-disc ml-6 mt-4 text-lg">
                <li><span className="font-bold text-green-500">Frontend:</span> React.js, JavaScript, HTML5, CSS3</li>
                <li><span className="font-bold text-blue-500">Backend:</span> Node.js, Express.js, MongoDB</li>
                <li><span className="font-bold text-red-500">Version Control:</span> Git, GitHub</li>
                <li><span className="font-bold text-yellow-500">Languages :</span> Java (Core)</li>

              </ul>
              <p className="mt-4 text-center md:text-left">Let's connect and collaborate to turn innovative ideas into reality.</p>
            </div>
          </div>
        </div>
        <Animation />

      </div>

    </>
  )
}

export default About

{/* <div className='text w-[40rem]  p-10 -mt-10 space-y-5'>
              <p className='text-xl'>Here's who i am & what i do</p>
              <p className=' font-bold playfair-display-font'>I am a MERN stack developer specializing in React.js, based in India. Currently pursuing an MCA at GHRIETN, I have a strong background in full-stack development, creating dynamic and responsive web applications.
              </p>
              <div className='text-lg space-y-4'> My expertise includes: <br />

                <ol className='space-y-3'>
                  <li> 1) <span className='text-green-500'>Frontend</span> : React.js, JavaScript, HTML5, CSS3</li>
                  <li> 2) <span className='text-cyan-500'>Backend</span> : Node.js, Express.js, MongoDB</li>
                  <li> 3) <span className='text-red-500'>Version Control</span> : Git, GitHub</li>
                </ol>
                
              </div>

              <p> Let's connect and collaborate to turn innovative ideas into reality.</p>
              

            </div> */}
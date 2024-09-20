import React from 'react';
import Navbar from './Navbar';
import { rishi } from '../assets';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Animation from './Animation';

const About = () => {
  return (
    <>
        <Navbar />
      <div className="bg-gray-900 overflow-hidden text-white min-h-screen flex flex-col items-center ">
        <div className="container mx-auto px-5 md:px-10 py-16 flex flex-col lg:flex-row items-center lg:space-x-10 ">
          {/* Profile Section */}
          <div className="relative w-full lg:w-1/3 flex justify-center lg:justify-end mb-12 lg:mb-0">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-28 h-28 md:w-40 md:h-40 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-28 h-28 md:w-40 md:h-40 bg-red-500 rounded-full opacity-20 blur-xl"></div>

            {/* Profile Card */}
            <div className="relative z-10 bg-gray-800 bg-opacity-50 rounded-xl p-8 flex flex-col items-center shadow-lg backdrop-blur-md">
              <img className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-4 border-4 border-gray-700" src={rishi} alt="Rushikesh Bagade" />
              <h2 className="text-2xl md:text-3xl font-semibold">Rushikesh Bagade</h2>
              <p className="text-lg text-gray-300 mt-2 italic">Software Developer</p>
              <div className="mt-4 flex space-x-4">
                <a href="https://www.instagram.com/rishi_codes/" aria-label="Instagram">
                  <FaInstagram className="text-purple-500 hover:text-purple-400 transition duration-200" size={25} />
                </a>
                <a href="https://www.linkedin.com/in/rushikesh-bagade11" aria-label="LinkedIn">
                  <FaLinkedin className="text-blue-500 hover:text-blue-400 transition duration-200" size={25} />
                </a>
                <a href="https://github.com/RiShI11-0902" aria-label="GitHub">
                  <FaGithub className="text-gray-500 hover:text-gray-400 transition duration-200" size={25} />
                </a>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Here's who I am & what I do</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              I am a MERN stack developer specializing in React.js, based in India. Currently pursuing an MCA at GHRIETN, I have a strong background in full-stack development, creating dynamic and responsive web applications.
            </p>
            <ul className="text-lg md:text-xl space-y-4 mb-6">
              <li><span className="font-bold text-green-400">Frontend:</span> React.js, JavaScript, HTML5, CSS3</li>
              <li><span className="font-bold text-blue-400">Backend:</span> Node.js, Express.js, MongoDB</li>
              <li><span className="font-bold text-red-400">Version Control:</span> Git, GitHub</li>
              <li><span className="font-bold text-yellow-400">Languages:</span> Java (Core)</li>
            </ul>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Let's connect and collaborate to turn innovative ideas into reality.
              <div className='flex space-x-4'>
                <p className=''><span className='font-semibold text-purple-400'>Email: </span> rushikeshbagade911@gmail.com </p>
                <p className=''> <span className='font-semibold text-purple-400'>Mobile: </span> +91 7498140646 </p>
              </div>
            </p>
          </div>
        </div>
        <Animation />
      </div>
    </>
  );
}

export default About;

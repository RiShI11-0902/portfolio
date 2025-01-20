import React from 'react';
import Navbar from './Navbar';
import { rishi } from '../assets';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Animation from './Animation';
import Projects from './Projects';
import Certification from './Certificates';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#1E3E62] text-white min-h-screen flex flex-col items-center">
        <div className="container mx-auto px-5 md:px-10 py-16 flex flex-col lg:flex-row items-center lg:space-x-10">
          {/* Profile Section */}
          <div className="relative w-full lg:w-1/3 flex justify-center lg:justify-end mb-12 lg:mb-0">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-blue-900 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-red-900 rounded-full opacity-20 blur-xl"></div>

            {/* Profile Card */}
            <div className="relative z-10 bg-[#000000] bg-opacity-10 border border-blue-800 rounded-xl p-6 sm:p-8 flex flex-col items-center shadow-lg backdrop-blur-md">
              <img
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full mb-4 border-4 border-[#0B192C]"
                src={rishi}
                alt="Rushikesh Bagade"
              />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Rushikesh Bagade</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2 italic">Software Developer</p>
              <div className="mt-4 flex space-x-4">
                <a href="https://www.instagram.com/rishi_codes/" aria-label="Instagram">
                  <FaInstagram className="text-purple-500 hover:text-purple-400 transition duration-200" size={20} sm={25} />
                </a>
                <a href="https://www.linkedin.com/in/rushikesh-bagade11" aria-label="LinkedIn">
                  <FaLinkedin className="text-blue-500 hover:text-blue-400 transition duration-200" size={20} sm={25} />
                </a>
                <a href="https://github.com/RiShI11-0902" aria-label="GitHub">
                  <FaGithub className="text-gray-500 hover:text-gray-400 transition duration-200" size={20} sm={25} />
                </a>
              </div>
              <a href="" target="_blank" rel="noreferrer" className="mt-4">
                <button className="shadow-gray-200 hover:bg-white hover:text-black hover:border-b shadow-sm px-4 sm:px-5 py-2 rounded-xl hover:shadow-lg">
                  Resume
                </button>
              </a>
            </div>
          </div>

          {/* Bio Section */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 px-4 sm:px-0">
              I am a <span className="text-[#FF6500] font-bold">MERN</span> stack developer specializing in React.js, based in India. Currently pursuing an MCA at GHRIETN, I have a strong background in full-stack development, creating dynamic and responsive web applications.
            </p>
            <ul className="text-base sm:text-lg md:text-xl space-y-4 mb-6">
              <li>
                <span className="font-bold text-[#FF6500]">Frontend:</span> React.js, JavaScript, HTML5, CSS3
              </li>
              <li>
                <span className="font-bold text-[#FF6500]">Backend:</span> Node.js, Express.js, MongoDB
              </li>
              <li>
                <span className="font-bold text-[#FF6500]">Version Control:</span> Git, GitHub
              </li>
              <li>
                <span className="font-bold text-[#FF6500]">Languages:</span> Java (Core)
              </li>
            </ul>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Let's connect and collaborate to turn innovative ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-8 mt-4">
              <p>
                <span className="font-semibold text-[#FF6500]">Email: </span> rushikeshbagade911@gmail.com
              </p>
              <p>
                <span className="font-semibold text-[#FF6500]">Mobile: </span> +91 7498140646
              </p>
            </div>
          </div>
        </div>
        <Projects />
        <Certification />
        <Footer />
      </div>
    </>
  );
};

export default About;

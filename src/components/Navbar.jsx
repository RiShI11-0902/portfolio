
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  // const [random, setrandom] = useState()

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className={`container flex justify-between items-center w-full max-w-6xl mx-auto rounded-3xl p-4 md:p-6 lg:p-8 font-bold shadow-lg text-white   `}>
        {/* Logo */}
        <div className='dancing-script-Font text-4xl md:text-5xl lg:text-3xl text-[#FF6500]'>
          Rishi Codes
        </div>

        {/* Hamburger Icon */}
        {/* <div className='md:hidden'>
          <button onClick={handleToggle} className='focus:outline-none'>
            {toggle ? " " : <GiHamburgerMenu size={30} />}
          </button>
        </div> */}

        {/* Navigation Links */}
        {/* <div className={`fixed inset-0 z-40 bg-opacity-90 transition-transform duration-300 ease-in-out ${toggle ? 'translate-x-0 bg-black h-screen' : 'translate-x-full '} md:static md:bg-transparent md:w-auto md:translate-x-0`}>
          <div className='flex justify-end p-6 md:hidden'>
            <button onClick={handleToggle} className='text-white focus:outline-none'>
              <RxCross1 size={30} />
            </button>
          </div>
          <ul className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 lg:space-x-8 text-xl md:text-2xl lg:text-xl text-white   hover:text-blue-400 text-center md:text-left'>
            <li><Link to='/home' className='links cursor-pointer text-white hover:text-[#0B192C]' onClick={handleToggle}>Home</Link></li>
            <li><Link to='/about' className='links cursor-pointer text-white hover:text-[#0B192C]' onClick={handleToggle}>About</Link></li>
            <li><Link to='/projects' className='links cursor-pointer text-white hover:text-[#0B192C]' onClick={handleToggle}>Projects</Link></li>
            <li><Link to='/certificates' className='links cursor-pointer text-white hover:text-[#0B192C]' onClick={handleToggle}>Certificates</Link></li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;

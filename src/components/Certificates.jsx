import React, { useState } from 'react'
// import { c1, c2, c3, c4 } from '../assets'
import { GrClose } from "react-icons/gr"
import { c1, c2, c3, c4 } from '../assets'
import Navbar from './Navbar'
import Animation from './Animation'
import { RxCross1 } from 'react-icons/rx'

const Certification = () => {
    const [toggle, setToggle] = useState(false)
    const [img, setImg] = useState("")
    return (
        <>
            {
                toggle ? <div className="popup-image fixed bg-black z-[100] h-full w-full top-0 left-0 opacity-90">
                    <div className="preview p-5" data-target="number-1">
                        <RxCross1 onClick={() => setToggle(false)} className='bg-white absolute top-5 right-6 cursor-pointer ' />
                        <RxCross1 onClick={() => setToggle(false)} className='w-48 absolute top-0 left-0' />
                        <img id="main" className=" mx-auto object-cover  w-[27rem] my-16" src={img}
                            alt="" />
                    </div>
                </div>
                    : ""
            }
            <div className='bg-gray-900 text-white   overflow-hidden overflow-y-hidden h-full'>
                <Animation />
                <Navbar />

                <p id='certification' className='text-2xl text-center mt-10 font-extrabold'>CERTIFICATIONS</p>
                <div className="list md:grid md:grid-cols-3 md:w-fit p-5 space-y-5 w-fit md:space-y-0 mx-auto mt-10 md:gap-10 ">
                    <div className="cert1 snap-start  w-fit row-span-2">
                        <img onClick={() => setToggle(true) || setImg(c1)} className=' w-72 shadow-l shadow-gray-100 cursor-pointer' src={c1} alt="" srcset="" />
                    </div>
                    <div className="cert1 snap-start  w-fit">
                        <img onClick={() => setToggle(true) || setImg(c2)} className=' w-72 shadow-l shadow-gray-100 cursor-pointer' src={c2} alt="" srcset="" />
                    </div>
                    <div className="cert1 snap-start  w-fit">
                        <img onClick={() => setToggle(true) || setImg(c3)} className=' w-72 shadow-l shadow-gray-100 cursor-pointer' src={c3} alt="" srcset="" />
                    </div>
                    <div className="cert1 snap-start  w-fit col-start-2 row-start-2">
                        <img onClick={() => setToggle(true) || setImg(c4)} className=' w-72 shadow-l shadow-gray-100 cursor-pointer' src={c4} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Certification
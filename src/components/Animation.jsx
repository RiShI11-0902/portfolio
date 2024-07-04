import React, { useEffect } from 'react'
import gsap from 'gsap'
const Animation = () => {

    useEffect(() => {

        const ele = document.querySelectorAll('.circle')
        gsap.set(ele, { y: -900, opacity: 0 })
        ele.forEach((ele, i) => {
            const random = Math.floor(Math.random() * 10);

            gsap.to(ele, {
                y: '100vh',
                opacity: 1,
                repeat: -1,
                delay: i * 0.2 * random,
                duration: 5,
                ease: 'none'
            })
        })

    }, [])


    return (
        <>
        <div className='flex flex-row justify-around w-full'>

            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>



            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
            <div className='w-4 circle p-2 rounded-full border border-blue-300'></div>
        </div>
        </>
    )
}

export default Animation
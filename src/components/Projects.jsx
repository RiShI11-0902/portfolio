import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { mern1, mern2, project1, project2, project3, project4, project5, react1, react2, react3, react4, react5, react6 } from '../assets'
import Animation from './Animation'
import axios from 'axios'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'


const Projects = () => {

    const [image, setImage] = useState()
    const [hide, setHide] = useState(true)
    const [data, setData] = useState()
    const [filterData, setfilterData] = useState()
    const [colored, setColored] = useState()

    const images = [mern1, mern2, project1, project2, project3, project4, project5, react1, react2, react3, react4, react5, react6];


    useEffect(() => {

        const getProjects = async () => {
            const response = await axios.get('/data.json')
            console.log(response);
            setData(response.data)
            setfilterData(response.data)
        }

        // console.log(data);
        getProjects()
    }, [])

 useGSAP(()=>{
    gsap.from('.project-box',{
        scale:0,
        duration:1
    })
 })


    const show = () => {
        setHide(false)
        const ele = document.querySelectorAll(".project-box")
        console.log(ele);
        ele.forEach((e) => {
            e.addEventListener('mouseenter', function () {
                const img = e.getAttribute('data-image')
                const found = images.filter((i) => {
                    console.log(i);
                    console.log(img);

                    return i.includes(img);
                })
                console.log(found);
                setImage(found[0]);
            })
        })
    }

    const filter = (val) => {
        // setfilterData(data)
        console.log(filterData);
        if (val == " ") {
            console.log(val);
            setColored(false)
            setData(data)
        } else {
            const filteredData = filterData.filter((i) => {
                // console.log(i.tech.toLocaleLowerCase());
                setColored(true)
                return i.tech.toLocaleLowerCase().includes(val)
            })
            // setfilterData(filteredData)
            console.log(data);
            console.log(filteredData);
            setData(filteredData)
        }

    }

    return (
        <>          
         <div className='bg-gray-900 text-white h-full  overflow-hidden overflow-y-hidden'>

            <Animation />
            <Navbar />

            <div className='mt-20'>
                <div>
                    <div className='w-fit mx-auto -mt-10'><p><input onChange={(event) => filter(event.target.value)} type="text" class="w-80 px-5 text-left text-black h-12 my-2 border rounded-lg border-1 border-gray-300 outline-blue-500"
                        placeholder="Search By Tech" /></p></div>
                    <div id='imageBox' className={` ${hide ? 'hidden' : 'block'} top-44 z-50 w-52 2xl:top-72 2xl:h-72 2xl:w-[30rem] 2xl:left-[70%] left-[40%] p-20 fixed bg-contain bg-no-repeat bg-[url(${image})]`}>
                    </div>
                    <div className="projects-container mt-20 p-5 space-y-5" >
                        {
                            data?.map((i, key) => {
                                return <div key={key} data-image={i.image} className="project-box p-5   rounded-xl  hover:border-b-2 hover:bg-transparent text-white transform origin-left transition-colors duration-500 space-y-3" onMouseEnter={show} onMouseLeave={() => setHide(true)}>
                                    <div className="title text-2xl font-bold">{i.title}</div>
                                    <div className={`tech ${colored ? 'bg-yellow-400' : " bg-none "}`}>  {i.tech} </div>
                                    <div className="Links flex-row space-x-5">
                                        <button className='border border-white px-3 p-3 rounded-xl'><a href={i?.visit}>View</a></button>
                                        <button className='border border-white px-3 p-3 rounded-xl' >Code</button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Projects
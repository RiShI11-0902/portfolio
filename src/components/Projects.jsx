
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { mern1, mern2, project1, project2, project3, project4, project5, react1, react2, react3, react4, react5, react6 } from '../assets';
import Animation from './Animation';
import axios from 'axios';
import { gsap } from 'gsap';
import { LuExternalLink } from "react-icons/lu";


const Projects = () => {
    const [image, setImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [visit, setVisit] = useState()

    const images = [mern1, mern2, project1, project2, project3, project4, project5, react1, react2, react3, react4, react5, react6];

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/data.json');
            setData(response.data);
            setFilteredData(response.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        gsap.from('.project-card', {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.3,
        });
    }, []);

    const handleCardClick = (imageName, link) => {
        const foundImage = images.find((img) => img.includes(imageName));
        setImage(foundImage);
        setVisit(link);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        const searchResults = data.filter((project) =>
            project.tech.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setFilteredData(searchResults);
    };

    const viewCode = (event, code) => {
        event.stopPropagation()
        console.log(code);

        window.open(code, "_blank")
    }

    return (
        <>
            <Navbar />
            <div className="bg-gray-900 min-h-screen text-white overflow-hidden py-20">
                <Animation />
                <div className="flex justify-center mb-8  w-80 mx-auto">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full max-w-lg p-4 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search projects by technology..."
                    />
                </div>

                <div className="container mx-auto w-fit px-4 py-5">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredData.map((project, index) => (
                            <div
                                key={index}
                                className="project-card bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 "
                                // onClick={}
                            >
                                <div className=' flex flex-row justify-between cursor-pointer  items-center align-middle'>
                                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                                    <div onClick={(event) => {
                                    event.stopPropagation()
                                    handleCardClick(project.image, project.visit)
                                }}>
                                        <LuExternalLink />
                                    </div>
                                </div>
                                <p className="mb-4 text-gray-300">{project.tech}</p>
                                {
                                    project.codeLink ? <div className="flex justify-between mt-4">
                                        <button onClick={(event) => viewCode(event, project.codeLink)} className="px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-lg hover:from-gray-600 hover:to-gray-800 transition-all">
                                            Code
                                        </button>
                                        {/* <a href={project.code} className=''></a> */}
                                    </div> : " "
                                }

                            </div>
                        ))}
                    </div>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                        <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                            <button
                                className="absolute top-2 right-2 text-gray-800 hover:text-gray-600 transition"
                                onClick={handleCloseModal}
                            >
                                ✖
                            </button>
                            <a href={visit} className="px-4">
                                <img src={image} alt="Project Preview" className="w-full h-auto rounded-md" />
                                <p className='text-black text-center font-semibold mt-3'>click to visit</p>
                            </a>
                        </div>

                    </div>
                )}
            </div>
        </>
    );
};

export default Projects;

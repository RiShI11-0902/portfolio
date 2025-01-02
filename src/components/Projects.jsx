import React, { useEffect, useState } from 'react';
import { mern1, mern2, project1, project2, project3, project4, project5, react1, react2, react3, react4, react5, react6 } from '../assets';
import axios from 'axios';

const Projects = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const images = [mern1, mern2, project1, project2, project3, project4, project5, react1, react2, react3, react4, react5, react6];

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/data.json');
            setData(response.data);
            setFilteredData(response.data);
        };
        fetchData();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        const searchResults = data.filter((project) =>
            project.tech.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setFilteredData(searchResults);
    };

    const viewCode = (event, code) => {
        event.stopPropagation();
        window.open(code, "_blank");
    };

    return (
        <div className=" text-white overflow-hidden py-20">
            <p className='text-center font-bold text-5xl'>My Work</p>
            <div className="flex justify-center mb-8 mt-10 w-80 mx-auto">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full max-w-lg p-4 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search projects by technology..."
                />
            </div>
            {/* transition-transform duration-700 group-hover:rotate-y-180 group-hover:hidden */}
            <div className="container mx-auto px-4 py-5 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredData.map((project, index) => (
                        <div
                            key={index}
                            className="relative group w-96 h-64 bg-white backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:rotate-y-180 transition-transform"
                        >

                            {/* <p>{project.title}</p> */}
                            {/* Front of the Card */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white
                             text-black p-4 transition-transform duration-700 hover:rotate-y-180 group-hover:hidden ">
                                <img
                                    src={images.find((img) => img.includes(project.image))}
                                    alt="Project Thumbnail"
                                    className="w-full h-32 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-bold text-black">{project.title}</h3>
                            </div>

                            {/* Back of the Card */}
                            <div className="absolute inset-0 bg-[#FF6500] text-white flex flex-col items-center justify-center p-4 transform rotate-y-180 transition-transform duration-700 hidden group-hover:flex">
                                <p className="mb-4">{project.tech}</p>
                                <div className="flex space-x-4">
                                    {project.codeLink && (
                                        <button
                                            onClick={(event) => viewCode(event, project.codeLink)}
                                            className="px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-lg hover:from-gray-600 hover:to-gray-800 transition-all"
                                        >
                                            Code
                                        </button>
                                    )}
                                    {project.visit && (
                                        <a
                                            href={project.visit}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all"
                                        >
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

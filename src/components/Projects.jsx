import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion'; 

function Projects() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Adjust the number of projects per page

    // Calculate total pages
    const totalPages = Math.ceil(PROJECTS.length / itemsPerPage);

    // Get projects for the current page
    const currentProjects = PROJECTS.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className='pb-4 border-b border-neutral-900'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-4xl text-center'>Projects</motion.h1>
            
            <div>
                {currentProjects.map((project, index) => (
                    <div key={index} className='flex flex-wrap mb-8 lg:justify-center'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.8 }}
                            className='w-full lg:w-1/4'>
                            <a href={project.privew_url} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    width={150}
                                    height={150}
                                    className="mb-6 rounded"
                                />
                            </a>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.8 }}
                            className='w-full max-w-xl lg:w-3/4 lg:px-4 lg:justify-center'>
                            <h6 className='mb-2 font-semibold'>{project.title}</h6>
                            <p className='mb-4 text-justify text-neutral-400'>{project.description}</p>
                            <p className='mb-4 text-justify text-neutral-400'><a href={project.giturl} target='_blanck'>{project.giturl}</a></p>
                            {project.technologies.map((tech, idx) => (
                                <span key={idx} className='px-2 py-1 mt-4 mr-2 text-sm font-medium text-purple-800 rounded bg-neutral-900'>
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-16">
                <button
                    className="px-4 py-2 mx-1 text-white bg-gray-700 rounded hover:bg-gray-800 disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 mx-1 rounded ${
                            currentPage === index + 1
                                ? 'bg-purple-700 text-white'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-800'
                        }`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    className="px-4 py-2 mx-1 text-white bg-gray-700 rounded hover:bg-gray-800 disabled:opacity-50"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Projects;

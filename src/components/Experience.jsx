import React from 'react'
import { EXPERIENCES } from '../constants';
import { motion } from 'motion/react';
function Experience() {
    return (
        <div className='pb-4 border-b border-neutral-900'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-4xl text-center'>Experience</motion.h1>
            {/* Experience year */}
            <div>

                {EXPERIENCES.map((expirience, index) => (
                    <div key={index} className='flex flex-wrap mb-8 lg:justify-center'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.8 }}
                            className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-400'>{expirience.year}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.8 }}
                            className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>
                                {expirience.role}-{""}
                                <span className='text-sm text-purple-100'>
                                    {expirience.company}
                                </span>
                            </h6>
                            <p className='mb-4 text-justify text-neutral-400'>{expirience.description}</p>
                            {expirience.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className='px-2 py-1 mt-4 mr-2 text-sm font-medium text-purple-800 rounded bg-neutral-900'
                                >{tech}</span>
                            ))}

                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
import React from 'react'
import aboutimg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'motion/react';

function About() {
    return (
        <div className='pb-4 border-b border-neutral-900'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-4xl text-center'>
                About
                <span className='text-neutral-500'>Me</span>
            </motion.h1>

            <div className='flex flex-wrap'>
                <motion.div
                    className='w-full lg:w-1/2 lg:p-8'
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='flex items-center justify-center'>
                        <img className='block max-w-[90%] h-auto sm:max-w-[60%] md:max-w-[60%] lg:max-w-[60%] rounded-2xl' src={aboutimg} alt="aboutImg" />
                    </div>
                </motion.div>
                <motion.div
                    className='w-full lg:w-1/2'
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='flex justify-center lg:justify-start'>
                        <p className='max-w-xl py-6 my-2 font-light text-justify'>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default About
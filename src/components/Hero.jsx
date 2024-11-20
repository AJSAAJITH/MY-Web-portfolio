import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/bule1.png';
import { motion } from "motion/react"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
})

function Hero() {
    return (
        <div className="pb-4 border border-neutral-900 lg:mb-30">
            <div className="flex flex-wrap">
                {/* Left Content */}
                <div className="w-full p-2 lg:w-1/2">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-8 text-6xl font-thin tracking-tight sm:text-5xl lg:pb-16 lg:mt-16 lg:text-6xl">
                            AJA Saajith
                        </motion.h1>

                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
                            Full Stack Developer
                        </motion.span>

                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="mt-4 text-sm font-light tracking-tighter text-justify sm:text-base">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.3 }}
                            src={profilePic}
                            alt="profilePic"
                            className="block max-w-[90%] h-auto sm:max-w-[60%] md:max-w-[60%] lg:max-w-[60%] rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

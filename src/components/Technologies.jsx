import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { RiJavascriptLine } from 'react-icons/ri';
import { SiMongodb } from "react-icons/si";
import { RiNodejsLine } from 'react-icons/ri';
import { GrMysql } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";

import { motion } from 'motion/react';
import { animate } from 'motion';

const iconVarient = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
});

function Technologies() {
    return (
        <div className='pb-24 border-b border-neutral-800'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-4xl text-center'>
                Technologies
            </motion.h1>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>

                <motion.div
                    variants={iconVarient(2.5)}
                    initial="initial"
                    animate="animate"
                    className='p-4 border-4 border-neutral-800 rounded-2xl'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={iconVarient(2.5)}
                    initial="initial"
                    animate="animate"
                    className='p-4 border-4 border-neutral-800 rounded-2xl'>
                    <RiNodejsLine className='text-green-500 text-7xl' />
                </motion.div>
                <motion.div
                    variants={iconVarient(2.5)}
                    initial="initial"
                    animate="animate"
                    className='p-4 border-4 border-neutral-800 rounded-2xl'>
                    <RiJavascriptLine className='text-yellow-400 text-7xl' />
                </motion.div>
                <motion.div
                    variants={iconVarient(2.5)}
                    initial="initial"
                    animate="animate"
                    className='p-4 border-4 border-neutral-800 rounded-2xl'>
                    <TbBrandRedux className='text-purple-500 text-7xl' />
                </motion.div>
                <motion.div
                    variants={iconVarient(2.5)}
                    initial="initial"
                    animate="animate"
                    className='p-4 border-4 border-neutral-800 rounded-2xl'>
                    <TbBrandNextjs className='text-7xl' />
                </motion.div>
                <motion.div
                    variants={iconVarient(2.5)}
                    initial="initial"
                    animate="animate"
                    className='p-4 border-4 border-neutral-800 rounded-2xl'>
                    <SiMongodb className='text-green-500 text-7xl' />
                </motion.div>
                <motion.div
                    variants={iconVarient(2.5)}
                    initial="initial"
                    animate="animate"
                    className='p-4 border-4 border-neutral-800 rounded-2xl'>
                    <GrMysql className='text-blue-500 text-7xl' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies
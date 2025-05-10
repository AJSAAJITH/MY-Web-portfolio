import React from 'react'
import { motion } from 'motion/react'
function Resume() {
    return (
        <div className='pb-20 border-b border-neutral-900'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-4xl text-center'>Get <span className='text-yellow-200'>Resume</span></motion.h1>

            <div className="items-center justify-center text-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                >
                    <a
                        href="https://drive.google.com/file/d/1fyHz3bc7WFlRmAb4ezzW5KAXZePRv5YD/view?usp=drive_link" // Replace with the actual file path or URL
                        download="AJASaajith_CV.pdf"
                        className="p-4 text-sm font-semibold tracking-tighter text-purple-200 bg-neutral-500 rounded-2xl"
                        target="_blank"
                    >
                        Resume
                    </a>
                </motion.div>
            </div>

        </div>
    )
}

export default Resume
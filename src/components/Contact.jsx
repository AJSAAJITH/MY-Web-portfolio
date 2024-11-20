import React from 'react'
import { CONTACT } from '../constants';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';
import { motion } from 'motion/react';

function Contact() {
  return (
    <div className='pb-20 border-b border-neutral-900'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-4xl text-center'>
        Get in Touch
      </motion.h1>

      <div className='tracking-tighter text-center'>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='my-4'>
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className='my-4'>
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          href='#'
          className='border-b'>
          {CONTACT.email}
        </motion.a>
      </div>
      <div className='flex items-center justify-center gap-4 m-6 text-4xl'>
      <a
          href="https://www.linkedin.com/in/a-j-a-saajith/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AJSAAJITH"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800"
        >
          <FaGithub />
        </a>
        <a
          href="https://web.facebook.com/A.J.A.Saajith/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaFacebook />
        </a>
        <a
          href="https://wa.me/94757425593?text=Hi%20there%2C%20I%20found%20your%20profile!"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  )
}

export default Contact
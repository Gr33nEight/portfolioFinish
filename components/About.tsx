import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left, md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'> 
            ABOUT
        </h3>
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2
          }}
          whileInView={{ opacity:1, x: 0 }}
          viewport={{ once: true }}
          src="https://i.ibb.co/KKJhdpc/IMG-2858.jpg"
          className='-mb-20 md:mb-0 flex-shrink-0 w-56 h56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold'>
            Here is a <span className='underline decoration-[#f7ab0a]'>little</span> background
          </h4>
          <p className='text-base'>
          I am Natanael and I am young IOS Developer, I started learning programming when I was 12 and learnt a lot of languages on beginner level, but I felt in love in Swift. I’ve been working in it for almost 3 years. I am able to create beautiful designs in SwiftUI and complex backend using 3rd parties library and frameworks.
          </p>
        </div>
    </motion.div>
  )
}
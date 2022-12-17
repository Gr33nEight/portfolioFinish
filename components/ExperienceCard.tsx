import { motion, MotionConfig } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://scontent.fktw3-1.fna.fbcdn.net/v/t1.6435-9/117341654_1182579222128105_4177708421452578862_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=58_pCTzRVDUAX8FMXGV&_nc_ht=scontent.fktw3-1.fna&oh=00_AfB0EHmRG2d0yumaSX_MTaC8a2QHxUIGSseaaw9xOWzzWQ&oe=63C45A6D'
        alt=''
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of IOS Developer Natanael Jop</h4>
            <p className='font-bold text-2xl mt-1'>IOS Developer Natanael Jop</p>    
            <div className='flex space-x-2 my-2'>
                <img 
                className='h-10 w-10 rounded-full'
                src='' 
                />
                <img 
                className='h-10 w-10 rounded-full'
                src='' 
                />
                <img 
                className='h-10 w-10 rounded-full'
                src='' 
                />
                <img 
                className='h-10 w-10 rounded-full'
                src='' 
                />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points Summary points Summary points Summary points Summary points Summary points</li>
                <li>Summary points Summary points Summary points Summary points Summary points Summary points</li>
                <li>Summary points Summary points Summary points Summary points Summary points Summary points</li>
                <li>Summary points Summary points Summary points Summary points Summary points Summary points</li>
                <li>Summary points Summary points Summary points Summary points Summary points Summary points</li>
            </ul>
        </div>    
    </article>
  )
}
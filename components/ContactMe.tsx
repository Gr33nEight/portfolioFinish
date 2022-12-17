import { motion } from 'framer-motion'
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { constants } from 'buffer'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
}

type Props = {}

export default function ContactMe({}: Props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        window.location.href = 'mailto:natanael.jop.app@gmail.com?subject='+data.subject+'&body=Hi, my name is '+data.name+'. '+data.message+' ('+data.email+')';
    }
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact Me
        </h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
            I have got just what you need.{" "} 
            <span className='underline decoration-[#f7ab0a]'>Lets Talk</span>
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center space-x-5'>
                    <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>+48 502700933</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>natanael.jop.app@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>+48 502700933</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput'  />
                    <button className='bg-[#f7ab0a] py-5 ox-10 rounded-b-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
    </motion.div>
  )
}
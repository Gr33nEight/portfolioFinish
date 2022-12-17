import Head from 'next/head'
import Image from 'next/image'
import { Inter, Sedgwick_Ave } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 '>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <section id="heroSection" className='snap-start'>
        <Hero />
      </section>
      <section id="aboutSection" className='snap-center'>
        <About />
      </section>
      <section id="experienceSection" className='snap-center'>
        <WorkExperience />
      </section>
      <section id="skillsSection" className='snap-start'>
        <Skills />
      </section>
      <section id='projectsSection' className='snap-start'>
        <Projects />
      </section>
      <section id='contactSection' className='snap-start'>
        <ContactMe />
      </section>
      <Link href="#heroSection">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-end mr-5'>
            <img 
            className='h-10 w-10 rounded-full filter grayscale hove:grayscale-0 cursor-pointer'
            src='https://scontent.fktw3-1.fna.fbcdn.net/v/t1.6435-9/117341654_1182579222128105_4177708421452578862_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=58_pCTzRVDUAX8FMXGV&_nc_ht=scontent.fktw3-1.fna&oh=00_AfB0EHmRG2d0yumaSX_MTaC8a2QHxUIGSseaaw9xOWzzWQ&oe=63C45A6D' />
          </div>
        </footer>
      </Link>
    </div>
  )
}

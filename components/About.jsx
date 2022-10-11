import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div id="about" className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#72f] to-[#c1b]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'> 
                I am a first year college student passionate about Front-End and learning new technologies. I specialize in building mobile UI applications that interact with APIs and other back-end technologies. In college I learned GIT and we are currently learning Java, but I self-taught myself learning HTML, CSS, Javascript, React JS, Next JS, Tailwind CSS, SASS, etc. 
            </p>
            <p className='py-2 text-gray-600'>
            I would like to start in this industry mainly to learn from people who know much more than me and to learn other technologies.
            </p>
            <Link href="/#projects">
            <p className='py-2 text-gray-600 underline cursor-pointer'>Checkout out some of my latest projects.</p>
            </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://www.muycomputer.com/wp-content/uploads/2018/07/PC.jpg" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About
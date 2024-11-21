import React,{useState} from 'react'
import AvacadoI from '../../assets/a1.png'
// import Navbar from './components/Navbar/Navbar.jsx'
import Navbar from '../Navbar/navbar.jsx'
import {FaFacebookF,FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

const Hero = () => {
    const [sidebar,setSidebar]=React.useState(false)
  return (
    <main className='md:px-12 md:py-6 bg-green-900'>
        <section className='relative min-h-[650px] bg-gradient-to-r from-green-500 to-green-300 w-full md:rounded-xl shadow-md'>
            <div class="container">
                {/* navbar */}
                <Navbar sidebar={sidebar} setSidebar={setSidebar} />
                {/* hero section */}
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[]px:">
                    {/* text content section */}
                    <div className='text-white mt-[100px] md:mt-0 p-4 space-y-6'>
                        <br /><br /><br /><h1 data-aos='fade-up' data-aos-delay='300' className='text-5xl font-bold uppercase text-shadow'>Smooth and Savory</h1>
                        <p className='text-sm' data-aos='fade-up' data-aos-delay='500'>Avocado, the millennial's muse and Gen Z's go-to green. Smooth, creamy, and ready to guac your world. It's the superfood that's as versatile as your wardrobe – whether smashed on toast or blended into a trendy smoothie bowl, avocados are the real MVP of brunch. With healthy fats and a knack for making everything taste better, they're the reason why millennials can't afford houses but can afford avocado toast.</p>
                        <button data-aos='fade-up' data-aos-delay='700' data-aos-offset='0' class="btn"><i class="animation"></i>Shop Now<i class="animation"></i>
                        </button>
                    </div>
                    {/* image section */}
                    <div data-aos='zoom-in'>
                        <img src={AvacadoI} alt="Image not found" className='relative z-10 w-[400px] top-0 img-shadow' />
                    </div>
                    {/* blank div section */}
                    <div className='md:hidden'>

                    </div>
                </div>
            </div>
            {/* background large text */}
            <h1 data-aos='fade' data-aos-delay='600' data-aos-duration='1800' className='large-text'>Avocado</h1>
            {/* sidebar section  */}
            {
                sidebar && (
                    <div className='absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-green-700 to-green-300 z-10'>
                        <div className='w-full h-full flex justify-center items-center'>
                            <div className='text-white flex flex-col justify-center items-center gap-6'>
                                {/* line  */}
                                <div className='w-[1px] h-[70px] bg-white'></div>
                                <a href="https://github.com/Meeth8" target='_blank'>
                                <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                                    <FaGithub  className='text-2xl' />
                                </div> </a>
                                <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                                    <FaInstagram className='text-2xl' />
                                </div>
                                <a href="https://www.linkedin.com/in/meeth-luniya-9a2a73215/" target="_blank">
                                <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                                    <FaLinkedinIn className='text-2xl' />
                                </div> </a>
                                {/* line  */}
                                <div className='w-[1px] h-[70px] bg-white'></div>
                            </div>

                        </div>

                    </div>
                )
            }
        </section>
    </main>
  )
}

export default Hero

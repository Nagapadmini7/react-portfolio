import React from 'react';

import Img1 from '../assets/img1.jpeg'

import Img3 from '../assets/img3.png'
import Img4 from '../assets/img4.jpg'
import ethfit from '../assets/ethfit.png'
import {FaGithub,FaLink} from 'react-icons/fa';


/*const Work = () => {
  return <section className='section' id="work">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div ><h2 className='h2 leading-tight text-accent'>My Latest <br/>Work</h2>
          
             <button  className='btn btn-sm' >View all projects </button></div>
          /*<motion.div variants={fadeIn('left',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount:0.3}} className='group relative overflow-hidden border-2 
          border-white/50 rounded-x1'><div className='group-hover:bg-black/70 w-full h-full absolute 
          z-40 transition-all duration-300'></div>
          <img  className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 
          transition-all duration-500 z-50'><span className='text-gradient'>Share-a-bite</span></div>
          
          <a className='absolute -bottom-full left-12 group-hover:bottom-14
          transition-all duration-700 z-50' href="https://github.com/Nagapadmini7/share-a-bite">
                <FaGithub/>
              </a>
              <a className='absolute -bottom-full left-20 group-hover:bottom-14
          transition-all duration-700 z-50' href="https://share-a-bite-378i.vercel.app/">
                <FaLink/>
              </a>
          </motion.div>
          
          <motion.div variants={fadeIn('right',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount:0.3}} className='group relative overflow-hidden border-2 
          border-white/50 rounded-x1'><div className='group-hover:bg-black/70 w-full h-full absolute 
          z-40 transition-all duration-300'></div>
          <img  className='group-hover:scale-125 transition-all duration-500' src={Img4} alt=''/>
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 
          transition-all duration-500 z-50'><span className='text-gradient'>Share-a-bite</span></div>
          
          <a className='absolute -bottom-full left-12 group-hover:bottom-14
          transition-all duration-700 z-50' href="https://github.com/Nagapadmini7/share-a-bite">
                <FaGithub/>
              </a>
              <a className='absolute -bottom-full left-20 group-hover:bottom-14
          transition-all duration-700 z-50' href="https://share-a-bite-378i.vercel.app/">
                <FaLink/>
              </a>
          </motion.div>
          <div>
          <motion.div variants={fadeIn('left',0.7)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount:0.3}} className='group relative overflow-hidden border-2 
          border-white/50 rounded-x1'><div className='group-hover:bg-black/70 w-full h-full absolute 
          z-40 transition-all duration-300'></div>
          <img  className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 
          transition-all duration-500 z-50'><span className='text-gradient'>Share-a-bite</span></div>
          
          <a className='absolute -bottom-full left-12 group-hover:bottom-14
          transition-all duration-700 z-50' href="https://github.com/Nagapadmini7/share-a-bite">
                <FaGithub/>
              </a>
              <a className='absolute -bottom-full left-20 group-hover:bottom-14
          transition-all duration-700 z-50' href="https://share-a-bite-378i.vercel.app/">
                <FaLink/>
              </a>
          </motion.div>
          </div>
        </div>
        <motion.div
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount:0.3}} className='flex-1 flex flex-col gap-y-10 '><div className='group relative overflow-hidden border-2 
          border-white/50 rounded-x1'><div className='group-hover:bg-black/70 w-full h-full absolute 
          z-40 transition-all duration-300'></div>
          <img  className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 
          transition-all duration-500 z-50'><span className='text-gradient'>Spotify Clone</span></div>
          <a className='absolute -bottom-full left-12 group-hover:bottom-14
          transition-all duration-700 z-50' href="https://github.com/Nagapadmini7/SpotifyClone">
                <FaGithub/>
              </a>
              <a className='absolute -bottom-full left-20 group-hover:bottom-14
          transition-all duration-700 z-50' href="spotify-clone-five-sigma.vercel.app

          ">
                <FaLink/>
              </a></div>
        </motion.div>
        
      </div>
      
      
      </div>
  
  </section>;
};

export default Work;*/



const Work = () => {
  return  <section id="services"><div className='container mx-auto'>
    <div className='flex flex-col gap-y-10 lg:flex-row'>
    <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
     <h2 className='h2 leading-tight text-accent'>Projects</h2> 
     <div>
     <div className='  min-h-screen items-center justify-center mt-[-80px] flex flex-col lg:flex-row gap-x-10'>
     <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Img1} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Spotify Clone</h1>
        <a className='absolute -bottom-full left-12 group-hover:bottom-14
          transition-all duration-700 z-50' href="https://github.com/Nagapadmini7/SpotifyClone">
                <FaGithub/>
              </a>
              <a className='absolute -bottom-full left-20 group-hover:bottom-14
          transition-all duration-700 z-50' href="spotify-clone-five-sigma.vercel.app

          ">
                <FaLink/>
              </a>
       
      </div>
    </div>
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={ethfit} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Eth Fit</h1>
        
              <a className='absolute -bottom-full left-20 group-hover:bottom-14
          transition-all duration-700 z-50' href="https://devfolio.co/projects/ethfit-2287">
                <FaLink/>
              </a>
       
      </div>
    </div>
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Img3} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Velocity Vortex</h1>
        <a className='absolute -bottom-full left-12 group-hover:bottom-14
          transition-all duration-700 z-50' href="https://github.com/Nagapadmini7/Racing-game">
                <FaGithub/>
              </a>
              <a className='absolute -bottom-full left-20 group-hover:bottom-14
          transition-all duration-700 z-50' href="https://nagapadmini-racing-game.vercel.app">
                <FaLink/>
              </a>
       
      </div>
    </div>
  </div>
  
     </div>
     
    </div>
  </div>
  
  </div>
  <div className='  min-h-screen items-center justify-center mt-[-250px] flex flex-col lg:flex-row gap-x-10'>
  <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Img4} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Blockchain based loyalty program</h1>
        <a className='absolute -bottom-full left-12 group-hover:bottom-14
          transition-all duration-700 z-50' href="https://github.com/Nagapadmini7/Loyalty-based-reward-system.git">
                <FaGithub/>
              </a>
              
       
      </div>
      
    </div>
    
    
    
  </div>
  
     </div>
     

    
    </section>
 
};

export default Work;

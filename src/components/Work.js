import React from 'react';
import{motion} from 'framer-motion'
import { fadeIn } from '../variants';
import Img1 from '../assets/img1.jpeg'
import Img2 from '../assets/img2.jpeg'
import {FaGithub,FaLink} from 'react-icons/fa';


const Work = () => {
  return <section className='section' id="work">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div ><h2 className='h2 leading-tight text-accent'>My Latest <br/>Work</h2>
          
             <button  className='btn btn-sm' >View all projects </button></div>
          <motion.div variants={fadeIn('right',0.3)}
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

export default Work;

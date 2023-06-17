import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'



const About = () => {
  const[ref, InView]= useInView({
    threshold:0.5,
  })
  return <section className='section'
   id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row'>
        <motion.div 
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}} className='flex-1'>
          <h2 className='h2 text-accent'>About me</h2>
          <h3 className='h3 mb-4'>I'm a freeeeccsccccc</h3>
        <p className='mb-6'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et obcaecati reprehenderit dicta, id ea aperiam distinctio nihil incidunt repellendus, accusantium vitae ad dignissimos dolorum cum, 
          illum accusamus consequatur fugiat?</p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary
               text-gradient mb-2'>
                {InView? <CountUp start={0} end={2} duration={3}/>:null}k+</div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of<br/>Experience
                  </div></div>
                  <div></div></div>
                  </motion.div>
      </div>
    </div>
   </section>;
};

export default About;

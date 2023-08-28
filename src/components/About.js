import React from 'react';


import {motion} from 'framer-motion'
import {fadeIn} from '../variants'



const About = () => {
  
  return <section className='section'
   id='about' >
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row'>
        <motion.div 
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}} className='flex-1'>
          <h2 className='h2 text-accent'>About me</h2>
          
        <p className='mb-6'> My name is Bucheti Naga Padmini, and I am a third-year student at NIT Hamirpur, on a captivating journey of exploration in the realms of Blockchain Technologies and Artificial Intelligence (AI). With a fervent curiosity and a relentless pursuit of knowledge, I am driven to make a meaningful impact in these cutting-edge fields.</p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <ul>
                <li><strong>Degree:</strong> Btech, Electonics and Communication Engineering, NIT Hamirpur </li>
                <li><strong>Schooling:</strong> Narayana Junior College, Vijaywada(Class 12) || Atomic Energy Central School (Class 10) </li>
                <li><strong>Achievements: </strong> Grand-Finalish SIH 2022
                <li>Young Innovators Program By CCMB</li>
                <li>Among the top 1% to qualify Flipkart Grid 5.0</li>
                <li>Winner of Business Hackathon organised by Incubator Cell, NIT Hamirpur</li>
                <li>AWS AI/ML Scholarship</li> </li>
                <li><strong>Community Involvement: </strong> 
                Mentee: Codess Cafe 
                <li>Executive Member: Society for Promotion of Electronics Culture (SPEC)</li>
                <li>Executive Member: Team Public Relation</li>
                <li> Cadet: NCC Army</li></li>
                
                
              </ul>
              </div>
                  <div></div></div>
                  </motion.div>
      </div>
    </div>
   </section>;
};

export default About;

import React from 'react';
//countup
import CountUp from 'react-countup';
//intesection observer
import {useInView} from 'react-intersection-observer';
//motion
import {motion} from 'framer-motion';
//import variant
import {fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img NEED NEW IMAGE*/}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
          {/* text */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'>
            <h2 className='h2 text-accent '>About me.</h2>
            <h3 className='h3 mb-4'>Front-end Developer, passionate about design. </h3>
            <p className='mb-6'>I am focused on creating visually appealing and user-friendly web applications, and well-versed in UI/UX design and responsive web design.</p>
            {/* stats? maybe certifications Will CHANGE */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              {/* counter 1 */}
              <div>
                <div className='text-[40px] font-tertiary text-accent mb-2'>
                  {
                    inView ? 
                    <CountUp start={0} end={5} duration={3} /> : null}
                    +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>Industry Standard<br /> Certifications</div>
              </div>
              {/* counter 2 */}
              <div>
                <div className='text-[40px] font-tertiary text-accent mb-2'>
                  {
                    inView ? 
                    <CountUp start={0} end={175} duration={3} /> : null}
                    +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>GitHub<br /> Contributions</div>
              </div>
              {/* counter 3 */}
              <div>
                <div className='text-[40px] font-tertiary text-accent mb-2'>
                  {
                    inView ? 
                    <CountUp start={0} end={1} duration={3} /> : null}
                    +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>Years<br />Experience</div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href="#" className='text-accent btn-link'>My Portfolio</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default About;

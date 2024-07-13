import React from 'react'
import Heading1 from '@/components/atoms/Heading/Heading1'
import Heading2 from '@/components/atoms/Heading/Heading2'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section id='hero-section' className='bg-hero-gradient bg-right-top bg-no-repeat p-section-padding py-44 h-screen overflow-hidden flex'>
      <div>
        <Heading2 text='Software Developer' className='uppercase opacity-60 tracking-wider'/>
        <Heading1 text='Nahyan Sharvin' />
        <p className='font-light leading-normal text-xl max-w-md pl-7 mt-20 border-l border-foreground/50 opacity-60'>I'm a self taught software engineer and designer based in Kerala, India. I love building applications and solving problems.</p>
      </div>
      <div>
        <Image src='/images/hero-image.png' width={1000} height={500} alt='Hero Image' priority />
      </div>
    </section>
  )
}

export default HeroSection
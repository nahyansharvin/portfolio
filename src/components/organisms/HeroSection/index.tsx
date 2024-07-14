import React from 'react'
import Heading1 from '@/components/atoms/Heading/Heading1'
import Heading2 from '@/components/atoms/Heading/Heading2'
import Image from 'next/image'
import SocialMedia from '@/constants/SocialMedia'
import Link from 'next/link'

const resumeUrl = 'https://drive.google.com/drive/folders/1Ib2G--UuOfy4UM9q0FwGL8bt1c4abW5o?usp=sharing'

const HeroSection = () => {
  return (
    <section id='hero' className='w-full bg-hero-gradient bg-right bg-no-repeat bg-contain p-section-padding py-44 h-screen overflow-hidden flex'>
      <div className='absolute -left-2 top-[50%] -translate-y-1/2 grid gap-12'>
        {Array(5).fill(0).map((_) => (
          <div className='h-1 w-9 bg-secondary rotate-[35deg]' />
        ))}
      </div>
      <div>
        <Heading2 className='uppercase opacity-60 tracking-wider'>Software Developer</Heading2>
        <Heading1>Nahyan Sharvin</Heading1>
        <p className='font-light leading-normal text-xl max-w-sm pl-7 mt-20 border-l border-foreground/50 opacity-60'>I'm a self taught software engineer and designer based in Kerala, India. I love building applications and solving problems.</p>
      </div>
      <div className='relative'>
        {/* Download CV button */}
        <div className='absolute top-48 left-6'>
          <div className='relative h-20 w-20'>
            <div className='animate-ping absolute inline-flex w-full h-full rounded-full bg-secondary/15' />
            <a href={resumeUrl} target='_blank' className='relative inline-flex flex-col w-full h-full items-center justify-center bg-secondary text-white font-display font-medium text-xl rounded-full'>
              <Image src='/icons/download-icon.svg' width={28} height={28} alt='Download Icon' />
              CV
            </a>
          </div>
        </div>
        <Image src='/images/hero-image-full.png' width={1000} height={500} alt='Hero Image' className='mt-5' priority />
      </div>
      <div className='absolute right-10 top-[50%] -translate-y-1/2 grid gap-4'>
        {SocialMedia.map((social, index) => (
          <Link
            key={index}
            href={social.url}
            target='_blank'
            rel='noreferrer'
          >
            <Image src={social.icon} alt={social.name} width={40} height={40} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default HeroSection

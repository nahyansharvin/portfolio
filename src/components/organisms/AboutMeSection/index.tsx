import React from 'react'
import Image from 'next/image'
import Heading1 from '@/components/atoms/Heading/Heading1'

const AboutMe = () => {
  return (
    <section id='about' className='p-section-padding py-40 flex gap-5'>
        <div className='relative py-2 flex-initial'>
            <Image src='/images/about-image.png' alt='About Image' width={440} height={100} />
            <Image src='/images/sphere.png' alt='Sphere' width={90} height={10} className='absolute bottom-8 -left-2 -rotate-90' />
        </div>
        <div className='max-w-xl flex flex-col gap-8 items-start'>
            <Heading1 className='-translate-x-28'>About<br/>me</Heading1>
            <p className='font-light leading-loose'>I am a self-taught developer with a relentless passion for harnessing technology and design to pioneer innovative real-world solutions. With over three years of hands-on experience in building software for web and mobile applications, I am driven by a desire to push the boundaries of what is possible and to breathe life into new projects from their conceptual stages.</p>
            <a href="#contact" className='bg-secondary px-9 p-2 rounded-full'>Contact me</a>
        </div>
    </section>
  )
}

export default AboutMe
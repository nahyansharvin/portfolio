import React from 'react'
import Image from 'next/image'
import Heading1 from '@/components/atoms/Heading/Heading1'

const SkillsSection = () => {
  return (
    <section id='skills' className='w-full p-section-padding py-14 gap-5'>
        <Heading1>Tech</Heading1>
        <Image src='/images/tech-stacks.svg' alt='Terch Stacks' width={1100} height={500} className='my-16'/>
    </section>
  )
}

export default SkillsSection
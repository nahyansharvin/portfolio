import React from 'react'
import Image from 'next/image'

type EducationItemProps = {
  title: string
  date: string
  institution: string
  location: string
  description: string
}

const EducationItem: React.FC<EducationItemProps> = (props) => {
  return (
    <div className='relative font-display border-foreground'>
      <div className='w-12 h-12 flex items-center justify-center bg-edu-icon-bg rounded-full absolute left-[30%] -translate-x-[50%]'>
        <Image src='/icons/education.svg' alt='Education' width={40} height={10} />
      </div>

      <div className='max-md:pl-10 max-md:ml-[30%] max-md:border-l max-md:pb-2 md:text-right md:pr-10 md:w-[30%] md:float-left'>
        <h3 className='text-2xl font-medium'>{props.title}</h3>
        <h4 className='text-base font-extralight'>{props.title}</h4>
      </div>

      <div  className='ml-[30%] pl-10 pb-5  border-l'>
        <h3 className='text-2xl font-medium'>{props.institution}</h3>
        <h4 className='text-base font-extralight'>{props.location}</h4>
        <p className='font-sans font-light py-2'>{props.description}</p>
      </div>
      
    </div>
  )
}

export default EducationItem
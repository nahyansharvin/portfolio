import Heading1 from '@/components/atoms/Heading/Heading1'
import React from 'react'
import SocialMedia from '@/constants/SocialMedia'
import Image from 'next/image'
import Link from 'next/link'

const FollowMe = () => {
  return (
    <div className='p-section-padding w-full flex items-center justify-between my-20'>
      <div>
        <Heading1>Follow me</Heading1>
        <div className='mt-4 mx-2 flex flex-row-reverse justify-between'>
          {Array(20).fill(0).map((_, index) => (
            <div key={index}
              className={`w-2.5 h-2.5 bg-secondary rounded-full`}
              style={{ opacity: index * 0.05 }}
            />
          ))}
        </div>
      </div>

      <div className='grid grid-cols-2 gap-5 mr-20'>
        {SocialMedia.map((social, index) => (
          <Link
            key={index}
            href={social.url}
            target='_blank'
            rel='noreferrer'
          >
            <Image src={social.icon} alt={social.name} width={55} height={40} />
          </Link>
        ))}
      </div>

    </div>
  )
}

export default FollowMe
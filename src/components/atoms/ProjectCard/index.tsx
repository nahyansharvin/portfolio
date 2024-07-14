import Image from 'next/image'
import React from 'react'

type ProjectCardProps = {
    name: string
    type: string
    description: string
    thumbnail: string
    links: {
        name: string
        href: string
    }[]
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    return (
        <div className='flex gap-3'>
            <div id='thumbnail' className='w-[35%] rounded-2xl overflow-hidden'>
                <Image src='/images/hero-gradient.png' alt='Project Thumbnail' width={500} height={200} className='object-cover' />
            </div>
            <div className='md:w-[50%] p-4 py-6'>
                <h3 className='text-3xl font-display font-medium'>{props.name}</h3>
                <h4 className='font-display font-light text-foreground/50 after:h-[3px] after:w-32 after:mt-1 after:absolute after:block after:bg-secondary'>{props.type}</h4>

                <p className='font-light leading-relaxed my-4 line-clamp-4'>
                    {props.description}
                </p>
                <div id='links' className='flex gap-3 text-sky-600 underline underline-offset-4'>
                    {props.links.map((link, index) => (
                        <a key={index} href={link.href} target='_blank'>{link.name}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
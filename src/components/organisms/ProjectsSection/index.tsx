import Heading1 from '@/components/atoms/Heading/Heading1'
import Heading2 from '@/components/atoms/Heading/Heading2'
import ProjectCard from '@/components/atoms/ProjectCard'
import React from 'react'

const projects = [
  {
    name: 'Students Profile',
    type: 'Web Development',
    description: 'The student profile is a college management system. It works based on different user types and permissions. Filter users on certain conditions like by join year or department. The app is developed using the mern-stack.',
    thumbnail: '/images/hero-gradient.png',
    links: [
      { name: 'Details', href: '' },
      { name: 'Live App', href: '' }
    ]
  },
  {
    name: 'Letter Head Generator',
    type: 'Web Development',
    description: 'Designed and implemented a sophisticated Letter Head generation system catering to the diverse needs of EMEA College of Arts and Science, Kondotty, Connect, and IEDC EMEA communities.',
    thumbnail: '/images/hero-gradient.png',
    links: [
      { name: 'Details', href: '' },
      { name: 'Live App', href: '' }
    ]
  },
  {
    name: 'Bobby',
    type: 'Discord Bot',
    description: 'Bobby is a discord bot that helps to find vaccination slots in your area and notify if a vaccine slot is available in your area. The bot is developed using nodeJs and hosted in AWS ec2 instance.',
    thumbnail: '/images/hero-gradient.png',
    links: [
      { name: 'Details', href: '' }
    ]
  },

]

const ProjectsSection = () => {
  return (
    <section id='projects' className='w-full p-section-padding py-10 gap-5'>
      <Heading1>My Projects</Heading1>
      <Heading2 className='text-xl mt-2 font-display opacity-60'>Here is a quick summary of my portfolio.</Heading2>

      <div className='flex flex-col gap-8 p-7 my-5'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className='w-full flex justify-center text-secondary underline underline-offset-4'>
        <a href="">see more projects {'>>'}</a>
      </div>
    </section>
  )
}

export default ProjectsSection
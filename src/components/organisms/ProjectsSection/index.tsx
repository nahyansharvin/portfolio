import Heading1 from '@/components/atoms/Heading/Heading1'
import Heading2 from '@/components/atoms/Heading/Heading2'
import ProjectCard from '@/components/atoms/ProjectCard'
import React from 'react'
import Projects from '@/constants/Projects'

const ProjectsSection = () => {
  return (
    <section id='projects' className='w-full p-section-padding py-10 gap-5'>
      <Heading1>My Projects</Heading1>
      <Heading2 className='text-xl mt-2 font-display opacity-60'>Here is a quick summary of my portfolio.</Heading2>

      <div className='flex flex-col gap-8 p-7 my-5'>
        {Projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className='text-center text-secondary underline underline-offset-4'>
        <a href="">see more projects {'>>'}</a>
      </div>
    </section>
  )
}

export default ProjectsSection
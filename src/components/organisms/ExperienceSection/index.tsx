import AccordionItem from '@/components/atoms/AccordionItem'
import Heading1 from '@/components/atoms/Heading/Heading1'
import Heading2 from '@/components/atoms/Heading/Heading2'
import Accordion from '@/components/molecules/Accordion'
import React from 'react'

const experiences = [
    {
        title: 'Software Engineer',
        company: 'Katzion',
        date: 'Nov 2023 - Present',
        location: 'Ernakulam, India',
        url: 'https://www.katzion.com/',
        urlName: 'katzion.com',
        description: ["Developed the frontend architecture for a new company product, enhancing user experience, performance, and streamlining development for the team.", "Created tailored software solutions to meet customer needs."],
        labels: ["Javascript", "React", "Typescript", "Tailwindcss", "Next.js"]
    },
    {
        title: 'Software Developer',
        company: 'iLin Analytica Pvt Ltd',
        date: 'Oct 2022 - Oct 2023',
        location: 'Ernakulam, India',
        description: ["Developed a mobile application for an AI-powered trade recommendation engine, taking charge of its overall development.", "Contributed to the successful completion of a web application for the same by collaborating with the development team.", "Increased user engagement on the mobile application by 40% by implementing A/B testing and UI improvements."],
        labels: ["HTML", "Javascript", "React", "Tailwindcss", "React Native"]
    },
    {
        title: 'FrontEnd Developer Intern',
        company: 'TinkerHub EMEA',
        date: 'Oct 2021 - Feb 2023',
        location: 'Kondotty, India',
        description: ["Collaborated with the development team to design and develop a timetable application using React.js.", "Contributed to the development of a college management system (LMS) built in MERN stack for various user types.", "Implemented responsive design principles to enhance the user experience, resulting in a 25% increase in user engagement."],
        labels: ["HTML", "Javascript", "React", "Tailwindcss"]
    },
    {
        title: 'Media Lead',
        company: 'Connect EMEA',
        date: 'Feb 2022 - Dec 2022',
        location: 'Kondotty, India',
        description: ["Led media campaigns to promote community events and initiatives, increasing attendance by 30 - 40%.", "Enhanced the quality of social media posters, resulting in a 50% increase in engagement and overall growth of the community.", "Coordinated design-related activities, resulting in an increase in overall design quality and consistency."],
        labels: ["Photoshop", "Graphic Design", "Figma", "UI Design"]
    },
]

const Experiences = () => {
    return (
        <section id='experience' className='w-full p-section-padding py-10 gap-5'>
            <Heading1>Experiences</Heading1>
            <Heading2 className='text-xl mt-2 font-display opacity-60'>Here is a quick summary of my most recent experiences</Heading2>

            <div className='p-14'>
                <Accordion data={experiences} />
            </div>

        </section>
    )
}

export default Experiences
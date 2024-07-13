import EducationItem from '@/components/atoms/EducationItem'
import Heading1 from '@/components/atoms/Heading/Heading1'
import React from 'react'

const Education = [
    {
        title: 'Bachelor Degree',
        date: '2020 - 2023',
        institution: 'EMEA College of Arts and Science',
        location: 'Kondotty, University of Calicut',
        description: 'Graduated in Computer Science with mathematics and statistics as complementary subjects.'
    },
    {
        title: 'Higher Secondary',
        date: '2018 - 2020',
        institution: 'Rahmania HSS',
        location: 'Calicut-8',
        description: 'Completed Higher Secondary education in Science stream.'
    },
    {
        title: 'Secondary School',
        date: '2015 - 2018',
        institution: 'PTMHSS Kodiyathur',
        location: 'Kodiyathur, Kerala',
        description: 'Obtained Secondary School Leaving Certificate(SSLC) in 2018 from PTMHSS Kodiyathur.'
    }
]

const EducationSection = () => {
  return (
    <section id='experience' className='p-section-padding py-14 gap-5'>
        <Heading1>Education</Heading1>
        <div className='my-20'>
            {Education.map((edu, index) => (
                <EducationItem key={index} {...edu} />
            ))}
        </div>
    </section>
  )
}

export default EducationSection
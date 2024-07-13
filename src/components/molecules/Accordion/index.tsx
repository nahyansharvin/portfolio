'use client'
import AccordionItem from '@/components/atoms/AccordionItem'
import React, { useState } from 'react'
import type { AccordionItemProps } from '@/components/atoms/AccordionItem'

type AccordionProps = {
    data: Omit<AccordionItemProps, 'isOpen' | 'onClick'>[]
}

const Accordion: React.FC<AccordionProps> = (props) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0)

    const handleAccordionClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <div className='flex flex-col gap-3'>
            {props.data.map((experience, index) => (
                <AccordionItem
                    key={index}
                    title={experience.title}
                    company={experience.company}
                    date={experience.date}
                    location={experience.location}
                    url={experience.url}
                    urlName={experience.urlName}
                    description={experience.description}
                    labels={experience.labels}
                    isOpen={activeIndex === index}
                    onClick={() => handleAccordionClick(index)}
                />
            ))}
        </div>
    )
}

export default Accordion
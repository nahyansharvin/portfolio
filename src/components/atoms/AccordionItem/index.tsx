import React from 'react'
import Image from 'next/image'

export type AccordionItemProps = {
    title: string
    company: string
    date: string
    location: string
    url?: string
    urlName?: string
    description: string[]
    labels: string[]
    isOpen: boolean
    onClick: () => void
}

const AccordionItem: React.FC<AccordionItemProps> = (props) => {
    return (
        <div className='p-5 rounded-md border border-foreground/30 '>
            <div className='flex items-center justify-between w-full font-display text-2xl cursor-pointer' onClick={props.onClick}>
                <h3 className='font-medium'>{props.title} <span className='font-light opacity-70'>@ {props.company}</span></h3>
                <div className='flex items-center gap-2'>
                    <h3 className='font-light'>{props.date}</h3>
                    <svg
                        className='w-7 h-7 ml-1 text-secondary'
                        fill='none'
                        stroke='currentColor'
                        viewBox='-2 -3 25 25'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeWidth={4}
                            d={props.isOpen ? 'M 1 10 L 19 10 ' : 'M 1 7 L 10 13 L 19 7'}
                        />
                    </svg>
                </div>
            </div>

            {props.isOpen && (
                <div className='border-t border-foreground/30 mt-2 pt-2'>
                    <div className='flex gap-8 font-light'>
                        <div id='location' className='flex gap-2'>
                            <Image src='/icons/location.svg' width={20} height={20} alt='Location icon' />
                            <p>{props.location}</p>
                        </div>
                        {props.url && (
                            <a href={props.url} id='url' className='flex gap-2'>
                                <Image src='/icons/link.svg' width={20} height={20} alt='Link icon' />
                                <p>{props.urlName}</p>
                            </a>
                        )}
                    </div>
                    <ul className='list-disc ml-5 my-3 font-extralight opacity-70'>
                        {props.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                    <div className='flex gap-1.5'>
                        {props.labels.map((label, index) => (
                            <p key={index} className='bg-label-bg/15 text-xs max-w-fit px-1 rounded-sm'>{label}</p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default AccordionItem
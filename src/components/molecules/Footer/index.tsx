import React from 'react'
import NavLinks from '@/constants/Navlinks'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='mt-5 w-full p-section-padding'>
            <div className='py-3 flex justify-between border-t border-secondary'>
                <h3 id='logo' className='font-display font-medium text-xl'>Nahyan Sharvin</h3>
                <ul id='nav-links' className='flex gap-14 font-light text-sm'>
                    {NavLinks.map((navItem, index) => (
                        <li key={index}>
                            <a href={navItem.url}
                                className='text-foreground'>{navItem.name}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='flex justify-end'>
                <ul className='py-3 mt-4 max-w-48 text-xs flex flex-col gap-3'>
                    <li className='flex items-center gap-3'>
                        <Image src='/icons/location.svg' width={40} height={20} alt='Location icon' />
                        <p>Cheruvadi, Kozhikode, Kerala, IN, 673661</p>
                    </li>
                    <li className='flex items-center gap-3'>
                        <Image src='/icons/email.svg' width={25} height={20} alt='Location icon' />
                        <p>nahyansharvin@gmail.com</p>
                    </li>
                    <li className='flex items-center gap-3'>
                        <Image src='/icons/phone.svg' width={25} height={20} alt='Location icon' />
                        <p>+91 9895790126</p>
                    </li>
                </ul>
            </div>

            <p className='p-2 font-light text-center text-xs opacity-30 tracking-wider '>&copy; 2024 Nahyan Sharvin. All rights reserved</p>
        </footer>
    )
}

export default Footer
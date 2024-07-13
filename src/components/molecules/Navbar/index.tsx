import React from 'react'

const navList = [
    {
        name: 'Home',
        url: '#hero-section'
    },
    {
        name: 'Projects',
        url: '#projects-section'
    },
    {
        name: 'Contact',
        url: '#contact-section'
    }
]

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full flex justify-center'>
        <nav className='w-11/12 h-14 mt-8 p-2 flex items-center justify-between rounded-full bg-background border border-highlight/50'>
            <h3 id='logo' className='ml-5 font-display font-medium text-xl'>Nahyan Sharvin</h3>

            <ul id='nav-links' className='flex gap-8'>
                {navList.map((navItem, index) => (
                    <li key={index} className=''>
                        <a href={navItem.url}
                            className='text-foreground'>{navItem.name}</a>
                    </li>
                ))}
            </ul>

            <div>
                {/* Toggel Theme Button */}
                <button className='bg-tertiary px-10 h-10 rounded-full font-medium text-white'>Hire Me</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
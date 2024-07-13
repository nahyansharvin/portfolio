import React from 'react'

type Heading1Props = {
    children: React.ReactNode
    className?: string
}

const Heading1: React.FC<Heading1Props> = (props) => {
  return <h1 className={`text-9xl font-display font-medium ${props.className}`}>{props.children}</h1> 
}

export default Heading1
import React from 'react'

type Heading1Props = {
    text: string
    className?: string
}

const Heading1: React.FC<Heading1Props> = (props) => {
  return <h1 className={`text-9xl font-display font-medium ${props.className}`}>{props.text}</h1> 
}

export default Heading1
import React from 'react'

type Heading2Props = {
    text: string
    className?: string
}

const Heading2: React.FC<Heading2Props> = (props) => {
  return <h2 className={`text-4xl font-light ${props.className}`}>{props.text}</h2> 
}

export default Heading2
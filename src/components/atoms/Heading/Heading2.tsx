import React from 'react'

type Heading2Props = {
    children: React.ReactNode
    className?: string
}

const Heading2: React.FC<Heading2Props> = (props) => {
  return <h2 className={`text-4xl font-light ${props.className}`}>{props.children}</h2> 
}

export default Heading2
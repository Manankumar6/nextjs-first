import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import React from 'react'

const Heading = ({word}) => {
  return (
    <h1 className="text-4xl md:text-6xl  font-bold text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 py-4 slide-in"> <TextGenerateEffect words={word}  /></h1>
  )
}

export default Heading
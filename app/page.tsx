import About from '@/components/About'
import { Skiper62 } from '@/components/ui/skiper-ui/skiper62'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen bg-black w-screen overflow-hidden'>
      <div className=''>
      <Skiper62/>
      <About/>
      </div>
    </div>
  )
}

export default page

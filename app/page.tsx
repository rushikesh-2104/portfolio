import About from '@/components/About'
import { Skiper62 } from '@/components/ui/skiper-ui/skiper62'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen bg-slate-200 w-[100vw] overflow-x-hidden'>
      <div className=''>
      <Skiper62/>
      <About/>
      </div>
    </div>
  )
}

export default page

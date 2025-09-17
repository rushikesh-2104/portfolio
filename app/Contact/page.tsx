import { AnimateIcon } from '@/components/animate-ui/icons/icon'
import { Input } from '@/components/ui/input'
import { ArrowDownRight, UsersRound } from 'lucide-react'
import React from 'react'

const page = () => {
    
  return (

<div className='bg-black text-white h-full w-full' >
 <div className='py-30 px-15'>

<div className="grid grid-cols-2 grid-rows-1 gap-4 ">
    
    <div className='flex justify-center ' >
    <span className='text-7xl roboto-condensed'>Let's Start a <br /> project together</span>
    </div>

    <div className='flex justify-center' >
        <div className="bg-white  h-[25vh] w-[13vw] rounded-full overflow-hidden ">
        <img
          className="h-full w-full object-cover"
          src="/photo1.jpg"
          alt="profile"
        />
    </div>

    
        
        <span className='relative top-50 right-50'>
            <ArrowDownRight/>
        </span>
        
        
    </div>

</div>


<div className="grid grid-cols-2 grid-rows-4 gap-4 py-15">

    <div className="row-span-4 flex justify-center">
     <div className="grid w-full max-w-sm items-center gap-3">
      
      <div className="w-[40vw] border-t border-gray-500"></div>
      <label className='text-3xl py-2' >What's Your Name?</label>
      <Input type="text" id="name" placeholder="Rushikesh Mhatre *" className='h-[5vh] text-2xl border-0'/>

      <div className="w-[40vw] border-t border-gray-500"></div>
      <label className='text-3xl py-2' >What's Your Email?</label>
      <Input type="email" id="email" placeholder="hrishi12@gmail.com*" className='h-[5vh] text-2xl border-0'/>

      <div className="w-[40vw] border-t border-gray-500"></div>
      <label className='text-3xl py-2' >What services are you looking for?</label>
      <Input type="text" id="services" placeholder="web-design , web-development..." className='h-[5vh] text-2xl border-0'/>
    
      <div className="w-[40vw] border-t border-gray-500"></div>
      <label className='text-3xl py-2' >Your Message</label>
      <Input type="text" id="message" placeholder="Hii Rushikesh, can you help me with...*" className='h-[5vh] text-2xl border-0'/>

     </div>
    </div>

    <div className="row-span-4 flex justify-center">
        <div>
            <span className="text-gray-200">Contact Details</span><br />
            <span className="text-gray-300 px-3">hrishi210402@gmail.com</span>  <br />          
            <span className="text-gray-300 px-3">+91 7208553533</span><br />
        </div>
        <br />
        <div className='relative top-30 right-49'>
            <span className="text-gray-200">Socials</span><br />
            <span className="text-gray-300 px-3"><a href="https://www.linkedin.com/in/contactrushikesh21/">LinkedIN</a></span>  <br />          
            <span className="text-gray-300 px-3"><a href="https://www.instagram.com/emoji2104/">Instagram</a></span><br />
            <span className="text-gray-300 px-3"><a href="https://github.com/rushikesh-2104">Github</a></span><br />
        </div>
    </div>

</div>

 <div className="w-[60vw] px-5 border-t border-gray-500 "></div> 
 <div className='lora relative left-170 bottom-15 w-[8vw] h-[16vh] rounded-full bg-white text-black flex justify-center items-center text-3xl hover:bg-amber-100 ' >Send</div>

 </div>   
</div>
  )
}

export default page

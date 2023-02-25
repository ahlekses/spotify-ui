import React from 'react'
import Hero from './Hero'
import Section from './Section'

function HomeSection() {
  return (
    <div id='home_section' className='bg-[#121313] w-[83%] h-full overflow-scroll flex flex-col items-center ' >
        <Hero />
        <Section section_name="Episodes for you"  />
        <Section section_name="Recommended for today" rounded play_button={false}  />

        <div className="w-full pt-48 mt-32 border-t border-t-[#2B2A2B]" />
    </div>
  )
}

export default HomeSection
import Image from 'next/image'
import React from 'react'
import Button from './Button'

const About = () => {
  return (
    <div className='max-container padding-container md:flex py-4'>
      <div className='shadow-md md:w-[40%]'>
        <Image 
        src={`/design.jpg`}
        alt='about'
        width={400}
        height={800}
        />
      </div>
      <div className='py-10 md:mx-20 md:w-[70%]'>
        <span>About us</span>
        <h2 className='bold-40'>Trust with Our Best <span className='text-green-50'>Accountants</span></h2>
        <p className='w-full pb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium non incidunt error sapiente aut, obcaecati ipsum eos repellat fugit repudiandae inventore eum asperiores totam nobis! Magni debitis quam dolorum consequatur.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium non incidunt error sapiente aut, obcaecati ipsum eos repellat fugit repudiandae inventore eum asperiores totam nobis! Magni debitis quam dolorum consequatur.</p>
        <Button 
        type='button'
        title='Join us now'
        variant='btn_green'
        />
      </div>
    </div>
  )
}

export default About
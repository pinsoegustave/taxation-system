import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hello = () => {
  return (
    <div className='w-full flex flex-col items-center h-[85vh] justify-center'>
      <div className='bg-gradient-to-tr to-[#000000] from-[#282525] absolute opacity-90 top-0 w-full h-full'>
      <div className='absolute opacity-70 h-full w-full items-center justify-center -z-20 overflow-hidden'>
        <Image 
        src={`/land.png`}
        alt='office'
        layout='fill'
        objectFit='cover' 
        />
      </div>
      <div className='md:w-1/2 text-white padding-container my-52'>
        <h1 className='bold-40 md:bold-52 lg:bold-52'>Financial Solutions That Can Help Your Business Grow</h1>
        <p className='py-4'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <div className='py-4'>
        <Button 
        type='button'
        title='Read more'
        variant='btn_green'
        />
      </div>
        </div>
      </div>
    </div>
  )
}

export default Hello
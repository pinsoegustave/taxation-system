import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Work = () => {
  return (
    <section className='padding-container max-container text-white bg-green-600 block md:flexBetween gap-10 py-8'>
      <div className='w-full md:w-[50%] '>
        <p>Work Process</p>
        <h2 className='bold-40'>How We Work</h2>
        <div className='flex gap-10 py-3'>
          <p className=' p-4 bg-slate-50 rounded-lg bold-18 text-green-50 text-center my-auto'>01</p>
          <div className=''>
            <h2 className='bold-20'>Opening Account</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse neque eaque temporibus aspernatur consectetur.</p>
          </div>
        </div>
          <div className='border border-white' />
          <div className='flex gap-10 py-3'>
          <p className=' p-4 bg-slate-50 rounded-lg bold-18 text-green-50 text-center my-auto'>02</p>
          <div className=''>
            <h2 className='bold-20'>Verify your business</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse neque eaque temporibus aspernatur consectetur.</p>
          </div>
        </div>
        <div className='border border-white' />
        <div className='flex gap-10 py-3'>
          <p className=' p-4 bg-slate-50 rounded-lg bold-18 text-green-50 text-center my-auto'>03</p>
          <div className=''>
            <h2 className='bold-20'>Taxation Service</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse neque eaque temporibus aspernatur consectetur.</p>
          </div>
        </div>
        <div className='mx-auto ml-20 py-8'>
        <Button 
        type='button'
        title='Get a Quote'
        variant='btn_dark_green_outline'
        />
        </div>
      </div>
      <div className='mx-auto'>
        <Image
        src={`/work.png`}
        alt='work'
        width={500}
        height={200}
        />
      </div>
    </section>
  )
}

export default Work
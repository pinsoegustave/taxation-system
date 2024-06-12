import Image from 'next/image'
import React from 'react'
import { NAVLINKS } from '..'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='max-container padding-container gap-20 text-white bg-black/80 '>
      <div className='md:flexBetween'>        
      <div>
        <Image 
        src={`/foot-logo.png`}
        alt='logo'
        width={200}
        height={200}
        />
      </div>
      <div className=''>
        <h2 className='text-green-50 bold-20'>Quick links</h2>
        <ul className='gap-10'>
        {
          NAVLINKS.map((_, i) => (
            <Link href={_.link} key={i}>
              <li className=' grid grid-cols-2'>{_.name}</li>
            </Link>
          ))
          }
        </ul>
      </div>
      <div className='py-4'>
        <h2 className='text-green-50 bold-20 py-2'>Reach Out To Us</h2>
        <p className=''>Call: <span className='underline'>+250798735385</span></p>
        <p className='py-2'>Email: info@infinitytech.rw</p>
        <p className=''>Kigali, Rwanda</p>
        {/* <p className='py-2'>Adress: info@infinitytech.rw</p> */}
      </div>
      <div className=''>
        <h2 className='text-green-50 bold-20 py-2'>Working Hours</h2>
        <p className='py-4'>9 AM - 7 PM CAT, Monday - Friday</p>
        <span className='w-2 py-4'>On the above time, we are available <br />everywhere you can contact.</span>
      </div>
      </div>

      <div className='border border-white mt-5' />
      <div className='py-5 md:flexBetween'>
        <div>&copy;2024 | All rights reserved.</div>
        <div className='mt-4 md:mt-0 flex gap-2'>
          <p className='text-green-50 underline'>Terms and Conditions</p> |<p className='text-green-50 underline'>Privacy Policy</p> 
        </div>
      </div>
    </footer>
  )
}

export default Footer
"use client"
import AuthButton from '@/components/AuthButton'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [ isVisible, setIsVisible ] = useState({ id: "inputOne", });

  useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);

  const toggleDiv = (e: any) => {
    setIsVisible({
      id: e.target.id,
    });
  }
  return (
    <div className='padding-container max-container'>
      <div className="w-full">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full flex justify-between items-center p-3 text-sm">
            <Link href={'/'}>
                <Image 
                src={'/Numetric.png'}
                alt='numetric-logo'
                width={200}
                height={100}
                className='bg-black'
                />
            </Link>
          </div>
        </nav>
      </div>
      {/* Form starts here */}
      <div className='py-10 max-w-4xl mx-auto'>
        <h2 className='bold-20'>Welcome back again,</h2>
        <h2 className='text-green-50 bold-32 text-center '>We are going to need some more information about your business.</h2>
        <p className='text-center'>Take your time and fill the form below.</p>
        <div className='w-full md:w-[40vw] border border-red-300 mx-auto p-4'>
        <form action="" method="post" className="">
          <div className={isVisible.id === "inputOne border border-blue-500" ? `inputOne` : `inputOne hidden` } >
            <h2 className='bold-20 text-center underline text-green-50'>1. Personal Information</h2>
            <div className="w-full ">
              <label htmlFor="" className="">
                Your names<sub>(required)</sub>
              </label>
              <div className="flex gap-4 w-full">
                <div>
                  <span className="">FirstName</span>
                  <input
                    type="text"
                    name=""
                    id="fname"
                    className="font-[300] bg-[#63798D] py-2 px-4 outline-none text-white placeholder:text-white w-full"
                  />
                </div>
                <div>
                  <span className="py-4">LastName</span>
                  <input
                    type="text"
                    name=""
                    id="lname"
                    className="font-[300] bg-[#63798D] py-2 px-4 outline-none text-white placeholder:text-white w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="" className="">
                Email<sub>(required)</sub>
              </label>
              <input
                type="text"
                id="email"
                className="font-[300] bg-[#63798D] py-2 px-4 outline-none text-white placeholder:text-white w-full"
              />
            </div>
            <button id='inputTwo'
              onClick={(e) => {toggleDiv(e); }} type="submit" title="Submit" className='btn_dark_pink'>Next</button>
          </div>
          <div  className={ isVisible.id === "inputTwo border border-yellow-500" ? `inputTwo` : "inputTwo hidden" }>
            <div className="flex flex-col py-2">
              <label htmlFor="" className="">
                Subject<sub>(required)</sub>
              </label>
              <input
                type="text"
                id="phone"
                className="font-[300] bg-[#63798D] py-2 px-4 outline-none text-white placeholder:text-white w-full"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="" className="">
                Message<sub>(required)</sub>
              </label>
              <textarea
                id="message"
                className="font-[300] bg-[#63798D] py-2 px-4 outline-none text-white placeholder:text-white"
              />
            </div>
            <div className=" mt-4 flexBetween gap-10">
              <button 
              onClick={(e) => {toggleDiv(e); }} type="submit" title="Submit" className='btn_dark_pink'>Back</button>
              <button 
              onClick={(e) => {toggleDiv(e); }} type="submit" title="Submit" className='btn_dark_pink'>Next</button>
              {/* <Toaster richColors /> */}
            </div>
          </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default page
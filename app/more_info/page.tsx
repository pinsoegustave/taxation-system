"use client"
import AuthButton from '@/components/AuthButton'
import Button from '@/components/Button'
import { BUSINESS_TYPES } from '@/index'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { TypePredicateKind } from 'typescript'

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
        <h2 className='text-green-50 bold-32 text-center '>We are going to need some more information about your business.</h2>
        {/* <p className='text-center'>Take your time and fill the form below.</p> */}
          <div className='flexBetween py-5'>
            <button id='inputOne' onClick={(e) => { toggleDiv(e); }}  className='p-2 rounded-md hover:bg-green-500 bg-green-300'>Personal Information</button>
            <button id='inputTwo' onClick={(e) => { toggleDiv(e); }} className='p-2 rounded-md hover:bg-red-500 bg-red-300'>Business Information</button>
            <button id='inputThree' onClick={(e) => { toggleDiv(e); }} className='p-2 rounded-md hover:bg-blue-500 bg-blue-300'>Business Location</button>
            <button id='inputFour' onClick={(e) => { toggleDiv(e); }} className='p-2 rounded-md hover:bg-yellow-500 bg-yellow-300'>Confirm</button>
          </div>
        <div className='w-full md:w-[40vw] border border-red-300 mx-auto p-4'>
        <form action="" method="post" className="">
          <div className={isVisible.id === "inputOne" ? `inputOne` : `inputOne hidden` }>
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
            <Link href={'#inputTwo'}><button className='btn_dark_pink'>Next</button></Link>
          </div>
          <div id='inputTwo' className={ isVisible.id === "inputTwo" ? `inputTwo` : "inputTwo hidden" }>
            <div className="flex flex-col py-2">
              <label htmlFor="" className="">
                Company name<sub>(required)</sub>
              </label>
              <input
                type="text"
                id="phone"
                className="font-[300] bg-[#63798D] py-2 px-4 outline-none text-white placeholder:text-white w-full"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="" className="">
                Business Type<sub>(required)</sub>
              </label>
              <select name="" id="b_type" className='font-[300] bg-[#63798D] py-2 px-4 outline-none text-white placeholder:text-white w-full'>
                { BUSINESS_TYPES.map((name, id) => (
                  <option key={id} value={name.value}>{name.type}</option>  
                ))}
              </select>
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="" className="">
                Tin Number<sub className='text-red-300'>(required)</sub>
              </label>
              <input
                type="text"
                id="phone"
                className="font-[300] bg-[#63798D] py-2 px-4 outline-none text-white placeholder:text-white w-full"
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
          <div id='inputThree' className={ isVisible.id === "inputThree" ? `inputThree` : "inputThree hidden" }>
            <div className="flex flex-col py-2">
              <label htmlFor="" className="">
                Country:<sub>(required)</sub>
              </label>
              <input
                type="text"
                disabled
                value="Rwanda"
                className="font-[300] bg-[#63798D] py-2 px-4 outline-none text-white placeholder:text-white w-full"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="" className="">
                Province:<sub>(required)</sub>
              </label>
              <input
                type="text"
                id="phone"
                className="font-[300] bg-[#63798D] py-2 px-4 outline-none text-white placeholder:text-white w-full"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="" className="">
                District:<sub>(required)</sub>
              </label>
              <input
                type="text"
                id="phone"
                className="font-[300] bg-[#63798D] py-2 px-4 outline-none text-white placeholder:text-white w-full"
              />
            </div>
            
            <div className="flex flex-col py-2">
              <label htmlFor="" className="">
                Sector<sub className='text-red-300'>(required)</sub>
              </label>
              <input
                type="text"
                id="phone"
                className="font-[300] bg-[#63798D] py-2 px-4 outline-none text-white placeholder:text-white w-full"
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
          <div id='inputFour' className={isVisible.id === "inputFour" ? `inputFour` : "inputFour hidden"}>
            <p className='text-center py-10'>Thanks for your time. <span className=''>You can continue to your dashboard.</span> </p>
            <Link href={'/user-page'} className='flexCenter bg-green-300 p-3'>Go to Dashboard</Link>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page
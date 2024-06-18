import AuthButton from '@/components/AuthButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HelpCircle } from 'react-feather'

const page = () => {

  return (
    <div className="max-container padding-container flex-1 w-full flex flex-col gap-20 items-center text-black">
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
            <AuthButton />
          </div>
        </nav>
      </div>
      <div>
        <h2 className='bold-40'>Welcome on your page,</h2>
        <h1 className='bold-52 text-green-50'>Here is a bit of our taxation services</h1>
      </div>
      <div className='gap-10 block md:grid grid-cols-3 pb-10'>
      <div className='p-4 w-full md:max-w-[40vw] border border-foreground/10 rounded-md'>
        <h2 className='bold-20'>Umusoro ku nyungu</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ea eaque quas ipsa explicabo. At voluptatibus adipisci, aperiam impedit optio, nostrum obcaecati mollitia rerum officia tempora itaque doloremque officiis nesciunt!</p>  
        <span>Wifuza ko twagufasha? <Link href={'/more_info'} className='text-green-50 bg-gray-200 p-2 hover:underline'>Kanda hano</Link></span>  
    </div>
      <div className='p-4 w-full md:max-w-[40vw] border border-red-300 rounded-md'>
        <h2 className='bold-20'>Umusoro ku nyungu</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ea eaque quas ipsa explicabo. At voluptatibus adipisci, aperiam impedit optio, nostrum obcaecati mollitia rerum officia tempora itaque doloremque officiis nesciunt!</p>  
        <span>Wifuza ko twagufasha? <button className='text-green-50 bg-gray-200'>Iyandikishe hano</button></span>  
    </div>
      <div className='p-4 w-full md:max-w-[40vw] border border-red-300 rounded-md'>
        <h2 className='bold-20'>Umusoro ku nyungu</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ea eaque quas ipsa explicabo. At voluptatibus adipisci, aperiam impedit optio, nostrum obcaecati mollitia rerum officia tempora itaque doloremque officiis nesciunt!</p>  
        <span>Wifuza ko twagufasha? <button className='text-green-50 bg-gray-200'>Iyandikishe hano</button></span>  
    </div>
      <div className='p-4 w-full md:max-w-[40vw] border border-red-300 rounded-md'>
        <h2 className='bold-20'>Umusoro ku nyungu</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ea eaque quas ipsa explicabo. At voluptatibus adipisci, aperiam impedit optio, nostrum obcaecati mollitia rerum officia tempora itaque doloremque officiis nesciunt!</p>  
        <span>Wifuza ko twagufasha? <button className='text-green-50 bg-gray-200'>Iyandikishe hano</button></span>  
    </div>
      <div className='p-4 w-full md:max-w-[40vw] border border-red-300 rounded-md'>
        <h2 className='bold-20'>Umusoro ku nyungu</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ea eaque quas ipsa explicabo. At voluptatibus adipisci, aperiam impedit optio, nostrum obcaecati mollitia rerum officia tempora itaque doloremque officiis nesciunt!</p>  
        <span>Wifuza ko twagufasha? <button className='text-green-50 bg-gray-200'>Iyandikishe hano</button></span>  
    </div>
    <div className='p-4 w-full md:max-w-[40vw] border border-red-300 rounded-md text-center py-24'>
        <HelpCircle className='h-50 w-50' height={100} width={200} />  
        Wifuza ko twagukorera imisoro yose ubonye aho hejuru?
    </div>
    </div>
      </div>
  )
}

export default page
import AuthButton from '@/components/AuthButton'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HelpCircle } from 'react-feather'
import Modal from './Modal'

interface MyComponentProps {}
const page: React.FC<MyComponentProps> = () => {

  const [ open, setOpen ] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
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
        <span>Wifuza ko twagufasha? <Link href={'/more_info'} className='text-green-50 bg-gray-200 p-2 hover:underline' onClick={() => setOpen(true)}>Kanda hano</Link></span>  
    </div>
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className='text-center w-56'>
        <form action="" method="post">
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
        </form>
      </div>
    </Modal>
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
    <div className='p-4 w-full md:max-w-[40vw] mx-auto border border-red-300 rounded-md text-center py-10'>
        <HelpCircle className='h-50 w-50 mx-auto py-2' height={100} width={200} />  
        <p>Waba ufite ubundi butumwa wifuza kudusangiza?</p>
        <button className='underline text-green-500'>Kanda hano</button>
    </div>
    </div>
      </div>
  )
}

export default page
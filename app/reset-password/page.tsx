import Link from 'next/link';
import React from 'react'

export default async function ResetPassword ({
    searchParams,
}: {
    searchParams: {message: string};
}) {
  return (
    <div>
        <Link href="/" 
        className='py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover'
        >Home</Link>

    <div className='w-full px-8 sm:max-w-md mx-auto mt-4'>
        
    </div>
    </div>

  )
}
